package livesplitcore;

/**
 * The Graph Component visualizes how far the current attempt has been ahead or
 * behind the chosen comparison throughout the whole attempt. All the
 * individual deltas are shown as points in a graph.
 */
public class GraphComponent extends GraphComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.GraphComponent_drop(this.ptr);
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
     * Creates a new Graph Component.
     */
    public GraphComponent() {
        super(0);
        this.ptr = LiveSplitCoreNative.GraphComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.GraphComponent_intoGeneric(this.ptr));
        this.ptr = 0;
        return result;
    }
    GraphComponent(long ptr) {
        super(ptr);
    }
}