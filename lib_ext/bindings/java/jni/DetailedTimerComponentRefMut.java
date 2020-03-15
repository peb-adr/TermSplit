package livesplitcore;

/**
 * The Detailed Timer Component is a component that shows two timers, one for
 * the total time of the current attempt and one showing the time of just the
 * current segment. Other information, like segment times of up to two
 * comparisons, the segment icon, and the segment's name, can also be shown.
 */
public class DetailedTimerComponentRefMut extends DetailedTimerComponentRef {
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
        String result = LiveSplitCoreNative.DetailedTimerComponent_stateAsJson(this.ptr, timer.ptr, layoutSettings.ptr);
        return result;
    }
    /**
     * Calculates the component's state based on the timer and layout settings
     * provided.
     */
    public DetailedTimerComponentState state(TimerRef timer, GeneralLayoutSettingsRef layoutSettings) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (timer.ptr == 0) {
            throw new RuntimeException();
        }
        if (layoutSettings.ptr == 0) {
            throw new RuntimeException();
        }
        DetailedTimerComponentState result = new DetailedTimerComponentState(LiveSplitCoreNative.DetailedTimerComponent_state(this.ptr, timer.ptr, layoutSettings.ptr));
        return result;
    }
    DetailedTimerComponentRefMut(long ptr) {
        super(ptr);
    }
}