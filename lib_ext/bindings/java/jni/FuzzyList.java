package livesplitcore;

/**
 * With a Fuzzy List, you can implement a fuzzy searching algorithm. The list
 * stores all the items that can be searched for. With the `search` method you
 * can then execute the actual fuzzy search which returns a list of all the
 * elements found. This can be used to implement searching in a list of games.
 */
public class FuzzyList extends FuzzyListRefMut implements AutoCloseable {
    private void drop() {
        if (ptr != 0) {
            LiveSplitCoreNative.FuzzyList_drop(this.ptr);
            ptr = 0;
        }
    }
    protected void finalize() throws Throwable {
        drop();
        super.finalize();
    }
    public void close() {
        drop();
    }
    /**
     * Creates a new Fuzzy List.
     */
    public FuzzyList() {
        super(0);
        this.ptr = LiveSplitCoreNative.FuzzyList_new();
    }
    FuzzyList(long ptr) {
        super(ptr);
    }
}