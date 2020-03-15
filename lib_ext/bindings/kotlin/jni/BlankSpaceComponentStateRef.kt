package livesplitcore

/**
 * The state object describes the information to visualize for this component.
 */
open class BlankSpaceComponentStateRef internal constructor(var ptr: Long) {
    /**
     * The size of the component.
     */
    fun size(): Int {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.BlankSpaceComponentState_size(this.ptr)
        return result
    }
}