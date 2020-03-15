package livesplitcore;

import com.sun.jna.*;

/**
 * An Atomic Date Time represents a UTC Date Time that tries to be as close to
 * an atomic clock as possible.
 */
public class AtomicDateTimeRef {
    Pointer ptr;
    /**
     * Represents whether the date time is actually properly derived from an
     * atomic clock. If the synchronization with the atomic clock didn't happen
     * yet or failed, this is set to false.
     */
    public boolean isSynchronized() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.AtomicDateTime_is_synchronized(this.ptr) != 0;
        return result;
    }
    /**
     * Converts this atomic date time into a RFC 2822 formatted date time.
     */
    public String toRfc2822() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.AtomicDateTime_to_rfc2822(this.ptr);
        return result;
    }
    /**
     * Converts this atomic date time into a RFC 3339 formatted date time.
     */
    public String toRfc3339() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.AtomicDateTime_to_rfc3339(this.ptr);
        return result;
    }
    AtomicDateTimeRef(Pointer ptr) {
        this.ptr = ptr;
    }
}