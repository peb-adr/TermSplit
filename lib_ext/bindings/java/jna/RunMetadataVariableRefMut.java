package livesplitcore;

import com.sun.jna.*;

/**
 * A Run Metadata variable is an arbitrary key value pair storing additional
 * information about the category. An example of this may be whether Amiibos
 * are used in the category.
 */
public class RunMetadataVariableRefMut extends RunMetadataVariableRef {
    RunMetadataVariableRefMut(Pointer ptr) {
        super(ptr);
    }
}