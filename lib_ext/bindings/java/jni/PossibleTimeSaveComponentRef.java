package livesplitcore;

/**
 * The Possible Time Save Component is a component that shows how much time the
 * chosen comparison could've saved for the current segment, based on the Best
 * Segments. This component also allows showing the Total Possible Time Save
 * for the remainder of the current attempt.
 */
public class PossibleTimeSaveComponentRef {
    long ptr;
    /**
     * Encodes the component's state information as JSON.
     */
    public String stateAsJson(TimerRef timer) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (timer.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.PossibleTimeSaveComponent_stateAsJson(this.ptr, timer.ptr);
        return result;
    }
    /**
     * Calculates the component's state based on the timer provided.
     */
    public PossibleTimeSaveComponentState state(TimerRef timer) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (timer.ptr == 0) {
            throw new RuntimeException();
        }
        PossibleTimeSaveComponentState result = new PossibleTimeSaveComponentState(LiveSplitCoreNative.PossibleTimeSaveComponent_state(this.ptr, timer.ptr));
        return result;
    }
    PossibleTimeSaveComponentRef(long ptr) {
        this.ptr = ptr;
    }
}