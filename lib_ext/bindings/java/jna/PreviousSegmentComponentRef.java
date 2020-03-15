package livesplitcore;

import com.sun.jna.*;

/**
 * The Previous Segment Component is a component that shows how much time was
 * saved or lost during the previous segment based on the chosen comparison.
 * Additionally, the potential time save for the previous segment can be
 * displayed. This component switches to a `Live Segment` view that shows
 * active time loss whenever the runner is losing time on the current segment.
 */
public class PreviousSegmentComponentRef {
    Pointer ptr;
    /**
     * Encodes the component's state information as JSON.
     */
    public String stateAsJson(TimerRef timer, GeneralLayoutSettingsRef layoutSettings) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (timer.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (layoutSettings.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.PreviousSegmentComponent_state_as_json(this.ptr, timer.ptr, layoutSettings.ptr);
        return result;
    }
    /**
     * Calculates the component's state based on the timer and the layout
     * settings provided.
     */
    public PreviousSegmentComponentState state(TimerRef timer, GeneralLayoutSettingsRef layoutSettings) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (timer.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (layoutSettings.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        PreviousSegmentComponentState result = new PreviousSegmentComponentState(LiveSplitCoreNative.INSTANCE.PreviousSegmentComponent_state(this.ptr, timer.ptr, layoutSettings.ptr));
        return result;
    }
    PreviousSegmentComponentRef(Pointer ptr) {
        this.ptr = ptr;
    }
}