package livesplitcore

/**
 * The Current Comparison Component is a component that shows the name of the
 * comparison that is currently selected to be compared against.
 */
open class CurrentComparisonComponentRefMut internal constructor(ptr: Long) : CurrentComparisonComponentRef(ptr) {
    /**
     * Encodes the component's state information as JSON.
     */
    fun stateAsJson(timer: TimerRef): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (timer.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.CurrentComparisonComponent_stateAsJson(this.ptr, timer.ptr)
        return result
    }
    /**
     * Calculates the component's state based on the timer provided.
     */
    fun state(timer: TimerRef): CurrentComparisonComponentState {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (timer.ptr == 0L) {
            throw RuntimeException()
        }
        val result = CurrentComparisonComponentState(LiveSplitCoreNative.CurrentComparisonComponent_state(this.ptr, timer.ptr))
        return result
    }
}