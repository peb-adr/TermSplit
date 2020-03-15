package livesplitcore;

import com.sun.jna.*;

/**
 * The state object that describes a single segment's information to visualize.
 */
public class SplitComponentState extends SplitComponentStateRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
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
    SplitComponentState(Pointer ptr) {
        super(ptr);
    }
}