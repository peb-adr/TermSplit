package livesplitcore;

/**
 * A segment time achieved for a segment. It is tagged with an index. Only
 * segment times with an index larger than 0 are considered times actually
 * achieved by the runner, while the others are artifacts of route changes and
 * similar algorithmic changes.
 */
public class SegmentHistoryElement extends SegmentHistoryElementRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
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
    SegmentHistoryElement(long ptr) {
        super(ptr);
    }
}