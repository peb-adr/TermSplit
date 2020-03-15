package livesplitcore;

/**
 * With a Hotkey System the runner can use hotkeys on their keyboard to control
 * the Timer. The hotkeys are global, so the application doesn't need to be in
 * focus. The behavior of the hotkeys depends on the platform and is stubbed
 * out on platforms that don't support hotkeys. You can turn off a Hotkey
 * System temporarily. By default the Hotkey System is activated.
 */
public class HotkeySystem extends HotkeySystemRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.HotkeySystem_drop(this.ptr);
            ptr = 0;
        }
    }
    protected void finalize() throws Throwable {
        drop();
        super.finalize();
    }
    public void close() {
        drop();
    }
    /**
     * Creates a new Hotkey System for a Timer with the default hotkeys.
     */
    public static HotkeySystem create(SharedTimer sharedTimer) {
        if (sharedTimer.ptr == 0) {
            throw new RuntimeException();
        }
        HotkeySystem result = new HotkeySystem(LiveSplitCoreNative.HotkeySystem_new(sharedTimer.ptr));
        sharedTimer.ptr = 0;
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    /**
     * Creates a new Hotkey System for a Timer with a custom configuration for the
     * hotkeys.
     */
    public static HotkeySystem withConfig(SharedTimer sharedTimer, HotkeyConfig config) {
        if (sharedTimer.ptr == 0) {
            throw new RuntimeException();
        }
        if (config.ptr == 0) {
            throw new RuntimeException();
        }
        HotkeySystem result = new HotkeySystem(LiveSplitCoreNative.HotkeySystem_withConfig(sharedTimer.ptr, config.ptr));
        sharedTimer.ptr = 0;
        config.ptr = 0;
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    HotkeySystem(long ptr) {
        super(ptr);
    }
}