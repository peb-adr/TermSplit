package livesplitcore

/**
 * The Layout Editor allows modifying Layouts while ensuring all the different
 * invariants of the Layout objects are upheld no matter what kind of
 * operations are being applied. It provides the current state of the editor as
 * state objects that can be visualized by any kind of User Interface.
 */
open class LayoutEditor : LayoutEditorRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
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
     * Closes the Layout Editor and gives back access to the modified Layout. In
     * case you want to implement a Cancel Button, just dispose the Layout object
     * you get here.
     */
    fun finish(): Layout {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = Layout(LiveSplitCoreNative.LayoutEditor_close(this.ptr))
        this.ptr = 0L
        return result
    }
    companion object {
    /**
     * Creates a new Layout Editor that modifies the Layout provided. Creation of
     * the Layout Editor fails when a Layout with no components is provided. In
     * that case null is returned instead.
     */
    fun create(layout: Layout): LayoutEditor? {
        if (layout.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LayoutEditor(LiveSplitCoreNative.LayoutEditor_new(layout.ptr))
        layout.ptr = 0L
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    }
    internal constructor(ptr: Long) : super(ptr) {}
}