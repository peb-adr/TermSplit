package livesplitcore;

/**
 * The Total Playtime Component is a component that shows the total amount of
 * time that the current category has been played for.
 */
public class TotalPlaytimeComponent extends TotalPlaytimeComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.TotalPlaytimeComponent_drop(this.ptr);
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
     * Creates a new Total Playtime Component.
     */
    public TotalPlaytimeComponent() {
        super(0);
        this.ptr = LiveSplitCoreNative.TotalPlaytimeComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.TotalPlaytimeComponent_intoGeneric(this.ptr));
        this.ptr = 0;
        return result;
    }
    TotalPlaytimeComponent(long ptr) {
        super(ptr);
    }
}