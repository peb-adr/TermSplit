package livesplitcore;

import com.sun.jna.*;

/**
 * The state object describes the information to visualize for this component.
 */
public class CurrentComparisonComponentStateRef {
    Pointer ptr;
    /**
     * The label's text.
     */
    public String text() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.CurrentComparisonComponentState_text(this.ptr);
        return result;
    }
    /**
     * The name of the comparison that is currently selected to be compared
     * against.
     */
    public String comparison() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.CurrentComparisonComponentState_comparison(this.ptr);
        return result;
    }
    CurrentComparisonComponentStateRef(Pointer ptr) {
        this.ptr = ptr;
    }
}