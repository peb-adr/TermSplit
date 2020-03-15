package livesplitcore

/**
 * Stores the segment times achieved for a certain segment. Each segment is
 * tagged with an index. Only segment times with an index larger than 0 are
 * considered times actually achieved by the runner, while the others are
 * artifacts of route changes and similar algorithmic changes.
 */
open class SegmentHistoryRef internal constructor(var ptr: Long) {
    /**
     * Iterates over all the segment times and their indices.
     */
    fun iter(): SegmentHistoryIter {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = SegmentHistoryIter(LiveSplitCoreNative.SegmentHistory_iter(this.ptr))
        return result
    }
}