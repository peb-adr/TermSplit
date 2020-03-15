package livesplitcore;

import com.sun.jna.*;

/**
 * The Run Metadata stores additional information about a run, like the
 * platform and region of the game. All of this information is optional.
 */
public class RunMetadataRef {
    Pointer ptr;
    /**
     * Accesses the speedrun.com Run ID of the run. This Run ID specify which
     * Record on speedrun.com this run is associated with. This should be
     * changed once the Personal Best doesn't match up with that record
     * anymore. This may be empty if there's no association.
     */
    public String runId() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.RunMetadata_run_id(this.ptr);
        return result;
    }
    /**
     * Accesses the name of the platform this game is run on. This may be empty
     * if it's not specified.
     */
    public String platformName() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.RunMetadata_platform_name(this.ptr);
        return result;
    }
    /**
     * Returns true if this speedrun is done on an emulator. However false
     * may also indicate that this information is simply not known.
     */
    public boolean usesEmulator() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.RunMetadata_uses_emulator(this.ptr) != 0;
        return result;
    }
    /**
     * Accesses the name of the region this game is from. This may be empty if
     * it's not specified.
     */
    public String regionName() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.RunMetadata_region_name(this.ptr);
        return result;
    }
    /**
     * Returns an iterator iterating over all the variables and their values
     * that have been specified.
     */
    public RunMetadataVariablesIter variables() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        RunMetadataVariablesIter result = new RunMetadataVariablesIter(LiveSplitCoreNative.INSTANCE.RunMetadata_variables(this.ptr));
        return result;
    }
    RunMetadataRef(Pointer ptr) {
        this.ptr = ptr;
    }
}