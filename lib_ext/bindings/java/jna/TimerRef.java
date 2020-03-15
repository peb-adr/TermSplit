package livesplitcore;

import com.sun.jna.*;

/**
 * A Timer provides all the capabilities necessary for doing speedrun attempts.
 */
public class TimerRef {
    Pointer ptr;
    /**
     * Returns the currently selected Timing Method.
     */
    public byte currentTimingMethod() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        byte result = LiveSplitCoreNative.INSTANCE.Timer_current_timing_method(this.ptr);
        return result;
    }
    /**
     * Returns the current comparison that is being compared against. This may
     * be a custom comparison or one of the Comparison Generators.
     */
    public String currentComparison() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.Timer_current_comparison(this.ptr);
        return result;
    }
    /**
     * Returns whether Game Time is currently initialized. Game Time
     * automatically gets uninitialized for each new attempt.
     */
    public boolean isGameTimeInitialized() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.Timer_is_game_time_initialized(this.ptr) != 0;
        return result;
    }
    /**
     * Returns whether the Game Timer is currently paused. If the Game Timer is
     * not paused, it automatically increments similar to Real Time.
     */
    public boolean isGameTimePaused() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.INSTANCE.Timer_is_game_time_paused(this.ptr) != 0;
        return result;
    }
    /**
     * Accesses the loading times. Loading times are defined as Game Time - Real Time.
     */
    public TimeSpanRef loadingTimes() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TimeSpanRef result = new TimeSpanRef(LiveSplitCoreNative.INSTANCE.Timer_loading_times(this.ptr));
        return result;
    }
    /**
     * Returns the current Timer Phase.
     */
    public byte currentPhase() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        byte result = LiveSplitCoreNative.INSTANCE.Timer_current_phase(this.ptr);
        return result;
    }
    /**
     * Accesses the Run in use by the Timer.
     */
    public RunRef getRun() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        RunRef result = new RunRef(LiveSplitCoreNative.INSTANCE.Timer_get_run(this.ptr));
        return result;
    }
    /**
     * Saves the Run in use by the Timer as a LiveSplit splits file (*.lss).
     */
    public String saveAsLss() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.Timer_save_as_lss(this.ptr);
        return result;
    }
    /**
     * Prints out debug information representing the whole state of the Timer. This
     * is being written to stdout.
     */
    public void printDebug() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.Timer_print_debug(this.ptr);
    }
    /**
     * Returns the current time of the Timer. The Game Time is null if the Game
     * Time has not been initialized.
     */
    public TimeRef currentTime() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TimeRef result = new TimeRef(LiveSplitCoreNative.INSTANCE.Timer_current_time(this.ptr));
        return result;
    }
    TimerRef(Pointer ptr) {
        this.ptr = ptr;
    }
}