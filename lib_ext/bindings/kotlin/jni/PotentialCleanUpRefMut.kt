package livesplitcore

/**
 * Describes a potential clean up that could be applied. You can query a
 * message describing the details of this potential clean up. A potential clean
 * up can then be turned into an actual clean up in order to apply it to the
 * Run.
 */
open class PotentialCleanUpRefMut internal constructor(ptr: Long) : PotentialCleanUpRef(ptr) {
}