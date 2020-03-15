package livesplitcore;

import com.sun.jna.*;

/**
 * The state object that describes a single segment's information to visualize.
 */
public class SplitsComponentState extends SplitsComponentStateRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.SplitsComponentState_drop(this.ptr);
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
    SplitsComponentState(Pointer ptr) {
        super(ptr);
    }
}