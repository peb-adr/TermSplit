package livesplitcore

/**
 * A Segment describes a point in a speedrun that is suitable for storing a
 * split time. This stores the name of that segment, an icon, the split times
 * of different comparisons, and a history of segment times.
 */
open class Segment : SegmentRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.Segment_drop(this.ptr)
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
    }
    /**
     * Creates a new Segment with the name given.
     */
    constructor(name: String): super(0L) {
        this.ptr = LiveSplitCoreNative.Segment_new(name)
    }
    internal constructor(ptr: Long) : super(ptr) {}
}