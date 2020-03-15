package livesplitcore;

import com.sun.jna.*;

/**
 * The state object that describes a single segment's information to visualize.
 */
public class SplitsComponentStateRef {
    Pointer ptr;
    /**
     * Describes whether a more pronounced separator should be shown in front of
     * the last segment provided.
     */
    public boolean finalSeparatorShown() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.SplitsComponentState_final_separator_shown(this.ptr) != 0;
        return result;
    }
    /**
     * Returns the amount of segments to visualize.
     */
    public long len() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        long result = LiveSplitCoreNative.INSTANCE.SplitsComponentState_len(this.ptr).longValue();
        return result;
    }
    /**
     * Returns the amount of icon changes that happened in this state object.
     */
    public long iconChangeCount() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        long result = LiveSplitCoreNative.INSTANCE.SplitsComponentState_icon_change_count(this.ptr).longValue();
        return result;
    }
    /**
     * Accesses the index of the segment of the icon change with the specified
     * index. This is based on the index in the run, not on the index of the
     * SplitState in the State object. The corresponding index is the index field
     * of the SplitState object. You may not provide an out of bounds index.
     */
    public long iconChangeSegmentIndex(long iconChangeIndex) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        long result = LiveSplitCoreNative.INSTANCE.SplitsComponentState_icon_change_segment_index(this.ptr, new NativeLong(iconChangeIndex)).longValue();
        return result;
    }
    /**
     * The segment's icon encoded as a Data URL of the icon change with the
     * specified index. The String itself may be empty. This indicates that there
     * is no icon. You may not provide an out of bounds index.
     */
    public String iconChangeIcon(long iconChangeIndex) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.SplitsComponentState_icon_change_icon(this.ptr, new NativeLong(iconChangeIndex));
        return result;
    }
    /**
     * The name of the segment with the specified index. You may not provide an out
     * of bounds index.
     */
    public String name(long index) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.SplitsComponentState_name(this.ptr, new NativeLong(index));
        return result;
    }
    /**
     * The column's value to show for the split and column with the specified
     * index. The columns are specified from right to left. You may not provide an
     * out of bounds index.
     */
    public String columnValue(long index, long columnIndex) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.SplitsComponentState_column_value(this.ptr, new NativeLong(index), new NativeLong(columnIndex));
        return result;
    }
    /**
     * The semantic coloring information the column's value carries of the segment
     * and column with the specified index. The columns are specified from right to
     * left. You may not provide an out of bounds index.
     */
    public String columnSemanticColor(long index, long columnIndex) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.SplitsComponentState_column_semantic_color(this.ptr, new NativeLong(index), new NativeLong(columnIndex));
        return result;
    }
    /**
     * Describes if the segment with the specified index is the segment the active
     * attempt is currently on.
     */
    public boolean isCurrentSplit(long index) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.SplitsComponentState_is_current_split(this.ptr, new NativeLong(index)) != 0;
        return result;
    }
    SplitsComponentStateRef(Pointer ptr) {
        this.ptr = ptr;
    }
}