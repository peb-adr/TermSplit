package livesplitcore;

import com.sun.jna.*;

/**
 * The general settings of the layout that apply to all components.
 */
public class GeneralLayoutSettings extends GeneralLayoutSettingsRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.GeneralLayoutSettings_drop(this.ptr);
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
     * Creates a default general layout settings configuration.
     */
    public static GeneralLayoutSettings createDefault() {
        GeneralLayoutSettings result = new GeneralLayoutSettings(LiveSplitCoreNative.INSTANCE.GeneralLayoutSettings_default());
        return result;
    }
    GeneralLayoutSettings(Pointer ptr) {
        super(ptr);
    }
}