package livesplitcore;

/**
 * With a Fuzzy List, you can implement a fuzzy searching algorithm. The list
 * stores all the items that can be searched for. With the `search` method you
 * can then execute the actual fuzzy search which returns a list of all the
 * elements found. This can be used to implement searching in a list of games.
 */
public class FuzzyListRefMut extends FuzzyListRef {
    /**
     * Adds a new element to the list.
     */
    public void push(String text) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.FuzzyList_push(this.ptr, text);
    }
    FuzzyListRefMut(long ptr) {
        super(ptr);
    }
}