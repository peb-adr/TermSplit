package livesplitcore

/**
 * The Total Playtime Component is a component that shows the total amount of
 * time that the current category has been played for.
 */
open class TotalPlaytimeComponentRefMut internal constructor(ptr: Long) : TotalPlaytimeComponentRef(ptr) {
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
        val result = LiveSplitCoreNative.TotalPlaytimeComponent_stateAsJson(this.ptr, timer.ptr)
        return result
    }
    /**
     * Calculates the component's state based on the timer provided.
     */
    fun state(timer: TimerRef): TotalPlaytimeComponentState {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (timer.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TotalPlaytimeComponentState(LiveSplitCoreNative.TotalPlaytimeComponent_state(this.ptr, timer.ptr))
        return result
    }
}