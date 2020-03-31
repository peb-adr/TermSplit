import json
import sys
from ctypes import c_byte
from xml.dom import minidom

sys.stdout = open("misc/log", 'w')


def pretty_print_xml(s):
    return minidom.parseString(s).toprettyxml(indent='  ', encoding='utf-8').decode()


def data_len_for_file(file):
    data = file.read()
    if isinstance(data, str):
        raise TypeError("File must be opened in binary mode!")
    b = bytearray(data)
    buffertype = c_byte * len(b)
    buffer = buffertype(*b)
    return buffer, len(b)


def readsettings(filename):
    with open(filename, 'r') as f:
        settings = json.loads(f.read())
        f.close()
    if type(settings) != dict:
        settings = {}
    if 'files' not in settings:
        settings['files'] = {}
    if 'hotkeys' not in settings:
        settings['hotkeys'] = {}
    return settings


def writesettings(settings, filename):
    if type(settings) != dict:
        settings = {}
    if 'files' not in settings:
        settings['files'] = {}
    if 'hotkeys' not in settings:
        settings['hotkeys'] = {}
    with open(filename, 'w') as f:
        f.write(json.dumps(settings))
        f.close()


def abort_error(message):
    prompt = "press ENTER to exit."
    print(message)
    print('-' * (max(len(prompt), len(message)) + 1))
    print(prompt)
    input()
    exit()


def leftallignindex(textlen=0, maxx=80, minx=0):
    return minx


def rightallignindex(textlen=0, maxx=80, minx=0):
    return max(maxx - textlen, minx)


def centerallignindex(textlen=0, maxx=80, minx=0):
    return max(((maxx - minx) // 2 + minx) - textlen // 2, minx)


def columnallignindex(i=0, n=2, maxx=80):
    if i < 0 or i >= n:
        return 0
    return i * (maxx // n)
