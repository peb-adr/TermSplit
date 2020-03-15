package livesplitcore;

/**
 * An Attempt describes information about an attempt to run a specific category
 * by a specific runner in the past. Every time a new attempt is started and
 * then reset, an Attempt describing general information about it is created.
 */
public class AttemptRef {
    long ptr;
    /**
     * Accesses the unique index of the attempt. This index is unique for the
     * Run, not for all of them.
     */
    public int index() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        int result = LiveSplitCoreNative.Attempt_index(this.ptr);
        return result;
    }
    /**
     * Accesses the split time of the last segment. If the attempt got reset
     * early and didn't finish, this may be empty.
     */
    public TimeRef time() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        TimeRef result = new TimeRef(LiveSplitCoreNative.Attempt_time(this.ptr));
        return result;
    }
    /**
     * Accesses the amount of time the attempt has been paused for. If it is not
     * known, this returns null. This means that it may not necessarily be
     * possible to differentiate whether a Run has not been paused or it simply
     * wasn't stored.
     */
    public TimeSpanRef pauseTime() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        TimeSpanRef result = new TimeSpanRef(LiveSplitCoreNative.Attempt_pauseTime(this.ptr));
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    /**
     * Accesses the point in time the attempt was started at. This returns null
     * if this information is not known.
     */
    public AtomicDateTime started() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        AtomicDateTime result = new AtomicDateTime(LiveSplitCoreNative.Attempt_started(this.ptr));
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    /**
     * Accesses the point in time the attempt was ended at. This returns null if
     * this information is not known.
     */
    public AtomicDateTime ended() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        AtomicDateTime result = new AtomicDateTime(LiveSplitCoreNative.Attempt_ended(this.ptr));
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    AttemptRef(long ptr) {
        this.ptr = ptr;
    }
}