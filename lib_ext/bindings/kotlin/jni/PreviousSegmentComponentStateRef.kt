package livesplitcore

/**
 * The state object describes the information to visualize for this component.
 */
open class PreviousSegmentComponentStateRef internal constructor(var ptr: Long) {
    /**
     * The label's text.
     */
    fun text(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.PreviousSegmentComponentState_text(this.ptr)
        return result
    }
    /**
     * The delta (and possibly the possible time save).
     */
    fun time(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.PreviousSegmentComponentState_time(this.ptr)
        return result
    }
    /**
     * The semantic coloring information the delta time carries.
     */
    fun semanticColor(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.PreviousSegmentComponentState_semanticColor(this.ptr)
        return result
    }
}