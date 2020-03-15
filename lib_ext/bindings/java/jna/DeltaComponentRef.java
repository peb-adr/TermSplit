package livesplitcore;

import com.sun.jna.*;

/**
 * The Delta Component is a component that shows the how far ahead or behind
 * the current attempt is compared to the chosen comparison.
 */
public class DeltaComponentRef {
    Pointer ptr;
    DeltaComponentRef(Pointer ptr) {
        this.ptr = ptr;
    }
}