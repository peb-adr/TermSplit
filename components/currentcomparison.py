import globals as g
import util


def render(state, line):
    maxy, maxx = g.stdscr.getmaxyx()

    if 'text' in state and 'comparison' in state:
        g.stdscr.addstr(line, util.leftallignindex(), state['text'])

        if state['display_two_rows']:
            line += 1

        g.stdscr.addstr(line,
                        util.rightallignindex(len(state['comparison']), maxx),
                        state['comparison'])
        line += 1

    return line
