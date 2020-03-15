package livesplitcore

/**
 * A Component provides information about a run in a way that is easy to
 * visualize. This type can store any of the components provided by this crate.
 */
open class Component : ComponentRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.Component_drop(this.ptr)
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