package livesplitcore

/**
 * A Layout allows you to combine multiple components together to visualize a
 * variety of information the runner is interested in.
 */
open class LayoutRef internal constructor(var ptr: Long) {
    /**
     * Clones the layout.
     */
    fun copy(): Layout {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = Layout(LiveSplitCoreNative.Layout_clone(this.ptr))
        return result
    }
    /**
     * Encodes the settings of the layout as JSON.
     */
    fun settingsAsJson(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.Layout_settingsAsJson(this.ptr)
        return result
    }
}