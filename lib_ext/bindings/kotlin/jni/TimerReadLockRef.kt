package livesplitcore

/**
 * A Timer Read Lock allows temporary read access to a timer. Dispose this to
 * release the read lock.
 */
open class TimerReadLockRef internal constructor(var ptr: Long) {
    /**
     * Accesses the timer.
     */
    fun timer(): TimerRef {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimerRef(LiveSplitCoreNative.TimerReadLock_timer(this.ptr))
        return result
    }
}