import curses

import globals as g
import util


lastkey = ''


def render():
    try:
        g.stdscr.erase()
        settings = util.readsettings("res/settings.json")

        maxy, maxx = g.stdscr.getmaxyx()
        line = 0

        s = "SETTINGS"
        g.stdscr.addstr(line, util.centerallignindex(len(s), maxx), s)
        line += 1
        s = "change settings in res/settings.json and restart TermSplit"
        g.stdscr.addstr(line, util.centerallignindex(len(s), maxx), s)
        line += 2

        s = "file paths"
        g.stdscr.addstr(line, util.centerallignindex(len(s), maxx), s)
        line += 1
        for f in settings['files']:
            g.stdscr.addstr(line, util.columnallignindex(0, 2, maxx), f)
            g.stdscr.addstr(line, util.columnallignindex(1, 2, maxx), settings['files'][f])
            line += 1

        line += 1

        s = "hotkeys"
        g.stdscr.addstr(line, util.centerallignindex(len(s), maxx), s)
        line += 1
        for h in settings['hotkeys']:
            g.stdscr.addstr(line, util.columnallignindex(0, 2, maxx), h)
            g.stdscr.addstr(line, util.columnallignindex(1, 2, maxx), settings['hotkeys'][h])
            line += 1

        line += 1
        s = "last pressed key code: "
        cai = util.centerallignindex(len(s) + 4, maxx)
        s += lastkey
        g.stdscr.addstr(line, cai, s)
        line += 1
    except curses.error as e:
        raise curses.error("resize terminal to see whole page", e.args[0])


def process_key(k, t):
    global lastkey
    lastkey = k
