package livesplitcore

/**
 * An Attempt describes information about an attempt to run a specific category
 * by a specific runner in the past. Every time a new attempt is started and
 * then reset, an Attempt describing general information about it is created.
 */
open class Attempt : AttemptRefMut, AutoCloseable {
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