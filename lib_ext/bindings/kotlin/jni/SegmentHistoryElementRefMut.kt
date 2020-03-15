package livesplitcore

/**
 * A segment time achieved for a segment. It is tagged with an index. Only
 * segment times with an index larger than 0 are considered times actually
 * achieved by the runner, while the others are artifacts of route changes and
 * similar algorithmic changes.
 */
open class SegmentHistoryElementRefMut internal constructor(ptr: Long) : SegmentHistoryElementRef(ptr) {
}