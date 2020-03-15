package livesplitcore;

import com.sun.jna.*;

/**
 * The state object describes the information to visualize for this component.
 */
public class DeltaComponentStateRef {
    Pointer ptr;
    /**
     * The label's text.
     */
    public String text() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.DeltaComponentState_text(this.ptr);
        return result;
    }
    /**
     * The delta.
     */
    public String time() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.DeltaComponentState_time(this.ptr);
        return result;
    }
    /**
     * The semantic coloring information the delta time carries.
     */
    public String semanticColor() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.DeltaComponentState_semantic_color(this.ptr);
        return result;
    }
    DeltaComponentStateRef(Pointer ptr) {
        this.ptr = ptr;
    }
}