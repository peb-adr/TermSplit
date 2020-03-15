package livesplitcore;

import com.sun.jna.*;

/**
 * An iterator iterating over all the Run Metadata variables and their values
 * that have been specified.
 */
public class RunMetadataVariablesIter extends RunMetadataVariablesIterRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.RunMetadataVariablesIter_drop(this.ptr);
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
    RunMetadataVariablesIter(Pointer ptr) {
        super(ptr);
    }
}