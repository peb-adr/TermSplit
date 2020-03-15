package livesplitcore;

import com.sun.jna.*;

/**
 * With a Hotkey System the runner can use hotkeys on their keyboard to control
 * the Timer. The hotkeys are global, so the application doesn't need to be in
 * focus. The behavior of the hotkeys depends on the platform and is stubbed
 * out on platforms that don't support hotkeys. You can turn off a Hotkey
 * System temporarily. By default the Hotkey System is activated.
 */
public class HotkeySystemRef {
    Pointer ptr;
    /**
     * Deactivates the Hotkey System. No hotkeys will go through until it gets
     * activated again. If it's already deactivated, nothing happens.
     */
    public void deactivate() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.HotkeySystem_deactivate(this.ptr);
    }
    /**
     * Activates a previously deactivated Hotkey System. If it's already
     * active, nothing happens.
     */
    public void activate() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.HotkeySystem_activate(this.ptr);
    }
    /**
     * Returns the hotkey configuration currently in use by the Hotkey System.
     */
    public HotkeyConfig config() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        HotkeyConfig result = new HotkeyConfig(LiveSplitCoreNative.INSTANCE.HotkeySystem_config(this.ptr));
        return result;
    }
    HotkeySystemRef(Pointer ptr) {
        this.ptr = ptr;
    }
}