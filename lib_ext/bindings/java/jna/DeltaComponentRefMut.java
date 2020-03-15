package livesplitcore;

import com.sun.jna.*;

/**
 * The Delta Component is a component that shows the how far ahead or behind
 * the current attempt is compared to the chosen comparison.
 */
public class DeltaComponentRefMut extends DeltaComponentRef {
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
        String result = LiveSplitCoreNative.INSTANCE.DeltaComponent_state_as_json(this.ptr, timer.ptr, layoutSettings.ptr);
        return result;
    }
    /**
     * Calculates the component's state based on the timer and the layout
     * settings provided.
     */
    public DeltaComponentState state(TimerRef timer, GeneralLayoutSettingsRef layoutSettings) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (timer.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (layoutSettings.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        DeltaComponentState result = new DeltaComponentState(LiveSplitCoreNative.INSTANCE.DeltaComponent_state(this.ptr, timer.ptr, layoutSettings.ptr));
        return result;
    }
    DeltaComponentRefMut(Pointer ptr) {
        super(ptr);
    }
}