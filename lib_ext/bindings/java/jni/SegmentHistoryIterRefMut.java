package livesplitcore;

/**
 * Iterates over all the segment times of a segment and their indices.
 */
public class SegmentHistoryIterRefMut extends SegmentHistoryIterRef {
    /**
     * Accesses the next Segment History element. Returns null if there are no
     * more elements.
     */
    public SegmentHistoryElementRef next() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        SegmentHistoryElementRef result = new SegmentHistoryElementRef(LiveSplitCoreNative.SegmentHistoryIter_next(this.ptr));
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    SegmentHistoryIterRefMut(long ptr) {
        super(ptr);
    }
}