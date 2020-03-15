package livesplitcore

/**
 * An Attempt describes information about an attempt to run a specific category
 * by a specific runner in the past. Every time a new attempt is started and
 * then reset, an Attempt describing general information about it is created.
 */
open class AttemptRefMut internal constructor(ptr: Long) : AttemptRef(ptr) {
}