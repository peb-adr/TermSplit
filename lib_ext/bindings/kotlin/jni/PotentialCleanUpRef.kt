package livesplitcore

/**
 * Describes a potential clean up that could be applied. You can query a
 * message describing the details of this potential clean up. A potential clean
 * up can then be turned into an actual clean up in order to apply it to the
 * Run.
 */
open class PotentialCleanUpRef internal constructor(var ptr: Long) {
    /**
     * Accesses the message describing the potential clean up that can be applied
     * to a Run.
     */
    fun message(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.PotentialCleanUp_message(this.ptr)
        return result
    }
}