import globals as g
import util
from pages import timing


def render(state, line):
    maxy, maxx = g.stdscr.getmaxyx()

    if 'time' not in state:
        return line

    stimer = state['time'] + (state['fraction'] if 'fraction' in state else "")
    if state['height'] > g.settings['defaults']['heighttranslatefactor']:
        stimer = build_timer_str(stimer)
    else:
        stimer = " \n" + stimer + " \n "
    g.stdscr.attron(timing.get_color(state['semantic_color']))
    for p in stimer.split('\n'):
        g.stdscr.addstr(line, util.rightallignindex(len(p), maxx), p)
        line += 1
    g.stdscr.attroff(timing.get_color(state['semantic_color']))

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
