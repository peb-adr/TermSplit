package livesplitcore;

import com.sun.jna.*;

/**
 * The Blank Space Component is simply an empty component that doesn't show
 * anything other than a background. It mostly serves as padding between other
 * components.
 */
public class BlankSpaceComponentRef {
    Pointer ptr;
    BlankSpaceComponentRef(Pointer ptr) {
        this.ptr = ptr;
    }
}