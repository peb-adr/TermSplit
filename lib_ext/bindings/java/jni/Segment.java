package livesplitcore;

/**
 * A Segment describes a point in a speedrun that is suitable for storing a
 * split time. This stores the name of that segment, an icon, the split times
 * of different comparisons, and a history of segment times.
 */
public class Segment extends SegmentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.Segment_drop(this.ptr);
            ptr = 0;
        }
    }
    protected void finalize() throws Throwable {
        drop();
        super.finalize();
    }
    public void close() {
        drop();
    }
    /**
     * Creates a new Segment with the name given.
     */
    public Segment(String name) {
        super(0);
        this.ptr = LiveSplitCoreNative.Segment_new(name);
    }
    Segment(long ptr) {
        super(ptr);
    }
}