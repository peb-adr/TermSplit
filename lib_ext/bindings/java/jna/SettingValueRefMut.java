package livesplitcore;

import com.sun.jna.*;

/**
 * Describes a setting's value. Such a value can be of a variety of different
 * types.
 */
public class SettingValueRefMut extends SettingValueRef {
    SettingValueRefMut(Pointer ptr) {
        super(ptr);
    }
}