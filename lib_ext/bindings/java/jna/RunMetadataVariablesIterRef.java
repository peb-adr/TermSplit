package livesplitcore;

import com.sun.jna.*;

/**
 * An iterator iterating over all the Run Metadata variables and their values
 * that have been specified.
 */
public class RunMetadataVariablesIterRef {
    Pointer ptr;
    RunMetadataVariablesIterRef(Pointer ptr) {
        this.ptr = ptr;
    }
}