package livesplitcore

/**
 * With a Hotkey System the runner can use hotkeys on their keyboard to control
 * the Timer. The hotkeys are global, so the application doesn't need to be in
 * focus. The behavior of the hotkeys depends on the platform and is stubbed
 * out on platforms that don't support hotkeys. You can turn off a Hotkey
 * System temporarily. By default the Hotkey System is activated.
 */
open class HotkeySystem : HotkeySystemRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.HotkeySystem_drop(this.ptr)
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
     * Creates a new Hotkey System for a Timer with the default hotkeys.
     */
    fun create(sharedTimer: SharedTimer): HotkeySystem? {
        if (sharedTimer.ptr == 0L) {
            throw RuntimeException()
        }
        val result = HotkeySystem(LiveSplitCoreNative.HotkeySystem_new(sharedTimer.ptr))
        sharedTimer.ptr = 0L
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    /**
     * Creates a new Hotkey System for a Timer with a custom configuration for the
     * hotkeys.
     */
    fun withConfig(sharedTimer: SharedTimer, config: HotkeyConfig): HotkeySystem? {
        if (sharedTimer.ptr == 0L) {
            throw RuntimeException()
        }
        if (config.ptr == 0L) {
            throw RuntimeException()
        }
        val result = HotkeySystem(LiveSplitCoreNative.HotkeySystem_withConfig(sharedTimer.ptr, config.ptr))
        sharedTimer.ptr = 0L
        config.ptr = 0L
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    }
    internal constructor(ptr: Long) : super(ptr) {}
}