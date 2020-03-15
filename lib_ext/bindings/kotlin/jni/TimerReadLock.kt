package livesplitcore

/**
 * A Timer Read Lock allows temporary read access to a timer. Dispose this to
 * release the read lock.
 */
open class TimerReadLock : TimerReadLockRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.TimerReadLock_drop(this.ptr)
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