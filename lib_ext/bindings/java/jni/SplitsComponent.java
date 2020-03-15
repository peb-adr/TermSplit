package livesplitcore;

/**
 * The Splits Component is the main component for visualizing all the split
 * times. Each segment is shown in a tabular fashion showing the segment icon,
 * segment name, the delta compared to the chosen comparison, and the split
 * time. The list provides scrolling functionality, so not every segment needs
 * to be shown all the time.
 */
public class SplitsComponent extends SplitsComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.SplitsComponent_drop(this.ptr);
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
     * Creates a new Splits Component.
     */
    public SplitsComponent() {
        super(0);
        this.ptr = LiveSplitCoreNative.SplitsComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.SplitsComponent_intoGeneric(this.ptr));
        this.ptr = 0;
        return result;
    }
    SplitsComponent(long ptr) {
        super(ptr);
    }
}