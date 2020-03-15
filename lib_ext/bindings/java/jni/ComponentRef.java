package livesplitcore;

/**
 * A Component provides information about a run in a way that is easy to
 * visualize. This type can store any of the components provided by this crate.
 */
public class ComponentRef {
    long ptr;
    ComponentRef(long ptr) {
        this.ptr = ptr;
    }
}