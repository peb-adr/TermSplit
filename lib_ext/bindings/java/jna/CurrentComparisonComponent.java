package livesplitcore;

import com.sun.jna.*;

/**
 * The Current Comparison Component is a component that shows the name of the
 * comparison that is currently selected to be compared against.
 */
public class CurrentComparisonComponent extends CurrentComparisonComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.CurrentComparisonComponent_drop(this.ptr);
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
     * Creates a new Current Comparison Component.
     */
    public CurrentComparisonComponent() {
        super(Pointer.NULL);
        this.ptr = LiveSplitCoreNative.INSTANCE.CurrentComparisonComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.INSTANCE.CurrentComparisonComponent_into_generic(this.ptr));
        this.ptr = Pointer.NULL;
        return result;
    }
    CurrentComparisonComponent(Pointer ptr) {
        super(ptr);
    }
}