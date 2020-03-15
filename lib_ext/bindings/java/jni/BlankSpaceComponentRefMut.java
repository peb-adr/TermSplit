package livesplitcore;

/**
 * The Blank Space Component is simply an empty component that doesn't show
 * anything other than a background. It mostly serves as padding between other
 * components.
 */
public class BlankSpaceComponentRefMut extends BlankSpaceComponentRef {
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
        String result = LiveSplitCoreNative.BlankSpaceComponent_stateAsJson(this.ptr, timer.ptr);
        return result;
    }
    /**
     * Calculates the component's state based on the timer provided.
     */
    public BlankSpaceComponentState state(TimerRef timer) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (timer.ptr == 0) {
            throw new RuntimeException();
        }
        BlankSpaceComponentState result = new BlankSpaceComponentState(LiveSplitCoreNative.BlankSpaceComponent_state(this.ptr, timer.ptr));
        return result;
    }
    BlankSpaceComponentRefMut(long ptr) {
        super(ptr);
    }
}