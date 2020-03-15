package livesplitcore

/**
 * A segment time achieved for a segment. It is tagged with an index. Only
 * segment times with an index larger than 0 are considered times actually
 * achieved by the runner, while the others are artifacts of route changes and
 * similar algorithmic changes.
 */
open class SegmentHistoryElementRef internal constructor(var ptr: Long) {
    /**
     * Accesses the index of the segment history element.
     */
    fun index(): Int {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.SegmentHistoryElement_index(this.ptr)
        return result
    }
    /**
     * Accesses the segment time of the segment history element.
     */
    fun time(): TimeRef {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimeRef(LiveSplitCoreNative.SegmentHistoryElement_time(this.ptr))
        return result
    }
}