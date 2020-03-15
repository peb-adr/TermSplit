package livesplitcore

/**
 * The Layout Editor allows modifying Layouts while ensuring all the different
 * invariants of the Layout objects are upheld no matter what kind of
 * operations are being applied. It provides the current state of the editor as
 * state objects that can be visualized by any kind of User Interface.
 */
open class LayoutEditorRef internal constructor(var ptr: Long) {
    /**
     * Encodes the Layout Editor's state as JSON in order to visualize it.
     */
    fun stateAsJson(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.LayoutEditor_stateAsJson(this.ptr)
        return result
    }
}