package livesplitcore;

import com.sun.jna.*;

/**
 * The Separator Component is a simple component that only serves to render
 * separators between components.
 */
public class SeparatorComponentRef {
    Pointer ptr;
    SeparatorComponentRef(Pointer ptr) {
        this.ptr = ptr;
    }
}