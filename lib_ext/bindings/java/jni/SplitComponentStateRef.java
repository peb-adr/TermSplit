package livesplitcore;

/**
 * The state object that describes a single segment's information to visualize.
 */
public class SplitComponentStateRef {
    long ptr;
    /**
     * The amount of columns to visualize for the segment with the specified index.
     * The columns are specified from right to left. You may not provide an out of
     * bounds index. The amount of columns to visualize may differ from segment to
     * segment.
     */
    public long columnsLen(long index) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        long result = LiveSplitCoreNative.SplitComponentState_columnsLen(this.ptr, index);
        return result;
    }
    SplitComponentStateRef(long ptr) {
        this.ptr = ptr;
    }
}