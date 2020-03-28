import curses
import sys
import threading
from time import time

import globals as g
import input
import pages
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


def init_screen(s):
    curses.curs_set(0)
    # g.stdscr init
    g.stdscr = s
    pages.timing.init_colors()
    # g.currentpage init
    g.currentpage = pages.timing

    # begin render thread
    nextcall = time()
    # f = open("misc/log", mode='w')
    # t1 = time()

    def loop_render():
        nonlocal nextcall
        # nonlocal t1
        # nonlocal f
        g.currentpage.render()
        # t2 = time()
        # print(t2 - t1, file=f)
        # f.flush()
        # t1 = t2
        nextcall = nextcall + 1 / g.settings['defaults']['fps']
        threading.Timer(nextcall - time(), loop_render).start()

    loop_render()


def main():
    init_settings()
    init_lcs()
    input.init()
    curses.wrapper(init_screen)


if __name__ == '__main__':
    main()
