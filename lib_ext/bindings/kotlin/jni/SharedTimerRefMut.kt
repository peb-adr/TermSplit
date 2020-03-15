package livesplitcore

/**
 * A Shared Timer that can be used to share a single timer object with multiple
 * owners.
 */
open class SharedTimerRefMut internal constructor(ptr: Long) : SharedTimerRef(ptr) {
}