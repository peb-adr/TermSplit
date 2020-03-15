package livesplitcore

/**
 * A Run stores the split times for a specific game and category of a runner.
 */
open class RunRefMut internal constructor(ptr: Long) : RunRef(ptr) {
    /**
     * Pushes the segment provided to the end of the list of segments of this Run.
     */
    fun pushSegment(segment: Segment) {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        if (segment.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.Run_pushSegment(this.ptr, segment.ptr)
        segment.ptr = 0L
    }
    /**
     * Sets the name of the game this Run is for.
     */
    fun setGameName(game: String) {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.Run_setGameName(this.ptr, game)
    }
    /**
     * Sets the name of the category this Run is for.
     */
    fun setCategoryName(category: String) {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.Run_setCategoryName(this.ptr, category)
    }
    /**
     * Marks the Run as modified, so that it is known that there are changes
     * that should be saved.
     */
    fun markAsModified() {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.Run_markAsModified(this.ptr)
    }
}