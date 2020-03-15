package livesplitcore;

/**
 * The Timer Component is a component that shows the total time of the current
 * attempt as a digital clock. The color of the time shown is based on a how
 * well the current attempt is doing compared to the chosen comparison.
 */
public class TimerComponentRef {
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
        String result = LiveSplitCoreNative.TimerComponent_stateAsJson(this.ptr, timer.ptr, layoutSettings.ptr);
        return result;
    }
    /**
     * Calculates the component's state based on the timer and the layout
     * settings provided.
     */
    public TimerComponentState state(TimerRef timer, GeneralLayoutSettingsRef layoutSettings) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (timer.ptr == 0) {
            throw new RuntimeException();
        }
        if (layoutSettings.ptr == 0) {
            throw new RuntimeException();
        }
        TimerComponentState result = new TimerComponentState(LiveSplitCoreNative.TimerComponent_state(this.ptr, timer.ptr, layoutSettings.ptr));
        return result;
    }
    TimerComponentRef(long ptr) {
        this.ptr = ptr;
    }
}