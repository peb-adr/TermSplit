package livesplitcore

/**
 * Stores the segment times achieved for a certain segment. Each segment is
 * tagged with an index. Only segment times with an index larger than 0 are
 * considered times actually achieved by the runner, while the others are
 * artifacts of route changes and similar algorithmic changes.
 */
open class SegmentHistoryRefMut internal constructor(ptr: Long) : SegmentHistoryRef(ptr) {
}