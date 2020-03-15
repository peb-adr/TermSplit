package livesplitcore;

import com.sun.jna.*;

/**
 * The Separator Component is a simple component that only serves to render
 * separators between components.
 */
public class SeparatorComponent extends SeparatorComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.SeparatorComponent_drop(this.ptr);
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
     * Creates a new Separator Component.
     */
    public SeparatorComponent() {
        super(Pointer.NULL);
        this.ptr = LiveSplitCoreNative.INSTANCE.SeparatorComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.INSTANCE.SeparatorComponent_into_generic(this.ptr));
        this.ptr = Pointer.NULL;
        return result;
    }
    SeparatorComponent(Pointer ptr) {
        super(ptr);
    }
}