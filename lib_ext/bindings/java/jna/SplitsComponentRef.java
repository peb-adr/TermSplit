package livesplitcore;

import com.sun.jna.*;

/**
 * The Splits Component is the main component for visualizing all the split
 * times. Each segment is shown in a tabular fashion showing the segment icon,
 * segment name, the delta compared to the chosen comparison, and the split
 * time. The list provides scrolling functionality, so not every segment needs
 * to be shown all the time.
 */
public class SplitsComponentRef {
    Pointer ptr;
    SplitsComponentRef(Pointer ptr) {
        this.ptr = ptr;
    }
}