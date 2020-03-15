package livesplitcore;

import com.sun.jna.*;

/**
 * The state object describes the information to visualize for this component.
 */
public class BlankSpaceComponentStateRef {
    Pointer ptr;
    /**
     * The size of the component.
     */
    public int size() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        int result = LiveSplitCoreNative.INSTANCE.BlankSpaceComponentState_size(this.ptr);
        return result;
    }
    BlankSpaceComponentStateRef(Pointer ptr) {
        this.ptr = ptr;
    }
}