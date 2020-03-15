package livesplitcore

/**
 * The Total Playtime Component is a component that shows the total amount of
 * time that the current category has been played for.
 */
open class TotalPlaytimeComponent : TotalPlaytimeComponentRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.TotalPlaytimeComponent_drop(this.ptr)
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
        val result = Component(LiveSplitCoreNative.TotalPlaytimeComponent_intoGeneric(this.ptr))
        this.ptr = 0L
        return result
    }
    companion object {
    }
    /**
     * Creates a new Total Playtime Component.
     */
    constructor(): super(0L) {
        this.ptr = LiveSplitCoreNative.TotalPlaytimeComponent_new()
    }
    internal constructor(ptr: Long) : super(ptr) {}
}