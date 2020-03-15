package livesplitcore;

import com.sun.jna.*;

/**
 * The state object describes the information to visualize for this component.
 */
public class TotalPlaytimeComponentStateRef {
    Pointer ptr;
    /**
     * The label's text.
     */
    public String text() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.TotalPlaytimeComponentState_text(this.ptr);
        return result;
    }
    /**
     * The total playtime.
     */
    public String time() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.TotalPlaytimeComponentState_time(this.ptr);
        return result;
    }
    TotalPlaytimeComponentStateRef(Pointer ptr) {
        this.ptr = ptr;
    }
}