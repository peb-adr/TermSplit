package livesplitcore;

/**
 * The Text Component simply visualizes any given text. This can either be a
 * single centered text, or split up into a left and right text, which is
 * suitable for a situation where you have a label and a value.
 */
public class TextComponentRef {
    long ptr;
    /**
     * Encodes the component's state information as JSON.
     */
    public String stateAsJson() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.TextComponent_stateAsJson(this.ptr);
        return result;
    }
    /**
     * Calculates the component's state.
     */
    public TextComponentState state() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        TextComponentState result = new TextComponentState(LiveSplitCoreNative.TextComponent_state(this.ptr));
        return result;
    }
    TextComponentRef(long ptr) {
        this.ptr = ptr;
    }
}