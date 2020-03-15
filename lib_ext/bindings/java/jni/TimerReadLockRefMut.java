package livesplitcore;

/**
 * A Timer Read Lock allows temporary read access to a timer. Dispose this to
 * release the read lock.
 */
public class TimerReadLockRefMut extends TimerReadLockRef {
    TimerReadLockRefMut(long ptr) {
        super(ptr);
    }
}