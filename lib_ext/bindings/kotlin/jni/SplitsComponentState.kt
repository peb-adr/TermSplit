package livesplitcore

/**
 * The state object that describes a single segment's information to visualize.
 */
open class SplitsComponentState : SplitsComponentStateRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.SplitsComponentState_drop(this.ptr)
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