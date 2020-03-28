import globals as g
import util
from pages import timing


def render(state, line):
    maxy, maxx = g.stdscr.getmaxyx()

    if 'timer' not in state:
        return line

    timer = state['timer']
    stimer = build_timer_str(timer['time'] + timer['fraction'])
    g.stdscr.attron(timing.get_color(timer['semantic_color']))
    for p in stimer.split('\n'):
        g.stdscr.addstr(line, util.rightallignindex(len(p), maxx), p)
        line += 1
    g.stdscr.attroff(timing.get_color(timer['semantic_color']))

    if 'segment_timer' in state:
        segmenttimer = state['segment_timer']
        ssegmenttimer = segmenttimer['time'] + segmenttimer['fraction']
        g.stdscr.addstr(line, util.rightallignindex(len(ssegmenttimer), maxx - 1), ssegmenttimer)
        line += 2

    bigfontheight = g.settings['bigfonts'][g.settings['bigfont']]['height']
    if 'comparison1' in state and state['comparison1']:
        s = state['comparison1']['name'] + ": " + state['comparison1']['time']
        g.stdscr.addstr(line - min(3, bigfontheight), util.leftallignindex(minx=1), s)
    if 'comparison2' in state and state['comparison2']:
        s = state['comparison2']['name'] + ": " + state['comparison2']['time']
        g.stdscr.addstr(line - min(2, bigfontheight), util.leftallignindex(minx=1), s)

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
