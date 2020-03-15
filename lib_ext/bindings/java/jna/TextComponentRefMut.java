package livesplitcore;

import com.sun.jna.*;

/**
 * The Text Component simply visualizes any given text. This can either be a
 * single centered text, or split up into a left and right text, which is
 * suitable for a situation where you have a label and a value.
 */
public class TextComponentRefMut extends TextComponentRef {
    /**
     * Sets the centered text. If the current mode is split, it is switched to
     * centered mode.
     */
    public void setCenter(String text) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.TextComponent_set_center(this.ptr, text);
    }
    /**
     * Sets the left text. If the current mode is centered, it is switched to
     * split mode, with the right text being empty.
     */
    public void setLeft(String text) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.TextComponent_set_left(this.ptr, text);
    }
    /**
     * Sets the right text. If the current mode is centered, it is switched to
     * split mode, with the left text being empty.
     */
    public void setRight(String text) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.TextComponent_set_right(this.ptr, text);
    }
    TextComponentRefMut(Pointer ptr) {
        super(ptr);
    }
}