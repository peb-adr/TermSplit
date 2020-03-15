package livesplitcore

/**
 * An Attempt describes information about an attempt to run a specific category
 * by a specific runner in the past. Every time a new attempt is started and
 * then reset, an Attempt describing general information about it is created.
 */
open class AttemptRef internal constructor(var ptr: Long) {
    /**
     * Accesses the unique index of the attempt. This index is unique for the
     * Run, not for all of them.
     */
    fun index(): Int {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.Attempt_index(this.ptr)
        return result
    }
    /**
     * Accesses the split time of the last segment. If the attempt got reset
     * early and didn't finish, this may be empty.
     */
    fun time(): TimeRef {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimeRef(LiveSplitCoreNative.Attempt_time(this.ptr))
        return result
    }
    /**
     * Accesses the amount of time the attempt has been paused for. If it is not
     * known, this returns null. This means that it may not necessarily be
     * possible to differentiate whether a Run has not been paused or it simply
     * wasn't stored.
     */
    fun pauseTime(): TimeSpanRef? {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimeSpanRef(LiveSplitCoreNative.Attempt_pauseTime(this.ptr))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    /**
     * Accesses the point in time the attempt was started at. This returns null
     * if this information is not known.
     */
    fun started(): AtomicDateTime? {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = AtomicDateTime(LiveSplitCoreNative.Attempt_started(this.ptr))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    /**
     * Accesses the point in time the attempt was ended at. This returns null if
     * this information is not known.
     */
    fun ended(): AtomicDateTime? {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = AtomicDateTime(LiveSplitCoreNative.Attempt_ended(this.ptr))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
}