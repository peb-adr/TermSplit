import globals as g
import util
from pages import timing


def render(detailedtimerstate, stdscr, line):
    maxy, maxx = stdscr.getmaxyx()

    if 'timer' not in detailedtimerstate:
        return line

    timer = detailedtimerstate['timer']
    stimer = build_timer_str(timer['time'] + timer['fraction'])
    stdscr.attron(timing.get_color(timer['semantic_color']))
    for p in stimer.split('\n'):
        # color = g.settings['colors'][tiomer]
        stdscr.addstr(line, util.rightallignindex(len(p), maxx), p)
        line += 1
    stdscr.attroff(timing.get_color(timer['semantic_color']))

    if 'segment_timer' in detailedtimerstate:
        segmenttimer = detailedtimerstate['segment_timer']
        ssegmenttimer = segmenttimer['time'] + segmenttimer['fraction']
        stdscr.addstr(line, util.rightallignindex(len(ssegmenttimer), maxx - 1), ssegmenttimer)
        line += 2

    bigfontheight = g.settings['bigfonts'][g.settings['bigfont']]['height']
    if 'comparison1' in detailedtimerstate and detailedtimerstate['comparison1']:
        s = detailedtimerstate['comparison1']['name'] + ": " + detailedtimerstate['comparison1']['time']
        stdscr.addstr(line - min(3, bigfontheight), util.leftallignindex(minx=1), s)
    if 'comparison2' in detailedtimerstate and detailedtimerstate['comparison2']:
        s = detailedtimerstate['comparison2']['name'] + ": " + detailedtimerstate['comparison2']['time']
        stdscr.addstr(line - min(2, bigfontheight), util.leftallignindex(minx=1), s)

    return line


def build_timer_str(s: str):
    font = g.settings['bigfonts'][g.settings['bigfont']]['chars']
    height = g.settings['bigfonts'][g.settings['bigfont']]['height']
    p = []
    for c in s:
        if c not in font:
            c = ' '
        p.append(font[c])

    n = len(s)
    s = ""
    for i in range(0, height):
        for j in range(0, n):
            s += p[j][i] + ' '
        s += '\n'

    return s[:-1]
