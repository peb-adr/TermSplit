package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class SumOfBestComponentState extends SumOfBestComponentStateRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.SumOfBestComponentState_drop(this.ptr);
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
    SumOfBestComponentState(long ptr) {
        super(ptr);
    }
}