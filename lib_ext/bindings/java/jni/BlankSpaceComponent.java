package livesplitcore;

/**
 * The Blank Space Component is simply an empty component that doesn't show
 * anything other than a background. It mostly serves as padding between other
 * components.
 */
public class BlankSpaceComponent extends BlankSpaceComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.BlankSpaceComponent_drop(this.ptr);
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
     * Creates a new Blank Space Component.
     */
    public BlankSpaceComponent() {
        super(0);
        this.ptr = LiveSplitCoreNative.BlankSpaceComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.BlankSpaceComponent_intoGeneric(this.ptr));
        this.ptr = 0;
        return result;
    }
    BlankSpaceComponent(long ptr) {
        super(ptr);
    }
}