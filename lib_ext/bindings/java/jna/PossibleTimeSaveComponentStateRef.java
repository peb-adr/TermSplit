package livesplitcore;

import com.sun.jna.*;

/**
 * The state object describes the information to visualize for this component.
 */
public class PossibleTimeSaveComponentStateRef {
    Pointer ptr;
    /**
     * The label's text.
     */
    public String text() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.PossibleTimeSaveComponentState_text(this.ptr);
        return result;
    }
    /**
     * The current possible time save.
     */
    public String time() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.PossibleTimeSaveComponentState_time(this.ptr);
        return result;
    }
    PossibleTimeSaveComponentStateRef(Pointer ptr) {
        this.ptr = ptr;
    }
}