package livesplitcore

/**
 * The state object that describes a single segment's information to visualize.
 */
open class SplitComponentStateRef internal constructor(var ptr: Long) {
    /**
     * The amount of columns to visualize for the segment with the specified index.
     * The columns are specified from right to left. You may not provide an out of
     * bounds index. The amount of columns to visualize may differ from segment to
     * segment.
     */
    fun columnsLen(index: Long): Long {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.SplitComponentState_columnsLen(this.ptr, index)
        return result
    }
}