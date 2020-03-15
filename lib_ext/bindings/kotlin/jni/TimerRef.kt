package livesplitcore

/**
 * A Timer provides all the capabilities necessary for doing speedrun attempts.
 */
open class TimerRef internal constructor(var ptr: Long) {
    /**
     * Returns the currently selected Timing Method.
     */
    fun currentTimingMethod(): Byte {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.Timer_currentTimingMethod(this.ptr)
        return result
    }
    /**
     * Returns the current comparison that is being compared against. This may
     * be a custom comparison or one of the Comparison Generators.
     */
    fun currentComparison(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.Timer_currentComparison(this.ptr)
        return result
    }
    /**
     * Returns whether Game Time is currently initialized. Game Time
     * automatically gets uninitialized for each new attempt.
     */
    fun isGameTimeInitialized(): Boolean {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.Timer_isGameTimeInitialized(this.ptr)
        return result
    }
    /**
     * Returns whether the Game Timer is currently paused. If the Game Timer is
     * not paused, it automatically increments similar to Real Time.
     */
    fun isGameTimePaused(): Boolean {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.Timer_isGameTimePaused(this.ptr)
        return result
    }
    /**
     * Accesses the loading times. Loading times are defined as Game Time - Real Time.
     */
    fun loadingTimes(): TimeSpanRef {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimeSpanRef(LiveSplitCoreNative.Timer_loadingTimes(this.ptr))
        return result
    }
    /**
     * Returns the current Timer Phase.
     */
    fun currentPhase(): Byte {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.Timer_currentPhase(this.ptr)
        return result
    }
    /**
     * Accesses the Run in use by the Timer.
     */
    fun getRun(): RunRef {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = RunRef(LiveSplitCoreNative.Timer_getRun(this.ptr))
        return result
    }
    /**
     * Saves the Run in use by the Timer as a LiveSplit splits file (*.lss).
     */
    fun saveAsLss(): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.Timer_saveAsLss(this.ptr)
        return result
    }
    /**
     * Prints out debug information representing the whole state of the Timer. This
     * is being written to stdout.
     */
    fun printDebug() {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        LiveSplitCoreNative.Timer_printDebug(this.ptr)
    }
    /**
     * Returns the current time of the Timer. The Game Time is null if the Game
     * Time has not been initialized.
     */
    fun currentTime(): TimeRef {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = TimeRef(LiveSplitCoreNative.Timer_currentTime(this.ptr))
        return result
    }
}