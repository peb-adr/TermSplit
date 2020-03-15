package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class DeltaComponentStateRef {
    long ptr;
    /**
     * The label's text.
     */
    public String text() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.DeltaComponentState_text(this.ptr);
        return result;
    }
    /**
     * The delta.
     */
    public String time() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.DeltaComponentState_time(this.ptr);
        return result;
    }
    /**
     * The semantic coloring information the delta time carries.
     */
    public String semanticColor() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.DeltaComponentState_semanticColor(this.ptr);
        return result;
    }
    DeltaComponentStateRef(long ptr) {
        this.ptr = ptr;
    }
}