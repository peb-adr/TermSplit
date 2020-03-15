package livesplitcore

/**
 * The state object describes the information to visualize for this component.
 */
open class PossibleTimeSaveComponentStateRef internal constructor(var ptr: Long) {
    /**
     * The label's text.
     */
    fun text(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.PossibleTimeSaveComponentState_text(this.ptr)
        return result
    }
    /**
     * The current possible time save.
     */
    fun time(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.PossibleTimeSaveComponentState_time(this.ptr)
        return result
    }
}