package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class PossibleTimeSaveComponentStateRef {
    long ptr;
    /**
     * The label's text.
     */
    public String text() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.PossibleTimeSaveComponentState_text(this.ptr);
        return result;
    }
    /**
     * The current possible time save.
     */
    public String time() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.PossibleTimeSaveComponentState_time(this.ptr);
        return result;
    }
    PossibleTimeSaveComponentStateRef(long ptr) {
        this.ptr = ptr;
    }
}