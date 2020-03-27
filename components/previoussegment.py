import util
from pages import timing


def render(previoussegmentstate, stdscr, line):
    maxy, maxx = stdscr.getmaxyx()

    if 'text' in previoussegmentstate and 'time' in previoussegmentstate:
        stdscr.addstr(line, util.leftallignindex(), previoussegmentstate['text'])
        stdscr.attron(timing.get_color(previoussegmentstate['semantic_color']))
        stdscr.addstr(line,
                      util.rightallignindex(len(previoussegmentstate['time']), maxx),
                      previoussegmentstate['time'])
        stdscr.attroff(timing.get_color(previoussegmentstate['semantic_color']))
        line += 1

    return line
