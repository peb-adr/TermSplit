package livesplitcore;

import com.sun.jna.*;

/**
 * The state object that describes a single segment's information to visualize.
 */
public class SplitComponentStateRef {
    Pointer ptr;
    /**
     * The amount of columns to visualize for the segment with the specified index.
     * The columns are specified from right to left. You may not provide an out of
     * bounds index. The amount of columns to visualize may differ from segment to
     * segment.
     */
    public long columnsLen(long index) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        long result = LiveSplitCoreNative.INSTANCE.SplitComponentState_columns_len(this.ptr, new NativeLong(index)).longValue();
        return result;
    }
    SplitComponentStateRef(Pointer ptr) {
        this.ptr = ptr;
    }
}