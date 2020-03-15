package livesplitcore

/**
 * The Text Component simply visualizes any given text. This can either be a
 * single centered text, or split up into a left and right text, which is
 * suitable for a situation where you have a label and a value.
 */
open class TextComponent : TextComponentRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.TextComponent_drop(this.ptr)
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
        val result = Component(LiveSplitCoreNative.TextComponent_intoGeneric(this.ptr))
        this.ptr = 0L
        return result
    }
    companion object {
    }
    /**
     * Creates a new Text Component.
     */
    constructor(): super(0L) {
        this.ptr = LiveSplitCoreNative.TextComponent_new()
    }
    internal constructor(ptr: Long) : super(ptr) {}
}