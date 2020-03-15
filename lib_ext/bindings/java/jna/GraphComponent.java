package livesplitcore;

import com.sun.jna.*;

/**
 * The Graph Component visualizes how far the current attempt has been ahead or
 * behind the chosen comparison throughout the whole attempt. All the
 * individual deltas are shown as points in a graph.
 */
public class GraphComponent extends GraphComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.GraphComponent_drop(this.ptr);
            ptr = Pointer.NULL;
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
        super(Pointer.NULL);
        this.ptr = LiveSplitCoreNative.INSTANCE.GraphComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.INSTANCE.GraphComponent_into_generic(this.ptr));
        this.ptr = Pointer.NULL;
        return result;
    }
    GraphComponent(Pointer ptr) {
        super(ptr);
    }
}