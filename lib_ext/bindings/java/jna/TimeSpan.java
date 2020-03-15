package livesplitcore;

import com.sun.jna.*;

/**
 * A Time Span represents a certain span of time.
 */
public class TimeSpan extends TimeSpanRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.TimeSpan_drop(this.ptr);
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
     * Creates a new Time Span from a given amount of seconds.
     */
    public static TimeSpan fromSeconds(double seconds) {
        TimeSpan result = new TimeSpan(LiveSplitCoreNative.INSTANCE.TimeSpan_from_seconds(seconds));
        return result;
    }
    /**
     * Parses a Time Span from a string. Returns null if the time can't be
     * parsed.
     */
    public static TimeSpan parse(String text) {
        TimeSpan result = new TimeSpan(LiveSplitCoreNative.INSTANCE.TimeSpan_parse(text));
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    TimeSpan(Pointer ptr) {
        super(ptr);
    }
}