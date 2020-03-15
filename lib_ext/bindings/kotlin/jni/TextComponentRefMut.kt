package livesplitcore

/**
 * The Text Component simply visualizes any given text. This can either be a
 * single centered text, or split up into a left and right text, which is
 * suitable for a situation where you have a label and a value.
 */
open class TextComponentRefMut internal constructor(ptr: Long) : TextComponentRef(ptr) {
    /**
     * Sets the centered text. If the current mode is split, it is switched to
     * centered mode.
     */
    fun setCenter(text: String) {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.TextComponent_setCenter(this.ptr, text)
    }
    /**
     * Sets the left text. If the current mode is centered, it is switched to
     * split mode, with the right text being empty.
     */
    fun setLeft(text: String) {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.TextComponent_setLeft(this.ptr, text)
    }
    /**
     * Sets the right text. If the current mode is centered, it is switched to
     * split mode, with the left text being empty.
     */
    fun setRight(text: String) {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.TextComponent_setRight(this.ptr, text)
    }
}