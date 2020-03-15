package livesplitcore;

/**
 * A Layout allows you to combine multiple components together to visualize a
 * variety of information the runner is interested in.
 */
public class Layout extends LayoutRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.Layout_drop(this.ptr);
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
     * Creates a new empty layout with no components.
     */
    public Layout() {
        super(0);
        this.ptr = LiveSplitCoreNative.Layout_new();
    }
    /**
     * Creates a new default layout that contains a default set of components
     * in order to provide a good default layout for runners. Which components
     * are provided by this and how they are configured may change in the
     * future.
     */
    public static Layout defaultLayout() {
        Layout result = new Layout(LiveSplitCoreNative.Layout_defaultLayout());
        return result;
    }
    /**
     * Parses a layout from the given JSON description of its settings. null is
     * returned if it couldn't be parsed.
     */
    public static Layout parseJson(String settings) {
        Layout result = new Layout(LiveSplitCoreNative.Layout_parseJson(settings));
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    /**
     * Parses a layout saved by the original LiveSplit. This is lossy, as not
     * everything can be converted completely. null is returned if it couldn't be
     * parsed at all.
     */
    public static Layout parseOriginalLivesplit(long data, long length) {
        Layout result = new Layout(LiveSplitCoreNative.Layout_parseOriginalLivesplit(data, length));
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    Layout(long ptr) {
        super(ptr);
    }
}