package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class TimerComponentStateRef {
    long ptr;
    /**
     * The time shown by the component without the fractional part.
     */
    public String time() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.TimerComponentState_time(this.ptr);
        return result;
    }
    /**
     * The fractional part of the time shown (including the dot).
     */
    public String fraction() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.TimerComponentState_fraction(this.ptr);
        return result;
    }
    /**
     * The semantic coloring information the time carries.
     */
    public String semanticColor() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.TimerComponentState_semanticColor(this.ptr);
        return result;
    }
    TimerComponentStateRef(long ptr) {
        this.ptr = ptr;
    }
}