package livesplitcore

/**
 * A run parsed by the Composite Parser. This contains the Run itself and
 * information about which parser parsed it.
 */
open class ParseRunResultRef internal constructor(var ptr: Long) {
    /**
     * Returns true if the Run got parsed successfully. false is returned otherwise.
     */
    fun parsedSuccessfully(): Boolean {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.ParseRunResult_parsedSuccessfully(this.ptr)
        return result
    }
    /**
     * Accesses the name of the Parser that parsed the Run. You may not call this
     * if the Run wasn't parsed successfully.
     */
    fun timerKind(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.ParseRunResult_timerKind(this.ptr)
        return result
    }
    /**
     * Checks whether the Parser parsed a generic timer. Since a generic timer can
     * have any name, it may clash with the specific timer formats that
     * livesplit-core supports. With this function you can determine if a generic
     * timer format was parsed, instead of one of the more specific timer formats.
     */
    fun isGenericTimer(): Boolean {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.ParseRunResult_isGenericTimer(this.ptr)
        return result
    }
}