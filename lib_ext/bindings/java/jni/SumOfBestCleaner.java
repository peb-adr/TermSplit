package livesplitcore;

/**
 * A Sum of Best Cleaner allows you to interactively remove potential issues in
 * the Segment History that lead to an inaccurate Sum of Best. If you skip a
 * split, whenever you get to the next split, the combined segment time might
 * be faster than the sum of the individual best segments. The Sum of Best
 * Cleaner will point out all of occurrences of this and allows you to delete
 * them individually if any of them seem wrong.
 */
public class SumOfBestCleaner extends SumOfBestCleanerRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.SumOfBestCleaner_drop(this.ptr);
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
    SumOfBestCleaner(long ptr) {
        super(ptr);
    }
}