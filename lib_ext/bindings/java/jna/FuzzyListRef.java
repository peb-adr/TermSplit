package livesplitcore;

import com.sun.jna.*;

/**
 * With a Fuzzy List, you can implement a fuzzy searching algorithm. The list
 * stores all the items that can be searched for. With the `search` method you
 * can then execute the actual fuzzy search which returns a list of all the
 * elements found. This can be used to implement searching in a list of games.
 */
public class FuzzyListRef {
    Pointer ptr;
    /**
     * Searches for the pattern provided in the list. A list of all the
     * matching elements is returned. The returned list has a maximum amount of
     * elements provided to this method.
     */
    public String search(String pattern, long max) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        String result = LiveSplitCoreNative.INSTANCE.FuzzyList_search(this.ptr, pattern, new NativeLong(max));
        return result;
    }
    FuzzyListRef(Pointer ptr) {
        this.ptr = ptr;
    }
}