package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class CurrentPaceComponentStateRef {
    long ptr;
    /**
     * The label's text.
     */
    public String text() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.CurrentPaceComponentState_text(this.ptr);
        return result;
    }
    /**
     * The current pace.
     */
    public String time() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.CurrentPaceComponentState_time(this.ptr);
        return result;
    }
    CurrentPaceComponentStateRef(long ptr) {
        this.ptr = ptr;
    }
}