import globals as g
import util
from components import timer


def render(state, line):
    if 'timer' not in state:
        return line

    usedlines = 0
    # delegate timer render
    usedlines += timer.render(state['timer'], line) - line

    # delegate segment timer render
    if 'segment_timer' in state:
        tmp = line + usedlines
        usedlines += timer.render(state['segment_timer'], tmp - min(usedlines, 1)) - tmp

    line += usedlines

    if 'segment_name' in state and state['segment_name']:
        g.stdscr.addstr(line - min(5, usedlines), util.leftallignindex(minx=1), state['segment_name'])
    if 'comparison1' in state and state['comparison1']:
        s = state['comparison1']['name'] + ": " + state['comparison1']['time']
        g.stdscr.addstr(line - min(3, usedlines), util.leftallignindex(minx=1), s)
    if 'comparison2' in state and state['comparison2']:
        s = state['comparison2']['name'] + ": " + state['comparison2']['time']
        g.stdscr.addstr(line - min(2, usedlines), util.leftallignindex(minx=1), s)

    return line
