package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class TextComponentState extends TextComponentStateRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.TextComponentState_drop(this.ptr);
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
    TextComponentState(long ptr) {
        super(ptr);
    }
}