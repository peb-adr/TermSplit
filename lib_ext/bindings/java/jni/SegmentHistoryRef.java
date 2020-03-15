package livesplitcore;

/**
 * Stores the segment times achieved for a certain segment. Each segment is
 * tagged with an index. Only segment times with an index larger than 0 are
 * considered times actually achieved by the runner, while the others are
 * artifacts of route changes and similar algorithmic changes.
 */
public class SegmentHistoryRef {
    long ptr;
    /**
     * Iterates over all the segment times and their indices.
     */
    public SegmentHistoryIter iter() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        SegmentHistoryIter result = new SegmentHistoryIter(LiveSplitCoreNative.SegmentHistory_iter(this.ptr));
        return result;
    }
    SegmentHistoryRef(long ptr) {
        this.ptr = ptr;
    }
}