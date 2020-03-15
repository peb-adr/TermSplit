package livesplitcore

/**
 * The state object describes the information to visualize for this component.
 */
open class SumOfBestComponentStateRef internal constructor(var ptr: Long) {
    /**
     * The label's text.
     */
    fun text(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.SumOfBestComponentState_text(this.ptr)
        return result
    }
    /**
     * The sum of best segments.
     */
    fun time(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.SumOfBestComponentState_time(this.ptr)
        return result
    }
}