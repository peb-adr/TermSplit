package livesplitcore

/**
 * The state object describes the information to visualize for this component.
 */
open class TextComponentStateRef internal constructor(var ptr: Long) {
    /**
     * Accesses the left part of the text. If the text isn't split up, an empty
     * string is returned instead.
     */
    fun left(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.TextComponentState_left(this.ptr)
        return result
    }
    /**
     * Accesses the right part of the text. If the text isn't split up, an empty
     * string is returned instead.
     */
    fun right(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.TextComponentState_right(this.ptr)
        return result
    }
    /**
     * Accesses the centered text. If the text isn't centered, an empty string is
     * returned instead.
     */
    fun center(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.TextComponentState_center(this.ptr)
        return result
    }
    /**
     * Returns whether the text is split up into a left and right part.
     */
    fun isSplit(): Boolean {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.TextComponentState_isSplit(this.ptr)
        return result
    }
}