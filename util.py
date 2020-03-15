from ctypes import c_byte


def data_len_for_file(file):
    data = file.read()
    if isinstance(data, str):
        raise TypeError("File must be opened in binary mode!")
    b = bytearray(data)
    buffertype = c_byte * len(b)
    buffer = buffertype(*b)
    return buffer, len(b)


def leftallignindex(textlen=0, maxx=80, minx=0):
    return minx


def rightallignindex(textlen=0, maxx=80, minx=0):
    return max(maxx - textlen, minx)


def centerallignindex(textlen=0, maxx=80, minx=0):
    return max(((maxx - minx) // 2 + minx) - textlen // 2, minx)
