package livesplitcore;

import com.sun.jna.*;

/**
 * The state object describes the information to visualize for this component.
 */
public class SumOfBestComponentStateRef {
    Pointer ptr;
    /**
     * The label's text.
     */
    public String text() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.SumOfBestComponentState_text(this.ptr);
        return result;
    }
    /**
     * The sum of best segments.
     */
    public String time() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.SumOfBestComponentState_time(this.ptr);
        return result;
    }
    SumOfBestComponentStateRef(Pointer ptr) {
        this.ptr = ptr;
    }
}