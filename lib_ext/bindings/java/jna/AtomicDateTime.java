package livesplitcore;

import com.sun.jna.*;

/**
 * An Atomic Date Time represents a UTC Date Time that tries to be as close to
 * an atomic clock as possible.
 */
public class AtomicDateTime extends AtomicDateTimeRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.AtomicDateTime_drop(this.ptr);
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
    AtomicDateTime(Pointer ptr) {
        super(ptr);
    }
}