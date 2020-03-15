package livesplitcore;

/**
 * Describes a potential clean up that could be applied. You can query a
 * message describing the details of this potential clean up. A potential clean
 * up can then be turned into an actual clean up in order to apply it to the
 * Run.
 */
public class PotentialCleanUpRef {
    long ptr;
    /**
     * Accesses the message describing the potential clean up that can be applied
     * to a Run.
     */
    public String message() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.PotentialCleanUp_message(this.ptr);
        return result;
    }
    PotentialCleanUpRef(long ptr) {
        this.ptr = ptr;
    }
}