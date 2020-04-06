import sys
import time

from pynput import keyboard

import globals as g
import pages


enabled = True
modified = False


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
    global enabled
    global modified

    t = time.time()
    k = key_to_char(key)
    if not k:
        return
    print(k + " pressed")
    sys.stdout.flush()

    if k == g.settings['hotkeys']['modkey']:
        modified = True
    if modified:
        k = "^" + k

    if k == g.settings['hotkeys']['toggleenable']:
        enabled = not enabled
    if not enabled:
        return

    if k == g.settings['hotkeys']['pagetiming']:
        g.currentpage = pages.timing
    if k == g.settings['hotkeys']['pagesettings']:
        g.currentpage = pages.settings

    g.currentpage.process_key(k, t)


def on_release(key):
    global modified
    k = key_to_char(key)
    if not k:
        return
    print(k + " released")
    sys.stdout.flush()
    if k == g.settings['hotkeys']['modkey']:
        modified = False


def key_to_char(key):
    try:
        # Alphanumeric key pressed
        k = key.char
    except AttributeError:
        # Special key pressed
        k = str(key)[4:]  # Strip "Key."
    return k


def init():
    # settings = util.readsettings("res/settings.json")
    # Collect events until released
    # with keyboard.Listener(on_press=on_press) as listener:
    #     listener.join()
    listener = keyboard.Listener(on_press=on_press, on_release=on_release)
    listener.start()
