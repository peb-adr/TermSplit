package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class CurrentPaceComponentState extends CurrentPaceComponentStateRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.CurrentPaceComponentState_drop(this.ptr);
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
    CurrentPaceComponentState(long ptr) {
        super(ptr);
    }
}