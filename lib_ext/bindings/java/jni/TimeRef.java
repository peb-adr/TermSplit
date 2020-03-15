package livesplitcore;

/**
 * A time that can store a Real Time and a Game Time. Both of them are
 * optional.
 */
public class TimeRef {
    long ptr;
    /**
     * Clones the time.
     */
    public Time copy() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Time result = new Time(LiveSplitCoreNative.Time_clone(this.ptr));
        return result;
    }
    /**
     * The Real Time value. This may be null if this time has no Real Time value.
     */
    public TimeSpanRef realTime() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        TimeSpanRef result = new TimeSpanRef(LiveSplitCoreNative.Time_realTime(this.ptr));
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    /**
     * The Game Time value. This may be null if this time has no Game Time value.
     */
    public TimeSpanRef gameTime() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        TimeSpanRef result = new TimeSpanRef(LiveSplitCoreNative.Time_gameTime(this.ptr));
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    /**
     * Access the time's value for the timing method specified.
     */
    public TimeSpanRef index(byte timingMethod) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        TimeSpanRef result = new TimeSpanRef(LiveSplitCoreNative.Time_index(this.ptr, timingMethod));
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    TimeRef(long ptr) {
        this.ptr = ptr;
    }
}