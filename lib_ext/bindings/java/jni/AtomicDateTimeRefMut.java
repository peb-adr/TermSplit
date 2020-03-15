package livesplitcore;

/**
 * An Atomic Date Time represents a UTC Date Time that tries to be as close to
 * an atomic clock as possible.
 */
public class AtomicDateTimeRefMut extends AtomicDateTimeRef {
    AtomicDateTimeRefMut(long ptr) {
        super(ptr);
    }
}