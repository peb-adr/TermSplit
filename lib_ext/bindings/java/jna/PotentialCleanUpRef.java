package livesplitcore;

import com.sun.jna.*;

/**
 * Describes a potential clean up that could be applied. You can query a
 * message describing the details of this potential clean up. A potential clean
 * up can then be turned into an actual clean up in order to apply it to the
 * Run.
 */
public class PotentialCleanUpRef {
    Pointer ptr;
    /**
     * Accesses the message describing the potential clean up that can be applied
     * to a Run.
     */
    public String message() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.PotentialCleanUp_message(this.ptr);
        return result;
    }
    PotentialCleanUpRef(Pointer ptr) {
        this.ptr = ptr;
    }
}