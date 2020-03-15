package livesplitcore;

import com.sun.jna.*;

/**
 * The Possible Time Save Component is a component that shows how much time the
 * chosen comparison could've saved for the current segment, based on the Best
 * Segments. This component also allows showing the Total Possible Time Save
 * for the remainder of the current attempt.
 */
public class PossibleTimeSaveComponentRef {
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
        String result = LiveSplitCoreNative.INSTANCE.PossibleTimeSaveComponent_state_as_json(this.ptr, timer.ptr);
        return result;
    }
    /**
     * Calculates the component's state based on the timer provided.
     */
    public PossibleTimeSaveComponentState state(TimerRef timer) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (timer.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        PossibleTimeSaveComponentState result = new PossibleTimeSaveComponentState(LiveSplitCoreNative.INSTANCE.PossibleTimeSaveComponent_state(this.ptr, timer.ptr));
        return result;
    }
    PossibleTimeSaveComponentRef(Pointer ptr) {
        this.ptr = ptr;
    }
}