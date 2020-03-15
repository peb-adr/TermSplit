package livesplitcore;

/**
 * A Shared Timer that can be used to share a single timer object with multiple
 * owners.
 */
public class SharedTimer extends SharedTimerRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.SharedTimer_drop(this.ptr);
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
    SharedTimer(long ptr) {
        super(ptr);
    }
}