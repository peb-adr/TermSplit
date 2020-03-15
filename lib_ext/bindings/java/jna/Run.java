package livesplitcore;

import com.sun.jna.*;

/**
 * A Run stores the split times for a specific game and category of a runner.
 */
public class Run extends RunRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != Pointer.NULL) {
            LiveSplitCoreNative.INSTANCE.Run_drop(this.ptr);
            ptr = Pointer.NULL;
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
        super(Pointer.NULL);
        this.ptr = LiveSplitCoreNative.INSTANCE.Run_new();
    }
    /**
     * Attempts to parse a splits file from an array by invoking the corresponding
     * parser for the file format detected. A path to the splits file can be
     * provided, which helps saving the splits file again later. Additionally you
     * need to specify if additional files, like external images are allowed to be
     * loaded. If you are using livesplit-core in a server-like environment, set
     * this to false. Only client-side applications should set this to true.
     */
    public static ParseRunResult parse(Pointer data, long length, String path, boolean loadFiles) {
        ParseRunResult result = new ParseRunResult(LiveSplitCoreNative.INSTANCE.Run_parse(data, new NativeLong(length), path, (byte)(loadFiles ? 1 : 0)));
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
        ParseRunResult result = new ParseRunResult(LiveSplitCoreNative.INSTANCE.Run_parse_file_handle(handle, path, (byte)(loadFiles ? 1 : 0)));
        return result;
    }
    public static ParseRunResult parse(java.io.InputStream stream, String path, boolean loadFiles) throws java.io.IOException {
        java.io.ByteArrayOutputStream out = new java.io.ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        while (true) {
            int r = stream.read(buffer);
            if (r == -1) break;
            out.write(buffer, 0, r);
        }
        byte[] arr = out.toByteArray();
        java.nio.ByteBuffer nativeBuf = java.nio.ByteBuffer.allocateDirect(arr.length);
        nativeBuf.put(arr);
        return Run.parse(Native.getDirectBufferPointer(nativeBuf), arr.length, path, loadFiles);
    }
    Run(Pointer ptr) {
        super(ptr);
    }
}