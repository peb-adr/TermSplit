import curses
import os
import sys

import globals as g
import input
import render
import util
from lib_ext.bindings import livesplit_core as lsc


def init_lcs():
    # g.run init
    try:
        frun = open(g.settings['files']['run'], "rb")
    except FileNotFoundError:
        util.abort_error("run file " + g.settings['files']['run'] + " does not exist")
    # noinspection PyUnboundLocalVariable
    prun = lsc.Run.parse(*util.data_len_for_file(frun), g.settings['files']['runsave'], False)
    if not prun.parsed_successfully():
        util.abort_error("parsing run " + g.settings['files']['run'] + " failed.")
    run = prun.unwrap()
    if not run:
        util.abort_error("run intialization failed")

    # g.timer init
    g.timer = lsc.Timer.new(run)
    if not g.timer:
        util.abort_error("timer intialization failed")

    # g.layout init
    try:
        flayout = open(g.settings['files']['layout'], "rb")
    except FileNotFoundError:
        util.abort_error("layout file " + g.settings['files']['layout'] + " does not exist")
    # noinspection PyUnboundLocalVariable
    ext = os.path.splitext(flayout.name)[1]
    # noinspection PyBroadException
    try:
        if ext == ".lsl":
            g.layout = lsc.Layout.parse_original_livesplit(*util.data_len_for_file(flayout))
        if ext == ".json" or ext == ".ls1l":
            g.layout = lsc.Layout.parse_json(flayout.read())
        if not g.layout:
            raise ValueError
    except:
        util.abort_error("parsing layout " + g.settings['files']['layout'] + " failed.")


def init_settings():
    # g.settings init
    # noinspection PyBroadException
    try:
        g.settings = util.readsettings("res/settings.json")

        if len(sys.argv) > 1:
            g.settings['files']['run'] = sys.argv[1]
        elif 'run' not in g.settings['files']:
            g.settings['files']['run'] = "res/splits.lss"
        # empty runsave path? use run path
        if not g.settings['files']['runsave']:
            g.settings['files']['runsave'] = g.settings['files']['run']

        if len(sys.argv) > 2:
            g.settings['files']['layout'] = sys.argv[2]
        elif 'layout' not in g.settings['files']:
            g.settings['files']['layout'] = "res/layout.json"

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
    except:
        util.abort_error("settings intialization failed")


def main():
    init_settings()
    init_lcs()
    input.init()
    curses.wrapper(render.init)


if __name__ == '__main__':
    main()
