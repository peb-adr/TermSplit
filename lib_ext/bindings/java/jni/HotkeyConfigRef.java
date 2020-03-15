package livesplitcore;

/**
 * The configuration to use for a Hotkey System. It describes with keys to use
 * as hotkeys for the different actions.
 */
public class HotkeyConfigRef {
    long ptr;
    /**
     * Encodes generic description of the settings available for the hotkey
     * configuration and their current values as JSON.
     */
    public String settingsDescriptionAsJson() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.HotkeyConfig_settingsDescriptionAsJson(this.ptr);
        return result;
    }
    /**
     * Encodes the hotkey configuration as JSON.
     */
    public String asJson() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.HotkeyConfig_asJson(this.ptr);
        return result;
    }
    HotkeyConfigRef(long ptr) {
        this.ptr = ptr;
    }
}