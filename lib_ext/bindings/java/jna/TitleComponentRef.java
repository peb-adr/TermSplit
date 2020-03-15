package livesplitcore;

import com.sun.jna.*;

/**
 * The Title Component is a component that shows the name of the game and the
 * category that is being run. Additionally, the game icon, the attempt count,
 * and the total number of successfully finished runs can be shown.
 */
public class TitleComponentRef {
    Pointer ptr;
    TitleComponentRef(Pointer ptr) {
        this.ptr = ptr;
    }
}