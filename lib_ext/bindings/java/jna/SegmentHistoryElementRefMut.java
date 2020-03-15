package livesplitcore;

import com.sun.jna.*;

/**
 * A segment time achieved for a segment. It is tagged with an index. Only
 * segment times with an index larger than 0 are considered times actually
 * achieved by the runner, while the others are artifacts of route changes and
 * similar algorithmic changes.
 */
public class SegmentHistoryElementRefMut extends SegmentHistoryElementRef {
    SegmentHistoryElementRefMut(Pointer ptr) {
        super(ptr);
    }
}