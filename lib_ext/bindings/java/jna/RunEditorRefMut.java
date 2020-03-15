package livesplitcore;

import com.sun.jna.*;

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
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.RunEditor_state_as_json(this.ptr);
        return result;
    }
    /**
     * Selects a different timing method for being modified.
     */
    public void selectTimingMethod(byte method) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_select_timing_method(this.ptr, method);
    }
    /**
     * Unselects the segment with the given index. If it's not selected or the
     * index is out of bounds, nothing happens. The segment is not unselected,
     * when it is the only segment that is selected. If the active segment is
     * unselected, the most recently selected segment remaining becomes the
     * active segment.
     */
    public void unselect(long index) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_unselect(this.ptr, new NativeLong(index));
    }
    /**
     * In addition to the segments that are already selected, the segment with
     * the given index is being selected. The segment chosen also becomes the
     * active segment.
     * 
     * This panics if the index of the segment provided is out of bounds.
     */
    public void selectAdditionally(long index) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_select_additionally(this.ptr, new NativeLong(index));
    }
    /**
     * Selects the segment with the given index. All other segments are
     * unselected. The segment chosen also becomes the active segment.
     * 
     * This panics if the index of the segment provided is out of bounds.
     */
    public void selectOnly(long index) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_select_only(this.ptr, new NativeLong(index));
    }
    /**
     * Sets the name of the game.
     */
    public void setGameName(String game) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_set_game_name(this.ptr, game);
    }
    /**
     * Sets the name of the category.
     */
    public void setCategoryName(String category) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_set_category_name(this.ptr, category);
    }
    /**
     * Parses and sets the timer offset from the string provided. The timer
     * offset specifies the time, the timer starts at when starting a new
     * attempt.
     */
    public boolean parseAndSetOffset(String offset) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.RunEditor_parse_and_set_offset(this.ptr, offset) != 0;
        return result;
    }
    /**
     * Parses and sets the attempt count from the string provided. Changing
     * this has no affect on the attempt history or the segment history. This
     * number is mostly just a visual number for the runner.
     */
    public boolean parseAndSetAttemptCount(String attempts) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.RunEditor_parse_and_set_attempt_count(this.ptr, attempts) != 0;
        return result;
    }
    /**
     * Sets the game's icon.
     */
    public void setGameIcon(Pointer data, long length) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_set_game_icon(this.ptr, data, new NativeLong(length));
    }
    /**
     * Removes the game's icon.
     */
    public void removeGameIcon() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_remove_game_icon(this.ptr);
    }
    /**
     * Sets the speedrun.com Run ID of the run. You need to ensure that the
     * record on speedrun.com matches up with the Personal Best of this run.
     * This may be empty if there's no association.
     */
    public void setRunId(String name) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_set_run_id(this.ptr, name);
    }
    /**
     * Sets the name of the region this game is from. This may be empty if it's
     * not specified.
     */
    public void setRegionName(String name) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_set_region_name(this.ptr, name);
    }
    /**
     * Sets the name of the platform this game is run on. This may be empty if
     * it's not specified.
     */
    public void setPlatformName(String name) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_set_platform_name(this.ptr, name);
    }
    /**
     * Specifies whether this speedrun is done on an emulator. Keep in mind
     * that false may also mean that this information is simply not known.
     */
    public void setEmulatorUsage(boolean usesEmulator) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_set_emulator_usage(this.ptr, (byte)(usesEmulator ? 1 : 0));
    }
    /**
     * Sets the variable with the name specified to the value specified. A
     * variable is an arbitrary key value pair storing additional information
     * about the category. An example of this may be whether Amiibos are used
     * in this category. If the variable doesn't exist yet, it is being
     * inserted.
     */
    public void setVariable(String name, String value) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_set_variable(this.ptr, name, value);
    }
    /**
     * Removes the variable with the name specified.
     */
    public void removeVariable(String name) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_remove_variable(this.ptr, name);
    }
    /**
     * Resets all the Metadata Information.
     */
    public void clearMetadata() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_clear_metadata(this.ptr);
    }
    /**
     * Inserts a new empty segment above the active segment and adjusts the
     * Run's history information accordingly. The newly created segment is then
     * the only selected segment and also the active segment.
     */
    public void insertSegmentAbove() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_insert_segment_above(this.ptr);
    }
    /**
     * Inserts a new empty segment below the active segment and adjusts the
     * Run's history information accordingly. The newly created segment is then
     * the only selected segment and also the active segment.
     */
    public void insertSegmentBelow() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_insert_segment_below(this.ptr);
    }
    /**
     * Removes all the selected segments, unless all of them are selected. The
     * run's information is automatically adjusted properly. The next
     * not-to-be-removed segment after the active segment becomes the new
     * active segment. If there's none, then the next not-to-be-removed segment
     * before the active segment, becomes the new active segment.
     */
    public void removeSegments() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_remove_segments(this.ptr);
    }
    /**
     * Moves all the selected segments up, unless the first segment is
     * selected. The run's information is automatically adjusted properly. The
     * active segment stays the active segment.
     */
    public void moveSegmentsUp() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_move_segments_up(this.ptr);
    }
    /**
     * Moves all the selected segments down, unless the last segment is
     * selected. The run's information is automatically adjusted properly. The
     * active segment stays the active segment.
     */
    public void moveSegmentsDown() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_move_segments_down(this.ptr);
    }
    /**
     * Sets the icon of the active segment.
     */
    public void activeSetIcon(Pointer data, long length) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_active_set_icon(this.ptr, data, new NativeLong(length));
    }
    /**
     * Removes the icon of the active segment.
     */
    public void activeRemoveIcon() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_active_remove_icon(this.ptr);
    }
    /**
     * Sets the name of the active segment.
     */
    public void activeSetName(String name) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_active_set_name(this.ptr, name);
    }
    /**
     * Parses a split time from a string and sets it for the active segment with
     * the chosen timing method.
     */
    public boolean activeParseAndSetSplitTime(String time) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.RunEditor_active_parse_and_set_split_time(this.ptr, time) != 0;
        return result;
    }
    /**
     * Parses a segment time from a string and sets it for the active segment with
     * the chosen timing method.
     */
    public boolean activeParseAndSetSegmentTime(String time) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.RunEditor_active_parse_and_set_segment_time(this.ptr, time) != 0;
        return result;
    }
    /**
     * Parses a best segment time from a string and sets it for the active segment
     * with the chosen timing method.
     */
    public boolean activeParseAndSetBestSegmentTime(String time) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.RunEditor_active_parse_and_set_best_segment_time(this.ptr, time) != 0;
        return result;
    }
    /**
     * Parses a comparison time for the provided comparison and sets it for the
     * active active segment with the chosen timing method.
     */
    public boolean activeParseAndSetComparisonTime(String comparison, String time) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.RunEditor_active_parse_and_set_comparison_time(this.ptr, comparison, time) != 0;
        return result;
    }
    /**
     * Adds a new custom comparison. It can't be added if it starts with
     * `[Race]` or already exists.
     */
    public boolean addComparison(String comparison) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.RunEditor_add_comparison(this.ptr, comparison) != 0;
        return result;
    }
    /**
     * Imports the Personal Best from the provided run as a comparison. The
     * comparison can't be added if its name starts with `[Race]` or it already
     * exists.
     */
    public boolean importComparison(RunRef run, String comparison) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (run.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.RunEditor_import_comparison(this.ptr, run.ptr, comparison) != 0;
        return result;
    }
    /**
     * Removes the chosen custom comparison. You can't remove a Comparison
     * Generator's Comparison or the Personal Best.
     */
    public void removeComparison(String comparison) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_remove_comparison(this.ptr, comparison);
    }
    /**
     * Renames a comparison. The comparison can't be renamed if the new name of
     * the comparison starts with `[Race]` or it already exists.
     */
    public boolean renameComparison(String oldName, String newName) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.RunEditor_rename_comparison(this.ptr, oldName, newName) != 0;
        return result;
    }
    /**
     * Reorders the custom comparisons by moving the comparison with the source
     * index specified to the destination index specified. Returns false if one
     * of the indices is invalid. The indices are based on the comparison names of
     * the Run Editor's state.
     */
    public boolean moveComparison(long srcIndex, long dstIndex) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.RunEditor_move_comparison(this.ptr, new NativeLong(srcIndex), new NativeLong(dstIndex)) != 0;
        return result;
    }
    /**
     * Clears out the Attempt History and the Segment Histories of all the
     * segments.
     */
    public void clearHistory() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_clear_history(this.ptr);
    }
    /**
     * Clears out the Attempt History, the Segment Histories, all the times,
     * sets the Attempt Count to 0 and clears the speedrun.com run id
     * association. All Custom Comparisons other than `Personal Best` are
     * deleted as well.
     */
    public void clearTimes() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.RunEditor_clear_times(this.ptr);
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
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        SumOfBestCleaner result = new SumOfBestCleaner(LiveSplitCoreNative.INSTANCE.RunEditor_clean_sum_of_best(this.ptr));
        return result;
    }
    RunEditorRefMut(Pointer ptr) {
        super(ptr);
    }
}