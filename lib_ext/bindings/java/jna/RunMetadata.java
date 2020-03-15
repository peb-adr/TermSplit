package livesplitcore;

import com.sun.jna.*;

/**
 * The Run Metadata stores additional information about a run, like the
 * platform and region of the game. All of this information is optional.
 */
public class RunMetadata extends RunMetadataRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
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
    RunMetadata(Pointer ptr) {
        super(ptr);
    }
}