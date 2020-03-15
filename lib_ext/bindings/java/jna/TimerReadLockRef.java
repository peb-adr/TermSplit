package livesplitcore;

import com.sun.jna.*;

/**
 * A Timer Read Lock allows temporary read access to a timer. Dispose this to
 * release the read lock.
 */
public class TimerReadLockRef {
    Pointer ptr;
    /**
     * Accesses the timer.
     */
    public TimerRef timer() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TimerRef result = new TimerRef(LiveSplitCoreNative.INSTANCE.TimerReadLock_timer(this.ptr));
        return result;
    }
    TimerReadLockRef(Pointer ptr) {
        this.ptr = ptr;
    }
}