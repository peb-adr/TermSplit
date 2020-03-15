package livesplitcore;

import com.sun.jna.*;

/**
 * A Timer Write Lock allows temporary write access to a timer. Dispose this to
 * release the write lock.
 */
public class TimerWriteLock extends TimerWriteLockRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.TimerWriteLock_drop(this.ptr);
            ptr = Pointer.NULL;
        }
    }
    protected void finalize() throws Throwable {
        drop();
        super.finalize();
    }
    public void close() {
        drop();
    }
    TimerWriteLock(Pointer ptr) {
        super(ptr);
    }
}