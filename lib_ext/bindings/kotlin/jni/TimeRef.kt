package livesplitcore

/**
 * A time that can store a Real Time and a Game Time. Both of them are
 * optional.
 */
open class TimeRef internal constructor(var ptr: Long) {
    /**
     * Clones the time.
     */
    fun copy(): Time {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = Time(LiveSplitCoreNative.Time_clone(this.ptr))
        return result
    }
    /**
     * The Real Time value. This may be null if this time has no Real Time value.
     */
    fun realTime(): TimeSpanRef? {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimeSpanRef(LiveSplitCoreNative.Time_realTime(this.ptr))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    /**
     * The Game Time value. This may be null if this time has no Game Time value.
     */
    fun gameTime(): TimeSpanRef? {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimeSpanRef(LiveSplitCoreNative.Time_gameTime(this.ptr))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    /**
     * Access the time's value for the timing method specified.
     */
    fun index(timingMethod: Byte): TimeSpanRef? {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimeSpanRef(LiveSplitCoreNative.Time_index(this.ptr, timingMethod))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
}