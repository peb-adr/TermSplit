package livesplitcore;

/**
 * The Sum of Best Segments Component shows the fastest possible time to
 * complete a run of this category, based on information collected from all the
 * previous attempts. This often matches up with the sum of the best segment
 * times of all the segments, but that may not always be the case, as skipped
 * segments may introduce combined segments that may be faster than the actual
 * sum of their best segment times. The name is therefore a bit misleading, but
 * sticks around for historical reasons.
 */
public class SumOfBestComponentRefMut extends SumOfBestComponentRef {
    SumOfBestComponentRefMut(long ptr) {
        super(ptr);
    }
}