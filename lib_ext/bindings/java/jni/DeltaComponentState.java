package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class DeltaComponentState extends DeltaComponentStateRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.DeltaComponentState_drop(this.ptr);
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
    DeltaComponentState(long ptr) {
        super(ptr);
    }
}