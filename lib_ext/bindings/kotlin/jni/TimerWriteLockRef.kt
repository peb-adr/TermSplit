package livesplitcore

/**
 * A Timer Write Lock allows temporary write access to a timer. Dispose this to
 * release the write lock.
 */
open class TimerWriteLockRef internal constructor(var ptr: Long) {
}