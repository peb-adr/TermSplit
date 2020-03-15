package livesplitcore;

/**
 * The configuration to use for a Hotkey System. It describes with keys to use
 * as hotkeys for the different actions.
 */
public class HotkeyConfigRefMut extends HotkeyConfigRef {
    /**
     * Sets a setting's value by its index to the given value.
     * 
     * false is returned if a hotkey is already in use by a different action.
     * 
     * This panics if the type of the value to be set is not compatible with the
     * type of the setting's value. A panic can also occur if the index of the
     * setting provided is out of bounds.
     */
    public boolean setValue(long index, SettingValue value) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (value.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.HotkeyConfig_setValue(this.ptr, index, value.ptr);
        value.ptr = 0;
        return result;
    }
    HotkeyConfigRefMut(long ptr) {
        super(ptr);
    }
}