import time

from pynput import keyboard

import globals as g
import pages

enabled = True


def process_key(k, t):
    global enabled
    if k == g.settings['hotkeys']['toggleenable']:
        enabled = not enabled
    if not enabled:
        return

    if k == g.settings['hotkeys']['pagetiming']:
        g.currentpage = pages.timing
    if k == g.settings['hotkeys']['pagesettings']:
        g.currentpage = pages.settings

    g.currentpage.process_key(k, t)


def on_press(key):
    t = time.time()
    try:
        # Alphanumeric key pressed
        k = key.char
    except AttributeError:
        # Special key pressed
        k = str(key)[4:]  # Strip "Key."
    process_key(k, t)


def init():
    # settings = util.readsettings("res/settings.json")
    # Collect events until released
    # with keyboard.Listener(on_press=on_press) as listener:
    #     listener.join()
    listener = keyboard.Listener(on_press=on_press)
    listener.start()
