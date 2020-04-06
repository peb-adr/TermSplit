import globals as g
import util


def render(state, line):
    if 'text' not in state:
        return line

    maxy, maxx = g.stdscr.getmaxyx()
    text = state['text']

    if 'Center' in text:
        g.stdscr.addstr(line, util.centerallignindex(len(text['Center']), maxx), text['Center'])
        line += 1

    if 'Split' in text:
        g.stdscr.addstr(line, util.leftallignindex(), text['Split'][0])

        if state['display_two_rows']:
            line += 1

        g.stdscr.addstr(line, util.rightallignindex(len(text['Split'][1]), maxx), text['Split'][1])
        line += 1

    return line
