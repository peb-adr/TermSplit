package livesplitcore

/**
 * Iterates over all the segment times of a segment and their indices.
 */
open class SegmentHistoryIter : SegmentHistoryIterRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.SegmentHistoryIter_drop(this.ptr)
            ptr = 0
        }
    }
    protected fun finalize() {
        drop()
    }
    override fun close() {
        drop()
    }
    internal constructor(ptr: Long) : super(ptr) {}
}