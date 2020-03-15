package livesplitcore;

/**
 * A Timer Write Lock allows temporary write access to a timer. Dispose this to
 * release the write lock.
 */
public class TimerWriteLockRef {
    long ptr;
    TimerWriteLockRef(long ptr) {
        this.ptr = ptr;
    }
}