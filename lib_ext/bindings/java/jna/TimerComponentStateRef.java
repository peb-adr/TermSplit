package livesplitcore;

import com.sun.jna.*;

/**
 * The state object describes the information to visualize for this component.
 */
public class TimerComponentStateRef {
    Pointer ptr;
    /**
     * The time shown by the component without the fractional part.
     */
    public String time() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.TimerComponentState_time(this.ptr);
        return result;
    }
    /**
     * The fractional part of the time shown (including the dot).
     */
    public String fraction() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.TimerComponentState_fraction(this.ptr);
        return result;
    }
    /**
     * The semantic coloring information the time carries.
     */
    public String semanticColor() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.TimerComponentState_semantic_color(this.ptr);
        return result;
    }
    TimerComponentStateRef(Pointer ptr) {
        this.ptr = ptr;
    }
}