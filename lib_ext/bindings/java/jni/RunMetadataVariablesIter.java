package livesplitcore;

/**
 * An iterator iterating over all the Run Metadata variables and their values
 * that have been specified.
 */
public class RunMetadataVariablesIter extends RunMetadataVariablesIterRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.RunMetadataVariablesIter_drop(this.ptr);
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
    RunMetadataVariablesIter(long ptr) {
        super(ptr);
    }
}