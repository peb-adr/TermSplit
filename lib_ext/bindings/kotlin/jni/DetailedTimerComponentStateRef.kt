package livesplitcore

/**
 * The state object describes the information to visualize for this component.
 */
open class DetailedTimerComponentStateRef internal constructor(var ptr: Long) {
    /**
     * The time shown by the component's main timer without the fractional part.
     */
    fun timerTime(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.DetailedTimerComponentState_timerTime(this.ptr)
        return result
    }
    /**
     * The fractional part of the time shown by the main timer (including the dot).
     */
    fun timerFraction(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.DetailedTimerComponentState_timerFraction(this.ptr)
        return result
    }
    /**
     * The semantic coloring information the main timer's time carries.
     */
    fun timerSemanticColor(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.DetailedTimerComponentState_timerSemanticColor(this.ptr)
        return result
    }
    /**
     * The time shown by the component's segment timer without the fractional part.
     */
    fun segmentTimerTime(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.DetailedTimerComponentState_segmentTimerTime(this.ptr)
        return result
    }
    /**
     * The fractional part of the time shown by the segment timer (including the
     * dot).
     */
    fun segmentTimerFraction(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.DetailedTimerComponentState_segmentTimerFraction(this.ptr)
        return result
    }
    /**
     * Returns whether the first comparison is visible.
     */
    fun comparison1Visible(): Boolean {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.DetailedTimerComponentState_comparison1Visible(this.ptr)
        return result
    }
    /**
     * Returns the name of the first comparison. You may not call this if the first
     * comparison is not visible.
     */
    fun comparison1Name(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.DetailedTimerComponentState_comparison1Name(this.ptr)
        return result
    }
    /**
     * Returns the time of the first comparison. You may not call this if the first
     * comparison is not visible.
     */
    fun comparison1Time(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.DetailedTimerComponentState_comparison1Time(this.ptr)
        return result
    }
    /**
     * Returns whether the second comparison is visible.
     */
    fun comparison2Visible(): Boolean {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.DetailedTimerComponentState_comparison2Visible(this.ptr)
        return result
    }
    /**
     * Returns the name of the second comparison. You may not call this if the
     * second comparison is not visible.
     */
    fun comparison2Name(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.DetailedTimerComponentState_comparison2Name(this.ptr)
        return result
    }
    /**
     * Returns the time of the second comparison. You may not call this if the
     * second comparison is not visible.
     */
    fun comparison2Time(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.DetailedTimerComponentState_comparison2Time(this.ptr)
        return result
    }
    /**
     * The segment's icon encoded as a Data URL. This value is only specified
     * whenever the icon changes. If you explicitly want to query this value,
     * remount the component. The String itself may be empty. This indicates
     * that there is no icon.
     */
    fun iconChange(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.DetailedTimerComponentState_iconChange(this.ptr)
        return result
    }
    /**
     * The name of the segment. This may be null if it's not supposed to be
     * visualized.
     */
    fun segmentName(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.DetailedTimerComponentState_segmentName(this.ptr)
        return result
    }
}