package livesplitcore

/**
 * The Text Component simply visualizes any given text. This can either be a
 * single centered text, or split up into a left and right text, which is
 * suitable for a situation where you have a label and a value.
 */
open class TextComponentRef internal constructor(var ptr: Long) {
    /**
     * Encodes the component's state information as JSON.
     */
    fun stateAsJson(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.TextComponent_stateAsJson(this.ptr)
        return result
    }
    /**
     * Calculates the component's state.
     */
    fun state(): TextComponentState {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TextComponentState(LiveSplitCoreNative.TextComponent_state(this.ptr))
        return result
    }
}