package livesplitcore

/**
 * The state object describes the information to visualize for this component.
 */
open class TotalPlaytimeComponentStateRef internal constructor(var ptr: Long) {
    /**
     * The label's text.
     */
    fun text(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.TotalPlaytimeComponentState_text(this.ptr)
        return result
    }
    /**
     * The total playtime.
     */
    fun time(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.TotalPlaytimeComponentState_time(this.ptr)
        return result
    }
}