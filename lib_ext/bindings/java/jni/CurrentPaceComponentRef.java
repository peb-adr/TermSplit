package livesplitcore;

/**
 * The Current Pace Component is a component that shows a prediction of the
 * current attempt's final time, if the current attempt's pace matches the
 * chosen comparison for the remainder of the run.
 */
public class CurrentPaceComponentRef {
    long ptr;
    CurrentPaceComponentRef(long ptr) {
        this.ptr = ptr;
    }
}