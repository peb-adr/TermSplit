package livesplitcore;

import com.sun.jna.*;

/**
 * The Timer Component is a component that shows the total time of the current
 * attempt as a digital clock. The color of the time shown is based on a how
 * well the current attempt is doing compared to the chosen comparison.
 */
public class TimerComponentRefMut extends TimerComponentRef {
    TimerComponentRefMut(Pointer ptr) {
        super(ptr);
    }
}