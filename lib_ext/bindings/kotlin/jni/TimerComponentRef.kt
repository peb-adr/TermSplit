package livesplitcore

/**
 * The Timer Component is a component that shows the total time of the current
 * attempt as a digital clock. The color of the time shown is based on a how
 * well the current attempt is doing compared to the chosen comparison.
 */
open class TimerComponentRef internal constructor(var ptr: Long) {
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
        val result = LiveSplitCoreNative.TimerComponent_stateAsJson(this.ptr, timer.ptr, layoutSettings.ptr)
        return result
    }
    /**
     * Calculates the component's state based on the timer and the layout
     * settings provided.
     */
    fun state(timer: TimerRef, layoutSettings: GeneralLayoutSettingsRef): TimerComponentState {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (timer.ptr == 0L) {
            throw RuntimeException()
        }
        if (layoutSettings.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimerComponentState(LiveSplitCoreNative.TimerComponent_state(this.ptr, timer.ptr, layoutSettings.ptr))
        return result
    }
}