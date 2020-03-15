package livesplitcore

/**
 * The Run Metadata stores additional information about a run, like the
 * platform and region of the game. All of this information is optional.
 */
open class RunMetadataRef internal constructor(var ptr: Long) {
    /**
     * Accesses the speedrun.com Run ID of the run. This Run ID specify which
     * Record on speedrun.com this run is associated with. This should be
     * changed once the Personal Best doesn't match up with that record
     * anymore. This may be empty if there's no association.
     */
    fun runId(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.RunMetadata_runId(this.ptr)
        return result
    }
    /**
     * Accesses the name of the platform this game is run on. This may be empty
     * if it's not specified.
     */
    fun platformName(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.RunMetadata_platformName(this.ptr)
        return result
    }
    /**
     * Returns true if this speedrun is done on an emulator. However false
     * may also indicate that this information is simply not known.
     */
    fun usesEmulator(): Boolean {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.RunMetadata_usesEmulator(this.ptr)
        return result
    }
    /**
     * Accesses the name of the region this game is from. This may be empty if
     * it's not specified.
     */
    fun regionName(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.RunMetadata_regionName(this.ptr)
        return result
    }
    /**
     * Returns an iterator iterating over all the variables and their values
     * that have been specified.
     */
    fun variables(): RunMetadataVariablesIter {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = RunMetadataVariablesIter(LiveSplitCoreNative.RunMetadata_variables(this.ptr))
        return result
    }
}