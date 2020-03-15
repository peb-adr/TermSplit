package livesplitcore;

/**
 * The Delta Component is a component that shows the how far ahead or behind
 * the current attempt is compared to the chosen comparison.
 */
public class DeltaComponentRef {
    long ptr;
    DeltaComponentRef(long ptr) {
        this.ptr = ptr;
    }
}