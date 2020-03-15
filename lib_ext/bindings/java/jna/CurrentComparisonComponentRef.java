package livesplitcore;

import com.sun.jna.*;

/**
 * The Current Comparison Component is a component that shows the name of the
 * comparison that is currently selected to be compared against.
 */
public class CurrentComparisonComponentRef {
    Pointer ptr;
    CurrentComparisonComponentRef(Pointer ptr) {
        this.ptr = ptr;
    }
}