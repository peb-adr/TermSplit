package livesplitcore

/**
 * The Blank Space Component is simply an empty component that doesn't show
 * anything other than a background. It mostly serves as padding between other
 * components.
 */
open class BlankSpaceComponentRefMut internal constructor(ptr: Long) : BlankSpaceComponentRef(ptr) {
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
        val result = LiveSplitCoreNative.BlankSpaceComponent_stateAsJson(this.ptr, timer.ptr)
        return result
    }
    /**
     * Calculates the component's state based on the timer provided.
     */
    fun state(timer: TimerRef): BlankSpaceComponentState {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (timer.ptr == 0L) {
            throw RuntimeException()
        }
        val result = BlankSpaceComponentState(LiveSplitCoreNative.BlankSpaceComponent_state(this.ptr, timer.ptr))
        return result
    }
}