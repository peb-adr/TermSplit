package livesplitcore;

/**
 * The Current Comparison Component is a component that shows the name of the
 * comparison that is currently selected to be compared against.
 */
public class CurrentComparisonComponentRefMut extends CurrentComparisonComponentRef {
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
        String result = LiveSplitCoreNative.CurrentComparisonComponent_stateAsJson(this.ptr, timer.ptr);
        return result;
    }
    /**
     * Calculates the component's state based on the timer provided.
     */
    public CurrentComparisonComponentState state(TimerRef timer) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (timer.ptr == 0) {
            throw new RuntimeException();
        }
        CurrentComparisonComponentState result = new CurrentComparisonComponentState(LiveSplitCoreNative.CurrentComparisonComponent_state(this.ptr, timer.ptr));
        return result;
    }
    CurrentComparisonComponentRefMut(long ptr) {
        super(ptr);
    }
}