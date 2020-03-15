package livesplitcore

/**
 * The Run Metadata stores additional information about a run, like the
 * platform and region of the game. All of this information is optional.
 */
open class RunMetadata : RunMetadataRefMut, AutoCloseable {
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