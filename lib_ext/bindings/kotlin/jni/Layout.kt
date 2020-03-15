package livesplitcore

/**
 * A Layout allows you to combine multiple components together to visualize a
 * variety of information the runner is interested in.
 */
open class Layout : LayoutRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.Layout_drop(this.ptr)
            ptr = 0
        }
    }
    protected fun finalize() {
        drop()
    }
    override fun close() {
        drop()
    }
    companion object {
    /**
     * Creates a new default layout that contains a default set of components
     * in order to provide a good default layout for runners. Which components
     * are provided by this and how they are configured may change in the
     * future.
     */
    fun defaultLayout(): Layout {
        val result = Layout(LiveSplitCoreNative.Layout_defaultLayout())
        return result
    }
    /**
     * Parses a layout from the given JSON description of its settings. null is
     * returned if it couldn't be parsed.
     */
    fun parseJson(settings: String): Layout? {
        val result = Layout(LiveSplitCoreNative.Layout_parseJson(settings))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    /**
     * Parses a layout saved by the original LiveSplit. This is lossy, as not
     * everything can be converted completely. null is returned if it couldn't be
     * parsed at all.
     */
    fun parseOriginalLivesplit(data: Long, length: Long): Layout? {
        val result = Layout(LiveSplitCoreNative.Layout_parseOriginalLivesplit(data, length))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    }
    /**
     * Creates a new empty layout with no components.
     */
    constructor(): super(0L) {
        this.ptr = LiveSplitCoreNative.Layout_new()
    }
    internal constructor(ptr: Long) : super(ptr) {}
}