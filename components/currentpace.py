import util


def render(currentpacestate, stdscr, line):
    maxy, maxx = stdscr.getmaxyx()

    if 'text' in currentpacestate and 'time' in currentpacestate:
        stdscr.addstr(line, util.leftallignindex(), currentpacestate['text'])
        stdscr.addstr(line,
                      util.rightallignindex(len(currentpacestate['time']), maxx),
                      currentpacestate['time'])
        line += 1

    return line
