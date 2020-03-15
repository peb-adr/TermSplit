package livesplitcore;

/**
 * The state object describes the information to visualize for this component.
 * All the coordinates are in the range 0..1.
 */
public class GraphComponentStateRef {
    long ptr;
    /**
     * Returns the amount of points to visualize. Connect all of them to visualize
     * the graph. If the live delta is active, the last point is to be interpreted
     * as a preview of the next split that is about to happen. Use the partial fill
     * color to visualize the region beneath that graph segment.
     */
    public long pointsLen() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        long result = LiveSplitCoreNative.GraphComponentState_pointsLen(this.ptr);
        return result;
    }
    /**
     * Returns the x coordinate of the point specified. You may not provide an out
     * of bounds index.
     */
    public float pointX(long index) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        float result = LiveSplitCoreNative.GraphComponentState_pointX(this.ptr, index);
        return result;
    }
    /**
     * Returns the y coordinate of the point specified. You may not provide an out
     * of bounds index.
     */
    public float pointY(long index) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        float result = LiveSplitCoreNative.GraphComponentState_pointY(this.ptr, index);
        return result;
    }
    /**
     * Describes whether the segment the point specified is visualizing achieved a
     * new best segment time. Use the best segment color for it, in that case. You
     * may not provide an out of bounds index.
     */
    public boolean pointIsBestSegment(long index) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.GraphComponentState_pointIsBestSegment(this.ptr, index);
        return result;
    }
    /**
     * Describes how many horizontal grid lines to visualize.
     */
    public long horizontalGridLinesLen() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        long result = LiveSplitCoreNative.GraphComponentState_horizontalGridLinesLen(this.ptr);
        return result;
    }
    /**
     * Accesses the y coordinate of the horizontal grid line specified. You may not
     * provide an out of bounds index.
     */
    public float horizontalGridLine(long index) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        float result = LiveSplitCoreNative.GraphComponentState_horizontalGridLine(this.ptr, index);
        return result;
    }
    /**
     * Describes how many vertical grid lines to visualize.
     */
    public long verticalGridLinesLen() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        long result = LiveSplitCoreNative.GraphComponentState_verticalGridLinesLen(this.ptr);
        return result;
    }
    /**
     * Accesses the x coordinate of the vertical grid line specified. You may not
     * provide an out of bounds index.
     */
    public float verticalGridLine(long index) {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        float result = LiveSplitCoreNative.GraphComponentState_verticalGridLine(this.ptr, index);
        return result;
    }
    /**
     * The y coordinate that separates the region that shows the times that are
     * ahead of the comparison and those that are behind.
     */
    public float middle() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        float result = LiveSplitCoreNative.GraphComponentState_middle(this.ptr);
        return result;
    }
    /**
     * If the live delta is active, the last point is to be interpreted as a
     * preview of the next split that is about to happen. Use the partial fill
     * color to visualize the region beneath that graph segment.
     */
    public boolean isLiveDeltaActive() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.GraphComponentState_isLiveDeltaActive(this.ptr);
        return result;
    }
    /**
     * Describes whether the graph is flipped vertically. For visualizing the
     * graph, this usually doesn't need to be interpreted, as this information is
     * entirely encoded into the other variables.
     */
    public boolean isFlipped() {
        if (this.ptr == 0) {
            throw new RuntimeException();
        }
        boolean result = LiveSplitCoreNative.GraphComponentState_isFlipped(this.ptr);
        return result;
    }
    GraphComponentStateRef(long ptr) {
        this.ptr = ptr;
    }
}