import util


def render(currentcomparisonstate, stdscr, line):
    maxy, maxx = stdscr.getmaxyx()

    if 'text' in currentcomparisonstate and 'comparison' in currentcomparisonstate:
        stdscr.addstr(line, util.leftallignindex(), currentcomparisonstate['text'])
        stdscr.addstr(line,
                      util.rightallignindex(len(currentcomparisonstate['comparison']), maxx),
                      currentcomparisonstate['comparison'])
        line += 1

    return line
