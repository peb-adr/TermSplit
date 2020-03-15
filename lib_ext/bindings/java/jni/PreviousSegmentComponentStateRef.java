package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class PreviousSegmentComponentStateRef {
    long ptr;
    /**
     * The label's text.
     */
    public String text() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.PreviousSegmentComponentState_text(this.ptr);
        return result;
    }
    /**
     * The delta (and possibly the possible time save).
     */
    public String time() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.PreviousSegmentComponentState_time(this.ptr);
        return result;
    }
    /**
     * The semantic coloring information the delta time carries.
     */
    public String semanticColor() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.PreviousSegmentComponentState_semanticColor(this.ptr);
        return result;
    }
    PreviousSegmentComponentStateRef(long ptr) {
        this.ptr = ptr;
    }
}