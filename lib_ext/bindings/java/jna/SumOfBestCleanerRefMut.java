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
public class SumOfBestCleanerRefMut extends SumOfBestCleanerRef {
    /**
     * Returns the next potential clean up. If there are no more potential
     * clean ups, null is returned.
     */
    public PotentialCleanUp nextPotentialCleanUp() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        PotentialCleanUp result = new PotentialCleanUp(LiveSplitCoreNative.INSTANCE.SumOfBestCleaner_next_potential_clean_up(this.ptr));
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    /**
     * Applies a clean up to the Run.
     */
    public void apply(PotentialCleanUp cleanUp) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (cleanUp.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.SumOfBestCleaner_apply(this.ptr, cleanUp.ptr);
        cleanUp.ptr = Pointer.NULL;
    }
    SumOfBestCleanerRefMut(Pointer ptr) {
        super(ptr);
    }
}