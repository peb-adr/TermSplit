package livesplitcore;

import com.sun.jna.*;

/**
 * Iterates over all the segment times of a segment and their indices.
 */
public class SegmentHistoryIter extends SegmentHistoryIterRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.SegmentHistoryIter_drop(this.ptr);
            ptr = Pointer.NULL;
        }
    }
    protected void finalize() throws Throwable {
        drop();
        super.finalize();
    }
    public void close() {
        drop();
    }
    SegmentHistoryIter(Pointer ptr) {
        super(ptr);
    }
}