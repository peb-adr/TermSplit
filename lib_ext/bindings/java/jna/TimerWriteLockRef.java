package livesplitcore;

import com.sun.jna.*;

/**
 * A Timer Write Lock allows temporary write access to a timer. Dispose this to
 * release the write lock.
 */
public class TimerWriteLockRef {
    Pointer ptr;
    TimerWriteLockRef(Pointer ptr) {
        this.ptr = ptr;
    }
}