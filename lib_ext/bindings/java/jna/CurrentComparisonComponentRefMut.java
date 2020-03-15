package livesplitcore;

import com.sun.jna.*;

/**
 * The Current Comparison Component is a component that shows the name of the
 * comparison that is currently selected to be compared against.
 */
public class CurrentComparisonComponentRefMut extends CurrentComparisonComponentRef {
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
        String result = LiveSplitCoreNative.INSTANCE.CurrentComparisonComponent_state_as_json(this.ptr, timer.ptr);
        return result;
    }
    /**
     * Calculates the component's state based on the timer provided.
     */
    public CurrentComparisonComponentState state(TimerRef timer) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (timer.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        CurrentComparisonComponentState result = new CurrentComparisonComponentState(LiveSplitCoreNative.INSTANCE.CurrentComparisonComponent_state(this.ptr, timer.ptr));
        return result;
    }
    CurrentComparisonComponentRefMut(Pointer ptr) {
        super(ptr);
    }
}