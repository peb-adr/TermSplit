package livesplitcore

/**
 * The Title Component is a component that shows the name of the game and the
 * category that is being run. Additionally, the game icon, the attempt count,
 * and the total number of successfully finished runs can be shown.
 */
open class TitleComponentRefMut internal constructor(ptr: Long) : TitleComponentRef(ptr) {
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
        val result = LiveSplitCoreNative.TitleComponent_stateAsJson(this.ptr, timer.ptr)
        return result
    }
    /**
     * Calculates the component's state based on the timer provided.
     */
    fun state(timer: TimerRef): TitleComponentState {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (timer.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TitleComponentState(LiveSplitCoreNative.TitleComponent_state(this.ptr, timer.ptr))
        return result
    }
}