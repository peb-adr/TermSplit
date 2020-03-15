package livesplitcore

/**
 * With a Fuzzy List, you can implement a fuzzy searching algorithm. The list
 * stores all the items that can be searched for. With the `search` method you
 * can then execute the actual fuzzy search which returns a list of all the
 * elements found. This can be used to implement searching in a list of games.
 */
open class FuzzyListRef internal constructor(var ptr: Long) {
    /**
     * Searches for the pattern provided in the list. A list of all the
     * matching elements is returned. The returned list has a maximum amount of
     * elements provided to this method.
     */
    fun search(pattern: String, max: Long): String {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = LiveSplitCoreNative.FuzzyList_search(this.ptr, pattern, max)
        return result
    }
}