package livesplitcore;

import com.sun.jna.*;

/**
 * The Previous Segment Component is a component that shows how much time was
 * saved or lost during the previous segment based on the chosen comparison.
 * Additionally, the potential time save for the previous segment can be
 * displayed. This component switches to a `Live Segment` view that shows
 * active time loss whenever the runner is losing time on the current segment.
 */
public class PreviousSegmentComponentRefMut extends PreviousSegmentComponentRef {
    PreviousSegmentComponentRefMut(Pointer ptr) {
        super(ptr);
    }
}