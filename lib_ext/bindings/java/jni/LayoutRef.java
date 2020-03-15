package livesplitcore;

/**
 * A Layout allows you to combine multiple components together to visualize a
 * variety of information the runner is interested in.
 */
public class LayoutRef {
    long ptr;
    /**
     * Clones the layout.
     */
    public Layout copy() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Layout result = new Layout(LiveSplitCoreNative.Layout_clone(this.ptr));
        return result;
    }
    /**
     * Encodes the settings of the layout as JSON.
     */
    public String settingsAsJson() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.Layout_settingsAsJson(this.ptr);
        return result;
    }
    LayoutRef(long ptr) {
        this.ptr = ptr;
    }
}