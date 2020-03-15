package livesplitcore

/**
 * A Run Metadata variable is an arbitrary key value pair storing additional
 * information about the category. An example of this may be whether Amiibos
 * are used in the category.
 */
open class RunMetadataVariableRef internal constructor(var ptr: Long) {
    /**
     * Accesses the name of this Run Metadata variable.
     */
    fun name(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.RunMetadataVariable_name(this.ptr)
        return result
    }
    /**
     * Accesses the value of this Run Metadata variable.
     */
    fun value(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.RunMetadataVariable_value(this.ptr)
        return result
    }
}