package livesplitcore;

import com.sun.jna.*;

/**
 * The analysis module provides a variety of functions for calculating
 * information about runs.
 */
public class Analysis extends AnalysisRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
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
     * Calculates the Sum of Best Segments for the timing method provided. This is
     * the fastest time possible to complete a run of a category, based on
     * information collected from all the previous attempts. This often matches up
     * with the sum of the best segment times of all the segments, but that may not
     * always be the case, as skipped segments may introduce combined segments that
     * may be faster than the actual sum of their best segment times. The name is
     * therefore a bit misleading, but sticks around for historical reasons. You
     * can choose to do a simple calculation instead, which excludes the Segment
     * History from the calculation process. If there's an active attempt, you can
     * choose to take it into account as well. Can return null.
     */
    public static TimeSpan calculateSumOfBest(RunRef run, boolean simpleCalculation, boolean useCurrentRun, byte method) {
        if (run.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TimeSpan result = new TimeSpan(LiveSplitCoreNative.INSTANCE.Analysis_calculate_sum_of_best(run.ptr, (byte)(simpleCalculation ? 1 : 0), (byte)(useCurrentRun ? 1 : 0), method));
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    /**
     * Calculates the total playtime of the passed Run.
     */
    public static TimeSpan calculateTotalPlaytimeForRun(RunRef run) {
        if (run.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TimeSpan result = new TimeSpan(LiveSplitCoreNative.INSTANCE.Analysis_calculate_total_playtime_for_run(run.ptr));
        return result;
    }
    /**
     * Calculates the total playtime of the passed Timer.
     */
    public static TimeSpan calculateTotalPlaytimeForTimer(TimerRef timer) {
        if (timer.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TimeSpan result = new TimeSpan(LiveSplitCoreNative.INSTANCE.Analysis_calculate_total_playtime_for_timer(timer.ptr));
        return result;
    }
    Analysis(Pointer ptr) {
        super(ptr);
    }
}