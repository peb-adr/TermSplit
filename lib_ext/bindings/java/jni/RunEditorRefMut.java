package livesplitcore;

/**
 * The Run Editor allows modifying Runs while ensuring that all the different
 * invariants of the Run objects are upheld no matter what kind of operations
 * are being applied to the Run. It provides the current state of the editor as
 * state objects that can be visualized by any kind of User Interface.
 */
public class RunEditorRefMut extends RunEditorRef {
    /**
     * Calculates the Run Editor's state and encodes it as
     * JSON in order to visualize it.
     */
    public String stateAsJson() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.RunEditor_stateAsJson(this.ptr);
        return result;
    }
    /**
     * Selects a different timing method for being modified.
     */
    public void selectTimingMethod(byte method) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_selectTimingMethod(this.ptr, method);
    }
    /**
     * Unselects the segment with the given index. If it's not selected or the
     * index is out of bounds, nothing happens. The segment is not unselected,
     * when it is the only segment that is selected. If the active segment is
     * unselected, the most recently selected segment remaining becomes the
     * active segment.
     */
    public void unselect(long index) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_unselect(this.ptr, index);
    }
    /**
     * In addition to the segments that are already selected, the segment with
     * the given index is being selected. The segment chosen also becomes the
     * active segment.
     * 
     * This panics if the index of the segment provided is out of bounds.
     */
    public void selectAdditionally(long index) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_selectAdditionally(this.ptr, index);
    }
    /**
     * Selects the segment with the given index. All other segments are
     * unselected. The segment chosen also becomes the active segment.
     * 
     * This panics if the index of the segment provided is out of bounds.
     */
    public void selectOnly(long index) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_selectOnly(this.ptr, index);
    }
    /**
     * Sets the name of the game.
     */
    public void setGameName(String game) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_setGameName(this.ptr, game);
    }
    /**
     * Sets the name of the category.
     */
    public void setCategoryName(String category) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_setCategoryName(this.ptr, category);
    }
    /**
     * Parses and sets the timer offset from the string provided. The timer
     * offset specifies the time, the timer starts at when starting a new
     * attempt.
     */
    public boolean parseAndSetOffset(String offset) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.RunEditor_parseAndSetOffset(this.ptr, offset);
        return result;
    }
    /**
     * Parses and sets the attempt count from the string provided. Changing
     * this has no affect on the attempt history or the segment history. This
     * number is mostly just a visual number for the runner.
     */
    public boolean parseAndSetAttemptCount(String attempts) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.RunEditor_parseAndSetAttemptCount(this.ptr, attempts);
        return result;
    }
    /**
     * Sets the game's icon.
     */
    public void setGameIcon(long data, long length) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_setGameIcon(this.ptr, data, length);
    }
    /**
     * Removes the game's icon.
     */
    public void removeGameIcon() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_removeGameIcon(this.ptr);
    }
    /**
     * Sets the speedrun.com Run ID of the run. You need to ensure that the
     * record on speedrun.com matches up with the Personal Best of this run.
     * This may be empty if there's no association.
     */
    public void setRunId(String name) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_setRunId(this.ptr, name);
    }
    /**
     * Sets the name of the region this game is from. This may be empty if it's
     * not specified.
     */
    public void setRegionName(String name) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_setRegionName(this.ptr, name);
    }
    /**
     * Sets the name of the platform this game is run on. This may be empty if
     * it's not specified.
     */
    public void setPlatformName(String name) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_setPlatformName(this.ptr, name);
    }
    /**
     * Specifies whether this speedrun is done on an emulator. Keep in mind
     * that false may also mean that this information is simply not known.
     */
    public void setEmulatorUsage(boolean usesEmulator) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_setEmulatorUsage(this.ptr, usesEmulator);
    }
    /**
     * Sets the variable with the name specified to the value specified. A
     * variable is an arbitrary key value pair storing additional information
     * about the category. An example of this may be whether Amiibos are used
     * in this category. If the variable doesn't exist yet, it is being
     * inserted.
     */
    public void setVariable(String name, String value) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_setVariable(this.ptr, name, value);
    }
    /**
     * Removes the variable with the name specified.
     */
    public void removeVariable(String name) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_removeVariable(this.ptr, name);
    }
    /**
     * Resets all the Metadata Information.
     */
    public void clearMetadata() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_clearMetadata(this.ptr);
    }
    /**
     * Inserts a new empty segment above the active segment and adjusts the
     * Run's history information accordingly. The newly created segment is then
     * the only selected segment and also the active segment.
     */
    public void insertSegmentAbove() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_insertSegmentAbove(this.ptr);
    }
    /**
     * Inserts a new empty segment below the active segment and adjusts the
     * Run's history information accordingly. The newly created segment is then
     * the only selected segment and also the active segment.
     */
    public void insertSegmentBelow() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_insertSegmentBelow(this.ptr);
    }
    /**
     * Removes all the selected segments, unless all of them are selected. The
     * run's information is automatically adjusted properly. The next
     * not-to-be-removed segment after the active segment becomes the new
     * active segment. If there's none, then the next not-to-be-removed segment
     * before the active segment, becomes the new active segment.
     */
    public void removeSegments() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_removeSegments(this.ptr);
    }
    /**
     * Moves all the selected segments up, unless the first segment is
     * selected. The run's information is automatically adjusted properly. The
     * active segment stays the active segment.
     */
    public void moveSegmentsUp() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_moveSegmentsUp(this.ptr);
    }
    /**
     * Moves all the selected segments down, unless the last segment is
     * selected. The run's information is automatically adjusted properly. The
     * active segment stays the active segment.
     */
    public void moveSegmentsDown() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_moveSegmentsDown(this.ptr);
    }
    /**
     * Sets the icon of the active segment.
     */
    public void activeSetIcon(long data, long length) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_activeSetIcon(this.ptr, data, length);
    }
    /**
     * Removes the icon of the active segment.
     */
    public void activeRemoveIcon() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_activeRemoveIcon(this.ptr);
    }
    /**
     * Sets the name of the active segment.
     */
    public void activeSetName(String name) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_activeSetName(this.ptr, name);
    }
    /**
     * Parses a split time from a string and sets it for the active segment with
     * the chosen timing method.
     */
    public boolean activeParseAndSetSplitTime(String time) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.RunEditor_activeParseAndSetSplitTime(this.ptr, time);
        return result;
    }
    /**
     * Parses a segment time from a string and sets it for the active segment with
     * the chosen timing method.
     */
    public boolean activeParseAndSetSegmentTime(String time) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.RunEditor_activeParseAndSetSegmentTime(this.ptr, time);
        return result;
    }
    /**
     * Parses a best segment time from a string and sets it for the active segment
     * with the chosen timing method.
     */
    public boolean activeParseAndSetBestSegmentTime(String time) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.RunEditor_activeParseAndSetBestSegmentTime(this.ptr, time);
        return result;
    }
    /**
     * Parses a comparison time for the provided comparison and sets it for the
     * active active segment with the chosen timing method.
     */
    public boolean activeParseAndSetComparisonTime(String comparison, String time) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.RunEditor_activeParseAndSetComparisonTime(this.ptr, comparison, time);
        return result;
    }
    /**
     * Adds a new custom comparison. It can't be added if it starts with
     * `[Race]` or already exists.
     */
    public boolean addComparison(String comparison) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.RunEditor_addComparison(this.ptr, comparison);
        return result;
    }
    /**
     * Imports the Personal Best from the provided run as a comparison. The
     * comparison can't be added if its name starts with `[Race]` or it already
     * exists.
     */
    public boolean importComparison(RunRef run, String comparison) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (run.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.RunEditor_importComparison(this.ptr, run.ptr, comparison);
        return result;
    }
    /**
     * Removes the chosen custom comparison. You can't remove a Comparison
     * Generator's Comparison or the Personal Best.
     */
    public void removeComparison(String comparison) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_removeComparison(this.ptr, comparison);
    }
    /**
     * Renames a comparison. The comparison can't be renamed if the new name of
     * the comparison starts with `[Race]` or it already exists.
     */
    public boolean renameComparison(String oldName, String newName) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.RunEditor_renameComparison(this.ptr, oldName, newName);
        return result;
    }
    /**
     * Reorders the custom comparisons by moving the comparison with the source
     * index specified to the destination index specified. Returns false if one
     * of the indices is invalid. The indices are based on the comparison names of
     * the Run Editor's state.
     */
    public boolean moveComparison(long srcIndex, long dstIndex) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.RunEditor_moveComparison(this.ptr, srcIndex, dstIndex);
        return result;
    }
    /**
     * Clears out the Attempt History and the Segment Histories of all the
     * segments.
     */
    public void clearHistory() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_clearHistory(this.ptr);
    }
    /**
     * Clears out the Attempt History, the Segment Histories, all the times,
     * sets the Attempt Count to 0 and clears the speedrun.com run id
     * association. All Custom Comparisons other than `Personal Best` are
     * deleted as well.
     */
    public void clearTimes() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.RunEditor_clearTimes(this.ptr);
    }
    /**
     * Creates a Sum of Best Cleaner which allows you to interactively remove
     * potential issues in the segment history that lead to an inaccurate Sum
     * of Best. If you skip a split, whenever you will do the next split, the
     * combined segment time might be faster than the sum of the individual
     * best segments. The Sum of Best Cleaner will point out all of these and
     * allows you to delete them individually if any of them seem wrong.
     */
    public SumOfBestCleaner cleanSumOfBest() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        SumOfBestCleaner result = new SumOfBestCleaner(LiveSplitCoreNative.RunEditor_cleanSumOfBest(this.ptr));
        return result;
    }
    RunEditorRefMut(long ptr) {
        super(ptr);
    }
}