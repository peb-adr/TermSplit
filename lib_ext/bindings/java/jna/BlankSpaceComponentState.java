package livesplitcore;

import com.sun.jna.*;

/**
 * The state object describes the information to visualize for this component.
 */
public class BlankSpaceComponentState extends BlankSpaceComponentStateRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.BlankSpaceComponentState_drop(this.ptr);
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
    BlankSpaceComponentState(Pointer ptr) {
        super(ptr);
    }
}