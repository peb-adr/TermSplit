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
open class SumOfBestComponent : SumOfBestComponentRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.SumOfBestComponent_drop(this.ptr)
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
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    fun intoGeneric(): Component {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = Component(LiveSplitCoreNative.SumOfBestComponent_intoGeneric(this.ptr))
        this.ptr = 0L
        return result
    }
    companion object {
    }
    /**
     * Creates a new Sum of Best Segments Component.
     */
    constructor(): super(0L) {
        this.ptr = LiveSplitCoreNative.SumOfBestComponent_new()
    }
    internal constructor(ptr: Long) : super(ptr) {}
}