package livesplitcore

/**
 * Iterates over all the segment times of a segment and their indices.
 */
open class SegmentHistoryIterRefMut internal constructor(ptr: Long) : SegmentHistoryIterRef(ptr) {
    /**
     * Accesses the next Segment History element. Returns null if there are no
     * more elements.
     */
    fun next(): SegmentHistoryElementRef? {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = SegmentHistoryElementRef(LiveSplitCoreNative.SegmentHistoryIter_next(this.ptr))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
}