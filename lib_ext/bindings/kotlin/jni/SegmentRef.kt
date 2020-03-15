package livesplitcore

/**
 * A Segment describes a point in a speedrun that is suitable for storing a
 * split time. This stores the name of that segment, an icon, the split times
 * of different comparisons, and a history of segment times.
 */
open class SegmentRef internal constructor(var ptr: Long) {
    /**
     * Accesses the name of the segment.
     */
    fun name(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.Segment_name(this.ptr)
        return result
    }
    /**
     * Accesses the icon of the segment encoded as a Data URL storing the image's
     * data. If the image's data is empty, this returns an empty string instead of
     * a URL.
     */
    fun icon(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.Segment_icon(this.ptr)
        return result
    }
    /**
     * Accesses the specified comparison's time. If there's none for this
     * comparison, an empty time is being returned (but not stored in the
     * segment).
     */
    fun comparison(comparison: String): TimeRef {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimeRef(LiveSplitCoreNative.Segment_comparison(this.ptr, comparison))
        return result
    }
    /**
     * Accesses the split time of the Personal Best for this segment. If it
     * doesn't exist, an empty time is returned.
     */
    fun personalBestSplitTime(): TimeRef {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimeRef(LiveSplitCoreNative.Segment_personalBestSplitTime(this.ptr))
        return result
    }
    /**
     * Accesses the Best Segment Time.
     */
    fun bestSegmentTime(): TimeRef {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimeRef(LiveSplitCoreNative.Segment_bestSegmentTime(this.ptr))
        return result
    }
    /**
     * Accesses the Segment History of this segment.
     */
    fun segmentHistory(): SegmentHistoryRef {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = SegmentHistoryRef(LiveSplitCoreNative.Segment_segmentHistory(this.ptr))
        return result
    }
}