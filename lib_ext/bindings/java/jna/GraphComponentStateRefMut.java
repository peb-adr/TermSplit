package livesplitcore;

import com.sun.jna.*;

/**
 * The state object describes the information to visualize for this component.
 * All the coordinates are in the range 0..1.
 */
public class GraphComponentStateRefMut extends GraphComponentStateRef {
    GraphComponentStateRefMut(Pointer ptr) {
        super(ptr);
    }
}