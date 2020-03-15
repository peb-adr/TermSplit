package livesplitcore

/**
 * With a Hotkey System the runner can use hotkeys on their keyboard to control
 * the Timer. The hotkeys are global, so the application doesn't need to be in
 * focus. The behavior of the hotkeys depends on the platform and is stubbed
 * out on platforms that don't support hotkeys. You can turn off a Hotkey
 * System temporarily. By default the Hotkey System is activated.
 */
open class HotkeySystemRefMut internal constructor(ptr: Long) : HotkeySystemRef(ptr) {
    /**
     * Applies a new hotkey configuration to the Hotkey System. Each hotkey is
     * changed to the one specified in the configuration. This operation may fail
     * if you provide a hotkey configuration where a hotkey is used for multiple
     * operations. Returns false if the operation failed.
     */
    fun setConfig(config: HotkeyConfig): Boolean {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (config.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.HotkeySystem_setConfig(this.ptr, config.ptr)
        config.ptr = 0L
        return result
    }
}