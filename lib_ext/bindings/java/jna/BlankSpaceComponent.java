package livesplitcore;

import com.sun.jna.*;

/**
 * The Blank Space Component is simply an empty component that doesn't show
 * anything other than a background. It mostly serves as padding between other
 * components.
 */
public class BlankSpaceComponent extends BlankSpaceComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.BlankSpaceComponent_drop(this.ptr);
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
     * Creates a new Blank Space Component.
     */
    public BlankSpaceComponent() {
        super(Pointer.NULL);
        this.ptr = LiveSplitCoreNative.INSTANCE.BlankSpaceComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.INSTANCE.BlankSpaceComponent_into_generic(this.ptr));
        this.ptr = Pointer.NULL;
        return result;
    }
    BlankSpaceComponent(Pointer ptr) {
        super(ptr);
    }
}