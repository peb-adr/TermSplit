package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class TitleComponentState extends TitleComponentStateRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.TitleComponentState_drop(this.ptr);
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
    TitleComponentState(long ptr) {
        super(ptr);
    }
}