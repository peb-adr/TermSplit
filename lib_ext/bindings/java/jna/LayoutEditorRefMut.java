package livesplitcore;

import com.sun.jna.*;

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
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (timer.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.LayoutEditor_layout_state_as_json(this.ptr, timer.ptr);
        return result;
    }
    /**
     * Selects the component with the given index in order to modify its
     * settings. Only a single component is selected at any given time. You may
     * not provide an invalid index.
     */
    public void select(long index) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.LayoutEditor_select(this.ptr, new NativeLong(index));
    }
    /**
     * Adds the component provided to the end of the layout. The newly added
     * component becomes the selected component.
     */
    public void addComponent(Component component) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (component.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.LayoutEditor_add_component(this.ptr, component.ptr);
        component.ptr = Pointer.NULL;
    }
    /**
     * Removes the currently selected component, unless there's only one
     * component in the layout. The next component becomes the selected
     * component. If there's none, the previous component becomes the selected
     * component instead.
     */
    public void removeComponent() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.LayoutEditor_remove_component(this.ptr);
    }
    /**
     * Moves the selected component up, unless the first component is selected.
     */
    public void moveComponentUp() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.LayoutEditor_move_component_up(this.ptr);
    }
    /**
     * Moves the selected component down, unless the last component is
     * selected.
     */
    public void moveComponentDown() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.LayoutEditor_move_component_down(this.ptr);
    }
    /**
     * Moves the selected component to the index provided. You may not provide
     * an invalid index.
     */
    public void moveComponent(long dstIndex) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.LayoutEditor_move_component(this.ptr, new NativeLong(dstIndex));
    }
    /**
     * Duplicates the currently selected component. The copy gets placed right
     * after the selected component and becomes the newly selected component.
     */
    public void duplicateComponent() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.LayoutEditor_duplicate_component(this.ptr);
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
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (value.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.LayoutEditor_set_component_settings_value(this.ptr, new NativeLong(index), value.ptr);
        value.ptr = Pointer.NULL;
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
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (value.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.LayoutEditor_set_general_settings_value(this.ptr, new NativeLong(index), value.ptr);
        value.ptr = Pointer.NULL;
    }
    LayoutEditorRefMut(Pointer ptr) {
        super(ptr);
    }
}