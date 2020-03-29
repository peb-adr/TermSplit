import curses
import threading
from time import time

import globals as g
import pages
import util

nextcall = time()
# f = None
# t1 = None


def loop_render():
    global nextcall
    # global f
    # global t1
    # error messages are caught and displayed in last row
    try:
        g.currentpage.render()
    except Exception as e:
        show_message(e.args[0])
    g.stdscr.refresh()
    # t2 = time()
    # print(t2 - t1, file=f)
    # f.flush()
    # t1 = t2
    nextcall = nextcall + 1 / g.settings['defaults']['fps']
    threading.Timer(nextcall - time(), loop_render).start()


def show_message(m):
    try:
        g.stdscr.addstr(g.stdscr.getmaxyx()[0] - 2, util.leftallignindex(), "-" * (len(m) + 1) + "+")
        g.stdscr.addstr(g.stdscr.getmaxyx()[0] - 1, util.leftallignindex(), m + " |")
    except curses.error:
        pass


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
