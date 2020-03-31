import curses
import functools
import json

import components
import globals as g
import render as r
import util


def render():
    state = json.loads(g.layout.state_as_json(g.timer))
    line = 0
    count = 0

    try:
        g.stdscr.erase()
        for c in state['components']:
            if len(c) != 1:
                continue
            count += 1
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
                'Splits': functools.partial(components.splits.render, c[key], line),
                'SumOfBest': functools.partial(components.sumofbest.render, c[key], line),
                'Text': functools.partial(components.text.render, c[key], line),
                'Timer': functools.partial(components.timer.render, c[key], line),
                'Title': functools.partial(components.title.render, c[key], line),
                'TotalPlaytime': functools.partial(components.totalplaytime.render, c[key], line)
            }[key]()
    except curses.error:
        if count < len(state['components']):
            r.add_message("layout to big for terminal size - adjust one of the two")


def process_key(k, t):
    match = {
        g.settings['hotkeys']['startsplit']: g.timer.split_or_start,
        g.settings['hotkeys']['reset']: timer_reset_warn_save,
        g.settings['hotkeys']['undosplit']: g.timer.undo_split,
        g.settings['hotkeys']['skipsplit']: g.timer.skip_split,
        g.settings['hotkeys']['pause']: g.timer.toggle_pause,
        g.settings['hotkeys']['previouscomparison']: g.timer.switch_to_previous_comparison,
        g.settings['hotkeys']['nextcomparison']: g.timer.switch_to_next_comparison,
        g.settings['hotkeys']['saverun']: save_run
    }
    if k in match:
        match[k]()


def timer_reset_warn_save():
    g.timer.reset(g.settings['defaults']['updateinmemoryrunonreset'])
    if g.timer.get_run().has_been_modified():
        r.add_message("inmemory run has changed (save to file with: " + g.settings['hotkeys']['saverun'] + " )", True)


def save_run():
    if g.timer.current_phase() != 0:
        r.add_message("reset timer to save run", True)
        return

    # noinspection PyBroadException
    try:
        f = open(g.settings['files']['runsave'], "w")
        f.write(util.pretty_print_xml(g.timer.get_run().save_as_lss()))
        f.close()
    except Exception:
        r.add_message("saving run to " + g.settings['files']['runsave'] + " failed", True)
    else:
        r.add_message("saved run to " + g.settings['files']['runsave'], True)


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
