package livesplitcore

/**
 * The Separator Component is a simple component that only serves to render
 * separators between components.
 */
open class SeparatorComponent : SeparatorComponentRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.SeparatorComponent_drop(this.ptr)
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
        val result = Component(LiveSplitCoreNative.SeparatorComponent_intoGeneric(this.ptr))
        this.ptr = 0L
        return result
    }
    companion object {
    }
    /**
     * Creates a new Separator Component.
     */
    constructor(): super(0L) {
        this.ptr = LiveSplitCoreNative.SeparatorComponent_new()
    }
    internal constructor(ptr: Long) : super(ptr) {}
}