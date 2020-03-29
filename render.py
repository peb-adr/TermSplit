import curses
import threading
from time import time

import globals as g
import input
import pages
import util


nextcall = time()
# f = None
# t1 = None
messages = []


def loop_render():
    global nextcall
    # global f
    # global t1
    # errors are caught and displayed as message
    try:
        g.currentpage.render()
    except Exception as e:
        add_message("error: " + str(e))
    if not input.enabled and g.settings['defaults']['hotkeysdisabledmessage']:
        add_message("hotkey input disabled (toggle with: " + g.settings['hotkeys']['toggleenable'] + " )")
    render_messages()
    g.stdscr.refresh()
    # t2 = time()
    # print(t2 - t1, file=f)
    # f.flush()
    # t1 = t2
    nextcall = nextcall + 1 / g.settings['defaults']['fps']
    threading.Timer(nextcall - time(), loop_render).start()


def add_message(m):
    global messages
    messages.append(m)


def render_messages():
    global messages
    try:
        i = 0
        maxlen = 0
        g.stdscr.attron(curses.color_pair(3))
        for m in messages:
            i = i + 1
            if len(m) > maxlen:
                maxlen = len(m)
            g.stdscr.addstr(g.stdscr.getmaxyx()[0] - i, util.leftallignindex(), m)
        if i > 0:
            g.stdscr.addstr(g.stdscr.getmaxyx()[0] - i - 1, util.leftallignindex(), "-" * (maxlen + 1) + "+")
            for j in range(1, i + 1):
                g.stdscr.addch(g.stdscr.getmaxyx()[0] - j, maxlen + 1, '|')
        g.stdscr.attroff(curses.color_pair(3))
    except curses.error:
        pass

    messages.clear()


def init(s):
    curses.curs_set(0)
    # g.stdscr init
    g.stdscr = s
    pages.timing.init_colors()
    # g.currentpage init
    g.currentpage = pages.timing

    # begin render thread
    # global f
    # global t1
    # f = open("misc/log", mode='w')
    # t1 = time()
    loop_render()
