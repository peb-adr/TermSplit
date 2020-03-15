package livesplitcore;

/**
 * Iterates over all the segment times of a segment and their indices.
 */
public class SegmentHistoryIterRef {
    long ptr;
    SegmentHistoryIterRef(long ptr) {
        this.ptr = ptr;
    }
}