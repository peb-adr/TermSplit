package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class TotalPlaytimeComponentState extends TotalPlaytimeComponentStateRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.TotalPlaytimeComponentState_drop(this.ptr);
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
    TotalPlaytimeComponentState(long ptr) {
        super(ptr);
    }
}