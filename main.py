import curses
import sys

import globals as g
import input
import render
import util
from lib_ext.bindings import livesplit_core as lsc


def init_lcs():
    try:
        frun = open(g.settings['files']['run'], "rb")
    except FileNotFoundError:
        util.abort_error("run file " + g.settings['files']['run'] + " does not exist")
    prun = lsc.Run.parse(*util.data_len_for_file(frun), "res/splitsout.lss", False)
    if not prun.parsed_successfully():
        util.abort_error("parsing run " + g.settings['files']['run'] + "failed.")
    # g.run init
    g.run = prun.unwrap()
    # g.timer init
    g.timer = lsc.Timer.new(g.run)
    try:
        flayout = open(g.settings['files']['layout'], "rb")
    except FileNotFoundError:
        util.abort_error("layout file " + g.settings['files']['layout'] + " does not exist")
    # g.layout init
    g.layout = lsc.Layout.parse_original_livesplit(*util.data_len_for_file(flayout))


def init_settings():
    # g.settings init
    g.settings = util.readsettings("res/settings.json")

    if len(sys.argv) > 1:
        g.settings['files']['run'] = sys.argv[1]
    elif 'run' not in g.settings['files']:
        g.settings['files']['run'] = "res/BFBB_ngp_gcemu.lss"

    if len(sys.argv) > 2:
        g.settings['files']['layout'] = sys.argv[2]
    elif 'layout' not in g.settings['files']:
        g.settings['files']['layout'] = "res/myLayout.lsl"

    if 'startsplit' not in g.settings['hotkeys']:
        g.settings['hotkeys']['startsplit'] = 'space'
    if 'reset' not in g.settings['hotkeys']:
        g.settings['hotkeys']['reset'] = '-'
    if 'undosplit' not in g.settings['hotkeys']:
        g.settings['hotkeys']['undosplit'] = '0'
    if 'skipsplit' not in g.settings['hotkeys']:
        g.settings['hotkeys']['skipsplit'] = '+'
    if 'pause' not in g.settings['hotkeys']:
        g.settings['hotkeys']['pause'] = 'enter'
    if 'previouscomparison' not in g.settings['hotkeys']:
        g.settings['hotkeys']['previouscomparison'] = '7'
    if 'nextcomparison' not in g.settings['hotkeys']:
        g.settings['hotkeys']['nextcomparison'] = '9'
    if 'toggleenable' not in g.settings['hotkeys']:
        g.settings['hotkeys']['toggleenable'] = '/'


def main():
    init_settings()
    init_lcs()
    input.init()
    curses.wrapper(render.init)


if __name__ == '__main__':
    main()
