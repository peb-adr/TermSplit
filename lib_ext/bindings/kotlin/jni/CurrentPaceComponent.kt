package livesplitcore

/**
 * The Current Pace Component is a component that shows a prediction of the
 * current attempt's final time, if the current attempt's pace matches the
 * chosen comparison for the remainder of the run.
 */
open class CurrentPaceComponent : CurrentPaceComponentRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.CurrentPaceComponent_drop(this.ptr)
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
        val result = Component(LiveSplitCoreNative.CurrentPaceComponent_intoGeneric(this.ptr))
        this.ptr = 0L
        return result
    }
    companion object {
    }
    /**
     * Creates a new Current Pace Component.
     */
    constructor(): super(0L) {
        this.ptr = LiveSplitCoreNative.CurrentPaceComponent_new()
    }
    internal constructor(ptr: Long) : super(ptr) {}
}