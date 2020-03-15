package livesplitcore;

import com.sun.jna.*;

/**
 * The Text Component simply visualizes any given text. This can either be a
 * single centered text, or split up into a left and right text, which is
 * suitable for a situation where you have a label and a value.
 */
public class TextComponentRef {
    Pointer ptr;
    /**
     * Encodes the component's state information as JSON.
     */
    public String stateAsJson() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.TextComponent_state_as_json(this.ptr);
        return result;
    }
    /**
     * Calculates the component's state.
     */
    public TextComponentState state() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TextComponentState result = new TextComponentState(LiveSplitCoreNative.INSTANCE.TextComponent_state(this.ptr));
        return result;
    }
    TextComponentRef(Pointer ptr) {
        this.ptr = ptr;
    }
}