package livesplitcore;

import com.sun.jna.*;

/**
 * A Timer Write Lock allows temporary write access to a timer. Dispose this to
 * release the write lock.
 */
public class TimerWriteLockRefMut extends TimerWriteLockRef {
    /**
     * Accesses the timer.
     */
    public TimerRefMut timer() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TimerRefMut result = new TimerRefMut(LiveSplitCoreNative.INSTANCE.TimerWriteLock_timer(this.ptr));
        return result;
    }
    TimerWriteLockRefMut(Pointer ptr) {
        super(ptr);
    }
}