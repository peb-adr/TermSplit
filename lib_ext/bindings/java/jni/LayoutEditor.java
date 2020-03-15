package livesplitcore;

/**
 * The Layout Editor allows modifying Layouts while ensuring all the different
 * invariants of the Layout objects are upheld no matter what kind of
 * operations are being applied. It provides the current state of the editor as
 * state objects that can be visualized by any kind of User Interface.
 */
public class LayoutEditor extends LayoutEditorRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            ptr = 0;
        }
    }
    protected void finalize() throws Throwable {
        drop();
        super.finalize();
    }
    public void close() {
        drop();
    }
    /**
     * Creates a new Layout Editor that modifies the Layout provided. Creation of
     * the Layout Editor fails when a Layout with no components is provided. In
     * that case null is returned instead.
     */
    public static LayoutEditor create(Layout layout) {
        if (layout.ptr == 0) {
            throw new RuntimeException();
        }
        LayoutEditor result = new LayoutEditor(LiveSplitCoreNative.LayoutEditor_new(layout.ptr));
        layout.ptr = 0;
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    /**
     * Closes the Layout Editor and gives back access to the modified Layout. In
     * case you want to implement a Cancel Button, just dispose the Layout object
     * you get here.
     */
    public Layout finish() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Layout result = new Layout(LiveSplitCoreNative.LayoutEditor_close(this.ptr));
        this.ptr = 0;
        return result;
    }
    LayoutEditor(long ptr) {
        super(ptr);
    }
}