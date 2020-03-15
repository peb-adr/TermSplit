package livesplitcore

/**
 * The Splits Component is the main component for visualizing all the split
 * times. Each segment is shown in a tabular fashion showing the segment icon,
 * segment name, the delta compared to the chosen comparison, and the split
 * time. The list provides scrolling functionality, so not every segment needs
 * to be shown all the time.
 */
open class SplitsComponent : SplitsComponentRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.SplitsComponent_drop(this.ptr)
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
        val result = Component(LiveSplitCoreNative.SplitsComponent_intoGeneric(this.ptr))
        this.ptr = 0L
        return result
    }
    companion object {
    }
    /**
     * Creates a new Splits Component.
     */
    constructor(): super(0L) {
        this.ptr = LiveSplitCoreNative.SplitsComponent_new()
    }
    internal constructor(ptr: Long) : super(ptr) {}
}