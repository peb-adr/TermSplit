package livesplitcore;

import com.sun.jna.*;

/**
 * The Graph Component visualizes how far the current attempt has been ahead or
 * behind the chosen comparison throughout the whole attempt. All the
 * individual deltas are shown as points in a graph.
 */
public class GraphComponentRefMut extends GraphComponentRef {
    GraphComponentRefMut(Pointer ptr) {
        super(ptr);
    }
}