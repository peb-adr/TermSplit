package livesplitcore

/**
 * The Current Comparison Component is a component that shows the name of the
 * comparison that is currently selected to be compared against.
 */
open class CurrentComparisonComponent : CurrentComparisonComponentRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.CurrentComparisonComponent_drop(this.ptr)
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
        val result = Component(LiveSplitCoreNative.CurrentComparisonComponent_intoGeneric(this.ptr))
        this.ptr = 0L
        return result
    }
    companion object {
    }
    /**
     * Creates a new Current Comparison Component.
     */
    constructor(): super(0L) {
        this.ptr = LiveSplitCoreNative.CurrentComparisonComponent_new()
    }
    internal constructor(ptr: Long) : super(ptr) {}
}