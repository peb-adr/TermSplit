package livesplitcore;

import com.sun.jna.*;

/**
 * An iterator iterating over all the Run Metadata variables and their values
 * that have been specified.
 */
public class RunMetadataVariablesIterRefMut extends RunMetadataVariablesIterRef {
    /**
     * Accesses the next Run Metadata variable. Returns null if there are no more
     * variables.
     */
    public RunMetadataVariableRef next() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        RunMetadataVariableRef result = new RunMetadataVariableRef(LiveSplitCoreNative.INSTANCE.RunMetadataVariablesIter_next(this.ptr));
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    RunMetadataVariablesIterRefMut(Pointer ptr) {
        super(ptr);
    }
}