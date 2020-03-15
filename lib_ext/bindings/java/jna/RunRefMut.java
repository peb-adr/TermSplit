package livesplitcore;

import com.sun.jna.*;

/**
 * A Run stores the split times for a specific game and category of a runner.
 */
public class RunRefMut extends RunRef {
    /**
     * Pushes the segment provided to the end of the list of segments of this Run.
     */
    public void pushSegment(Segment segment) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (segment.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.Run_push_segment(this.ptr, segment.ptr);
        segment.ptr = Pointer.NULL;
    }
    /**
     * Sets the name of the game this Run is for.
     */
    public void setGameName(String game) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.Run_set_game_name(this.ptr, game);
    }
    /**
     * Sets the name of the category this Run is for.
     */
    public void setCategoryName(String category) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.Run_set_category_name(this.ptr, category);
    }
    /**
     * Marks the Run as modified, so that it is known that there are changes
     * that should be saved.
     */
    public void markAsModified() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.Run_mark_as_modified(this.ptr);
    }
    RunRefMut(Pointer ptr) {
        super(ptr);
    }
}