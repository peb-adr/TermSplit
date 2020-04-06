import globals as g
import util


def render(state, line):
    maxy, maxx = g.stdscr.getmaxyx()
    g.stdscr.addstr(line, util.leftallignindex(), '-' * maxx)
    return line + 1
