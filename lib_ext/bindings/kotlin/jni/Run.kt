package livesplitcore

/**
 * A Run stores the split times for a specific game and category of a runner.
 */
open class Run : RunRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.Run_drop(this.ptr)
            ptr = 0
        }
    }
    protected fun finalize() {
        drop()
    }
    override fun close() {
        drop()
    }
    companion object {
    /**
     * Attempts to parse a splits file from an array by invoking the corresponding
     * parser for the file format detected. A path to the splits file can be
     * provided, which helps saving the splits file again later. Additionally you
     * need to specify if additional files, like external images are allowed to be
     * loaded. If you are using livesplit-core in a server-like environment, set
     * this to false. Only client-side applications should set this to true.
     */
    fun parse(data: Long, length: Long, path: String, loadFiles: Boolean): ParseRunResult {
        val result = ParseRunResult(LiveSplitCoreNative.Run_parse(data, length, path, loadFiles))
        return result
    }
    /**
     * Attempts to parse a splits file from a file by invoking the corresponding
     * parser for the file format detected. A path to the splits file can be
     * provided, which helps saving the splits file again later. Additionally you
     * need to specify if additional files, like external images are allowed to be
     * loaded. If you are using livesplit-core in a server-like environment, set
     * this to false. Only client-side applications should set this to true. On
     * Unix you pass a file descriptor to this function. On Windows you pass a file
     * handle to this function. The file descriptor / handle does not get closed.
     */
    fun parseFileHandle(handle: Long, path: String, loadFiles: Boolean): ParseRunResult {
        val result = ParseRunResult(LiveSplitCoreNative.Run_parseFileHandle(handle, path, loadFiles))
        return result
    }
    fun parse(data: String, path: String, loadFiles: Boolean): ParseRunResult {
        val result = ParseRunResult(LiveSplitCoreNative.Run_parseString(data, path, loadFiles))
        return result
    }
    }
    /**
     * Creates a new Run object with no segments.
     */
    constructor(): super(0L) {
        this.ptr = LiveSplitCoreNative.Run_new()
    }
    internal constructor(ptr: Long) : super(ptr) {}
}