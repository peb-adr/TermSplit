import curses
import sys

import globals as g
import input
import pages
import util
from lib_ext.bindings import livesplit_core as lsc


def init_screen(s):
    curses.curs_set(0)
    g.stdscr = s
    pages.timing.init_colors()
    g.currentpage = pages.timing
    # pages.layout.render()
    # pages.settings.render()
    while True:
        g.currentpage.render()


def setup():
    settings = util.readsettings("res/settings.json")

    if len(sys.argv) > 1:
        settings['files']['run'] = sys.argv[1]
    elif 'run' not in settings['files']:
        settings['files']['run'] = "res/BFBB_ngp_gcemu.lss"
    frun = open(settings['files']['run'], "rb")
    prun = lsc.Run.parse(*util.data_len_for_file(frun), "res/splitsout.lss", False)
    if prun.parsed_successfully():
        g.run = prun.unwrap()

    g.timer = lsc.Timer.new(g.run)

    if len(sys.argv) > 2:
        settings['files']['layout'] = sys.argv[2]
    elif 'layout' not in settings['files']:
        settings['files']['layout'] = "res/myLayout.lsl"
    flayout = open(settings['files']['layout'], "rb")
    g.layout = lsc.Layout.parse_original_livesplit(*util.data_len_for_file(flayout))

    if 'startsplit' not in settings['hotkeys']:
        settings['hotkeys']['startsplit'] = 'space'
    if 'reset' not in settings['hotkeys']:
        settings['hotkeys']['reset'] = '-'
    if 'undosplit' not in settings['hotkeys']:
        settings['hotkeys']['undosplit'] = '0'
    if 'skipsplit' not in settings['hotkeys']:
        settings['hotkeys']['skipsplit'] = '+'
    if 'pause' not in settings['hotkeys']:
        settings['hotkeys']['pause'] = 'enter'
    if 'previouscomparison' not in settings['hotkeys']:
        settings['hotkeys']['previouscomparison'] = '7'
    if 'nextcomparison' not in settings['hotkeys']:
        settings['hotkeys']['nextcomparison'] = '9'
    if 'toggleenable' not in settings['hotkeys']:
        settings['hotkeys']['toggleenable'] = '/'

    g.settings = settings


def main():
    setup()
    input.init()
    curses.wrapper(init_screen)


if __name__ == '__main__':
    main()
