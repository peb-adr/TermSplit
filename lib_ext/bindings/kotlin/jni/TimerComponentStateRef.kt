package livesplitcore

/**
 * The state object describes the information to visualize for this component.
 */
open class TimerComponentStateRef internal constructor(var ptr: Long) {
    /**
     * The time shown by the component without the fractional part.
     */
    fun time(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.TimerComponentState_time(this.ptr)
        return result
    }
    /**
     * The fractional part of the time shown (including the dot).
     */
    fun fraction(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.TimerComponentState_fraction(this.ptr)
        return result
    }
    /**
     * The semantic coloring information the time carries.
     */
    fun semanticColor(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.TimerComponentState_semanticColor(this.ptr)
        return result
    }
}