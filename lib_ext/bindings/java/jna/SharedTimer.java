package livesplitcore;

import com.sun.jna.*;

/**
 * A Shared Timer that can be used to share a single timer object with multiple
 * owners.
 */
public class SharedTimer extends SharedTimerRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.SharedTimer_drop(this.ptr);
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
    SharedTimer(Pointer ptr) {
        super(ptr);
    }
}