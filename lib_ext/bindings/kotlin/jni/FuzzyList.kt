package livesplitcore

/**
 * With a Fuzzy List, you can implement a fuzzy searching algorithm. The list
 * stores all the items that can be searched for. With the `search` method you
 * can then execute the actual fuzzy search which returns a list of all the
 * elements found. This can be used to implement searching in a list of games.
 */
open class FuzzyList : FuzzyListRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            LiveSplitCoreNative.FuzzyList_drop(this.ptr)
            ptr = 0
        }
    }
    protected fun finalize() {
        drop()
    }
    override fun close() {
        drop()
    }
    companion object {
    }
    /**
     * Creates a new Fuzzy List.
     */
    constructor(): super(0L) {
        this.ptr = LiveSplitCoreNative.FuzzyList_new()
    }
    internal constructor(ptr: Long) : super(ptr) {}
}