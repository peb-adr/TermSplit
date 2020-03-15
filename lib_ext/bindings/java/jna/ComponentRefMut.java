package livesplitcore;

import com.sun.jna.*;

/**
 * A Component provides information about a run in a way that is easy to
 * visualize. This type can store any of the components provided by this crate.
 */
public class ComponentRefMut extends ComponentRef {
    ComponentRefMut(Pointer ptr) {
        super(ptr);
    }
}