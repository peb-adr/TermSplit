package livesplitcore

/**
 * An iterator iterating over all the Run Metadata variables and their values
 * that have been specified.
 */
open class RunMetadataVariablesIter : RunMetadataVariablesIterRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.RunMetadataVariablesIter_drop(this.ptr)
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