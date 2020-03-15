package livesplitcore

/**
 * The general settings of the layout that apply to all components.
 */
open class GeneralLayoutSettings : GeneralLayoutSettingsRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.GeneralLayoutSettings_drop(this.ptr)
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
     * Creates a default general layout settings configuration.
     */
    fun createDefault(): GeneralLayoutSettings {
        val result = GeneralLayoutSettings(LiveSplitCoreNative.GeneralLayoutSettings_default())
        return result
    }
    }
    internal constructor(ptr: Long) : super(ptr) {}
}