package livesplitcore;

/**
 * A Run stores the split times for a specific game and category of a runner.
 */
public class RunRefMut extends RunRef {
    /**
     * Pushes the segment provided to the end of the list of segments of this Run.
     */
    public void pushSegment(Segment segment) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (segment.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Run_pushSegment(this.ptr, segment.ptr);
        segment.ptr = 0;
    }
    /**
     * Sets the name of the game this Run is for.
     */
    public void setGameName(String game) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Run_setGameName(this.ptr, game);
    }
    /**
     * Sets the name of the category this Run is for.
     */
    public void setCategoryName(String category) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Run_setCategoryName(this.ptr, category);
    }
    /**
     * Marks the Run as modified, so that it is known that there are changes
     * that should be saved.
     */
    public void markAsModified() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Run_markAsModified(this.ptr);
    }
    RunRefMut(long ptr) {
        super(ptr);
    }
}