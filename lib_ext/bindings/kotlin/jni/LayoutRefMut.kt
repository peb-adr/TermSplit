package livesplitcore

/**
 * A Layout allows you to combine multiple components together to visualize a
 * variety of information the runner is interested in.
 */
open class LayoutRefMut internal constructor(ptr: Long) : LayoutRef(ptr) {
    /**
     * Calculates the layout's state based on the timer provided and encodes it as
     * JSON. You can use this to visualize all of the components of a layout.
     */
    fun stateAsJson(timer: TimerRef): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (timer.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.Layout_stateAsJson(this.ptr, timer.ptr)
        return result
    }
    /**
     * Adds a new component to the end of the layout.
     */
    fun push(component: Component) {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (component.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.Layout_push(this.ptr, component.ptr)
        component.ptr = 0L
    }
    /**
     * Scrolls up all the components in the layout that can be scrolled up.
     */
    fun scrollUp() {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.Layout_scrollUp(this.ptr)
    }
    /**
     * Scrolls down all the components in the layout that can be scrolled down.
     */
    fun scrollDown() {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.Layout_scrollDown(this.ptr)
    }
    /**
     * Remounts all the components as if they were freshly initialized. Some
     * components may only provide some information whenever it changes or when
     * their state is first queried. Remounting returns this information again,
     * whenever the layout's state is queried the next time.
     */
    fun remount() {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.Layout_remount(this.ptr)
    }
}