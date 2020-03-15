package livesplitcore;

import com.sun.jna.*;

/**
 * The Sum of Best Segments Component shows the fastest possible time to
 * complete a run of this category, based on information collected from all the
 * previous attempts. This often matches up with the sum of the best segment
 * times of all the segments, but that may not always be the case, as skipped
 * segments may introduce combined segments that may be faster than the actual
 * sum of their best segment times. The name is therefore a bit misleading, but
 * sticks around for historical reasons.
 */
public class SumOfBestComponentRef {
    Pointer ptr;
    /**
     * Encodes the component's state information as JSON.
     */
    public String stateAsJson(TimerRef timer) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (timer.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.SumOfBestComponent_state_as_json(this.ptr, timer.ptr);
        return result;
    }
    /**
     * Calculates the component's state based on the timer provided.
     */
    public SumOfBestComponentState state(TimerRef timer) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (timer.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        SumOfBestComponentState result = new SumOfBestComponentState(LiveSplitCoreNative.INSTANCE.SumOfBestComponent_state(this.ptr, timer.ptr));
        return result;
    }
    SumOfBestComponentRef(Pointer ptr) {
        this.ptr = ptr;
    }
}