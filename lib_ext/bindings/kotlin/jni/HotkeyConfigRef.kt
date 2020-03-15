package livesplitcore

/**
 * The configuration to use for a Hotkey System. It describes with keys to use
 * as hotkeys for the different actions.
 */
open class HotkeyConfigRef internal constructor(var ptr: Long) {
    /**
     * Encodes generic description of the settings available for the hotkey
     * configuration and their current values as JSON.
     */
    fun settingsDescriptionAsJson(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.HotkeyConfig_settingsDescriptionAsJson(this.ptr)
        return result
    }
    /**
     * Encodes the hotkey configuration as JSON.
     */
    fun asJson(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.HotkeyConfig_asJson(this.ptr)
        return result
    }
}