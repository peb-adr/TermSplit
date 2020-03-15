package livesplitcore;

/**
 * The Separator Component is a simple component that only serves to render
 * separators between components.
 */
public class SeparatorComponent extends SeparatorComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.SeparatorComponent_drop(this.ptr);
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
     * Creates a new Separator Component.
     */
    public SeparatorComponent() {
        super(0);
        this.ptr = LiveSplitCoreNative.SeparatorComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.SeparatorComponent_intoGeneric(this.ptr));
        this.ptr = 0;
        return result;
    }
    SeparatorComponent(long ptr) {
        super(ptr);
    }
}