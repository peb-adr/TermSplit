package livesplitcore;

import com.sun.jna.*;

/**
 * The Current Pace Component is a component that shows a prediction of the
 * current attempt's final time, if the current attempt's pace matches the
 * chosen comparison for the remainder of the run.
 */
public class CurrentPaceComponent extends CurrentPaceComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.CurrentPaceComponent_drop(this.ptr);
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
     * Creates a new Current Pace Component.
     */
    public CurrentPaceComponent() {
        super(Pointer.NULL);
        this.ptr = LiveSplitCoreNative.INSTANCE.CurrentPaceComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.INSTANCE.CurrentPaceComponent_into_generic(this.ptr));
        this.ptr = Pointer.NULL;
        return result;
    }
    CurrentPaceComponent(Pointer ptr) {
        super(ptr);
    }
}