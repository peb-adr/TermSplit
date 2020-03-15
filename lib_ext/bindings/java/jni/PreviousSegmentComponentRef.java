package livesplitcore;

/**
 * The Previous Segment Component is a component that shows how much time was
 * saved or lost during the previous segment based on the chosen comparison.
 * Additionally, the potential time save for the previous segment can be
 * displayed. This component switches to a `Live Segment` view that shows
 * active time loss whenever the runner is losing time on the current segment.
 */
public class PreviousSegmentComponentRef {
    long ptr;
    /**
     * Encodes the component's state information as JSON.
     */
    public String stateAsJson(TimerRef timer, GeneralLayoutSettingsRef layoutSettings) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (timer.ptr == 0) {
            throw new RuntimeException();
        }
        if (layoutSettings.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.PreviousSegmentComponent_stateAsJson(this.ptr, timer.ptr, layoutSettings.ptr);
        return result;
    }
    /**
     * Calculates the component's state based on the timer and the layout
     * settings provided.
     */
    public PreviousSegmentComponentState state(TimerRef timer, GeneralLayoutSettingsRef layoutSettings) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (timer.ptr == 0) {
            throw new RuntimeException();
        }
        if (layoutSettings.ptr == 0) {
            throw new RuntimeException();
        }
        PreviousSegmentComponentState result = new PreviousSegmentComponentState(LiveSplitCoreNative.PreviousSegmentComponent_state(this.ptr, timer.ptr, layoutSettings.ptr));
        return result;
    }
    PreviousSegmentComponentRef(long ptr) {
        this.ptr = ptr;
    }
}