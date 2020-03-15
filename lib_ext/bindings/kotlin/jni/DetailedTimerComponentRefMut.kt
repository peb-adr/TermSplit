package livesplitcore

/**
 * The Detailed Timer Component is a component that shows two timers, one for
 * the total time of the current attempt and one showing the time of just the
 * current segment. Other information, like segment times of up to two
 * comparisons, the segment icon, and the segment's name, can also be shown.
 */
open class DetailedTimerComponentRefMut internal constructor(ptr: Long) : DetailedTimerComponentRef(ptr) {
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
        val result = LiveSplitCoreNative.DetailedTimerComponent_stateAsJson(this.ptr, timer.ptr, layoutSettings.ptr)
        return result
    }
    /**
     * Calculates the component's state based on the timer and layout settings
     * provided.
     */
    fun state(timer: TimerRef, layoutSettings: GeneralLayoutSettingsRef): DetailedTimerComponentState {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (timer.ptr == 0L) {
            throw RuntimeException()
        }
        if (layoutSettings.ptr == 0L) {
            throw RuntimeException()
        }
        val result = DetailedTimerComponentState(LiveSplitCoreNative.DetailedTimerComponent_state(this.ptr, timer.ptr, layoutSettings.ptr))
        return result
    }
}