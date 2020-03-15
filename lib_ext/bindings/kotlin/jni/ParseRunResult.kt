package livesplitcore

/**
 * A run parsed by the Composite Parser. This contains the Run itself and
 * information about which parser parsed it.
 */
open class ParseRunResult : ParseRunResultRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.ParseRunResult_drop(this.ptr)
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
     * Moves the actual Run object out of the Result. You may not call this if the
     * Run wasn't parsed successfully.
     */
    fun unwrap(): Run {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = Run(LiveSplitCoreNative.ParseRunResult_unwrap(this.ptr))
        this.ptr = 0L
        return result
    }
    internal constructor(ptr: Long) : super(ptr) {}
}