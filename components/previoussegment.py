import globals as g
import util
from pages import timing


def render(state, line):
    maxy, maxx = g.stdscr.getmaxyx()

    if 'text' in state and 'time' in state:
        g.stdscr.addstr(line, util.leftallignindex(), state['text'])
        g.stdscr.attron(timing.get_color(state['semantic_color']))
        g.stdscr.addstr(line,
                        util.rightallignindex(len(state['time']), maxx),
                        state['time'])
        g.stdscr.attroff(timing.get_color(state['semantic_color']))
        line += 1

    return line
