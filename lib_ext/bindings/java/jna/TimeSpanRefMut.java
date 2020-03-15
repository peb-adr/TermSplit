package livesplitcore;

import com.sun.jna.*;

/**
 * A Time Span represents a certain span of time.
 */
public class TimeSpanRefMut extends TimeSpanRef {
    TimeSpanRefMut(Pointer ptr) {
        super(ptr);
    }
}