package livesplitcore;

/**
 * The Delta Component is a component that shows the how far ahead or behind
 * the current attempt is compared to the chosen comparison.
 */
public class DeltaComponent extends DeltaComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.DeltaComponent_drop(this.ptr);
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
     * Creates a new Delta Component.
     */
    public DeltaComponent() {
        super(0);
        this.ptr = LiveSplitCoreNative.DeltaComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.DeltaComponent_intoGeneric(this.ptr));
        this.ptr = 0;
        return result;
    }
    DeltaComponent(long ptr) {
        super(ptr);
    }
}