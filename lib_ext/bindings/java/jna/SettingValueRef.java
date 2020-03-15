package livesplitcore;

import com.sun.jna.*;

/**
 * Describes a setting's value. Such a value can be of a variety of different
 * types.
 */
public class SettingValueRef {
    Pointer ptr;
    SettingValueRef(Pointer ptr) {
        this.ptr = ptr;
    }
}