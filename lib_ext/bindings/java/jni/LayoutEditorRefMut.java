package livesplitcore;

/**
 * The Layout Editor allows modifying Layouts while ensuring all the different
 * invariants of the Layout objects are upheld no matter what kind of
 * operations are being applied. It provides the current state of the editor as
 * state objects that can be visualized by any kind of User Interface.
 */
public class LayoutEditorRefMut extends LayoutEditorRef {
    /**
     * Encodes the layout's state as JSON based on the timer provided. You can use
     * this to visualize all of the components of a layout, while it is still being
     * edited by the Layout Editor.
     */
    public String layoutStateAsJson(TimerRef timer) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (timer.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.LayoutEditor_layoutStateAsJson(this.ptr, timer.ptr);
        return result;
    }
    /**
     * Selects the component with the given index in order to modify its
     * settings. Only a single component is selected at any given time. You may
     * not provide an invalid index.
     */
    public void select(long index) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.LayoutEditor_select(this.ptr, index);
    }
    /**
     * Adds the component provided to the end of the layout. The newly added
     * component becomes the selected component.
     */
    public void addComponent(Component component) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (component.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.LayoutEditor_addComponent(this.ptr, component.ptr);
        component.ptr = 0;
    }
    /**
     * Removes the currently selected component, unless there's only one
     * component in the layout. The next component becomes the selected
     * component. If there's none, the previous component becomes the selected
     * component instead.
     */
    public void removeComponent() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.LayoutEditor_removeComponent(this.ptr);
    }
    /**
     * Moves the selected component up, unless the first component is selected.
     */
    public void moveComponentUp() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.LayoutEditor_moveComponentUp(this.ptr);
    }
    /**
     * Moves the selected component down, unless the last component is
     * selected.
     */
    public void moveComponentDown() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.LayoutEditor_moveComponentDown(this.ptr);
    }
    /**
     * Moves the selected component to the index provided. You may not provide
     * an invalid index.
     */
    public void moveComponent(long dstIndex) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.LayoutEditor_moveComponent(this.ptr, dstIndex);
    }
    /**
     * Duplicates the currently selected component. The copy gets placed right
     * after the selected component and becomes the newly selected component.
     */
    public void duplicateComponent() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.LayoutEditor_duplicateComponent(this.ptr);
    }
    /**
     * Sets a setting's value of the selected component by its setting index
     * to the given value.
     * 
     * This panics if the type of the value to be set is not compatible with
     * the type of the setting's value. A panic can also occur if the index of
     * the setting provided is out of bounds.
     */
    public void setComponentSettingsValue(long index, SettingValue value) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (value.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.LayoutEditor_setComponentSettingsValue(this.ptr, index, value.ptr);
        value.ptr = 0;
    }
    /**
     * Sets a setting's value of the general settings by its setting index to
     * the given value.
     * 
     * This panics if the type of the value to be set is not compatible with
     * the type of the setting's value. A panic can also occur if the index of
     * the setting provided is out of bounds.
     */
    public void setGeneralSettingsValue(long index, SettingValue value) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (value.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.LayoutEditor_setGeneralSettingsValue(this.ptr, index, value.ptr);
        value.ptr = 0;
    }
    LayoutEditorRefMut(long ptr) {
        super(ptr);
    }
}