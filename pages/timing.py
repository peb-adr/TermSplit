import json

import components
# from main import Global


def render(g):

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
    # g.stdscr.getch()


def process_key(k, t):
    pass
