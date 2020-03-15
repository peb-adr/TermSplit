package livesplitcore;

/**
 * A Timer provides all the capabilities necessary for doing speedrun attempts.
 */
public class TimerRef {
    long ptr;
    /**
     * Returns the currently selected Timing Method.
     */
    public byte currentTimingMethod() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        byte result = LiveSplitCoreNative.Timer_currentTimingMethod(this.ptr);
        return result;
    }
    /**
     * Returns the current comparison that is being compared against. This may
     * be a custom comparison or one of the Comparison Generators.
     */
    public String currentComparison() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.Timer_currentComparison(this.ptr);
        return result;
    }
    /**
     * Returns whether Game Time is currently initialized. Game Time
     * automatically gets uninitialized for each new attempt.
     */
    public boolean isGameTimeInitialized() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.Timer_isGameTimeInitialized(this.ptr);
        return result;
    }
    /**
     * Returns whether the Game Timer is currently paused. If the Game Timer is
     * not paused, it automatically increments similar to Real Time.
     */
    public boolean isGameTimePaused() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.Timer_isGameTimePaused(this.ptr);
        return result;
    }
    /**
     * Accesses the loading times. Loading times are defined as Game Time - Real Time.
     */
    public TimeSpanRef loadingTimes() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        TimeSpanRef result = new TimeSpanRef(LiveSplitCoreNative.Timer_loadingTimes(this.ptr));
        return result;
    }
    /**
     * Returns the current Timer Phase.
     */
    public byte currentPhase() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        byte result = LiveSplitCoreNative.Timer_currentPhase(this.ptr);
        return result;
    }
    /**
     * Accesses the Run in use by the Timer.
     */
    public RunRef getRun() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        RunRef result = new RunRef(LiveSplitCoreNative.Timer_getRun(this.ptr));
        return result;
    }
    /**
     * Saves the Run in use by the Timer as a LiveSplit splits file (*.lss).
     */
    public String saveAsLss() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.Timer_saveAsLss(this.ptr);
        return result;
    }
    /**
     * Prints out debug information representing the whole state of the Timer. This
     * is being written to stdout.
     */
    public void printDebug() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_printDebug(this.ptr);
    }
    /**
     * Returns the current time of the Timer. The Game Time is null if the Game
     * Time has not been initialized.
     */
    public TimeRef currentTime() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        TimeRef result = new TimeRef(LiveSplitCoreNative.Timer_currentTime(this.ptr));
        return result;
    }
    TimerRef(long ptr) {
        this.ptr = ptr;
    }
}