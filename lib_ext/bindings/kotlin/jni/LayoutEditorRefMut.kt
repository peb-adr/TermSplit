package livesplitcore

/**
 * The Layout Editor allows modifying Layouts while ensuring all the different
 * invariants of the Layout objects are upheld no matter what kind of
 * operations are being applied. It provides the current state of the editor as
 * state objects that can be visualized by any kind of User Interface.
 */
open class LayoutEditorRefMut internal constructor(ptr: Long) : LayoutEditorRef(ptr) {
    /**
     * Encodes the layout's state as JSON based on the timer provided. You can use
     * this to visualize all of the components of a layout, while it is still being
     * edited by the Layout Editor.
     */
    fun layoutStateAsJson(timer: TimerRef): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (timer.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.LayoutEditor_layoutStateAsJson(this.ptr, timer.ptr)
        return result
    }
    /**
     * Selects the component with the given index in order to modify its
     * settings. Only a single component is selected at any given time. You may
     * not provide an invalid index.
     */
    fun select(index: Long) {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.LayoutEditor_select(this.ptr, index)
    }
    /**
     * Adds the component provided to the end of the layout. The newly added
     * component becomes the selected component.
     */
    fun addComponent(component: Component) {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (component.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.LayoutEditor_addComponent(this.ptr, component.ptr)
        component.ptr = 0L
    }
    /**
     * Removes the currently selected component, unless there's only one
     * component in the layout. The next component becomes the selected
     * component. If there's none, the previous component becomes the selected
     * component instead.
     */
    fun removeComponent() {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.LayoutEditor_removeComponent(this.ptr)
    }
    /**
     * Moves the selected component up, unless the first component is selected.
     */
    fun moveComponentUp() {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.LayoutEditor_moveComponentUp(this.ptr)
    }
    /**
     * Moves the selected component down, unless the last component is
     * selected.
     */
    fun moveComponentDown() {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.LayoutEditor_moveComponentDown(this.ptr)
    }
    /**
     * Moves the selected component to the index provided. You may not provide
     * an invalid index.
     */
    fun moveComponent(dstIndex: Long) {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.LayoutEditor_moveComponent(this.ptr, dstIndex)
    }
    /**
     * Duplicates the currently selected component. The copy gets placed right
     * after the selected component and becomes the newly selected component.
     */
    fun duplicateComponent() {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.LayoutEditor_duplicateComponent(this.ptr)
    }
    /**
     * Sets a setting's value of the selected component by its setting index
     * to the given value.
     * 
     * This panics if the type of the value to be set is not compatible with
     * the type of the setting's value. A panic can also occur if the index of
     * the setting provided is out of bounds.
     */
    fun setComponentSettingsValue(index: Long, value: SettingValue) {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (value.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.LayoutEditor_setComponentSettingsValue(this.ptr, index, value.ptr)
        value.ptr = 0L
    }
    /**
     * Sets a setting's value of the general settings by its setting index to
     * the given value.
     * 
     * This panics if the type of the value to be set is not compatible with
     * the type of the setting's value. A panic can also occur if the index of
     * the setting provided is out of bounds.
     */
    fun setGeneralSettingsValue(index: Long, value: SettingValue) {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (value.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.LayoutEditor_setGeneralSettingsValue(this.ptr, index, value.ptr)
        value.ptr = 0L
    }
}