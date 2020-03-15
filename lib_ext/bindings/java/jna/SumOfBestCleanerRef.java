package livesplitcore;

import com.sun.jna.*;

/**
 * A Sum of Best Cleaner allows you to interactively remove potential issues in
 * the Segment History that lead to an inaccurate Sum of Best. If you skip a
 * split, whenever you get to the next split, the combined segment time might
 * be faster than the sum of the individual best segments. The Sum of Best
 * Cleaner will point out all of occurrences of this and allows you to delete
 * them individually if any of them seem wrong.
 */
public class SumOfBestCleanerRef {
    Pointer ptr;
    SumOfBestCleanerRef(Pointer ptr) {
        this.ptr = ptr;
    }
}