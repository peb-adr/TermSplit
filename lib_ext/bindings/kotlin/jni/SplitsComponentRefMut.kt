package livesplitcore

/**
 * The Splits Component is the main component for visualizing all the split
 * times. Each segment is shown in a tabular fashion showing the segment icon,
 * segment name, the delta compared to the chosen comparison, and the split
 * time. The list provides scrolling functionality, so not every segment needs
 * to be shown all the time.
 */
open class SplitsComponentRefMut internal constructor(ptr: Long) : SplitsComponentRef(ptr) {
    /**
     * Encodes the component's state information as JSON.
     */
    fun stateAsJson(timer: TimerRef, layoutSettings: GeneralLayoutSettingsRef): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (timer.ptr == 0L) {
            throw RuntimeException()
        }
        if (layoutSettings.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.SplitsComponent_stateAsJson(this.ptr, timer.ptr, layoutSettings.ptr)
        return result
    }
    /**
     * Calculates the component's state based on the timer and layout settings
     * provided.
     */
    fun state(timer: TimerRef, layoutSettings: GeneralLayoutSettingsRef): SplitsComponentState {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (timer.ptr == 0L) {
            throw RuntimeException()
        }
        if (layoutSettings.ptr == 0L) {
            throw RuntimeException()
        }
        val result = SplitsComponentState(LiveSplitCoreNative.SplitsComponent_state(this.ptr, timer.ptr, layoutSettings.ptr))
        return result
    }
    /**
     * Scrolls up the window of the segments that are shown. Doesn't move the
     * scroll window if it reaches the top of the segments.
     */
    fun scrollUp() {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.SplitsComponent_scrollUp(this.ptr)
    }
    /**
     * Scrolls down the window of the segments that are shown. Doesn't move the
     * scroll window if it reaches the bottom of the segments.
     */
    fun scrollDown() {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.SplitsComponent_scrollDown(this.ptr)
    }
    /**
     * The amount of segments to show in the list at any given time. If this is
     * set to 0, all the segments are shown. If this is set to a number lower
     * than the total amount of segments, only a certain window of all the
     * segments is shown. This window can scroll up or down.
     */
    fun setVisualSplitCount(count: Long) {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.SplitsComponent_setVisualSplitCount(this.ptr, count)
    }
    /**
     * If there's more segments than segments that are shown, the window
     * showing the segments automatically scrolls up and down when the current
     * segment changes. This count determines the minimum number of future
     * segments to be shown in this scrolling window when it automatically
     * scrolls.
     */
    fun setSplitPreviewCount(count: Long) {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.SplitsComponent_setSplitPreviewCount(this.ptr, count)
    }
    /**
     * If not every segment is shown in the scrolling window of segments, then
     * this determines whether the final segment is always to be shown, as it
     * contains valuable information about the total duration of the chosen
     * comparison, which is often the runner's Personal Best.
     */
    fun setAlwaysShowLastSplit(alwaysShowLastSplit: Boolean) {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.SplitsComponent_setAlwaysShowLastSplit(this.ptr, alwaysShowLastSplit)
    }
    /**
     * If the last segment is to always be shown, this determines whether to
     * show a more pronounced separator in front of the last segment, if it is
     * not directly adjacent to the segment shown right before it in the
     * scrolling window.
     */
    fun setSeparatorLastSplit(separatorLastSplit: Boolean) {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.SplitsComponent_setSeparatorLastSplit(this.ptr, separatorLastSplit)
    }
}