package livesplitcore;

/**
 * Describes a setting's value. Such a value can be of a variety of different
 * types.
 */
public class SettingValueRef {
    long ptr;
    SettingValueRef(long ptr) {
        this.ptr = ptr;
    }
}