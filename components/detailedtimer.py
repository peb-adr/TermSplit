import util
import cfonts


def render(detailedtimerstate, stdscr, line):
    maxy, maxx = stdscr.getmaxyx()

    if 'timer' not in detailedtimerstate:
        return line

    timer = detailedtimerstate['timer']
    stimer = cfonts.render(timer['time'] + timer['fraction'], font='simple', space=False)
    parts = stimer.split('\n')
    for p in parts:
        stdscr.addstr(line, util.rightallignindex(len(p) - 1, maxx), p)
        line += 1

    if 'segment_timer' in detailedtimerstate:
        segmenttimer = detailedtimerstate['segment_timer']
        ssegmenttimer = segmenttimer['time'] + segmenttimer['fraction']
        stdscr.addstr(line, util.rightallignindex(len(ssegmenttimer), maxx), ssegmenttimer)
        line += 1

    if 'comparison1' in detailedtimerstate and detailedtimerstate['comparison1']:
        stdscr.addstr(line - 2, util.leftallignindex(), detailedtimerstate['comparison1'])

    if 'comparison2' in detailedtimerstate and detailedtimerstate['comparison2']:
        stdscr.addstr(line - 1, util.leftallignindex(), detailedtimerstate['comparison2'])

    return line
