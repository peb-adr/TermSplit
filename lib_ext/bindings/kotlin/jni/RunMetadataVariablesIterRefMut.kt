package livesplitcore

/**
 * An iterator iterating over all the Run Metadata variables and their values
 * that have been specified.
 */
open class RunMetadataVariablesIterRefMut internal constructor(ptr: Long) : RunMetadataVariablesIterRef(ptr) {
    /**
     * Accesses the next Run Metadata variable. Returns null if there are no more
     * variables.
     */
    fun next(): RunMetadataVariableRef? {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = RunMetadataVariableRef(LiveSplitCoreNative.RunMetadataVariablesIter_next(this.ptr))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
}