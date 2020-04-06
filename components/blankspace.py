import globals as g


def render(state, line):
    n = 0
    if 'size' in state:
        n = state['size'] // g.settings['defaults']['heighttranslatefactor']
    return line + n
