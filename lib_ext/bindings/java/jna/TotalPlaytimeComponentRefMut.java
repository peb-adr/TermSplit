package livesplitcore;

import com.sun.jna.*;

/**
 * The Total Playtime Component is a component that shows the total amount of
 * time that the current category has been played for.
 */
public class TotalPlaytimeComponentRefMut extends TotalPlaytimeComponentRef {
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
        String result = LiveSplitCoreNative.INSTANCE.TotalPlaytimeComponent_state_as_json(this.ptr, timer.ptr);
        return result;
    }
    /**
     * Calculates the component's state based on the timer provided.
     */
    public TotalPlaytimeComponentState state(TimerRef timer) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (timer.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TotalPlaytimeComponentState result = new TotalPlaytimeComponentState(LiveSplitCoreNative.INSTANCE.TotalPlaytimeComponent_state(this.ptr, timer.ptr));
        return result;
    }
    TotalPlaytimeComponentRefMut(Pointer ptr) {
        super(ptr);
    }
}