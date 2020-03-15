package livesplitcore;

import com.sun.jna.*;

/**
 * The state object that describes a single segment's information to visualize.
 */
public class SplitComponentStateRefMut extends SplitComponentStateRef {
    SplitComponentStateRefMut(Pointer ptr) {
        super(ptr);
    }
}