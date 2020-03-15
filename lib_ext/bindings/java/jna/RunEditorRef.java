package livesplitcore;

import com.sun.jna.*;

/**
 * The Run Editor allows modifying Runs while ensuring that all the different
 * invariants of the Run objects are upheld no matter what kind of operations
 * are being applied to the Run. It provides the current state of the editor as
 * state objects that can be visualized by any kind of User Interface.
 */
public class RunEditorRef {
    Pointer ptr;
    RunEditorRef(Pointer ptr) {
        this.ptr = ptr;
    }
}