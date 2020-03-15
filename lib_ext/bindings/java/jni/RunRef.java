package livesplitcore;

/**
 * A Run stores the split times for a specific game and category of a runner.
 */
public class RunRef {
    long ptr;
    /**
     * Clones the Run object.
     */
    public Run copy() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        Run result = new Run(LiveSplitCoreNative.Run_clone(this.ptr));
        return result;
    }
    /**
     * Accesses the name of the game this Run is for.
     */
    public String gameName() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.Run_gameName(this.ptr);
        return result;
    }
    /**
     * Accesses the Data URL storing the game icon's data. If there is no game
     * icon, this returns an empty string instead of a URL.
     */
    public String gameIcon() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.Run_gameIcon(this.ptr);
        return result;
    }
    /**
     * Accesses the name of the category this Run is for.
     */
    public String categoryName() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.Run_categoryName(this.ptr);
        return result;
    }
    /**
     * Returns a file name (without the extension) suitable for this Run that
     * is built the following way:
     * 
     * Game Name - Category Name
     * 
     * If either is empty, the dash is omitted. Special characters that cause
     * problems in file names are also omitted. If an extended category name is
     * used, the variables of the category are appended in a parenthesis.
     */
    public String extendedFileName(boolean useExtendedCategoryName) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.Run_extendedFileName(this.ptr, useExtendedCategoryName);
        return result;
    }
    /**
     * Returns a name suitable for this Run that is built the following way:
     * 
     * Game Name - Category Name
     * 
     * If either is empty, the dash is omitted. If an extended category name is
     * used, the variables of the category are appended in a parenthesis.
     */
    public String extendedName(boolean useExtendedCategoryName) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.Run_extendedName(this.ptr, useExtendedCategoryName);
        return result;
    }
    /**
     * Returns an extended category name that possibly includes the region,
     * platform and variables, depending on the arguments provided. An extended
     * category name may look like this:
     * 
     * Any% (No Tuner, JPN, Wii Emulator)
     */
    public String extendedCategoryName(boolean showRegion, boolean showPlatform, boolean showVariables) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.Run_extendedCategoryName(this.ptr, showRegion, showPlatform, showVariables);
        return result;
    }
    /**
     * Returns the amount of runs that have been attempted with these splits.
     */
    public int attemptCount() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        int result = LiveSplitCoreNative.Run_attemptCount(this.ptr);
        return result;
    }
    /**
     * Accesses additional metadata of this Run, like the platform and region
     * of the game.
     */
    public RunMetadataRef metadata() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        RunMetadataRef result = new RunMetadataRef(LiveSplitCoreNative.Run_metadata(this.ptr));
        return result;
    }
    /**
     * Accesses the time an attempt of this Run should start at.
     */
    public TimeSpanRef offset() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        TimeSpanRef result = new TimeSpanRef(LiveSplitCoreNative.Run_offset(this.ptr));
        return result;
    }
    /**
     * Returns the amount of segments stored in this Run.
     */
    public long len() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        long result = LiveSplitCoreNative.Run_len(this.ptr);
        return result;
    }
    /**
     * Returns whether the Run has been modified and should be saved so that the
     * changes don't get lost.
     */
    public boolean hasBeenModified() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.Run_hasBeenModified(this.ptr);
        return result;
    }
    /**
     * Accesses a certain segment of this Run. You may not provide an out of bounds
     * index.
     */
    public SegmentRef segment(long index) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        SegmentRef result = new SegmentRef(LiveSplitCoreNative.Run_segment(this.ptr, index));
        return result;
    }
    /**
     * Returns the amount attempt history elements are stored in this Run.
     */
    public long attemptHistoryLen() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        long result = LiveSplitCoreNative.Run_attemptHistoryLen(this.ptr);
        return result;
    }
    /**
     * Accesses the an attempt history element by its index. This does not store
     * the actual segment times, just the overall attempt information. Information
     * about the individual segments is stored within each segment. You may not
     * provide an out of bounds index.
     */
    public AttemptRef attemptHistoryIndex(long index) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        AttemptRef result = new AttemptRef(LiveSplitCoreNative.Run_attemptHistoryIndex(this.ptr, index));
        return result;
    }
    /**
     * Saves a Run as a LiveSplit splits file (*.lss). If the run is actively in
     * use by a timer, use the appropriate method on the timer instead, in order to
     * properly save the current attempt as well.
     */
    public String saveAsLss() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.Run_saveAsLss(this.ptr);
        return result;
    }
    /**
     * Returns the amount of custom comparisons stored in this Run.
     */
    public long customComparisonsLen() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        long result = LiveSplitCoreNative.Run_customComparisonsLen(this.ptr);
        return result;
    }
    /**
     * Accesses a custom comparison stored in this Run by its index. This includes
     * `Personal Best` but excludes all the other Comparison Generators. You may
     * not provide an out of bounds index.
     */
    public String customComparison(long index) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.Run_customComparison(this.ptr, index);
        return result;
    }
    /**
     * Accesses the Auto Splitter Settings that are encoded as XML.
     */
    public String autoSplitterSettings() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.Run_autoSplitterSettings(this.ptr);
        return result;
    }
    RunRef(long ptr) {
        this.ptr = ptr;
    }
}