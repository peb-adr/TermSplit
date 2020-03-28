import globals as g
import util


def height():
    return 1


def render(state, line, maxlines=0):
    maxy, maxx = g.stdscr.getmaxyx()

    if 'text' in state and 'time' in state:
        g.stdscr.addstr(line, util.leftallignindex(), state['text'])
        g.stdscr.addstr(line,
                        util.rightallignindex(len(state['time']), maxx),
                        state['time'])
        line += 1

    return line
