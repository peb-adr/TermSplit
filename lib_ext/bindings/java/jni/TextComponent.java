package livesplitcore;

/**
 * The Text Component simply visualizes any given text. This can either be a
 * single centered text, or split up into a left and right text, which is
 * suitable for a situation where you have a label and a value.
 */
public class TextComponent extends TextComponentRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.TextComponent_drop(this.ptr);
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
     * Creates a new Text Component.
     */
    public TextComponent() {
        super(0);
        this.ptr = LiveSplitCoreNative.TextComponent_new();
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     */
    public Component intoGeneric() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Component result = new Component(LiveSplitCoreNative.TextComponent_intoGeneric(this.ptr));
        this.ptr = 0;
        return result;
    }
    TextComponent(long ptr) {
        super(ptr);
    }
}