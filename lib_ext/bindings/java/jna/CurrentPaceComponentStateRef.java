package livesplitcore;

import com.sun.jna.*;

/**
 * The state object describes the information to visualize for this component.
 */
public class CurrentPaceComponentStateRef {
    Pointer ptr;
    /**
     * The label's text.
     */
    public String text() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.CurrentPaceComponentState_text(this.ptr);
        return result;
    }
    /**
     * The current pace.
     */
    public String time() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.CurrentPaceComponentState_time(this.ptr);
        return result;
    }
    CurrentPaceComponentStateRef(Pointer ptr) {
        this.ptr = ptr;
    }
}