package livesplitcore;

/**
 * The Graph Component visualizes how far the current attempt has been ahead or
 * behind the chosen comparison throughout the whole attempt. All the
 * individual deltas are shown as points in a graph.
 */
public class GraphComponentRef {
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
        String result = LiveSplitCoreNative.GraphComponent_stateAsJson(this.ptr, timer.ptr, layoutSettings.ptr);
        return result;
    }
    /**
     * Calculates the component's state based on the timer and layout settings
     * provided.
     */
    public GraphComponentState state(TimerRef timer, GeneralLayoutSettingsRef layoutSettings) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (timer.ptr == 0) {
            throw new RuntimeException();
        }
        if (layoutSettings.ptr == 0) {
            throw new RuntimeException();
        }
        GraphComponentState result = new GraphComponentState(LiveSplitCoreNative.GraphComponent_state(this.ptr, timer.ptr, layoutSettings.ptr));
        return result;
    }
    GraphComponentRef(long ptr) {
        this.ptr = ptr;
    }
}