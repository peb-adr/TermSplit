package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class DetailedTimerComponentStateRef {
    long ptr;
    /**
     * The time shown by the component's main timer without the fractional part.
     */
    public String timerTime() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.DetailedTimerComponentState_timerTime(this.ptr);
        return result;
    }
    /**
     * The fractional part of the time shown by the main timer (including the dot).
     */
    public String timerFraction() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.DetailedTimerComponentState_timerFraction(this.ptr);
        return result;
    }
    /**
     * The semantic coloring information the main timer's time carries.
     */
    public String timerSemanticColor() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.DetailedTimerComponentState_timerSemanticColor(this.ptr);
        return result;
    }
    /**
     * The time shown by the component's segment timer without the fractional part.
     */
    public String segmentTimerTime() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.DetailedTimerComponentState_segmentTimerTime(this.ptr);
        return result;
    }
    /**
     * The fractional part of the time shown by the segment timer (including the
     * dot).
     */
    public String segmentTimerFraction() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.DetailedTimerComponentState_segmentTimerFraction(this.ptr);
        return result;
    }
    /**
     * Returns whether the first comparison is visible.
     */
    public boolean comparison1Visible() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.DetailedTimerComponentState_comparison1Visible(this.ptr);
        return result;
    }
    /**
     * Returns the name of the first comparison. You may not call this if the first
     * comparison is not visible.
     */
    public String comparison1Name() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.DetailedTimerComponentState_comparison1Name(this.ptr);
        return result;
    }
    /**
     * Returns the time of the first comparison. You may not call this if the first
     * comparison is not visible.
     */
    public String comparison1Time() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.DetailedTimerComponentState_comparison1Time(this.ptr);
        return result;
    }
    /**
     * Returns whether the second comparison is visible.
     */
    public boolean comparison2Visible() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.DetailedTimerComponentState_comparison2Visible(this.ptr);
        return result;
    }
    /**
     * Returns the name of the second comparison. You may not call this if the
     * second comparison is not visible.
     */
    public String comparison2Name() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.DetailedTimerComponentState_comparison2Name(this.ptr);
        return result;
    }
    /**
     * Returns the time of the second comparison. You may not call this if the
     * second comparison is not visible.
     */
    public String comparison2Time() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.DetailedTimerComponentState_comparison2Time(this.ptr);
        return result;
    }
    /**
     * The segment's icon encoded as a Data URL. This value is only specified
     * whenever the icon changes. If you explicitly want to query this value,
     * remount the component. The String itself may be empty. This indicates
     * that there is no icon.
     */
    public String iconChange() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.DetailedTimerComponentState_iconChange(this.ptr);
        return result;
    }
    /**
     * The name of the segment. This may be null if it's not supposed to be
     * visualized.
     */
    public String segmentName() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.DetailedTimerComponentState_segmentName(this.ptr);
        return result;
    }
    DetailedTimerComponentStateRef(long ptr) {
        this.ptr = ptr;
    }
}