package livesplitcore;

/**
 * The general settings of the layout that apply to all components.
 */
public class GeneralLayoutSettings extends GeneralLayoutSettingsRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.GeneralLayoutSettings_drop(this.ptr);
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
     * Creates a default general layout settings configuration.
     */
    public static GeneralLayoutSettings createDefault() {
        GeneralLayoutSettings result = new GeneralLayoutSettings(LiveSplitCoreNative.GeneralLayoutSettings_default());
        return result;
    }
    GeneralLayoutSettings(long ptr) {
        super(ptr);
    }
}