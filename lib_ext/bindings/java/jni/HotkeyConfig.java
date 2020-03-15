package livesplitcore;

/**
 * The configuration to use for a Hotkey System. It describes with keys to use
 * as hotkeys for the different actions.
 */
public class HotkeyConfig extends HotkeyConfigRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.HotkeyConfig_drop(this.ptr);
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
     * Parses a hotkey configuration from the given JSON description. null is
     * returned if it couldn't be parsed.
     */
    public static HotkeyConfig parseJson(String settings) {
        HotkeyConfig result = new HotkeyConfig(LiveSplitCoreNative.HotkeyConfig_parseJson(settings));
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    HotkeyConfig(long ptr) {
        super(ptr);
    }
}