import curses
import json

import components
import globals as g


def render():

    g.stdscr.erase()
    state = json.loads(g.layout.state_as_json(g.timer))

    line = 0
    for c in state['components']:
        if 'Title' in c:
            titlestate = c['Title']
            line = components.title.render(titlestate, g.stdscr, line)
        elif 'CurrentComparison' in c:
            currentcomparisonstate = c['CurrentComparison']
            line = components.currentcomparison.render(currentcomparisonstate, g.stdscr, line)
        elif 'Splits' in c:
            pass
        elif 'DetailedTimer' in c:
            detailedtimerstate = c['DetailedTimer']
            line = components.detailedtimer.render(detailedtimerstate, g.stdscr, line)
        elif 'PossibleTimeSave' in c:
            possibletimesavestate = c['PossibleTimeSave']
            line = components.possibletimesave.render(possibletimesavestate, g.stdscr, line)
        elif 'PreviousSegment' in c:
            previoussegmentstate = c['PreviousSegment']
            line = components.previoussegment.render(previoussegmentstate, g.stdscr, line)
        elif 'CurrentPace' in c:
            currentpacestate = c['CurrentPace']
            line = components.currentpace.render(currentpacestate, g.stdscr, line)
        elif 'SumOfBest' in c:
            sumofbeststate = c['SumOfBest']
            line = components.sumofbest.render(sumofbeststate, g.stdscr, line)
        elif '' in c:
            pass

    g.stdscr.refresh()


def process_key(k, t):
    if k == g.settings['hotkeys']['startsplit']:
        g.timer.split_or_start()
    elif k == g.settings['hotkeys']['reset']:
        g.timer.reset(g.settings['defaults']['saveonreset'])
    elif k == g.settings['hotkeys']['undosplit']:
        g.timer.undo_split()
    elif k == g.settings['hotkeys']['skipsplit']:
        g.timer.skip_split()
    elif k == g.settings['hotkeys']['pause']:
        g.timer.toggle_pause()
    elif k == g.settings['hotkeys']['previouscomparison']:
        g.timer.switch_to_previous_comparison()
    elif k == g.settings['hotkeys']['nextcomparison']:
        g.timer.switch_to_next_comparison()


def init_colors():
    match = {
        "COLOR_BLACK": curses.COLOR_BLACK,
        "COLOR_BLUE": curses.COLOR_BLUE,
        "COLOR_CYAN": curses.COLOR_CYAN,
        "COLOR_GREEN": curses.COLOR_GREEN,
        "COLOR_MAGENTA": curses.COLOR_MAGENTA,
        "COLOR_RED": curses.COLOR_RED,
        "COLOR_WHITE": curses.COLOR_WHITE,
        "COLOR_YELLOW": curses.COLOR_YELLOW
    }
    curses.init_pair(1, match[g.settings['semcolors']['Default']], curses.COLOR_BLACK)
    curses.init_pair(2, match[g.settings['semcolors']['AheadGainingTime']], curses.COLOR_BLACK)
    curses.init_pair(3, match[g.settings['semcolors']['AheadLosingTime']], curses.COLOR_BLACK)
    curses.init_pair(4, match[g.settings['semcolors']['BehindLosingTime']], curses.COLOR_BLACK)
    curses.init_pair(5, match[g.settings['semcolors']['BehindGainingTime']], curses.COLOR_BLACK)
    curses.init_pair(6, match[g.settings['semcolors']['BestSegment']], curses.COLOR_BLACK)
    curses.init_pair(7, match[g.settings['semcolors']['NotRunning']], curses.COLOR_BLACK)
    curses.init_pair(8, match[g.settings['semcolors']['Paused']], curses.COLOR_BLACK)
    curses.init_pair(9, match[g.settings['semcolors']['PersonalBest']], curses.COLOR_BLACK)
    pass


def get_color(scolor):
    return {
        'Default': curses.color_pair(1),
        'AheadGainingTime': curses.color_pair(2),
        'AheadLosingTime': curses.color_pair(3),
        'BehindLosingTime': curses.color_pair(4),
        'BehindGainingTime': curses.color_pair(5),
        'BestSegment': curses.color_pair(6),
        'NotRunning': curses.color_pair(7),
        'Paused': curses.color_pair(8),
        'PersonalBest': curses.color_pair(9)
    }[scolor]
