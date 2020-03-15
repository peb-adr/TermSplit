package livesplitcore;

/**
 * The Current Comparison Component is a component that shows the name of the
 * comparison that is currently selected to be compared against.
 */
public class CurrentComparisonComponent extends CurrentComparisonComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.CurrentComparisonComponent_drop(this.ptr);
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
     * Creates a new Current Comparison Component.
     */
    public CurrentComparisonComponent() {
        super(0);
        this.ptr = LiveSplitCoreNative.CurrentComparisonComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.CurrentComparisonComponent_intoGeneric(this.ptr));
        this.ptr = 0;
        return result;
    }
    CurrentComparisonComponent(long ptr) {
        super(ptr);
    }
}