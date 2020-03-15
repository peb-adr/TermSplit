package livesplitcore

/**
 * An Atomic Date Time represents a UTC Date Time that tries to be as close to
 * an atomic clock as possible.
 */
open class AtomicDateTimeRefMut internal constructor(ptr: Long) : AtomicDateTimeRef(ptr) {
}