package livesplitcore

/**
 * The state object describes the information to visualize for this component.
 */
open class DetailedTimerComponentState : DetailedTimerComponentStateRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.DetailedTimerComponentState_drop(this.ptr)
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