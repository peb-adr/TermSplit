package livesplitcore;

/**
 * A Timer Read Lock allows temporary read access to a timer. Dispose this to
 * release the read lock.
 */
public class TimerReadLockRef {
    long ptr;
    /**
     * Accesses the timer.
     */
    public TimerRef timer() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        TimerRef result = new TimerRef(LiveSplitCoreNative.TimerReadLock_timer(this.ptr));
        return result;
    }
    TimerReadLockRef(long ptr) {
        this.ptr = ptr;
    }
}