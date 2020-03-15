package livesplitcore

/**
 * A Shared Timer that can be used to share a single timer object with multiple
 * owners.
 */
open class SharedTimer : SharedTimerRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.SharedTimer_drop(this.ptr)
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