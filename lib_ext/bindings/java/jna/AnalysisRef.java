package livesplitcore;

import com.sun.jna.*;

/**
 * The analysis module provides a variety of functions for calculating
 * information about runs.
 */
public class AnalysisRef {
    Pointer ptr;
    AnalysisRef(Pointer ptr) {
        this.ptr = ptr;
    }
}