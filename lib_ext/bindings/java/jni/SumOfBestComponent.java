package livesplitcore;

/**
 * The Sum of Best Segments Component shows the fastest possible time to
 * complete a run of this category, based on information collected from all the
 * previous attempts. This often matches up with the sum of the best segment
 * times of all the segments, but that may not always be the case, as skipped
 * segments may introduce combined segments that may be faster than the actual
 * sum of their best segment times. The name is therefore a bit misleading, but
 * sticks around for historical reasons.
 */
public class SumOfBestComponent extends SumOfBestComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.SumOfBestComponent_drop(this.ptr);
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
     * Creates a new Sum of Best Segments Component.
     */
    public SumOfBestComponent() {
        super(0);
        this.ptr = LiveSplitCoreNative.SumOfBestComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.SumOfBestComponent_intoGeneric(this.ptr));
        this.ptr = 0;
        return result;
    }
    SumOfBestComponent(long ptr) {
        super(ptr);
    }
}