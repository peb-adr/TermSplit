package livesplitcore;

import com.sun.jna.*;

/**
 * With a Hotkey System the runner can use hotkeys on their keyboard to control
 * the Timer. The hotkeys are global, so the application doesn't need to be in
 * focus. The behavior of the hotkeys depends on the platform and is stubbed
 * out on platforms that don't support hotkeys. You can turn off a Hotkey
 * System temporarily. By default the Hotkey System is activated.
 */
public class HotkeySystem extends HotkeySystemRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.HotkeySystem_drop(this.ptr);
            ptr = Pointer.NULL;
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
        if (sharedTimer.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        HotkeySystem result = new HotkeySystem(LiveSplitCoreNative.INSTANCE.HotkeySystem_new(sharedTimer.ptr));
        sharedTimer.ptr = Pointer.NULL;
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    /**
     * Creates a new Hotkey System for a Timer with a custom configuration for the
     * hotkeys.
     */
    public static HotkeySystem withConfig(SharedTimer sharedTimer, HotkeyConfig config) {
        if (sharedTimer.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (config.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        HotkeySystem result = new HotkeySystem(LiveSplitCoreNative.INSTANCE.HotkeySystem_with_config(sharedTimer.ptr, config.ptr));
        sharedTimer.ptr = Pointer.NULL;
        config.ptr = Pointer.NULL;
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    HotkeySystem(Pointer ptr) {
        super(ptr);
    }
}