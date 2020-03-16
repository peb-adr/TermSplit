import curses
import sys

import pages
import util
import input
from lib_ext.bindings import livesplit_core as lsc


class Global:
    def __init__(self):
        self.stdscr = None
        self.run = None
        self.layout = None
        self.timer = None
        self.settings = None
        self.currentpage = None


g: Global


def init_screen(s):
    # global stdsrc
    # global g

    g.stdscr = s
    g.currentpage = pages.timing
    # pages.layout.render(g)
    # pages.settings.render(g)
    while True:
        g.currentpage.render(g)


def setup():
    # global g

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
    global g
    g = Global()

    setup()
    input.init(g)
    curses.wrapper(init_screen)


if __name__ == '__main__':
    main()
