package livesplitcore;

/**
 * The Run Editor allows modifying Runs while ensuring that all the different
 * invariants of the Run objects are upheld no matter what kind of operations
 * are being applied to the Run. It provides the current state of the editor as
 * state objects that can be visualized by any kind of User Interface.
 */
public class RunEditor extends RunEditorRefMut implements AutoCloseable {
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
    /**
     * Creates a new Run Editor that modifies the Run provided. Creation of the Run
     * Editor fails when a Run with no segments is provided. If a Run object with
     * no segments is provided, the Run Editor creation fails and null is
     * returned.
     */
    public static RunEditor create(Run run) {
        if (run.ptr == 0) {
            throw new RuntimeException();
        }
        RunEditor result = new RunEditor(LiveSplitCoreNative.RunEditor_new(run.ptr));
        run.ptr = 0;
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    /**
     * Closes the Run Editor and gives back access to the modified Run object. In
     * case you want to implement a Cancel Button, just dispose the Run object you
     * get here.
     */
    public Run finish() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Run result = new Run(LiveSplitCoreNative.RunEditor_close(this.ptr));
        this.ptr = 0;
        return result;
    }
    RunEditor(long ptr) {
        super(ptr);
    }
}