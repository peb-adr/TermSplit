package livesplitcore;

import com.sun.jna.*;

/**
 * A time that can store a Real Time and a Game Time. Both of them are
 * optional.
 */
public class Time extends TimeRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.Time_drop(this.ptr);
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
    Time(Pointer ptr) {
        super(ptr);
    }
}