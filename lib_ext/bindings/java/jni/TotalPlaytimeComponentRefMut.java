package livesplitcore;

/**
 * The Total Playtime Component is a component that shows the total amount of
 * time that the current category has been played for.
 */
public class TotalPlaytimeComponentRefMut extends TotalPlaytimeComponentRef {
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
        String result = LiveSplitCoreNative.TotalPlaytimeComponent_stateAsJson(this.ptr, timer.ptr);
        return result;
    }
    /**
     * Calculates the component's state based on the timer provided.
     */
    public TotalPlaytimeComponentState state(TimerRef timer) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (timer.ptr == 0) {
            throw new RuntimeException();
        }
        TotalPlaytimeComponentState result = new TotalPlaytimeComponentState(LiveSplitCoreNative.TotalPlaytimeComponent_state(this.ptr, timer.ptr));
        return result;
    }
    TotalPlaytimeComponentRefMut(long ptr) {
        super(ptr);
    }
}