package livesplitcore;

/**
 * The state object that describes a single segment's information to visualize.
 */
public class SplitsComponentStateRef {
    long ptr;
    /**
     * Describes whether a more pronounced separator should be shown in front of
     * the last segment provided.
     */
    public boolean finalSeparatorShown() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.SplitsComponentState_finalSeparatorShown(this.ptr);
        return result;
    }
    /**
     * Returns the amount of segments to visualize.
     */
    public long len() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        long result = LiveSplitCoreNative.SplitsComponentState_len(this.ptr);
        return result;
    }
    /**
     * Returns the amount of icon changes that happened in this state object.
     */
    public long iconChangeCount() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        long result = LiveSplitCoreNative.SplitsComponentState_iconChangeCount(this.ptr);
        return result;
    }
    /**
     * Accesses the index of the segment of the icon change with the specified
     * index. This is based on the index in the run, not on the index of the
     * SplitState in the State object. The corresponding index is the index field
     * of the SplitState object. You may not provide an out of bounds index.
     */
    public long iconChangeSegmentIndex(long iconChangeIndex) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        long result = LiveSplitCoreNative.SplitsComponentState_iconChangeSegmentIndex(this.ptr, iconChangeIndex);
        return result;
    }
    /**
     * The segment's icon encoded as a Data URL of the icon change with the
     * specified index. The String itself may be empty. This indicates that there
     * is no icon. You may not provide an out of bounds index.
     */
    public String iconChangeIcon(long iconChangeIndex) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.SplitsComponentState_iconChangeIcon(this.ptr, iconChangeIndex);
        return result;
    }
    /**
     * The name of the segment with the specified index. You may not provide an out
     * of bounds index.
     */
    public String name(long index) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.SplitsComponentState_name(this.ptr, index);
        return result;
    }
    /**
     * The column's value to show for the split and column with the specified
     * index. The columns are specified from right to left. You may not provide an
     * out of bounds index.
     */
    public String columnValue(long index, long columnIndex) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.SplitsComponentState_columnValue(this.ptr, index, columnIndex);
        return result;
    }
    /**
     * The semantic coloring information the column's value carries of the segment
     * and column with the specified index. The columns are specified from right to
     * left. You may not provide an out of bounds index.
     */
    public String columnSemanticColor(long index, long columnIndex) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.SplitsComponentState_columnSemanticColor(this.ptr, index, columnIndex);
        return result;
    }
    /**
     * Describes if the segment with the specified index is the segment the active
     * attempt is currently on.
     */
    public boolean isCurrentSplit(long index) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.SplitsComponentState_isCurrentSplit(this.ptr, index);
        return result;
    }
    SplitsComponentStateRef(long ptr) {
        this.ptr = ptr;
    }
}