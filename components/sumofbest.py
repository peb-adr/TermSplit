import globals as g
import util


def render(state, line):
    maxy, maxx = g.stdscr.getmaxyx()

    if 'text' in state and 'time' in state:
        g.stdscr.addstr(line, util.leftallignindex(), state['text'])
        g.stdscr.addstr(line,
                        util.rightallignindex(len(state['time']), maxx),
                        state['time'])
        line += 1

    return line
