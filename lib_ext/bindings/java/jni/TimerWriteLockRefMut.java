package livesplitcore;

/**
 * A Timer Write Lock allows temporary write access to a timer. Dispose this to
 * release the write lock.
 */
public class TimerWriteLockRefMut extends TimerWriteLockRef {
    /**
     * Accesses the timer.
     */
    public TimerRefMut timer() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        TimerRefMut result = new TimerRefMut(LiveSplitCoreNative.TimerWriteLock_timer(this.ptr));
        return result;
    }
    TimerWriteLockRefMut(long ptr) {
        super(ptr);
    }
}