package livesplitcore

/**
 * The Title Component is a component that shows the name of the game and the
 * category that is being run. Additionally, the game icon, the attempt count,
 * and the total number of successfully finished runs can be shown.
 */
open class TitleComponent : TitleComponentRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.TitleComponent_drop(this.ptr)
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
        val result = Component(LiveSplitCoreNative.TitleComponent_intoGeneric(this.ptr))
        this.ptr = 0L
        return result
    }
    companion object {
    }
    /**
     * Creates a new Title Component.
     */
    constructor(): super(0L) {
        this.ptr = LiveSplitCoreNative.TitleComponent_new()
    }
    internal constructor(ptr: Long) : super(ptr) {}
}