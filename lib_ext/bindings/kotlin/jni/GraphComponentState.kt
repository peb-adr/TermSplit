package livesplitcore

/**
 * The state object describes the information to visualize for this component.
 * All the coordinates are in the range 0..1.
 */
open class GraphComponentState : GraphComponentStateRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.GraphComponentState_drop(this.ptr)
            ptr = 0
        }
    }
    protected fun finalize() {
        drop()
    }
    override fun close() {
        drop()
    }
    internal constructor(ptr: Long) : super(ptr) {}
}