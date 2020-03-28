import curses
import functools
import json

import components
import globals as g


def render():
    g.stdscr.erase()
    state = json.loads(g.layout.state_as_json(g.timer))
    line = 0

    maxy, maxx = g.stdscr.getmaxyx()
    a = components.detailedtimer.height

    for c in state['components']:
        if len(c) != 1:
            continue
        key = list(c.keys())[0]
        line = {
            'BlankSpace': functools.partial(components.blankspace.render, c[key], line),
            'CurrentComparison': functools.partial(components.currentcomparison.render, c[key], line),
            'CurrentPace': functools.partial(components.currentpace.render, c[key], line),
            'Delta': functools.partial(components.delta.render, c[key], line),
            'DetailedTimer': functools.partial(components.detailedtimer.render, c[key], line),
            'Graph': functools.partial(components.graph.render, c[key], line),
            'PossibleTimeSave': functools.partial(components.possibletimesave.render, c[key], line),
            'PreviousSegment': functools.partial(components.previoussegment.render, c[key], line),
            'Separator': functools.partial(components.separator.render, c[key], line),
            'Splits': functools.partial(components.splits.render, c[key], line, 42),
            'SumOfBest': functools.partial(components.sumofbest.render, c[key], line),
            'Text': functools.partial(components.text.render, c[key], line),
            'Timer': functools.partial(components.timer.render, c[key], line),
            'Title': functools.partial(components.title.render, c[key], line),
            'TotalPlaytime': functools.partial(components.totalplaytime.render, c[key], line)
        }[key]()
    g.stdscr.refresh()


def process_key(k, t):
    {
        g.settings['hotkeys']['startsplit']: functools.partial(g.timer.split_or_start),
        g.settings['hotkeys']['reset']: functools.partial(g.timer.reset, g.settings['defaults']['saveonreset']),
        g.settings['hotkeys']['undosplit']: functools.partial(g.timer.undo_split),
        g.settings['hotkeys']['skipsplit']: functools.partial(g.timer.skip_split),
        g.settings['hotkeys']['pause']: functools.partial(g.timer.toggle_pause),
        g.settings['hotkeys']['previouscomparison']: functools.partial(g.timer.switch_to_previous_comparison),
        g.settings['hotkeys']['nextcomparison']: functools.partial(g.timer.switch_to_next_comparison)
    }[k]()


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
