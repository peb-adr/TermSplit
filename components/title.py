import globals as g
import util


def render(state, line):
    maxy, maxx = g.stdscr.getmaxyx()

    if 'line1' in state:
        g.stdscr.addstr(line,
                        util.centerallignindex(len(state['line1']), maxx)
                        if state['is_centered']
                        else util.leftallignindex(),
                        state['line1'])
        line += 1
    if 'line2' in state:
        g.stdscr.addstr(line,
                        util.centerallignindex(len(state['line2']), maxx)
                        if state['is_centered']
                        else util.leftallignindex(),
                        state['line2'])
        line += 1

    sattempts = ""
    if 'finished_runs' in state and 'attempts' in state:
        sattempts = str(state['finished_runs']) + "/" + str(state['attempts'])
    else:
        if 'finished_runs' in state:
            sattempts = str(state['finished_runs'])
        if 'attempts' in state:
            sattempts = str(state['attempts'])
    g.stdscr.addstr(1, util.rightallignindex(len(sattempts), maxx), sattempts)

    return line
