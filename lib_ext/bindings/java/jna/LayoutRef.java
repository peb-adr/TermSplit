package livesplitcore;

import com.sun.jna.*;

/**
 * A Layout allows you to combine multiple components together to visualize a
 * variety of information the runner is interested in.
 */
public class LayoutRef {
    Pointer ptr;
    /**
     * Clones the layout.
     */
    public Layout copy() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        Layout result = new Layout(LiveSplitCoreNative.INSTANCE.Layout_clone(this.ptr));
        return result;
    }
    /**
     * Encodes the settings of the layout as JSON.
     */
    public String settingsAsJson() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.Layout_settings_as_json(this.ptr);
        return result;
    }
    LayoutRef(Pointer ptr) {
        this.ptr = ptr;
    }
}