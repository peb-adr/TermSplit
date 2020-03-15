package livesplitcore;

import com.sun.jna.*;

/**
 * A time that can store a Real Time and a Game Time. Both of them are
 * optional.
 */
public class TimeRef {
    Pointer ptr;
    /**
     * Clones the time.
     */
    public Time copy() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        Time result = new Time(LiveSplitCoreNative.INSTANCE.Time_clone(this.ptr));
        return result;
    }
    /**
     * The Real Time value. This may be null if this time has no Real Time value.
     */
    public TimeSpanRef realTime() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TimeSpanRef result = new TimeSpanRef(LiveSplitCoreNative.INSTANCE.Time_real_time(this.ptr));
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    /**
     * The Game Time value. This may be null if this time has no Game Time value.
     */
    public TimeSpanRef gameTime() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TimeSpanRef result = new TimeSpanRef(LiveSplitCoreNative.INSTANCE.Time_game_time(this.ptr));
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    /**
     * Access the time's value for the timing method specified.
     */
    public TimeSpanRef index(byte timingMethod) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TimeSpanRef result = new TimeSpanRef(LiveSplitCoreNative.INSTANCE.Time_index(this.ptr, timingMethod));
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    TimeRef(Pointer ptr) {
        this.ptr = ptr;
    }
}