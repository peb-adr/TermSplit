import globals as g
import util


def render(state, line):
    maxy, maxx = g.stdscr.getmaxyx()

    if 'text' in state and 'time' in state:
        g.stdscr.addstr(line, util.leftallignindex(), state['text'])

        if state['display_two_rows']:
            line += 1

        g.stdscr.addstr(line,
                        util.rightallignindex(len(state['time']), maxx),
                        state['time'])
        line += 1

    return line
