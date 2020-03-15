package livesplitcore

/**
 * An Atomic Date Time represents a UTC Date Time that tries to be as close to
 * an atomic clock as possible.
 */
open class AtomicDateTimeRef internal constructor(var ptr: Long) {
    /**
     * Represents whether the date time is actually properly derived from an
     * atomic clock. If the synchronization with the atomic clock didn't happen
     * yet or failed, this is set to false.
     */
    fun isSynchronized(): Boolean {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.AtomicDateTime_isSynchronized(this.ptr)
        return result
    }
    /**
     * Converts this atomic date time into a RFC 2822 formatted date time.
     */
    fun toRfc2822(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.AtomicDateTime_toRfc2822(this.ptr)
        return result
    }
    /**
     * Converts this atomic date time into a RFC 3339 formatted date time.
     */
    fun toRfc3339(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.AtomicDateTime_toRfc3339(this.ptr)
        return result
    }
}