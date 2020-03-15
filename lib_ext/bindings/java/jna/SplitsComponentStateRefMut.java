package livesplitcore;

import com.sun.jna.*;

/**
 * The state object that describes a single segment's information to visualize.
 */
public class SplitsComponentStateRefMut extends SplitsComponentStateRef {
    SplitsComponentStateRefMut(Pointer ptr) {
        super(ptr);
    }
}