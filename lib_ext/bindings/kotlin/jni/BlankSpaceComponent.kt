package livesplitcore

/**
 * The Blank Space Component is simply an empty component that doesn't show
 * anything other than a background. It mostly serves as padding between other
 * components.
 */
open class BlankSpaceComponent : BlankSpaceComponentRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.BlankSpaceComponent_drop(this.ptr)
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
        val result = Component(LiveSplitCoreNative.BlankSpaceComponent_intoGeneric(this.ptr))
        this.ptr = 0L
        return result
    }
    companion object {
    }
    /**
     * Creates a new Blank Space Component.
     */
    constructor(): super(0L) {
        this.ptr = LiveSplitCoreNative.BlankSpaceComponent_new()
    }
    internal constructor(ptr: Long) : super(ptr) {}
}