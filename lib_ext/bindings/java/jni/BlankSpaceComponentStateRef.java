package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class BlankSpaceComponentStateRef {
    long ptr;
    /**
     * The size of the component.
     */
    public int size() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        int result = LiveSplitCoreNative.BlankSpaceComponentState_size(this.ptr);
        return result;
    }
    BlankSpaceComponentStateRef(long ptr) {
        this.ptr = ptr;
    }
}