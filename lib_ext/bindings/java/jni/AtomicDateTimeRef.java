package livesplitcore;

/**
 * An Atomic Date Time represents a UTC Date Time that tries to be as close to
 * an atomic clock as possible.
 */
public class AtomicDateTimeRef {
    long ptr;
    /**
     * Represents whether the date time is actually properly derived from an
     * atomic clock. If the synchronization with the atomic clock didn't happen
     * yet or failed, this is set to false.
     */
    public boolean isSynchronized() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.AtomicDateTime_isSynchronized(this.ptr);
        return result;
    }
    /**
     * Converts this atomic date time into a RFC 2822 formatted date time.
     */
    public String toRfc2822() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.AtomicDateTime_toRfc2822(this.ptr);
        return result;
    }
    /**
     * Converts this atomic date time into a RFC 3339 formatted date time.
     */
    public String toRfc3339() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.AtomicDateTime_toRfc3339(this.ptr);
        return result;
    }
    AtomicDateTimeRef(long ptr) {
        this.ptr = ptr;
    }
}