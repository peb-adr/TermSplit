package livesplitcore

/**
 * The analysis module provides a variety of functions for calculating
 * information about runs.
 */
open class Analysis : AnalysisRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
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
     * Calculates the Sum of Best Segments for the timing method provided. This is
     * the fastest time possible to complete a run of a category, based on
     * information collected from all the previous attempts. This often matches up
     * with the sum of the best segment times of all the segments, but that may not
     * always be the case, as skipped segments may introduce combined segments that
     * may be faster than the actual sum of their best segment times. The name is
     * therefore a bit misleading, but sticks around for historical reasons. You
     * can choose to do a simple calculation instead, which excludes the Segment
     * History from the calculation process. If there's an active attempt, you can
     * choose to take it into account as well. Can return null.
     */
    fun calculateSumOfBest(run: RunRef, simpleCalculation: Boolean, useCurrentRun: Boolean, method: Byte): TimeSpan? {
        if (run.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimeSpan(LiveSplitCoreNative.Analysis_calculateSumOfBest(run.ptr, simpleCalculation, useCurrentRun, method))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    /**
     * Calculates the total playtime of the passed Run.
     */
    fun calculateTotalPlaytimeForRun(run: RunRef): TimeSpan {
        if (run.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimeSpan(LiveSplitCoreNative.Analysis_calculateTotalPlaytimeForRun(run.ptr))
        return result
    }
    /**
     * Calculates the total playtime of the passed Timer.
     */
    fun calculateTotalPlaytimeForTimer(timer: TimerRef): TimeSpan {
        if (timer.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimeSpan(LiveSplitCoreNative.Analysis_calculateTotalPlaytimeForTimer(timer.ptr))
        return result
    }
    }
    internal constructor(ptr: Long) : super(ptr) {}
}