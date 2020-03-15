import curses
import json
import sys

import components
import lib.bindings.livesplit_core as lsc
import util

run: lsc.Run
layout: lsc.Layout
timer: lsc.Timer


def display(stdscr):
    global run
    global layout
    global timer

    curses.curs_set(0)
    stdscr.clear()

    state = json.loads(layout.state_as_json(timer))

    while True:
        displaystate(state, stdscr)

    # stdscr.getch()


def displaystate(state, stdscr):
    stdscr.erase()
    line = 0
    for c in state['components']:
        if 'Title' in c:
            titlestate = c['Title']
            line = components.title.render(titlestate, stdscr, line)
        elif 'CurrentComparison' in c:
            currentcomparisonstate = c['CurrentComparison']
            line = components.currentcomparison.render(currentcomparisonstate, stdscr, line)
        elif 'Splits' in c:
            pass
        elif 'DetailedTimer' in c:
            detailedtimerstate = c['DetailedTimer']
            line = components.detailedtimer.render(detailedtimerstate, stdscr, line)
        elif 'PossibleTimeSave' in c:
            possibletimesavestate = c['PossibleTimeSave']
            line = components.possibletimesave.render(possibletimesavestate, stdscr, line)
        elif 'PreviousSegment' in c:
            previoussegmentstate = c['PreviousSegment']
            line = components.previoussegment.render(previoussegmentstate, stdscr, line)
        elif 'CurrentPace' in c:
            currentpacestate = c['CurrentPace']
            line = components.currentpace.render(currentpacestate, stdscr, line)
        elif 'SumOfBest' in c:
            sumofbeststate = c['SumOfBest']
            line = components.sumofbest.render(sumofbeststate, stdscr, line)
        elif '' in c:
            pass
    stdscr.refresh()


def setup():
    global run
    global layout
    global timer

    if len(sys.argv) > 1:
        arun = sys.argv[1]
    else:
        arun = "res/BFBB_ngp_gcemu.lss"
    frun = open(arun, "rb")
    prun = lsc.Run.parse(*util.data_len_for_file(frun), "res/splitsout.lss", False)
    if prun.parsed_successfully():
        run = prun.unwrap()

    timer = lsc.Timer.new(run)

    if len(sys.argv) > 2:
        alayout = sys.argv[2]
    else:
        alayout = "res/myLayout.lsl"
    flayout = open(alayout, "rb")
    layout = lsc.Layout.parse_original_livesplit(*util.data_len_for_file(flayout))


if __name__ == '__main__':
    setup()
    curses.wrapper(display)
