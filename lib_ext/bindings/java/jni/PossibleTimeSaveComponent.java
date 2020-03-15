package livesplitcore;

/**
 * The Possible Time Save Component is a component that shows how much time the
 * chosen comparison could've saved for the current segment, based on the Best
 * Segments. This component also allows showing the Total Possible Time Save
 * for the remainder of the current attempt.
 */
public class PossibleTimeSaveComponent extends PossibleTimeSaveComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.PossibleTimeSaveComponent_drop(this.ptr);
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
     * Creates a new Possible Time Save Component.
     */
    public PossibleTimeSaveComponent() {
        super(0);
        this.ptr = LiveSplitCoreNative.PossibleTimeSaveComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.PossibleTimeSaveComponent_intoGeneric(this.ptr));
        this.ptr = 0;
        return result;
    }
    PossibleTimeSaveComponent(long ptr) {
        super(ptr);
    }
}