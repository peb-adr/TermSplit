package livesplitcore;

/**
 * The Title Component is a component that shows the name of the game and the
 * category that is being run. Additionally, the game icon, the attempt count,
 * and the total number of successfully finished runs can be shown.
 */
public class TitleComponent extends TitleComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.TitleComponent_drop(this.ptr);
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
     * Creates a new Title Component.
     */
    public TitleComponent() {
        super(0);
        this.ptr = LiveSplitCoreNative.TitleComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.TitleComponent_intoGeneric(this.ptr));
        this.ptr = 0;
        return result;
    }
    TitleComponent(long ptr) {
        super(ptr);
    }
}