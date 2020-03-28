import globals as g
import util


def render(state, line):
    maxy, maxx = g.stdscr.getmaxyx()

    if 'text' in state and 'comparison' in state:
        g.stdscr.addstr(line, util.leftallignindex(), state['text'])
        g.stdscr.addstr(line,
                        util.rightallignindex(len(state['comparison']), maxx),
                        state['comparison'])
        line += 1

    return line
