package livesplitcore;

import com.sun.jna.*;

/**
 * The configuration to use for a Hotkey System. It describes with keys to use
 * as hotkeys for the different actions.
 */
public class HotkeyConfig extends HotkeyConfigRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.HotkeyConfig_drop(this.ptr);
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
     * Parses a hotkey configuration from the given JSON description. null is
     * returned if it couldn't be parsed.
     */
    public static HotkeyConfig parseJson(String settings) {
        HotkeyConfig result = new HotkeyConfig(LiveSplitCoreNative.INSTANCE.HotkeyConfig_parse_json(settings));
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    HotkeyConfig(Pointer ptr) {
        super(ptr);
    }
}