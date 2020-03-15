package livesplitcore

/**
 * The Sum of Best Segments Component shows the fastest possible time to
 * complete a run of this category, based on information collected from all the
 * previous attempts. This often matches up with the sum of the best segment
 * times of all the segments, but that may not always be the case, as skipped
 * segments may introduce combined segments that may be faster than the actual
 * sum of their best segment times. The name is therefore a bit misleading, but
 * sticks around for historical reasons.
 */
open class SumOfBestComponentRef internal constructor(var ptr: Long) {
    /**
     * Encodes the component's state information as JSON.
     */
    fun stateAsJson(timer: TimerRef): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (timer.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.SumOfBestComponent_stateAsJson(this.ptr, timer.ptr)
        return result
    }
    /**
     * Calculates the component's state based on the timer provided.
     */
    fun state(timer: TimerRef): SumOfBestComponentState {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (timer.ptr == 0L) {
            throw RuntimeException()
        }
        val result = SumOfBestComponentState(LiveSplitCoreNative.SumOfBestComponent_state(this.ptr, timer.ptr))
        return result
    }
}