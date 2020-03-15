package livesplitcore;

import com.sun.jna.*;

/**
 * Describes a setting's value. Such a value can be of a variety of different
 * types.
 */
public class SettingValue extends SettingValueRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.SettingValue_drop(this.ptr);
            ptr = Pointer.NULL;
        }
    }
    protected void finalize() throws Throwable {
        drop();
        super.finalize();
    }
    public void close() {
        drop();
    }
    /**
     * Creates a new setting value from a boolean value.
     */
    public static SettingValue fromBool(boolean value) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_bool((byte)(value ? 1 : 0)));
        return result;
    }
    /**
     * Creates a new setting value from an unsigned integer.
     */
    public static SettingValue fromUint(int value) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_uint(value));
        return result;
    }
    /**
     * Creates a new setting value from a signed integer.
     */
    public static SettingValue fromInt(int value) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_int(value));
        return result;
    }
    /**
     * Creates a new setting value from a string.
     */
    public static SettingValue fromString(String value) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_string(value));
        return result;
    }
    /**
     * Creates a new setting value from a string that has the type `optional string`.
     */
    public static SettingValue fromOptionalString(String value) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_optional_string(value));
        return result;
    }
    /**
     * Creates a new empty setting value that has the type `optional string`.
     */
    public static SettingValue fromOptionalEmptyString() {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_optional_empty_string());
        return result;
    }
    /**
     * Creates a new setting value from a floating point number.
     */
    public static SettingValue fromFloat(double value) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_float(value));
        return result;
    }
    /**
     * Creates a new setting value from an accuracy name. If it doesn't match a
     * known accuracy, null is returned.
     */
    public static SettingValue fromAccuracy(String value) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_accuracy(value));
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    /**
     * Creates a new setting value from a digits format name. If it doesn't match a
     * known digits format, null is returned.
     */
    public static SettingValue fromDigitsFormat(String value) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_digits_format(value));
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    /**
     * Creates a new setting value from a timing method name with the type
     * `optional timing method`. If it doesn't match a known timing method, null
     * is returned.
     */
    public static SettingValue fromOptionalTimingMethod(String value) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_optional_timing_method(value));
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    /**
     * Creates a new empty setting value with the type `optional timing method`.
     */
    public static SettingValue fromOptionalEmptyTimingMethod() {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_optional_empty_timing_method());
        return result;
    }
    /**
     * Creates a new setting value from the color provided as RGBA.
     */
    public static SettingValue fromColor(float r, float g, float b, float a) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_color(r, g, b, a));
        return result;
    }
    /**
     * Creates a new setting value from the color provided as RGBA with the type
     * `optional color`.
     */
    public static SettingValue fromOptionalColor(float r, float g, float b, float a) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_optional_color(r, g, b, a));
        return result;
    }
    /**
     * Creates a new empty setting value with the type `optional color`.
     */
    public static SettingValue fromOptionalEmptyColor() {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_optional_empty_color());
        return result;
    }
    /**
     * Creates a new setting value that is a transparent gradient.
     */
    public static SettingValue fromTransparentGradient() {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_transparent_gradient());
        return result;
    }
    /**
     * Creates a new setting value from the vertical gradient provided as two RGBA colors.
     */
    public static SettingValue fromVerticalGradient(float r1, float g1, float b1, float a1, float r2, float g2, float b2, float a2) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_vertical_gradient(r1, g1, b1, a1, r2, g2, b2, a2));
        return result;
    }
    /**
     * Creates a new setting value from the horizontal gradient provided as two RGBA colors.
     */
    public static SettingValue fromHorizontalGradient(float r1, float g1, float b1, float a1, float r2, float g2, float b2, float a2) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_horizontal_gradient(r1, g1, b1, a1, r2, g2, b2, a2));
        return result;
    }
    /**
     * Creates a new setting value from the alternating gradient provided as two RGBA colors.
     */
    public static SettingValue fromAlternatingGradient(float r1, float g1, float b1, float a1, float r2, float g2, float b2, float a2) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_alternating_gradient(r1, g1, b1, a1, r2, g2, b2, a2));
        return result;
    }
    /**
     * Creates a new setting value from the alignment name provided. If it doesn't
     * match a known alignment, null is returned.
     */
    public static SettingValue fromAlignment(String value) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_alignment(value));
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    /**
     * Creates a new setting value from the column start with name provided. If it
     * doesn't match a known column start with, null is returned.
     */
    public static SettingValue fromColumnStartWith(String value) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_column_start_with(value));
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    /**
     * Creates a new setting value from the column update with name provided. If it
     * doesn't match a known column update with, null is returned.
     */
    public static SettingValue fromColumnUpdateWith(String value) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_column_update_with(value));
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    /**
     * Creates a new setting value from the column update trigger. If it doesn't
     * match a known column update trigger, null is returned.
     */
    public static SettingValue fromColumnUpdateTrigger(String value) {
        SettingValue result = new SettingValue(LiveSplitCoreNative.INSTANCE.SettingValue_from_column_update_trigger(value));
        if (result.ptr == Pointer.NULL) {
            return null;
        }
        return result;
    }
    SettingValue(Pointer ptr) {
        super(ptr);
    }
}