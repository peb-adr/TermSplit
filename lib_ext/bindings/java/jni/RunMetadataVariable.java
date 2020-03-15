package livesplitcore;

/**
 * A Run Metadata variable is an arbitrary key value pair storing additional
 * information about the category. An example of this may be whether Amiibos
 * are used in the category.
 */
public class RunMetadataVariable extends RunMetadataVariableRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.RunMetadataVariable_drop(this.ptr);
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
    RunMetadataVariable(long ptr) {
        super(ptr);
    }
}