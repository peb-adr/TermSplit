package livesplitcore

/**
 * A Timer provides all the capabilities necessary for doing speedrun attempts.
 */
open class Timer : TimerRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.Timer_drop(this.ptr)
            ptr = 0
        }
    }
    protected fun finalize() {
        drop()
    }
    override fun close() {
        drop()
    }
    /**
     * Consumes the Timer and creates a Shared Timer that can be shared across
     * multiple threads with multiple owners.
     */
    fun intoShared(): SharedTimer {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = SharedTimer(LiveSplitCoreNative.Timer_intoShared(this.ptr))
        this.ptr = 0L
        return result
    }
    /**
     * Takes out the Run from the Timer and resets the current attempt if there
     * is one in progress. If the splits are to be updated, all the information
     * of the current attempt is stored in the Run's history. Otherwise the
     * current attempt's information is discarded.
     */
    fun intoRun(updateSplits: Boolean): Run {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = Run(LiveSplitCoreNative.Timer_intoRun(this.ptr, updateSplits))
        this.ptr = 0L
        return result
    }
    companion object {
    /**
     * Creates a new Timer based on a Run object storing all the information
     * about the splits. The Run object needs to have at least one segment, so
     * that the Timer can store the final time. If a Run object with no
     * segments is provided, the Timer creation fails and null is returned.
     */
    fun create(run: Run): Timer? {
        if (run.ptr == 0L) {
            throw RuntimeException()
        }
        val result = Timer(LiveSplitCoreNative.Timer_new(run.ptr))
        run.ptr = 0L
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    }
    internal constructor(ptr: Long) : super(ptr) {}
}