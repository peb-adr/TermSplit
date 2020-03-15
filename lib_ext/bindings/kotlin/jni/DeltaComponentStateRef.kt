package livesplitcore

/**
 * The state object describes the information to visualize for this component.
 */
open class DeltaComponentStateRef internal constructor(var ptr: Long) {
    /**
     * The label's text.
     */
    fun text(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.DeltaComponentState_text(this.ptr)
        return result
    }
    /**
     * The delta.
     */
    fun time(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.DeltaComponentState_time(this.ptr)
        return result
    }
    /**
     * The semantic coloring information the delta time carries.
     */
    fun semanticColor(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.DeltaComponentState_semanticColor(this.ptr)
        return result
    }
}