package livesplitcore;

/**
 * The Current Pace Component is a component that shows a prediction of the
 * current attempt's final time, if the current attempt's pace matches the
 * chosen comparison for the remainder of the run.
 */
public class CurrentPaceComponent extends CurrentPaceComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.CurrentPaceComponent_drop(this.ptr);
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
     * Creates a new Current Pace Component.
     */
    public CurrentPaceComponent() {
        super(0);
        this.ptr = LiveSplitCoreNative.CurrentPaceComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.CurrentPaceComponent_intoGeneric(this.ptr));
        this.ptr = 0;
        return result;
    }
    CurrentPaceComponent(long ptr) {
        super(ptr);
    }
}