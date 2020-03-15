package livesplitcore;

import com.sun.jna.*;

/**
 * The Total Playtime Component is a component that shows the total amount of
 * time that the current category has been played for.
 */
public class TotalPlaytimeComponent extends TotalPlaytimeComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.TotalPlaytimeComponent_drop(this.ptr);
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
     * Creates a new Total Playtime Component.
     */
    public TotalPlaytimeComponent() {
        super(Pointer.NULL);
        this.ptr = LiveSplitCoreNative.INSTANCE.TotalPlaytimeComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.INSTANCE.TotalPlaytimeComponent_into_generic(this.ptr));
        this.ptr = Pointer.NULL;
        return result;
    }
    TotalPlaytimeComponent(Pointer ptr) {
        super(ptr);
    }
}