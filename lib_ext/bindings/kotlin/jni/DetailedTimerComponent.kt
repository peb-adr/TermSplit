package livesplitcore

/**
 * The Detailed Timer Component is a component that shows two timers, one for
 * the total time of the current attempt and one showing the time of just the
 * current segment. Other information, like segment times of up to two
 * comparisons, the segment icon, and the segment's name, can also be shown.
 */
open class DetailedTimerComponent : DetailedTimerComponentRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.DetailedTimerComponent_drop(this.ptr)
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
        val result = Component(LiveSplitCoreNative.DetailedTimerComponent_intoGeneric(this.ptr))
        this.ptr = 0L
        return result
    }
    companion object {
    }
    /**
     * Creates a new Detailed Timer Component.
     */
    constructor(): super(0L) {
        this.ptr = LiveSplitCoreNative.DetailedTimerComponent_new()
    }
    internal constructor(ptr: Long) : super(ptr) {}
}