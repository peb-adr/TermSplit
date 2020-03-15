package livesplitcore;

/**
 * A run parsed by the Composite Parser. This contains the Run itself and
 * information about which parser parsed it.
 */
public class ParseRunResultRef {
    long ptr;
    /**
     * Returns true if the Run got parsed successfully. false is returned otherwise.
     */
    public boolean parsedSuccessfully() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.ParseRunResult_parsedSuccessfully(this.ptr);
        return result;
    }
    /**
     * Accesses the name of the Parser that parsed the Run. You may not call this
     * if the Run wasn't parsed successfully.
     */
    public String timerKind() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.ParseRunResult_timerKind(this.ptr);
        return result;
    }
    /**
     * Checks whether the Parser parsed a generic timer. Since a generic timer can
     * have any name, it may clash with the specific timer formats that
     * livesplit-core supports. With this function you can determine if a generic
     * timer format was parsed, instead of one of the more specific timer formats.
     */
    public boolean isGenericTimer() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.ParseRunResult_isGenericTimer(this.ptr);
        return result;
    }
    ParseRunResultRef(long ptr) {
        this.ptr = ptr;
    }
}