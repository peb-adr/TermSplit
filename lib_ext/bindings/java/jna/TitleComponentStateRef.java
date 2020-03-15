package livesplitcore;

import com.sun.jna.*;

/**
 * The state object describes the information to visualize for this component.
 */
public class TitleComponentStateRef {
    Pointer ptr;
    /**
     * The game's icon encoded as a Data URL. This value is only specified whenever
     * the icon changes. If you explicitly want to query this value, remount the
     * component. The String itself may be empty. This indicates that there is no
     * icon. If no change occurred, null is returned instead.
     */
    public String iconChange() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.TitleComponentState_icon_change(this.ptr);
        return result;
    }
    /**
     * The first title line to show. This is either the game's name, or a
     * combination of the game's name and the category.
     */
    public String line1() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.TitleComponentState_line1(this.ptr);
        return result;
    }
    /**
     * By default the category name is shown on the second line. Based on the
     * settings, it can however instead be shown in a single line together with
     * the game name. In that case null is returned instead.
     */
    public String line2() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.TitleComponentState_line2(this.ptr);
        return result;
    }
    /**
     * Specifies whether the title should centered or aligned to the left
     * instead.
     */
    public boolean isCentered() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.TitleComponentState_is_centered(this.ptr) != 0;
        return result;
    }
    /**
     * Returns whether the amount of successfully finished attempts is supposed to
     * be shown.
     */
    public boolean showsFinishedRuns() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.TitleComponentState_shows_finished_runs(this.ptr) != 0;
        return result;
    }
    /**
     * Returns the amount of successfully finished attempts.
     */
    public int finishedRuns() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        int result = LiveSplitCoreNative.INSTANCE.TitleComponentState_finished_runs(this.ptr);
        return result;
    }
    /**
     * Returns whether the amount of total attempts is supposed to be shown.
     */
    public boolean showsAttempts() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.TitleComponentState_shows_attempts(this.ptr) != 0;
        return result;
    }
    /**
     * Returns the amount of total attempts.
     */
    public int attempts() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        int result = LiveSplitCoreNative.INSTANCE.TitleComponentState_attempts(this.ptr);
        return result;
    }
    TitleComponentStateRef(Pointer ptr) {
        this.ptr = ptr;
    }
}