package livesplitcore;

/**
 * A run parsed by the Composite Parser. This contains the Run itself and
 * information about which parser parsed it.
 */
public class ParseRunResultRefMut extends ParseRunResultRef {
    ParseRunResultRefMut(long ptr) {
        super(ptr);
    }
}