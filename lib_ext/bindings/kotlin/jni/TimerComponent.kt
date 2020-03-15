package livesplitcore

/**
 * The Timer Component is a component that shows the total time of the current
 * attempt as a digital clock. The color of the time shown is based on a how
 * well the current attempt is doing compared to the chosen comparison.
 */
open class TimerComponent : TimerComponentRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.TimerComponent_drop(this.ptr)
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
        val result = Component(LiveSplitCoreNative.TimerComponent_intoGeneric(this.ptr))
        this.ptr = 0L
        return result
    }
    companion object {
    }
    /**
     * Creates a new Timer Component.
     */
    constructor(): super(0L) {
        this.ptr = LiveSplitCoreNative.TimerComponent_new()
    }
    internal constructor(ptr: Long) : super(ptr) {}
}