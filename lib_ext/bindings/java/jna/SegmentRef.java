package livesplitcore;

import com.sun.jna.*;

/**
 * A Segment describes a point in a speedrun that is suitable for storing a
 * split time. This stores the name of that segment, an icon, the split times
 * of different comparisons, and a history of segment times.
 */
public class SegmentRef {
    Pointer ptr;
    /**
     * Accesses the name of the segment.
     */
    public String name() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.Segment_name(this.ptr);
        return result;
    }
    /**
     * Accesses the icon of the segment encoded as a Data URL storing the image's
     * data. If the image's data is empty, this returns an empty string instead of
     * a URL.
     */
    public String icon() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.Segment_icon(this.ptr);
        return result;
    }
    /**
     * Accesses the specified comparison's time. If there's none for this
     * comparison, an empty time is being returned (but not stored in the
     * segment).
     */
    public TimeRef comparison(String comparison) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TimeRef result = new TimeRef(LiveSplitCoreNative.INSTANCE.Segment_comparison(this.ptr, comparison));
        return result;
    }
    /**
     * Accesses the split time of the Personal Best for this segment. If it
     * doesn't exist, an empty time is returned.
     */
    public TimeRef personalBestSplitTime() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TimeRef result = new TimeRef(LiveSplitCoreNative.INSTANCE.Segment_personal_best_split_time(this.ptr));
        return result;
    }
    /**
     * Accesses the Best Segment Time.
     */
    public TimeRef bestSegmentTime() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TimeRef result = new TimeRef(LiveSplitCoreNative.INSTANCE.Segment_best_segment_time(this.ptr));
        return result;
    }
    /**
     * Accesses the Segment History of this segment.
     */
    public SegmentHistoryRef segmentHistory() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        SegmentHistoryRef result = new SegmentHistoryRef(LiveSplitCoreNative.INSTANCE.Segment_segment_history(this.ptr));
        return result;
    }
    SegmentRef(Pointer ptr) {
        this.ptr = ptr;
    }
}