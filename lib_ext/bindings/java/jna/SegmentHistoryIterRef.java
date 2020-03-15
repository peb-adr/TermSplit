package livesplitcore;

import com.sun.jna.*;

/**
 * Iterates over all the segment times of a segment and their indices.
 */
public class SegmentHistoryIterRef {
    Pointer ptr;
    SegmentHistoryIterRef(Pointer ptr) {
        this.ptr = ptr;
    }
}