package livesplitcore;

import com.sun.jna.*;

/**
 * The Possible Time Save Component is a component that shows how much time the
 * chosen comparison could've saved for the current segment, based on the Best
 * Segments. This component also allows showing the Total Possible Time Save
 * for the remainder of the current attempt.
 */
public class PossibleTimeSaveComponent extends PossibleTimeSaveComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.PossibleTimeSaveComponent_drop(this.ptr);
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
     * Creates a new Possible Time Save Component.
     */
    public PossibleTimeSaveComponent() {
        super(Pointer.NULL);
        this.ptr = LiveSplitCoreNative.INSTANCE.PossibleTimeSaveComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.INSTANCE.PossibleTimeSaveComponent_into_generic(this.ptr));
        this.ptr = Pointer.NULL;
        return result;
    }
    PossibleTimeSaveComponent(Pointer ptr) {
        super(ptr);
    }
}