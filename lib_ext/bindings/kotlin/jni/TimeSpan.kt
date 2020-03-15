package livesplitcore

/**
 * A Time Span represents a certain span of time.
 */
open class TimeSpan : TimeSpanRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.TimeSpan_drop(this.ptr)
            ptr = 0
        }
    }
    protected fun finalize() {
        drop()
    }
    override fun close() {
        drop()
    }
    companion object {
    /**
     * Creates a new Time Span from a given amount of seconds.
     */
    fun fromSeconds(seconds: Double): TimeSpan {
        val result = TimeSpan(LiveSplitCoreNative.TimeSpan_fromSeconds(seconds))
        return result
    }
    /**
     * Parses a Time Span from a string. Returns null if the time can't be
     * parsed.
     */
    fun parse(text: String): TimeSpan? {
        val result = TimeSpan(LiveSplitCoreNative.TimeSpan_parse(text))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    }
    internal constructor(ptr: Long) : super(ptr) {}
}