package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class DetailedTimerComponentState extends DetailedTimerComponentStateRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.DetailedTimerComponentState_drop(this.ptr);
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
    DetailedTimerComponentState(long ptr) {
        super(ptr);
    }
}