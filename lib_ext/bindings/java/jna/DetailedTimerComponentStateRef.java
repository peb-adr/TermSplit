package livesplitcore;

import com.sun.jna.*;

/**
 * The state object describes the information to visualize for this component.
 */
public class DetailedTimerComponentStateRef {
    Pointer ptr;
    /**
     * The time shown by the component's main timer without the fractional part.
     */
    public String timerTime() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.DetailedTimerComponentState_timer_time(this.ptr);
        return result;
    }
    /**
     * The fractional part of the time shown by the main timer (including the dot).
     */
    public String timerFraction() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.DetailedTimerComponentState_timer_fraction(this.ptr);
        return result;
    }
    /**
     * The semantic coloring information the main timer's time carries.
     */
    public String timerSemanticColor() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.DetailedTimerComponentState_timer_semantic_color(this.ptr);
        return result;
    }
    /**
     * The time shown by the component's segment timer without the fractional part.
     */
    public String segmentTimerTime() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.DetailedTimerComponentState_segment_timer_time(this.ptr);
        return result;
    }
    /**
     * The fractional part of the time shown by the segment timer (including the
     * dot).
     */
    public String segmentTimerFraction() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.DetailedTimerComponentState_segment_timer_fraction(this.ptr);
        return result;
    }
    /**
     * Returns whether the first comparison is visible.
     */
    public boolean comparison1Visible() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.DetailedTimerComponentState_comparison1_visible(this.ptr) != 0;
        return result;
    }
    /**
     * Returns the name of the first comparison. You may not call this if the first
     * comparison is not visible.
     */
    public String comparison1Name() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.DetailedTimerComponentState_comparison1_name(this.ptr);
        return result;
    }
    /**
     * Returns the time of the first comparison. You may not call this if the first
     * comparison is not visible.
     */
    public String comparison1Time() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.DetailedTimerComponentState_comparison1_time(this.ptr);
        return result;
    }
    /**
     * Returns whether the second comparison is visible.
     */
    public boolean comparison2Visible() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.DetailedTimerComponentState_comparison2_visible(this.ptr) != 0;
        return result;
    }
    /**
     * Returns the name of the second comparison. You may not call this if the
     * second comparison is not visible.
     */
    public String comparison2Name() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.DetailedTimerComponentState_comparison2_name(this.ptr);
        return result;
    }
    /**
     * Returns the time of the second comparison. You may not call this if the
     * second comparison is not visible.
     */
    public String comparison2Time() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.DetailedTimerComponentState_comparison2_time(this.ptr);
        return result;
    }
    /**
     * The segment's icon encoded as a Data URL. This value is only specified
     * whenever the icon changes. If you explicitly want to query this value,
     * remount the component. The String itself may be empty. This indicates
     * that there is no icon.
     */
    public String iconChange() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.DetailedTimerComponentState_icon_change(this.ptr);
        return result;
    }
    /**
     * The name of the segment. This may be null if it's not supposed to be
     * visualized.
     */
    public String segmentName() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.DetailedTimerComponentState_segment_name(this.ptr);
        return result;
    }
    DetailedTimerComponentStateRef(Pointer ptr) {
        this.ptr = ptr;
    }
}