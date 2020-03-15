package livesplitcore;

/**
 * A Run stores the split times for a specific game and category of a runner.
 */
public class Run extends RunRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.Run_drop(this.ptr);
            ptr = 0;
        }
    }
    protected void finalize() throws Throwable {
        drop();
        super.finalize();
    }
    public void close() {
        drop();
    }
    /**
     * Creates a new Run object with no segments.
     */
    public Run() {
        super(0);
        this.ptr = LiveSplitCoreNative.Run_new();
    }
    /**
     * Attempts to parse a splits file from an array by invoking the corresponding
     * parser for the file format detected. A path to the splits file can be
     * provided, which helps saving the splits file again later. Additionally you
     * need to specify if additional files, like external images are allowed to be
     * loaded. If you are using livesplit-core in a server-like environment, set
     * this to false. Only client-side applications should set this to true.
     */
    public static ParseRunResult parse(long data, long length, String path, boolean loadFiles) {
        ParseRunResult result = new ParseRunResult(LiveSplitCoreNative.Run_parse(data, length, path, loadFiles));
        return result;
    }
    /**
     * Attempts to parse a splits file from a file by invoking the corresponding
     * parser for the file format detected. A path to the splits file can be
     * provided, which helps saving the splits file again later. Additionally you
     * need to specify if additional files, like external images are allowed to be
     * loaded. If you are using livesplit-core in a server-like environment, set
     * this to false. Only client-side applications should set this to true. On
     * Unix you pass a file descriptor to this function. On Windows you pass a file
     * handle to this function. The file descriptor / handle does not get closed.
     */
    public static ParseRunResult parseFileHandle(long handle, String path, boolean loadFiles) {
        ParseRunResult result = new ParseRunResult(LiveSplitCoreNative.Run_parseFileHandle(handle, path, loadFiles));
        return result;
    }
    public static ParseRunResult parse(String data, String path, boolean loadFiles) {
        ParseRunResult result = new ParseRunResult(LiveSplitCoreNative.Run_parseString(data, path, loadFiles));
        return result;
    }
    Run(long ptr) {
        super(ptr);
    }
}