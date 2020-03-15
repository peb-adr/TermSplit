package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class TextComponentStateRef {
    long ptr;
    /**
     * Accesses the left part of the text. If the text isn't split up, an empty
     * string is returned instead.
     */
    public String left() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.TextComponentState_left(this.ptr);
        return result;
    }
    /**
     * Accesses the right part of the text. If the text isn't split up, an empty
     * string is returned instead.
     */
    public String right() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.TextComponentState_right(this.ptr);
        return result;
    }
    /**
     * Accesses the centered text. If the text isn't centered, an empty string is
     * returned instead.
     */
    public String center() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.TextComponentState_center(this.ptr);
        return result;
    }
    /**
     * Returns whether the text is split up into a left and right part.
     */
    public boolean isSplit() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.TextComponentState_isSplit(this.ptr);
        return result;
    }
    TextComponentStateRef(long ptr) {
        this.ptr = ptr;
    }
}