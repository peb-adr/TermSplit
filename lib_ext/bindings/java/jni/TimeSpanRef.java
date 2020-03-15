package livesplitcore;

/**
 * A Time Span represents a certain span of time.
 */
public class TimeSpanRef {
    long ptr;
    /**
     * Clones the Time Span.
     */
    public TimeSpan copy() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        TimeSpan result = new TimeSpan(LiveSplitCoreNative.TimeSpan_clone(this.ptr));
        return result;
    }
    /**
     * Returns the total amount of seconds (including decimals) this Time Span
     * represents.
     */
    public double totalSeconds() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        double result = LiveSplitCoreNative.TimeSpan_totalSeconds(this.ptr);
        return result;
    }
    TimeSpanRef(long ptr) {
        this.ptr = ptr;
    }
}