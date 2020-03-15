package livesplitcore

/**
 * A Shared Timer that can be used to share a single timer object with multiple
 * owners.
 */
open class SharedTimerRef internal constructor(var ptr: Long) {
    /**
     * Creates a new shared timer handle that shares the same timer. The inner
     * timer object only gets disposed when the final handle gets disposed.
     */
    fun share(): SharedTimer {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = SharedTimer(LiveSplitCoreNative.SharedTimer_share(this.ptr))
        return result
    }
    /**
     * Requests read access to the timer that is being shared. This blocks the
     * thread as long as there is an active write lock. Dispose the read lock when
     * you are done using the timer.
     */
    fun read(): TimerReadLock {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimerReadLock(LiveSplitCoreNative.SharedTimer_read(this.ptr))
        return result
    }
    /**
     * Requests write access to the timer that is being shared. This blocks the
     * thread as long as there are active write or read locks. Dispose the write
     * lock when you are done using the timer.
     */
    fun write(): TimerWriteLock {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimerWriteLock(LiveSplitCoreNative.SharedTimer_write(this.ptr))
        return result
    }
    /**
     * Replaces the timer that is being shared by the timer provided. This blocks
     * the thread as long as there are active write or read locks. Everyone who is
     * sharing the old timer will share the provided timer after successful
     * completion.
     */
    fun replaceInner(timer: Timer) {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (timer.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.SharedTimer_replaceInner(this.ptr, timer.ptr)
        timer.ptr = 0L
    }
    fun readWith(action: (TimerRef) -> Unit) {
        val lock = read()!!
        lock.use { lock ->
            action(lock.timer()!!)
        }
    }
    fun writeWith(action: (TimerRefMut) -> Unit) {
        val lock = write()!!
        lock.use { lock ->
            action(lock.timer()!!)
        }
    }
}