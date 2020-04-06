import globals as g
from pages import timing


spoints = []
colors = []


def render(state, line):
    global spoints
    global colors
    maxy, maxx = g.stdscr.getmaxyx()

    spoints.clear()
    colors.clear()

    if 'points' not in state:
        return

    # first column as legend
    mid = state['middle']
    add_point(mid, color='Default', fillchar='+', blankchar='|')

    # prepare point list
    b = len(state['points'])
    a = max(b - maxx, 0) + 1
    for i in range(a, b):
        p = state['points'][i]
        c = 'Default' if state['is_live_delta_active'] and i == b - 1 else color_for_point(p, mid)
        add_point(p['y'], c)

    # render point list
    for i in range(0, len(spoints)):
        g.stdscr.attron(timing.get_color(colors[i]))
        for j in range(0, 5):
            g.stdscr.addch(line + j, i, spoints[i][j])
        g.stdscr.attroff(timing.get_color(colors[i]))

    return line + 5


def add_point(y=0.5, color=None, fillchar='-', blankchar=' '):
    global spoints
    global colors

    n = 2
    if y < 0.2:
        n = 0
    if 0.2 <= y < 0.4:
        n = 1
    if 0.4 <= y < 0.6:
        n = 2
    if 0.6 <= y < 0.8:
        n = 3
    if 0.8 < y:
        n = 4

    spoints.append([fillchar if i == n else blankchar for i in range(0, 5)])
    colors.append(color)


def color_for_point(p, m):
    if p['is_best_segment']:
        return 'BestSegment'

    if p['y'] < m:
        return 'BehindLosingTime'
    if p['y'] > m:
        return 'AheadGainingTime'

    return 'Default'
