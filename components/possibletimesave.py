import util


def render(possibletimesavestate, stdscr, line):
    maxy, maxx = stdscr.getmaxyx()

    if 'text' in possibletimesavestate and 'time' in possibletimesavestate:
        stdscr.addstr(line, util.leftallignindex(), possibletimesavestate['text'])
        stdscr.addstr(line,
                      util.rightallignindex(len(possibletimesavestate['time']), maxx),
                      possibletimesavestate['time'])
        line += 1

    return line
