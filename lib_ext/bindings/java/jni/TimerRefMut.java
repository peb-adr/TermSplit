package livesplitcore;

/**
 * A Timer provides all the capabilities necessary for doing speedrun attempts.
 */
public class TimerRefMut extends TimerRef {
    /**
     * Replaces the Run object used by the Timer with the Run object provided. If
     * the Run provided contains no segments, it can't be used for timing and is
     * not being modified. Otherwise the Run that was in use by the Timer gets
     * stored in the Run object provided. Before the Run is returned, the current
     * attempt is reset and the splits are being updated depending on the
     * `update_splits` parameter. The return value indicates whether the Run got
     * replaced successfully.
     */
    public boolean replaceRun(RunRefMut run, boolean updateSplits) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (run.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.Timer_replaceRun(this.ptr, run.ptr, updateSplits);
        return result;
    }
    /**
     * Sets the Run object used by the Timer with the Run object provided. If the
     * Run provided contains no segments, it can't be used for timing and gets
     * returned again. If the Run object can be set, the original Run object in use
     * by the Timer is disposed by this method and null is returned.
     */
    public Run setRun(Run run) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (run.ptr == 0) {
            throw new RuntimeException();
        }
        Run result = new Run(LiveSplitCoreNative.Timer_setRun(this.ptr, run.ptr));
        run.ptr = 0;
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    /**
     * Starts the Timer if there is no attempt in progress. If that's not the
     * case, nothing happens.
     */
    public void start() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_start(this.ptr);
    }
    /**
     * If an attempt is in progress, stores the current time as the time of the
     * current split. The attempt ends if the last split time is stored.
     */
    public void split() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_split(this.ptr);
    }
    /**
     * Starts a new attempt or stores the current time as the time of the
     * current split. The attempt ends if the last split time is stored.
     */
    public void splitOrStart() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_splitOrStart(this.ptr);
    }
    /**
     * Skips the current split if an attempt is in progress and the
     * current split is not the last split.
     */
    public void skipSplit() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_skipSplit(this.ptr);
    }
    /**
     * Removes the split time from the last split if an attempt is in progress
     * and there is a previous split. The Timer Phase also switches to
     * `Running` if it previously was `Ended`.
     */
    public void undoSplit() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_undoSplit(this.ptr);
    }
    /**
     * Resets the current attempt if there is one in progress. If the splits
     * are to be updated, all the information of the current attempt is stored
     * in the Run's history. Otherwise the current attempt's information is
     * discarded.
     */
    public void reset(boolean updateSplits) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_reset(this.ptr, updateSplits);
    }
    /**
     * Resets the current attempt if there is one in progress. The splits are
     * updated such that the current attempt's split times are being stored as
     * the new Personal Best.
     */
    public void resetAndSetAttemptAsPb() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_resetAndSetAttemptAsPb(this.ptr);
    }
    /**
     * Pauses an active attempt that is not paused.
     */
    public void pause() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_pause(this.ptr);
    }
    /**
     * Resumes an attempt that is paused.
     */
    public void resume() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_resume(this.ptr);
    }
    /**
     * Toggles an active attempt between `Paused` and `Running`.
     */
    public void togglePause() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_togglePause(this.ptr);
    }
    /**
     * Toggles an active attempt between `Paused` and `Running` or starts an
     * attempt if there's none in progress.
     */
    public void togglePauseOrStart() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_togglePauseOrStart(this.ptr);
    }
    /**
     * Removes all the pause times from the current time. If the current
     * attempt is paused, it also resumes that attempt. Additionally, if the
     * attempt is finished, the final split time is adjusted to not include the
     * pause times as well.
     * 
     * # Warning
     * 
     * This behavior is not entirely optimal, as generally only the final split
     * time is modified, while all other split times are left unmodified, which
     * may not be what actually happened during the run.
     */
    public void undoAllPauses() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_undoAllPauses(this.ptr);
    }
    /**
     * Sets the current Timing Method to the Timing Method provided.
     */
    public void setCurrentTimingMethod(byte method) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_setCurrentTimingMethod(this.ptr, method);
    }
    /**
     * Switches the current comparison to the next comparison in the list.
     */
    public void switchToNextComparison() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_switchToNextComparison(this.ptr);
    }
    /**
     * Switches the current comparison to the previous comparison in the list.
     */
    public void switchToPreviousComparison() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_switchToPreviousComparison(this.ptr);
    }
    /**
     * Initializes Game Time for the current attempt. Game Time automatically
     * gets uninitialized for each new attempt.
     */
    public void initializeGameTime() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_initializeGameTime(this.ptr);
    }
    /**
     * Deinitializes Game Time for the current attempt.
     */
    public void deinitializeGameTime() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_deinitializeGameTime(this.ptr);
    }
    /**
     * Pauses the Game Timer such that it doesn't automatically increment
     * similar to Real Time.
     */
    public void pauseGameTime() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_pauseGameTime(this.ptr);
    }
    /**
     * Resumes the Game Timer such that it automatically increments similar to
     * Real Time, starting from the Game Time it was paused at.
     */
    public void resumeGameTime() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_resumeGameTime(this.ptr);
    }
    /**
     * Sets the Game Time to the time specified. This also works if the Game
     * Time is paused, which can be used as a way of updating the Game Timer
     * periodically without it automatically moving forward. This ensures that
     * the Game Timer never shows any time that is not coming from the game.
     */
    public void setGameTime(TimeSpanRef time) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (time.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_setGameTime(this.ptr, time.ptr);
    }
    /**
     * Instead of setting the Game Time directly, this method can be used to
     * just specify the amount of time the game has been loading. The Game Time
     * is then automatically determined by Real Time - Loading Times.
     */
    public void setLoadingTimes(TimeSpanRef time) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        if (time.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_setLoadingTimes(this.ptr, time.ptr);
    }
    /**
     * Marks the Run as unmodified, so that it is known that all the changes
     * have been saved.
     */
    public void markAsUnmodified() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.Timer_markAsUnmodified(this.ptr);
    }
    TimerRefMut(long ptr) {
        super(ptr);
    }
}