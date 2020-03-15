package livesplitcore;

import com.sun.jna.*;

/**
 * A segment time achieved for a segment. It is tagged with an index. Only
 * segment times with an index larger than 0 are considered times actually
 * achieved by the runner, while the others are artifacts of route changes and
 * similar algorithmic changes.
 */
public class SegmentHistoryElementRef {
    Pointer ptr;
    /**
     * Accesses the index of the segment history element.
     */
    public int index() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        int result = LiveSplitCoreNative.INSTANCE.SegmentHistoryElement_index(this.ptr);
        return result;
    }
    /**
     * Accesses the segment time of the segment history element.
     */
    public TimeRef time() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TimeRef result = new TimeRef(LiveSplitCoreNative.INSTANCE.SegmentHistoryElement_time(this.ptr));
        return result;
    }
    SegmentHistoryElementRef(Pointer ptr) {
        this.ptr = ptr;
    }
}