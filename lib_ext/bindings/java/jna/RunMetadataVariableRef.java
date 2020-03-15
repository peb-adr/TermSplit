package livesplitcore;

import com.sun.jna.*;

/**
 * A Run Metadata variable is an arbitrary key value pair storing additional
 * information about the category. An example of this may be whether Amiibos
 * are used in the category.
 */
public class RunMetadataVariableRef {
    Pointer ptr;
    /**
     * Accesses the name of this Run Metadata variable.
     */
    public String name() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.RunMetadataVariable_name(this.ptr);
        return result;
    }
    /**
     * Accesses the value of this Run Metadata variable.
     */
    public String value() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.RunMetadataVariable_value(this.ptr);
        return result;
    }
    RunMetadataVariableRef(Pointer ptr) {
        this.ptr = ptr;
    }
}