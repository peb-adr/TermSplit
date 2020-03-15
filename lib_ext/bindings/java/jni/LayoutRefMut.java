package livesplitcore;

/**
 * A Layout allows you to combine multiple components together to visualize a
 * variety of information the runner is interested in.
 */
public class LayoutRefMut extends LayoutRef {
    /**
     * Calculates the layout's state based on the timer provided and encodes it as
     * JSON. You can use this to visualize all of the components of a layout.
     */
    public String stateAsJson(TimerRef timer) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (timer.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.Layout_stateAsJson(this.ptr, timer.ptr);
        return result;
    }
    /**
     * Adds a new component to the end of the layout.
     */
    public void push(Component component) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (component.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Layout_push(this.ptr, component.ptr);
        component.ptr = 0;
    }
    /**
     * Scrolls up all the components in the layout that can be scrolled up.
     */
    public void scrollUp() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Layout_scrollUp(this.ptr);
    }
    /**
     * Scrolls down all the components in the layout that can be scrolled down.
     */
    public void scrollDown() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Layout_scrollDown(this.ptr);
    }
    /**
     * Remounts all the components as if they were freshly initialized. Some
     * components may only provide some information whenever it changes or when
     * their state is first queried. Remounting returns this information again,
     * whenever the layout's state is queried the next time.
     */
    public void remount() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Layout_remount(this.ptr);
    }
    LayoutRefMut(long ptr) {
        super(ptr);
    }
}