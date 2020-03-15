package livesplitcore;

import com.sun.jna.*;

/**
 * The state object describes the information to visualize for this component.
 * All the coordinates are in the range 0..1.
 */
public class GraphComponentState extends GraphComponentStateRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.GraphComponentState_drop(this.ptr);
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
    GraphComponentState(Pointer ptr) {
        super(ptr);
    }
}