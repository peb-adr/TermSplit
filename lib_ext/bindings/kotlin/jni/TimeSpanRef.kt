package livesplitcore

/**
 * A Time Span represents a certain span of time.
 */
open class TimeSpanRef internal constructor(var ptr: Long) {
    /**
     * Clones the Time Span.
     */
    fun copy(): TimeSpan {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimeSpan(LiveSplitCoreNative.TimeSpan_clone(this.ptr))
        return result
    }
    /**
     * Returns the total amount of seconds (including decimals) this Time Span
     * represents.
     */
    fun totalSeconds(): Double {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.TimeSpan_totalSeconds(this.ptr)
        return result
    }
}