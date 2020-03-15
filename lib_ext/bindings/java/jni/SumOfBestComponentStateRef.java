package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 */
public class SumOfBestComponentStateRef {
    long ptr;
    /**
     * The label's text.
     */
    public String text() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.SumOfBestComponentState_text(this.ptr);
        return result;
    }
    /**
     * The sum of best segments.
     */
    public String time() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.SumOfBestComponentState_time(this.ptr);
        return result;
    }
    SumOfBestComponentStateRef(long ptr) {
        this.ptr = ptr;
    }
}