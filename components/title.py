import util


def render(titlestate, stdscr, line):
    maxy, maxx = stdscr.getmaxyx()

    if 'line1' in titlestate:
        stdscr.addstr(line,
                      util.centerallignindex(len(titlestate['line1']), maxx)
                      if titlestate['is_centered']
                      else util.leftallignindex(),
                      titlestate['line1'])
        line += 1
    if 'line2' in titlestate:
        stdscr.addstr(line,
                      util.centerallignindex(len(titlestate['line2']), maxx)
                      if titlestate['is_centered']
                      else util.leftallignindex(),
                      titlestate['line2'])
        line += 1

    sattempts = ""
    if 'finished_runs' in titlestate and 'attempts' in titlestate:
        sattempts = str(titlestate['finished_runs']) + "/" + str(titlestate['attempts'])
    else:
        if 'finished_runs' in titlestate:
            sattempts = str(titlestate['finished_runs'])
        if 'attempts' in titlestate:
            sattempts = str(titlestate['attempts'])
    stdscr.addstr(1, util.rightallignindex(len(sattempts), maxx), sattempts)

    return line
