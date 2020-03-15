package livesplitcore;

/**
 * The Run Metadata stores additional information about a run, like the
 * platform and region of the game. All of this information is optional.
 */
public class RunMetadataRef {
    long ptr;
    /**
     * Accesses the speedrun.com Run ID of the run. This Run ID specify which
     * Record on speedrun.com this run is associated with. This should be
     * changed once the Personal Best doesn't match up with that record
     * anymore. This may be empty if there's no association.
     */
    public String runId() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.RunMetadata_runId(this.ptr);
        return result;
    }
    /**
     * Accesses the name of the platform this game is run on. This may be empty
     * if it's not specified.
     */
    public String platformName() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.RunMetadata_platformName(this.ptr);
        return result;
    }
    /**
     * Returns true if this speedrun is done on an emulator. However false
     * may also indicate that this information is simply not known.
     */
    public boolean usesEmulator() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.RunMetadata_usesEmulator(this.ptr);
        return result;
    }
    /**
     * Accesses the name of the region this game is from. This may be empty if
     * it's not specified.
     */
    public String regionName() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.RunMetadata_regionName(this.ptr);
        return result;
    }
    /**
     * Returns an iterator iterating over all the variables and their values
     * that have been specified.
     */
    public RunMetadataVariablesIter variables() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        RunMetadataVariablesIter result = new RunMetadataVariablesIter(LiveSplitCoreNative.RunMetadata_variables(this.ptr));
        return result;
    }
    RunMetadataRef(long ptr) {
        this.ptr = ptr;
    }
}