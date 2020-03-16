# import sys
#
# import lib.bindings.livesplit_core as ls
# import util
#
# f = open("res/BFBB_ngp_gcemu.lss", "rb")
#
# run = ls.Run.parse(*util.data_len_for_file(f), "res/splitsout.lss", False)
# # run = ls.Run.parse_file(f, "res/splitsout.lss", False)
#
#
# print(sys.argv[0])
# print(sys.argv[1])
# print(sys.argv[2])
#
#
# import lib.bindings.livesplit_core as lsc
# import util
#
# arun = "res/BFBB_ngp_gcemu.lss"
# frun = open(arun, "rb")
# prun = lsc.Run.parse(*util.data_len_for_file(frun), "res/splitsout.lss", False)
# run = prun.unwrap()
#
# alayout = "res/myLayout.lsl"
# flayout = open(alayout, "rb")
# layout = lsc.Layout.parse_original_livesplit(*util.data_len_for_file(flayout))
#
# timer = lsc.Timer.new(run)


# s = cfonts.render("0.00", font='simple', space=True)
# print(s)
# time.sleep(120)

import pynput

import time
import sys
from pynput import keyboard


def on_press(key):
    t = time.time()
    try:
        # Alphanumeric key pressed
        print('{} {}'.format(t, key.char), flush=True)
        # print('{} {}'.format(t, key.name), flush=True)
        print('---', flush=True)
    except AttributeError:
        # Special key pressed
        key_name = str(key)[4:] # Strip "Key."
        print('{} {}'.format(t, key_name), flush=True)


# Collect events until released
with keyboard.Listener(on_press=on_press) as listener:
    listener.join()
