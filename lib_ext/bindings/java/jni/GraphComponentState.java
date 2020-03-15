package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 * All the coordinates are in the range 0..1.
 */
public class GraphComponentState extends GraphComponentStateRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.GraphComponentState_drop(this.ptr);
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
    GraphComponentState(long ptr) {
        super(ptr);
    }
}