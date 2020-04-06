import globals as g
import util


def render(state, line):
    maxy, maxx = g.stdscr.getmaxyx()

    if 'line1' in state and state['line1']:
        g.stdscr.addstr(line,
                        util.centerallignindex(len(state['line1']), maxx)
                        if state['is_centered']
                        else util.leftallignindex(),
                        state['line1'])
        line += 1
    if 'line2' in state and state['line2']:
        g.stdscr.addstr(line,
                        util.centerallignindex(len(state['line2']), maxx)
                        if state['is_centered']
                        else util.leftallignindex(),
                        state['line2'])
        line += 1

    sattempts = ""
    if state['finished_runs'] and state['attempts']:
        sattempts = str(state['finished_runs']) + "/" + str(state['attempts'])
    else:
        if state['finished_runs']:
            sattempts = str(state['finished_runs'])
        if state['attempts']:
            sattempts = str(state['attempts'])
    g.stdscr.addstr(1, util.rightallignindex(len(sattempts), maxx), sattempts)

    return line
