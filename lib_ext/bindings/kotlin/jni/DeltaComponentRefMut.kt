package livesplitcore

/**
 * The Delta Component is a component that shows the how far ahead or behind
 * the current attempt is compared to the chosen comparison.
 */
open class DeltaComponentRefMut internal constructor(ptr: Long) : DeltaComponentRef(ptr) {
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
        val result = LiveSplitCoreNative.DeltaComponent_stateAsJson(this.ptr, timer.ptr, layoutSettings.ptr)
        return result
    }
    /**
     * Calculates the component's state based on the timer and the layout
     * settings provided.
     */
    fun state(timer: TimerRef, layoutSettings: GeneralLayoutSettingsRef): DeltaComponentState {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (timer.ptr == 0L) {
            throw RuntimeException()
        }
        if (layoutSettings.ptr == 0L) {
            throw RuntimeException()
        }
        val result = DeltaComponentState(LiveSplitCoreNative.DeltaComponent_state(this.ptr, timer.ptr, layoutSettings.ptr))
        return result
    }
}