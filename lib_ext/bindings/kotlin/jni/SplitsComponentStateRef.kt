package livesplitcore

/**
 * The state object that describes a single segment's information to visualize.
 */
open class SplitsComponentStateRef internal constructor(var ptr: Long) {
    /**
     * Describes whether a more pronounced separator should be shown in front of
     * the last segment provided.
     */
    fun finalSeparatorShown(): Boolean {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.SplitsComponentState_finalSeparatorShown(this.ptr)
        return result
    }
    /**
     * Returns the amount of segments to visualize.
     */
    fun len(): Long {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.SplitsComponentState_len(this.ptr)
        return result
    }
    /**
     * Returns the amount of icon changes that happened in this state object.
     */
    fun iconChangeCount(): Long {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.SplitsComponentState_iconChangeCount(this.ptr)
        return result
    }
    /**
     * Accesses the index of the segment of the icon change with the specified
     * index. This is based on the index in the run, not on the index of the
     * SplitState in the State object. The corresponding index is the index field
     * of the SplitState object. You may not provide an out of bounds index.
     */
    fun iconChangeSegmentIndex(iconChangeIndex: Long): Long {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.SplitsComponentState_iconChangeSegmentIndex(this.ptr, iconChangeIndex)
        return result
    }
    /**
     * The segment's icon encoded as a Data URL of the icon change with the
     * specified index. The String itself may be empty. This indicates that there
     * is no icon. You may not provide an out of bounds index.
     */
    fun iconChangeIcon(iconChangeIndex: Long): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.SplitsComponentState_iconChangeIcon(this.ptr, iconChangeIndex)
        return result
    }
    /**
     * The name of the segment with the specified index. You may not provide an out
     * of bounds index.
     */
    fun name(index: Long): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.SplitsComponentState_name(this.ptr, index)
        return result
    }
    /**
     * The column's value to show for the split and column with the specified
     * index. The columns are specified from right to left. You may not provide an
     * out of bounds index.
     */
    fun columnValue(index: Long, columnIndex: Long): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.SplitsComponentState_columnValue(this.ptr, index, columnIndex)
        return result
    }
    /**
     * The semantic coloring information the column's value carries of the segment
     * and column with the specified index. The columns are specified from right to
     * left. You may not provide an out of bounds index.
     */
    fun columnSemanticColor(index: Long, columnIndex: Long): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.SplitsComponentState_columnSemanticColor(this.ptr, index, columnIndex)
        return result
    }
    /**
     * Describes if the segment with the specified index is the segment the active
     * attempt is currently on.
     */
    fun isCurrentSplit(index: Long): Boolean {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.SplitsComponentState_isCurrentSplit(this.ptr, index)
        return result
    }
}