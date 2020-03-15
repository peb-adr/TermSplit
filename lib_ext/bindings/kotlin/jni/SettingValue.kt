package livesplitcore

/**
 * Describes a setting's value. Such a value can be of a variety of different
 * types.
 */
open class SettingValue : SettingValueRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.SettingValue_drop(this.ptr)
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
     * Creates a new setting value from a boolean value.
     */
    fun fromBool(value: Boolean): SettingValue {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromBool(value))
        return result
    }
    /**
     * Creates a new setting value from an unsigned integer.
     */
    fun fromUint(value: Int): SettingValue {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromUint(value))
        return result
    }
    /**
     * Creates a new setting value from a signed integer.
     */
    fun fromInt(value: Int): SettingValue {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromInt(value))
        return result
    }
    /**
     * Creates a new setting value from a string.
     */
    fun fromString(value: String): SettingValue {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromString(value))
        return result
    }
    /**
     * Creates a new setting value from a string that has the type `optional string`.
     */
    fun fromOptionalString(value: String): SettingValue {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromOptionalString(value))
        return result
    }
    /**
     * Creates a new empty setting value that has the type `optional string`.
     */
    fun fromOptionalEmptyString(): SettingValue {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromOptionalEmptyString())
        return result
    }
    /**
     * Creates a new setting value from a floating point number.
     */
    fun fromFloat(value: Double): SettingValue {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromFloat(value))
        return result
    }
    /**
     * Creates a new setting value from an accuracy name. If it doesn't match a
     * known accuracy, null is returned.
     */
    fun fromAccuracy(value: String): SettingValue? {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromAccuracy(value))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    /**
     * Creates a new setting value from a digits format name. If it doesn't match a
     * known digits format, null is returned.
     */
    fun fromDigitsFormat(value: String): SettingValue? {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromDigitsFormat(value))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    /**
     * Creates a new setting value from a timing method name with the type
     * `optional timing method`. If it doesn't match a known timing method, null
     * is returned.
     */
    fun fromOptionalTimingMethod(value: String): SettingValue? {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromOptionalTimingMethod(value))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    /**
     * Creates a new empty setting value with the type `optional timing method`.
     */
    fun fromOptionalEmptyTimingMethod(): SettingValue {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromOptionalEmptyTimingMethod())
        return result
    }
    /**
     * Creates a new setting value from the color provided as RGBA.
     */
    fun fromColor(r: Float, g: Float, b: Float, a: Float): SettingValue {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromColor(r, g, b, a))
        return result
    }
    /**
     * Creates a new setting value from the color provided as RGBA with the type
     * `optional color`.
     */
    fun fromOptionalColor(r: Float, g: Float, b: Float, a: Float): SettingValue {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromOptionalColor(r, g, b, a))
        return result
    }
    /**
     * Creates a new empty setting value with the type `optional color`.
     */
    fun fromOptionalEmptyColor(): SettingValue {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromOptionalEmptyColor())
        return result
    }
    /**
     * Creates a new setting value that is a transparent gradient.
     */
    fun fromTransparentGradient(): SettingValue {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromTransparentGradient())
        return result
    }
    /**
     * Creates a new setting value from the vertical gradient provided as two RGBA colors.
     */
    fun fromVerticalGradient(r1: Float, g1: Float, b1: Float, a1: Float, r2: Float, g2: Float, b2: Float, a2: Float): SettingValue {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromVerticalGradient(r1, g1, b1, a1, r2, g2, b2, a2))
        return result
    }
    /**
     * Creates a new setting value from the horizontal gradient provided as two RGBA colors.
     */
    fun fromHorizontalGradient(r1: Float, g1: Float, b1: Float, a1: Float, r2: Float, g2: Float, b2: Float, a2: Float): SettingValue {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromHorizontalGradient(r1, g1, b1, a1, r2, g2, b2, a2))
        return result
    }
    /**
     * Creates a new setting value from the alternating gradient provided as two RGBA colors.
     */
    fun fromAlternatingGradient(r1: Float, g1: Float, b1: Float, a1: Float, r2: Float, g2: Float, b2: Float, a2: Float): SettingValue {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromAlternatingGradient(r1, g1, b1, a1, r2, g2, b2, a2))
        return result
    }
    /**
     * Creates a new setting value from the alignment name provided. If it doesn't
     * match a known alignment, null is returned.
     */
    fun fromAlignment(value: String): SettingValue? {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromAlignment(value))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    /**
     * Creates a new setting value from the column start with name provided. If it
     * doesn't match a known column start with, null is returned.
     */
    fun fromColumnStartWith(value: String): SettingValue? {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromColumnStartWith(value))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    /**
     * Creates a new setting value from the column update with name provided. If it
     * doesn't match a known column update with, null is returned.
     */
    fun fromColumnUpdateWith(value: String): SettingValue? {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromColumnUpdateWith(value))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    /**
     * Creates a new setting value from the column update trigger. If it doesn't
     * match a known column update trigger, null is returned.
     */
    fun fromColumnUpdateTrigger(value: String): SettingValue? {
        val result = SettingValue(LiveSplitCoreNative.SettingValue_fromColumnUpdateTrigger(value))
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    }
    internal constructor(ptr: Long) : super(ptr) {}
}