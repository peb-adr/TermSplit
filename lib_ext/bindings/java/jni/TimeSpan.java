package livesplitcore;

/**
 * A Time Span represents a certain span of time.
 */
public class TimeSpan extends TimeSpanRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.TimeSpan_drop(this.ptr);
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
     * Creates a new Time Span from a given amount of seconds.
     */
    public static TimeSpan fromSeconds(double seconds) {
        TimeSpan result = new TimeSpan(LiveSplitCoreNative.TimeSpan_fromSeconds(seconds));
        return result;
    }
    /**
     * Parses a Time Span from a string. Returns null if the time can't be
     * parsed.
     */
    public static TimeSpan parse(String text) {
        TimeSpan result = new TimeSpan(LiveSplitCoreNative.TimeSpan_parse(text));
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    TimeSpan(long ptr) {
        super(ptr);
    }
}