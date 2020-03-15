package livesplitcore;

import com.sun.jna.*;

/**
 * The configuration to use for a Hotkey System. It describes with keys to use
 * as hotkeys for the different actions.
 */
public class HotkeyConfigRef {
    Pointer ptr;
    /**
     * Encodes generic description of the settings available for the hotkey
     * configuration and their current values as JSON.
     */
    public String settingsDescriptionAsJson() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.HotkeyConfig_settings_description_as_json(this.ptr);
        return result;
    }
    /**
     * Encodes the hotkey configuration as JSON.
     */
    public String asJson() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.HotkeyConfig_as_json(this.ptr);
        return result;
    }
    HotkeyConfigRef(Pointer ptr) {
        this.ptr = ptr;
    }
}