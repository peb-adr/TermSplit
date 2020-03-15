package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class CurrentComparisonComponentStateRef {
    long ptr;
    /**
     * The label's text.
     */
    public String text() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.CurrentComparisonComponentState_text(this.ptr);
        return result;
    }
    /**
     * The name of the comparison that is currently selected to be compared
     * against.
     */
    public String comparison() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.CurrentComparisonComponentState_comparison(this.ptr);
        return result;
    }
    CurrentComparisonComponentStateRef(long ptr) {
        this.ptr = ptr;
    }
}