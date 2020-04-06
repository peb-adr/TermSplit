import globals as g
import util
from pages import timing


def render(state, line):
    maxy, maxx = g.stdscr.getmaxyx()

    labels = None
    if 'column_labels' in state:
        labels = state['column_labels']
    if labels:
        for i in range(0, len(labels)):
            s = labels[i].rjust(g.settings['defaults']['splitscolumnwidth'], " ")
            index = util.rightallignindex(len(s), maxx - i * g.settings['defaults']['splitscolumnwidth'], maxx // 2)
            g.stdscr.addstr(line, index, s)
        line += 1

    if 'splits' in state:
        for split in state['splits']:
            s = split['name']
            if split['is_current_split']:
                s = "-> " + s
            g.stdscr.addstr(line, util.leftallignindex(), s)

            if state['display_two_rows']:
                line += 1

            columns = []
            columncolors = []
            for c in split['columns']:
                s = c['value']
                if s and not s.isspace():
                    columns.append(s)
                    columncolors.append(c['semantic_color'])

            n = len(columns)
            for i in range(0, n):
                if i < n - 1:
                    s = columns[i].rjust(g.settings['defaults']['splitscolumnwidth'], " ")
                else:
                    s = " " + columns[i]
                index = util.rightallignindex(len(s), maxx - i * g.settings['defaults']['splitscolumnwidth'], maxx // 2)
                g.stdscr.attron(timing.get_color(columncolors[i]))
                g.stdscr.addstr(line, index, s)
                g.stdscr.attroff(timing.get_color(columncolors[i]))

            line += 1

    return line
