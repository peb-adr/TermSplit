package livesplitcore;

import com.sun.jna.*;

/**
 * The general settings of the layout that apply to all components.
 */
public class GeneralLayoutSettingsRef {
    Pointer ptr;
    GeneralLayoutSettingsRef(Pointer ptr) {
        this.ptr = ptr;
    }
}