import curses
import threading
from time import time

import globals as g
import input
import pages
import util


nextcall = time()
static_messages = []
timed_messages = []
lock = threading.Lock()


def loop_render():
    global nextcall
    # global t1
    # errors are caught and displayed as message
    try:
        g.currentpage.render()
    except Exception as e:
        add_message("error: " + repr(e))
    if not input.enabled and g.settings['defaults']['hotkeysdisabledmessage']:
        add_message("hotkey input disabled (toggle with: " + g.settings['hotkeys']['toggleenable'] + " )")
    render_messages()
    g.stdscr.refresh()
    nextcall = nextcall + 1 / g.settings['defaults']['fps']
    threading.Timer(nextcall - time(), loop_render).start()


def render_messages():
    global static_messages
    global timed_messages
    try:
        i = 0
        maxlen = 0
        g.stdscr.attron(curses.color_pair(3))
        lock.acquire()
        # determine max length for box outline
        for messages in [timed_messages, static_messages]:
            for m in messages:
                if len(m) > maxlen:
                    maxlen = len(m)
        for tm in timed_messages:
            i = i + 1
            g.stdscr.addstr(g.stdscr.getmaxyx()[0] - i, util.leftallignindex(), tm.ljust(maxlen, ' '))
        lock.release()
        for sm in static_messages:
            i = i + 1
            g.stdscr.addstr(g.stdscr.getmaxyx()[0] - i, util.leftallignindex(), sm.ljust(maxlen, ' '))
        if i > 0:
            g.stdscr.addstr(g.stdscr.getmaxyx()[0] - i - 1, util.leftallignindex(), "-" * (maxlen + 1) + "+")
            for j in range(1, i + 1):
                g.stdscr.addch(g.stdscr.getmaxyx()[0] - j, maxlen + 1, '|')
        g.stdscr.attroff(curses.color_pair(3))
    except curses.error:
        pass

    static_messages.clear()


def add_message(m, timed=False):
    global static_messages
    global timed_messages
    if timed:
        push_timed_message(m)
        threading.Timer(g.settings['defaults']['timedmessageduration'], pop_timed_message).start()
    else:
        static_messages.append(m)


def push_timed_message(m):
    if len(timed_messages) >= g.settings['defaults']['timedmessagesmax']:
        return
    lock.acquire()
    timed_messages.insert(0, m)
    lock.release()


def pop_timed_message():
    if len(timed_messages) <= 0:
        return
    lock.acquire()
    timed_messages.pop()
    lock.release()


def init(s):
    curses.curs_set(0)
    # g.stdscr init
    g.stdscr = s
    pages.timing.init_colors()
    # g.currentpage init
    g.currentpage = pages.timing

    # start render thread
    loop_render()
