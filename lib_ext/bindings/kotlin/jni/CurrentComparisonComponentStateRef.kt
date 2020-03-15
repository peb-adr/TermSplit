package livesplitcore

/**
 * The state object describes the information to visualize for this component.
 */
open class CurrentComparisonComponentStateRef internal constructor(var ptr: Long) {
    /**
     * The label's text.
     */
    fun text(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.CurrentComparisonComponentState_text(this.ptr)
        return result
    }
    /**
     * The name of the comparison that is currently selected to be compared
     * against.
     */
    fun comparison(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.CurrentComparisonComponentState_comparison(this.ptr)
        return result
    }
}