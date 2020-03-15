package livesplitcore

/**
 * The state object that describes a single segment's information to visualize.
 */
open class SplitComponentState : SplitComponentStateRefMut, AutoCloseable {
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
    internal constructor(ptr: Long) : super(ptr) {}
}