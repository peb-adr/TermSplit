package livesplitcore;

/**
 * The state object that describes a single segment's information to visualize.
 */
public class SplitComponentState extends SplitComponentStateRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
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
    SplitComponentState(long ptr) {
        super(ptr);
    }
}