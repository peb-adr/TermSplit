package livesplitcore;

import com.sun.jna.*;

/**
 * The Total Playtime Component is a component that shows the total amount of
 * time that the current category has been played for.
 */
public class TotalPlaytimeComponentRef {
    Pointer ptr;
    TotalPlaytimeComponentRef(Pointer ptr) {
        this.ptr = ptr;
    }
}