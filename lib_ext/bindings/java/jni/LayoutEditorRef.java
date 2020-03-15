package livesplitcore;

/**
 * The Layout Editor allows modifying Layouts while ensuring all the different
 * invariants of the Layout objects are upheld no matter what kind of
 * operations are being applied. It provides the current state of the editor as
 * state objects that can be visualized by any kind of User Interface.
 */
public class LayoutEditorRef {
    long ptr;
    /**
     * Encodes the Layout Editor's state as JSON in order to visualize it.
     */
    public String stateAsJson() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.LayoutEditor_stateAsJson(this.ptr);
        return result;
    }
    LayoutEditorRef(long ptr) {
        this.ptr = ptr;
    }
}