package livesplitcore;

import com.sun.jna.*;

/**
 * A time that can store a Real Time and a Game Time. Both of them are
 * optional.
 */
public class TimeRefMut extends TimeRef {
    TimeRefMut(Pointer ptr) {
        super(ptr);
    }
}