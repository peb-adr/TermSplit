package livesplitcore;

import com.sun.jna.*;

/**
 * A Shared Timer that can be used to share a single timer object with multiple
 * owners.
 */
public class SharedTimerRef {
    Pointer ptr;
    /**
     * Creates a new shared timer handle that shares the same timer. The inner
     * timer object only gets disposed when the final handle gets disposed.
     */
    public SharedTimer share() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        SharedTimer result = new SharedTimer(LiveSplitCoreNative.INSTANCE.SharedTimer_share(this.ptr));
        return result;
    }
    /**
     * Requests read access to the timer that is being shared. This blocks the
     * thread as long as there is an active write lock. Dispose the read lock when
     * you are done using the timer.
     */
    public TimerReadLock read() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TimerReadLock result = new TimerReadLock(LiveSplitCoreNative.INSTANCE.SharedTimer_read(this.ptr));
        return result;
    }
    /**
     * Requests write access to the timer that is being shared. This blocks the
     * thread as long as there are active write or read locks. Dispose the write
     * lock when you are done using the timer.
     */
    public TimerWriteLock write() {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        TimerWriteLock result = new TimerWriteLock(LiveSplitCoreNative.INSTANCE.SharedTimer_write(this.ptr));
        return result;
    }
    /**
     * Replaces the timer that is being shared by the timer provided. This blocks
     * the thread as long as there are active write or read locks. Everyone who is
     * sharing the old timer will share the provided timer after successful
     * completion.
     */
    public void replaceInner(Timer timer) {
        if (this.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        if (timer.ptr == Pointer.NULL) {
            throw new RuntimeException();
        }
        LiveSplitCoreNative.INSTANCE.SharedTimer_replace_inner(this.ptr, timer.ptr);
        timer.ptr = Pointer.NULL;
    }
    public void readWith(java.util.function.Consumer<TimerRef> action) {
        try (TimerReadLock timerLock = read()) {
            action.accept(timerLock.timer());
        }
    }
    public void writeWith(java.util.function.Consumer<TimerRefMut> action) {
        try (TimerWriteLock timerLock = write()) {
            action.accept(timerLock.timer());
        }
    }
    SharedTimerRef(Pointer ptr) {
        this.ptr = ptr;
    }
}