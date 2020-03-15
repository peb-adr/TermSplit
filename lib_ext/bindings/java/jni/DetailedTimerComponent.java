package livesplitcore;

/**
 * The Detailed Timer Component is a component that shows two timers, one for
 * the total time of the current attempt and one showing the time of just the
 * current segment. Other information, like segment times of up to two
 * comparisons, the segment icon, and the segment's name, can also be shown.
 */
public class DetailedTimerComponent extends DetailedTimerComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.DetailedTimerComponent_drop(this.ptr);
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
     * Creates a new Detailed Timer Component.
     */
    public DetailedTimerComponent() {
        super(0);
        this.ptr = LiveSplitCoreNative.DetailedTimerComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.DetailedTimerComponent_intoGeneric(this.ptr));
        this.ptr = 0;
        return result;
    }
    DetailedTimerComponent(long ptr) {
        super(ptr);
    }
}