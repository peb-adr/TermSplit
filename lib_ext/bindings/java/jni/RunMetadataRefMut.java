package livesplitcore;

/**
 * The Run Metadata stores additional information about a run, like the
 * platform and region of the game. All of this information is optional.
 */
public class RunMetadataRefMut extends RunMetadataRef {
    RunMetadataRefMut(long ptr) {
        super(ptr);
    }
}