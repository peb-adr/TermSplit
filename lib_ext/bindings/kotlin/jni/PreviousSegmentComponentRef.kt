package livesplitcore

/**
 * The Previous Segment Component is a component that shows how much time was
 * saved or lost during the previous segment based on the chosen comparison.
 * Additionally, the potential time save for the previous segment can be
 * displayed. This component switches to a `Live Segment` view that shows
 * active time loss whenever the runner is losing time on the current segment.
 */
open class PreviousSegmentComponentRef internal constructor(var ptr: Long) {
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
        val result = LiveSplitCoreNative.PreviousSegmentComponent_stateAsJson(this.ptr, timer.ptr, layoutSettings.ptr)
        return result
    }
    /**
     * Calculates the component's state based on the timer and the layout
     * settings provided.
     */
    fun state(timer: TimerRef, layoutSettings: GeneralLayoutSettingsRef): PreviousSegmentComponentState {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (timer.ptr == 0L) {
            throw RuntimeException()
        }
        if (layoutSettings.ptr == 0L) {
            throw RuntimeException()
        }
        val result = PreviousSegmentComponentState(LiveSplitCoreNative.PreviousSegmentComponent_state(this.ptr, timer.ptr, layoutSettings.ptr))
        return result
    }
}