import time

from pynput import keyboard

import globals as g
import pages


enabled = True


def process_key(k, t):
    global enabled
    if k == '/':
        enabled = not enabled
    if not enabled:
        return

    if k == 'f1':
        g.currentpage = pages.timing
    if k == 'f2':
        g.currentpage = pages.settings

    g.currentpage.process_key(k, t)


def on_press(key):
    t = time.time()
    k = ''
    try:
        # Alphanumeric key pressed
        k = key.char
    except AttributeError:
        # Special key pressed
        k = str(key)[4:]  # Strip "Key."
    process_key(k, time)


def init():
    # settings = util.readsettings("res/settings.json")
    # Collect events until released
    # with keyboard.Listener(on_press=on_press) as listener:
    #     listener.join()
    listener = keyboard.Listener(on_press=on_press)
    listener.start()
