package livesplitcore

/**
 * The configuration to use for a Hotkey System. It describes with keys to use
 * as hotkeys for the different actions.
 */
open class HotkeyConfig : HotkeyConfigRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.HotkeyConfig_drop(this.ptr)
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
     * Parses a hotkey configuration from the given JSON description. null is
     * returned if it couldn't be parsed.
     */
    fun parseJson(settings: String): HotkeyConfig? {
        val result = HotkeyConfig(LiveSplitCoreNative.HotkeyConfig_parseJson(settings))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    }
    internal constructor(ptr: Long) : super(ptr) {}
}