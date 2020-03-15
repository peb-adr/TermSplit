package livesplitcore;

import com.sun.jna.*;

/**
 * The Possible Time Save Component is a component that shows how much time the
 * chosen comparison could've saved for the current segment, based on the Best
 * Segments. This component also allows showing the Total Possible Time Save
 * for the remainder of the current attempt.
 */
public class PossibleTimeSaveComponentRefMut extends PossibleTimeSaveComponentRef {
    PossibleTimeSaveComponentRefMut(Pointer ptr) {
        super(ptr);
    }
}