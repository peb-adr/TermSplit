package livesplitcore

/**
 * The Run Editor allows modifying Runs while ensuring that all the different
 * invariants of the Run objects are upheld no matter what kind of operations
 * are being applied to the Run. It provides the current state of the editor as
 * state objects that can be visualized by any kind of User Interface.
 */
open class RunEditor : RunEditorRefMut, AutoCloseable {
    private fun drop() {
        if (ptr != 0L) {
            ptr = 0
        }
    }
    protected fun finalize() {
        drop()
    }
    override fun close() {
        drop()
    }
    /**
     * Closes the Run Editor and gives back access to the modified Run object. In
     * case you want to implement a Cancel Button, just dispose the Run object you
     * get here.
     */
    fun finish(): Run {
        if (this.ptr == 0L) {
            throw RuntimeException()
        }
        val result = Run(LiveSplitCoreNative.RunEditor_close(this.ptr))
        this.ptr = 0L
        return result
    }
    companion object {
    /**
     * Creates a new Run Editor that modifies the Run provided. Creation of the Run
     * Editor fails when a Run with no segments is provided. If a Run object with
     * no segments is provided, the Run Editor creation fails and null is
     * returned.
     */
    fun create(run: Run): RunEditor? {
        if (run.ptr == 0L) {
            throw RuntimeException()
        }
        val result = RunEditor(LiveSplitCoreNative.RunEditor_new(run.ptr))
        run.ptr = 0L
        if (result.ptr == 0L) {
            return null
        }
        return result
    }
    }
    internal constructor(ptr: Long) : super(ptr) {}
}