package livesplitcore;

/**
 * A Timer provides all the capabilities necessary for doing speedrun attempts.
 */
public class Timer extends TimerRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.Timer_drop(this.ptr);
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
     * Creates a new Timer based on a Run object storing all the information
     * about the splits. The Run object needs to have at least one segment, so
     * that the Timer can store the final time. If a Run object with no
     * segments is provided, the Timer creation fails and null is returned.
     */
    public static Timer create(Run run) {
        if (run.ptr == 0) {
            throw new RuntimeException();
        }
        Timer result = new Timer(LiveSplitCoreNative.Timer_new(run.ptr));
        run.ptr = 0;
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    /**
     * Consumes the Timer and creates a Shared Timer that can be shared across
     * multiple threads with multiple owners.
     */
    public SharedTimer intoShared() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        SharedTimer result = new SharedTimer(LiveSplitCoreNative.Timer_intoShared(this.ptr));
        this.ptr = 0;
        return result;
    }
    /**
     * Takes out the Run from the Timer and resets the current attempt if there
     * is one in progress. If the splits are to be updated, all the information
     * of the current attempt is stored in the Run's history. Otherwise the
     * current attempt's information is discarded.
     */
    public Run intoRun(boolean updateSplits) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Run result = new Run(LiveSplitCoreNative.Timer_intoRun(this.ptr, updateSplits));
        this.ptr = 0;
        return result;
    }
    Timer(long ptr) {
        super(ptr);
    }
}