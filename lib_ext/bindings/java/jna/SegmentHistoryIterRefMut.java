package livesplitcore;

import com.sun.jna.*;

/**
 * Iterates over all the segment times of a segment and their indices.
 */
public class SegmentHistoryIterRefMut extends SegmentHistoryIterRef {
    /**
     * Accesses the next Segment History element. Returns null if there are no
     * more elements.
     */
    public SegmentHistoryElementRef next() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        SegmentHistoryElementRef result = new SegmentHistoryElementRef(LiveSplitCoreNative.INSTANCE.SegmentHistoryIter_next(this.ptr));
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    SegmentHistoryIterRefMut(Pointer ptr) {
        super(ptr);
    }
}