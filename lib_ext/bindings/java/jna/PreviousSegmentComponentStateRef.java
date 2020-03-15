package livesplitcore;

import com.sun.jna.*;

/**
 * The state object describes the information to visualize for this component.
 */
public class PreviousSegmentComponentStateRef {
    Pointer ptr;
    /**
     * The label's text.
     */
    public String text() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.PreviousSegmentComponentState_text(this.ptr);
        return result;
    }
    /**
     * The delta (and possibly the possible time save).
     */
    public String time() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.PreviousSegmentComponentState_time(this.ptr);
        return result;
    }
    /**
     * The semantic coloring information the delta time carries.
     */
    public String semanticColor() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.PreviousSegmentComponentState_semantic_color(this.ptr);
        return result;
    }
    PreviousSegmentComponentStateRef(Pointer ptr) {
        this.ptr = ptr;
    }
}