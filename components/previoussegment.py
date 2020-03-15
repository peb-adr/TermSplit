import util


def render(previoussegmentstate, stdscr, line):
    maxy, maxx = stdscr.getmaxyx()

    if 'text' in previoussegmentstate and 'time' in previoussegmentstate:
        stdscr.addstr(line, util.leftallignindex(), previoussegmentstate['text'])
        stdscr.addstr(line,
                      util.rightallignindex(len(previoussegmentstate['time']), maxx),
                      previoussegmentstate['time'])
        line += 1

    return line
