package livesplitcore

/**
 * The state object describes the information to visualize for this component.
 */
open class CurrentPaceComponentStateRef internal constructor(var ptr: Long) {
    /**
     * The label's text.
     */
    fun text(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.CurrentPaceComponentState_text(this.ptr)
        return result
    }
    /**
     * The current pace.
     */
    fun time(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.CurrentPaceComponentState_time(this.ptr)
        return result
    }
}