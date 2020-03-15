package livesplitcore;

import com.sun.jna.*;

/**
 * A Shared Timer that can be used to share a single timer object with multiple
 * owners.
 */
public class SharedTimerRefMut extends SharedTimerRef {
    SharedTimerRefMut(Pointer ptr) {
        super(ptr);
    }
}