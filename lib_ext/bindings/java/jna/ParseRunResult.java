package livesplitcore;

import com.sun.jna.*;

/**
 * A run parsed by the Composite Parser. This contains the Run itself and
 * information about which parser parsed it.
 */
public class ParseRunResult extends ParseRunResultRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.ParseRunResult_drop(this.ptr);
            ptr = Pointer.NULL;
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
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        Run result = new Run(LiveSplitCoreNative.INSTANCE.ParseRunResult_unwrap(this.ptr));
        this.ptr = Pointer.NULL;
        return result;
    }
    ParseRunResult(Pointer ptr) {
        super(ptr);
    }
}