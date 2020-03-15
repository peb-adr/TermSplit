package livesplitcore;

import com.sun.jna.*;

/**
 * A Time Span represents a certain span of time.
 */
public class TimeSpanRef {
    Pointer ptr;
    /**
     * Clones the Time Span.
     */
    public TimeSpan copy() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TimeSpan result = new TimeSpan(LiveSplitCoreNative.INSTANCE.TimeSpan_clone(this.ptr));
        return result;
    }
    /**
     * Returns the total amount of seconds (including decimals) this Time Span
     * represents.
     */
    public double totalSeconds() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        double result = LiveSplitCoreNative.INSTANCE.TimeSpan_total_seconds(this.ptr);
        return result;
    }
    TimeSpanRef(Pointer ptr) {
        this.ptr = ptr;
    }
}