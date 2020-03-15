package livesplitcore;

import com.sun.jna.*;

/**
 * With a Hotkey System the runner can use hotkeys on their keyboard to control
 * the Timer. The hotkeys are global, so the application doesn't need to be in
 * focus. The behavior of the hotkeys depends on the platform and is stubbed
 * out on platforms that don't support hotkeys. You can turn off a Hotkey
 * System temporarily. By default the Hotkey System is activated.
 */
public class HotkeySystemRefMut extends HotkeySystemRef {
    /**
     * Applies a new hotkey configuration to the Hotkey System. Each hotkey is
     * changed to the one specified in the configuration. This operation may fail
     * if you provide a hotkey configuration where a hotkey is used for multiple
     * operations. Returns false if the operation failed.
     */
    public boolean setConfig(HotkeyConfig config) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (config.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.HotkeySystem_set_config(this.ptr, config.ptr) != 0;
        config.ptr = Pointer.NULL;
        return result;
    }
    HotkeySystemRefMut(Pointer ptr) {
        super(ptr);
    }
}