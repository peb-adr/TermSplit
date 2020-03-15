package livesplitcore;

/**
 * The Previous Segment Component is a component that shows how much time was
 * saved or lost during the previous segment based on the chosen comparison.
 * Additionally, the potential time save for the previous segment can be
 * displayed. This component switches to a `Live Segment` view that shows
 * active time loss whenever the runner is losing time on the current segment.
 */
public class PreviousSegmentComponent extends PreviousSegmentComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.PreviousSegmentComponent_drop(this.ptr);
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
     * Creates a new Previous Segment Component.
     */
    public PreviousSegmentComponent() {
        super(0);
        this.ptr = LiveSplitCoreNative.PreviousSegmentComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.PreviousSegmentComponent_intoGeneric(this.ptr));
        this.ptr = 0;
        return result;
    }
    PreviousSegmentComponent(long ptr) {
        super(ptr);
    }
}