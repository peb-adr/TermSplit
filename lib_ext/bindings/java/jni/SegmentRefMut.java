package livesplitcore;

/**
 * A Segment describes a point in a speedrun that is suitable for storing a
 * split time. This stores the name of that segment, an icon, the split times
 * of different comparisons, and a history of segment times.
 */
public class SegmentRefMut extends SegmentRef {
    SegmentRefMut(long ptr) {
        super(ptr);
    }
}