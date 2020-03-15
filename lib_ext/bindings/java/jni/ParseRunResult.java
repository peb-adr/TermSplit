package livesplitcore;

/**
 * A run parsed by the Composite Parser. This contains the Run itself and
 * information about which parser parsed it.
 */
public class ParseRunResult extends ParseRunResultRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.ParseRunResult_drop(this.ptr);
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
     * Moves the actual Run object out of the Result. You may not call this if the
     * Run wasn't parsed successfully.
     */
    public Run unwrap() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Run result = new Run(LiveSplitCoreNative.ParseRunResult_unwrap(this.ptr));
        this.ptr = 0;
        return result;
    }
    ParseRunResult(long ptr) {
        super(ptr);
    }
}