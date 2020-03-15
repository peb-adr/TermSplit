package livesplitcore;

import com.sun.jna.*;

/**
 * A Timer provides all the capabilities necessary for doing speedrun attempts.
 */
public class Timer extends TimerRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.Timer_drop(this.ptr);
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
     * Creates a new Timer based on a Run object storing all the information
     * about the splits. The Run object needs to have at least one segment, so
     * that the Timer can store the final time. If a Run object with no
     * segments is provided, the Timer creation fails and null is returned.
     */
    public static Timer create(Run run) {
        if (run.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        Timer result = new Timer(LiveSplitCoreNative.INSTANCE.Timer_new(run.ptr));
        run.ptr = Pointer.NULL;
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    /**
     * Consumes the Timer and creates a Shared Timer that can be shared across
     * multiple threads with multiple owners.
     */
    public SharedTimer intoShared() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        SharedTimer result = new SharedTimer(LiveSplitCoreNative.INSTANCE.Timer_into_shared(this.ptr));
        this.ptr = Pointer.NULL;
        return result;
    }
    /**
     * Takes out the Run from the Timer and resets the current attempt if there
     * is one in progress. If the splits are to be updated, all the information
     * of the current attempt is stored in the Run's history. Otherwise the
     * current attempt's information is discarded.
     */
    public Run intoRun(boolean updateSplits) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        Run result = new Run(LiveSplitCoreNative.INSTANCE.Timer_into_run(this.ptr, (byte)(updateSplits ? 1 : 0)));
        this.ptr = Pointer.NULL;
        return result;
    }
    Timer(Pointer ptr) {
        super(ptr);
    }
}