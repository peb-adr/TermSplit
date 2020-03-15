package livesplitcore;

/**
 * Iterates over all the segment times of a segment and their indices.
 */
public class SegmentHistoryIter extends SegmentHistoryIterRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.SegmentHistoryIter_drop(this.ptr);
            ptr = 0;
        }
    }
    protected void finalize() throws Throwable {
        drop();
        super.finalize();
    }
    public void close() {
        drop();
    }
    SegmentHistoryIter(long ptr) {
        super(ptr);
    }
}