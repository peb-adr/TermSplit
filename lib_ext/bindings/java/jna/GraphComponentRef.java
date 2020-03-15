package livesplitcore;

import com.sun.jna.*;

/**
 * The Graph Component visualizes how far the current attempt has been ahead or
 * behind the chosen comparison throughout the whole attempt. All the
 * individual deltas are shown as points in a graph.
 */
public class GraphComponentRef {
    Pointer ptr;
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
        String result = LiveSplitCoreNative.INSTANCE.GraphComponent_state_as_json(this.ptr, timer.ptr, layoutSettings.ptr);
        return result;
    }
    /**
     * Calculates the component's state based on the timer and layout settings
     * provided.
     */
    public GraphComponentState state(TimerRef timer, GeneralLayoutSettingsRef layoutSettings) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (timer.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (layoutSettings.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        GraphComponentState result = new GraphComponentState(LiveSplitCoreNative.INSTANCE.GraphComponent_state(this.ptr, timer.ptr, layoutSettings.ptr));
        return result;
    }
    GraphComponentRef(Pointer ptr) {
        this.ptr = ptr;
    }
}