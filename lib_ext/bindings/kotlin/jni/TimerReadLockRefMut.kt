package livesplitcore

/**
 * A Timer Read Lock allows temporary read access to a timer. Dispose this to
 * release the read lock.
 */
open class TimerReadLockRefMut internal constructor(ptr: Long) : TimerReadLockRef(ptr) {
}