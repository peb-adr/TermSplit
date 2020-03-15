package livesplitcore

/**
 * A Timer Write Lock allows temporary write access to a timer. Dispose this to
 * release the write lock.
 */
open class TimerWriteLockRefMut internal constructor(ptr: Long) : TimerWriteLockRef(ptr) {
    /**
     * Accesses the timer.
     */
    fun timer(): TimerRefMut {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimerRefMut(LiveSplitCoreNative.TimerWriteLock_timer(this.ptr))
        return result
    }
}