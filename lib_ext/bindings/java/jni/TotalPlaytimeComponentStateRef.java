package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class TotalPlaytimeComponentStateRef {
    long ptr;
    /**
     * The label's text.
     */
    public String text() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.TotalPlaytimeComponentState_text(this.ptr);
        return result;
    }
    /**
     * The total playtime.
     */
    public String time() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.TotalPlaytimeComponentState_time(this.ptr);
        return result;
    }
    TotalPlaytimeComponentStateRef(long ptr) {
        this.ptr = ptr;
    }
}