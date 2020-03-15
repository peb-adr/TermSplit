package livesplitcore;

import com.sun.jna.*;

/**
 * An Attempt describes information about an attempt to run a specific category
 * by a specific runner in the past. Every time a new attempt is started and
 * then reset, an Attempt describing general information about it is created.
 */
public class AttemptRefMut extends AttemptRef {
    AttemptRefMut(Pointer ptr) {
        super(ptr);
    }
}