package livesplitcore;

/**
 * An Attempt describes information about an attempt to run a specific category
 * by a specific runner in the past. Every time a new attempt is started and
 * then reset, an Attempt describing general information about it is created.
 */
public class Attempt extends AttemptRefMut implements AutoCloseable {
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
    Attempt(long ptr) {
        super(ptr);
    }
}