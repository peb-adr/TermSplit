package livesplitcore;

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
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        RunMetadataVariableRef result = new RunMetadataVariableRef(LiveSplitCoreNative.RunMetadataVariablesIter_next(this.ptr));
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    RunMetadataVariablesIterRefMut(long ptr) {
        super(ptr);
    }
}