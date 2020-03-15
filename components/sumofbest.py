import util


def render(sumofbeststate, stdscr, line):
    maxy, maxx = stdscr.getmaxyx()

    if 'text' in sumofbeststate and 'time' in sumofbeststate:
        stdscr.addstr(line, util.leftallignindex(), sumofbeststate['text'])
        stdscr.addstr(line,
                      util.rightallignindex(len(sumofbeststate['time']), maxx),
                      sumofbeststate['time'])
        line += 1

    return line
