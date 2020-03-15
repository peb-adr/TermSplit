package livesplitcore;

/**
 * The Current Pace Component is a component that shows a prediction of the
 * current attempt's final time, if the current attempt's pace matches the
 * chosen comparison for the remainder of the run.
 */
public class CurrentPaceComponentRefMut extends CurrentPaceComponentRef {
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
        String result = LiveSplitCoreNative.CurrentPaceComponent_stateAsJson(this.ptr, timer.ptr);
        return result;
    }
    /**
     * Calculates the component's state based on the timer provided.
     */
    public CurrentPaceComponentState state(TimerRef timer) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (timer.ptr == 0) {
            throw new RuntimeException();
        }
        CurrentPaceComponentState result = new CurrentPaceComponentState(LiveSplitCoreNative.CurrentPaceComponent_state(this.ptr, timer.ptr));
        return result;
    }
    CurrentPaceComponentRefMut(long ptr) {
        super(ptr);
    }
}