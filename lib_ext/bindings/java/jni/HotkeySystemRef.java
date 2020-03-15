package livesplitcore;

/**
 * With a Hotkey System the runner can use hotkeys on their keyboard to control
 * the Timer. The hotkeys are global, so the application doesn't need to be in
 * focus. The behavior of the hotkeys depends on the platform and is stubbed
 * out on platforms that don't support hotkeys. You can turn off a Hotkey
 * System temporarily. By default the Hotkey System is activated.
 */
public class HotkeySystemRef {
    long ptr;
    /**
     * Deactivates the Hotkey System. No hotkeys will go through until it gets
     * activated again. If it's already deactivated, nothing happens.
     */
    public void deactivate() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.HotkeySystem_deactivate(this.ptr);
    }
    /**
     * Activates a previously deactivated Hotkey System. If it's already
     * active, nothing happens.
     */
    public void activate() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.HotkeySystem_activate(this.ptr);
    }
    /**
     * Returns the hotkey configuration currently in use by the Hotkey System.
     */
    public HotkeyConfig config() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        HotkeyConfig result = new HotkeyConfig(LiveSplitCoreNative.HotkeySystem_config(this.ptr));
        return result;
    }
    HotkeySystemRef(long ptr) {
        this.ptr = ptr;
    }
}