package livesplitcore;

/**
 * A time that can store a Real Time and a Game Time. Both of them are
 * optional.
 */
public class Time extends TimeRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.Time_drop(this.ptr);
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
    Time(long ptr) {
        super(ptr);
    }
}