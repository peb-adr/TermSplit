package livesplitcore;

public class LiveSplitCoreNative {
    static {
        System.loadLibrary("native-lib");
    }
    public static native long Run_parseString(String data);
    public static native long Analysis_calculateSumOfBest(long run, boolean simpleCalculation, boolean useCurrentRun, byte method);
    public static native long Analysis_calculateTotalPlaytimeForRun(long run);
    public static native long Analysis_calculateTotalPlaytimeForTimer(long timer);
    public static native void AtomicDateTime_drop(long self);
    public static native boolean AtomicDateTime_isSynchronized(long self);
    public static native String AtomicDateTime_toRfc2822(long self);
    public static native String AtomicDateTime_toRfc3339(long self);
    public static native int Attempt_index(long self);
    public static native long Attempt_time(long self);
    public static native long Attempt_pauseTime(long self);
    public static native long Attempt_started(long self);
    public static native long Attempt_ended(long self);
    public static native long BlankSpaceComponent_new();
    public static native void BlankSpaceComponent_drop(long self);
    public static native long BlankSpaceComponent_intoGeneric(long self);
    public static native String BlankSpaceComponent_stateAsJson(long self, long timer);
    public static native long BlankSpaceComponent_state(long self, long timer);
    public static native void BlankSpaceComponentState_drop(long self);
    public static native int BlankSpaceComponentState_size(long self);
    public static native void Component_drop(long self);
    public static native long CurrentComparisonComponent_new();
    public static native void CurrentComparisonComponent_drop(long self);
    public static native long CurrentComparisonComponent_intoGeneric(long self);
    public static native String CurrentComparisonComponent_stateAsJson(long self, long timer);
    public static native long CurrentComparisonComponent_state(long self, long timer);
    public static native void CurrentComparisonComponentState_drop(long self);
    public static native String CurrentComparisonComponentState_text(long self);
    public static native String CurrentComparisonComponentState_comparison(long self);
    public static native long CurrentPaceComponent_new();
    public static native void CurrentPaceComponent_drop(long self);
    public static native long CurrentPaceComponent_intoGeneric(long self);
    public static native String CurrentPaceComponent_stateAsJson(long self, long timer);
    public static native long CurrentPaceComponent_state(long self, long timer);
    public static native void CurrentPaceComponentState_drop(long self);
    public static native String CurrentPaceComponentState_text(long self);
    public static native String CurrentPaceComponentState_time(long self);
    public static native long DeltaComponent_new();
    public static native void DeltaComponent_drop(long self);
    public static native long DeltaComponent_intoGeneric(long self);
    public static native String DeltaComponent_stateAsJson(long self, long timer, long layoutSettings);
    public static native long DeltaComponent_state(long self, long timer, long layoutSettings);
    public static native void DeltaComponentState_drop(long self);
    public static native String DeltaComponentState_text(long self);
    public static native String DeltaComponentState_time(long self);
    public static native String DeltaComponentState_semanticColor(long self);
    public static native long DetailedTimerComponent_new();
    public static native void DetailedTimerComponent_drop(long self);
    public static native long DetailedTimerComponent_intoGeneric(long self);
    public static native String DetailedTimerComponent_stateAsJson(long self, long timer, long layoutSettings);
    public static native long DetailedTimerComponent_state(long self, long timer, long layoutSettings);
    public static native void DetailedTimerComponentState_drop(long self);
    public static native String DetailedTimerComponentState_timerTime(long self);
    public static native String DetailedTimerComponentState_timerFraction(long self);
    public static native String DetailedTimerComponentState_timerSemanticColor(long self);
    public static native String DetailedTimerComponentState_segmentTimerTime(long self);
    public static native String DetailedTimerComponentState_segmentTimerFraction(long self);
    public static native boolean DetailedTimerComponentState_comparison1Visible(long self);
    public static native String DetailedTimerComponentState_comparison1Name(long self);
    public static native String DetailedTimerComponentState_comparison1Time(long self);
    public static native boolean DetailedTimerComponentState_comparison2Visible(long self);
    public static native String DetailedTimerComponentState_comparison2Name(long self);
    public static native String DetailedTimerComponentState_comparison2Time(long self);
    public static native String DetailedTimerComponentState_iconChange(long self);
    public static native String DetailedTimerComponentState_segmentName(long self);
    public static native long FuzzyList_new();
    public static native void FuzzyList_drop(long self);
    public static native String FuzzyList_search(long self, String pattern, long max);
    public static native void FuzzyList_push(long self, String text);
    public static native long GeneralLayoutSettings_default();
    public static native void GeneralLayoutSettings_drop(long self);
    public static native long GraphComponent_new();
    public static native void GraphComponent_drop(long self);
    public static native long GraphComponent_intoGeneric(long self);
    public static native String GraphComponent_stateAsJson(long self, long timer, long layoutSettings);
    public static native long GraphComponent_state(long self, long timer, long layoutSettings);
    public static native void GraphComponentState_drop(long self);
    public static native long GraphComponentState_pointsLen(long self);
    public static native float GraphComponentState_pointX(long self, long index);
    public static native float GraphComponentState_pointY(long self, long index);
    public static native boolean GraphComponentState_pointIsBestSegment(long self, long index);
    public static native long GraphComponentState_horizontalGridLinesLen(long self);
    public static native float GraphComponentState_horizontalGridLine(long self, long index);
    public static native long GraphComponentState_verticalGridLinesLen(long self);
    public static native float GraphComponentState_verticalGridLine(long self, long index);
    public static native float GraphComponentState_middle(long self);
    public static native boolean GraphComponentState_isLiveDeltaActive(long self);
    public static native boolean GraphComponentState_isFlipped(long self);
    public static native long HotkeyConfig_parseJson(String settings);
    public static native void HotkeyConfig_drop(long self);
    public static native String HotkeyConfig_settingsDescriptionAsJson(long self);
    public static native String HotkeyConfig_asJson(long self);
    public static native boolean HotkeyConfig_setValue(long self, long index, long value);
    public static native long HotkeySystem_new(long sharedTimer);
    public static native long HotkeySystem_withConfig(long sharedTimer, long config);
    public static native void HotkeySystem_drop(long self);
    public static native void HotkeySystem_deactivate(long self);
    public static native void HotkeySystem_activate(long self);
    public static native long HotkeySystem_config(long self);
    public static native boolean HotkeySystem_setConfig(long self, long config);
    public static native long Layout_new();
    public static native long Layout_defaultLayout();
    public static native long Layout_parseJson(String settings);
    public static native long Layout_parseOriginalLivesplit(long data, long length);
    public static native void Layout_drop(long self);
    public static native long Layout_clone(long self);
    public static native String Layout_settingsAsJson(long self);
    public static native String Layout_stateAsJson(long self, long timer);
    public static native void Layout_push(long self, long component);
    public static native void Layout_scrollUp(long self);
    public static native void Layout_scrollDown(long self);
    public static native void Layout_remount(long self);
    public static native long LayoutEditor_new(long layout);
    public static native long LayoutEditor_close(long self);
    public static native String LayoutEditor_stateAsJson(long self);
    public static native String LayoutEditor_layoutStateAsJson(long self, long timer);
    public static native void LayoutEditor_select(long self, long index);
    public static native void LayoutEditor_addComponent(long self, long component);
    public static native void LayoutEditor_removeComponent(long self);
    public static native void LayoutEditor_moveComponentUp(long self);
    public static native void LayoutEditor_moveComponentDown(long self);
    public static native void LayoutEditor_moveComponent(long self, long dstIndex);
    public static native void LayoutEditor_duplicateComponent(long self);
    public static native void LayoutEditor_setComponentSettingsValue(long self, long index, long value);
    public static native void LayoutEditor_setGeneralSettingsValue(long self, long index, long value);
    public static native void ParseRunResult_drop(long self);
    public static native long ParseRunResult_unwrap(long self);
    public static native boolean ParseRunResult_parsedSuccessfully(long self);
    public static native String ParseRunResult_timerKind(long self);
    public static native boolean ParseRunResult_isGenericTimer(long self);
    public static native long PossibleTimeSaveComponent_new();
    public static native void PossibleTimeSaveComponent_drop(long self);
    public static native long PossibleTimeSaveComponent_intoGeneric(long self);
    public static native String PossibleTimeSaveComponent_stateAsJson(long self, long timer);
    public static native long PossibleTimeSaveComponent_state(long self, long timer);
    public static native void PossibleTimeSaveComponentState_drop(long self);
    public static native String PossibleTimeSaveComponentState_text(long self);
    public static native String PossibleTimeSaveComponentState_time(long self);
    public static native void PotentialCleanUp_drop(long self);
    public static native String PotentialCleanUp_message(long self);
    public static native long PreviousSegmentComponent_new();
    public static native void PreviousSegmentComponent_drop(long self);
    public static native long PreviousSegmentComponent_intoGeneric(long self);
    public static native String PreviousSegmentComponent_stateAsJson(long self, long timer, long layoutSettings);
    public static native long PreviousSegmentComponent_state(long self, long timer, long layoutSettings);
    public static native void PreviousSegmentComponentState_drop(long self);
    public static native String PreviousSegmentComponentState_text(long self);
    public static native String PreviousSegmentComponentState_time(long self);
    public static native String PreviousSegmentComponentState_semanticColor(long self);
    public static native long Run_new();
    public static native long Run_parse(long data, long length, String path, boolean loadFiles);
    public static native long Run_parseFileHandle(long handle, String path, boolean loadFiles);
    public static native void Run_drop(long self);
    public static native long Run_clone(long self);
    public static native String Run_gameName(long self);
    public static native String Run_gameIcon(long self);
    public static native String Run_categoryName(long self);
    public static native String Run_extendedFileName(long self, boolean useExtendedCategoryName);
    public static native String Run_extendedName(long self, boolean useExtendedCategoryName);
    public static native String Run_extendedCategoryName(long self, boolean showRegion, boolean showPlatform, boolean showVariables);
    public static native int Run_attemptCount(long self);
    public static native long Run_metadata(long self);
    public static native long Run_offset(long self);
    public static native long Run_len(long self);
    public static native boolean Run_hasBeenModified(long self);
    public static native long Run_segment(long self, long index);
    public static native long Run_attemptHistoryLen(long self);
    public static native long Run_attemptHistoryIndex(long self, long index);
    public static native String Run_saveAsLss(long self);
    public static native long Run_customComparisonsLen(long self);
    public static native String Run_customComparison(long self, long index);
    public static native String Run_autoSplitterSettings(long self);
    public static native void Run_pushSegment(long self, long segment);
    public static native void Run_setGameName(long self, String game);
    public static native void Run_setCategoryName(long self, String category);
    public static native void Run_markAsModified(long self);
    public static native long RunEditor_new(long run);
    public static native long RunEditor_close(long self);
    public static native String RunEditor_stateAsJson(long self);
    public static native void RunEditor_selectTimingMethod(long self, byte method);
    public static native void RunEditor_unselect(long self, long index);
    public static native void RunEditor_selectAdditionally(long self, long index);
    public static native void RunEditor_selectOnly(long self, long index);
    public static native void RunEditor_setGameName(long self, String game);
    public static native void RunEditor_setCategoryName(long self, String category);
    public static native boolean RunEditor_parseAndSetOffset(long self, String offset);
    public static native boolean RunEditor_parseAndSetAttemptCount(long self, String attempts);
    public static native void RunEditor_setGameIcon(long self, long data, long length);
    public static native void RunEditor_removeGameIcon(long self);
    public static native void RunEditor_setRunId(long self, String name);
    public static native void RunEditor_setRegionName(long self, String name);
    public static native void RunEditor_setPlatformName(long self, String name);
    public static native void RunEditor_setEmulatorUsage(long self, boolean usesEmulator);
    public static native void RunEditor_setVariable(long self, String name, String value);
    public static native void RunEditor_removeVariable(long self, String name);
    public static native void RunEditor_clearMetadata(long self);
    public static native void RunEditor_insertSegmentAbove(long self);
    public static native void RunEditor_insertSegmentBelow(long self);
    public static native void RunEditor_removeSegments(long self);
    public static native void RunEditor_moveSegmentsUp(long self);
    public static native void RunEditor_moveSegmentsDown(long self);
    public static native void RunEditor_activeSetIcon(long self, long data, long length);
    public static native void RunEditor_activeRemoveIcon(long self);
    public static native void RunEditor_activeSetName(long self, String name);
    public static native boolean RunEditor_activeParseAndSetSplitTime(long self, String time);
    public static native boolean RunEditor_activeParseAndSetSegmentTime(long self, String time);
    public static native boolean RunEditor_activeParseAndSetBestSegmentTime(long self, String time);
    public static native boolean RunEditor_activeParseAndSetComparisonTime(long self, String comparison, String time);
    public static native boolean RunEditor_addComparison(long self, String comparison);
    public static native boolean RunEditor_importComparison(long self, long run, String comparison);
    public static native void RunEditor_removeComparison(long self, String comparison);
    public static native boolean RunEditor_renameComparison(long self, String oldName, String newName);
    public static native boolean RunEditor_moveComparison(long self, long srcIndex, long dstIndex);
    public static native void RunEditor_clearHistory(long self);
    public static native void RunEditor_clearTimes(long self);
    public static native long RunEditor_cleanSumOfBest(long self);
    public static native String RunMetadata_runId(long self);
    public static native String RunMetadata_platformName(long self);
    public static native boolean RunMetadata_usesEmulator(long self);
    public static native String RunMetadata_regionName(long self);
    public static native long RunMetadata_variables(long self);
    public static native void RunMetadataVariable_drop(long self);
    public static native String RunMetadataVariable_name(long self);
    public static native String RunMetadataVariable_value(long self);
    public static native void RunMetadataVariablesIter_drop(long self);
    public static native long RunMetadataVariablesIter_next(long self);
    public static native long Segment_new(String name);
    public static native void Segment_drop(long self);
    public static native String Segment_name(long self);
    public static native String Segment_icon(long self);
    public static native long Segment_comparison(long self, String comparison);
    public static native long Segment_personalBestSplitTime(long self);
    public static native long Segment_bestSegmentTime(long self);
    public static native long Segment_segmentHistory(long self);
    public static native long SegmentHistory_iter(long self);
    public static native int SegmentHistoryElement_index(long self);
    public static native long SegmentHistoryElement_time(long self);
    public static native void SegmentHistoryIter_drop(long self);
    public static native long SegmentHistoryIter_next(long self);
    public static native long SeparatorComponent_new();
    public static native void SeparatorComponent_drop(long self);
    public static native long SeparatorComponent_intoGeneric(long self);
    public static native long SettingValue_fromBool(boolean value);
    public static native long SettingValue_fromUint(int value);
    public static native long SettingValue_fromInt(int value);
    public static native long SettingValue_fromString(String value);
    public static native long SettingValue_fromOptionalString(String value);
    public static native long SettingValue_fromOptionalEmptyString();
    public static native long SettingValue_fromFloat(double value);
    public static native long SettingValue_fromAccuracy(String value);
    public static native long SettingValue_fromDigitsFormat(String value);
    public static native long SettingValue_fromOptionalTimingMethod(String value);
    public static native long SettingValue_fromOptionalEmptyTimingMethod();
    public static native long SettingValue_fromColor(float r, float g, float b, float a);
    public static native long SettingValue_fromOptionalColor(float r, float g, float b, float a);
    public static native long SettingValue_fromOptionalEmptyColor();
    public static native long SettingValue_fromTransparentGradient();
    public static native long SettingValue_fromVerticalGradient(float r1, float g1, float b1, float a1, float r2, float g2, float b2, float a2);
    public static native long SettingValue_fromHorizontalGradient(float r1, float g1, float b1, float a1, float r2, float g2, float b2, float a2);
    public static native long SettingValue_fromAlternatingGradient(float r1, float g1, float b1, float a1, float r2, float g2, float b2, float a2);
    public static native long SettingValue_fromAlignment(String value);
    public static native long SettingValue_fromColumnStartWith(String value);
    public static native long SettingValue_fromColumnUpdateWith(String value);
    public static native long SettingValue_fromColumnUpdateTrigger(String value);
    public static native void SettingValue_drop(long self);
    public static native void SharedTimer_drop(long self);
    public static native long SharedTimer_share(long self);
    public static native long SharedTimer_read(long self);
    public static native long SharedTimer_write(long self);
    public static native void SharedTimer_replaceInner(long self, long timer);
    public static native long SplitComponentState_columnsLen(long self, long index);
    public static native long SplitsComponent_new();
    public static native void SplitsComponent_drop(long self);
    public static native long SplitsComponent_intoGeneric(long self);
    public static native String SplitsComponent_stateAsJson(long self, long timer, long layoutSettings);
    public static native long SplitsComponent_state(long self, long timer, long layoutSettings);
    public static native void SplitsComponent_scrollUp(long self);
    public static native void SplitsComponent_scrollDown(long self);
    public static native void SplitsComponent_setVisualSplitCount(long self, long count);
    public static native void SplitsComponent_setSplitPreviewCount(long self, long count);
    public static native void SplitsComponent_setAlwaysShowLastSplit(long self, boolean alwaysShowLastSplit);
    public static native void SplitsComponent_setSeparatorLastSplit(long self, boolean separatorLastSplit);
    public static native void SplitsComponentState_drop(long self);
    public static native boolean SplitsComponentState_finalSeparatorShown(long self);
    public static native long SplitsComponentState_len(long self);
    public static native long SplitsComponentState_iconChangeCount(long self);
    public static native long SplitsComponentState_iconChangeSegmentIndex(long self, long iconChangeIndex);
    public static native String SplitsComponentState_iconChangeIcon(long self, long iconChangeIndex);
    public static native String SplitsComponentState_name(long self, long index);
    public static native String SplitsComponentState_columnValue(long self, long index, long columnIndex);
    public static native String SplitsComponentState_columnSemanticColor(long self, long index, long columnIndex);
    public static native boolean SplitsComponentState_isCurrentSplit(long self, long index);
    public static native void SumOfBestCleaner_drop(long self);
    public static native long SumOfBestCleaner_nextPotentialCleanUp(long self);
    public static native void SumOfBestCleaner_apply(long self, long cleanUp);
    public static native long SumOfBestComponent_new();
    public static native void SumOfBestComponent_drop(long self);
    public static native long SumOfBestComponent_intoGeneric(long self);
    public static native String SumOfBestComponent_stateAsJson(long self, long timer);
    public static native long SumOfBestComponent_state(long self, long timer);
    public static native void SumOfBestComponentState_drop(long self);
    public static native String SumOfBestComponentState_text(long self);
    public static native String SumOfBestComponentState_time(long self);
    public static native long TextComponent_new();
    public static native void TextComponent_drop(long self);
    public static native long TextComponent_intoGeneric(long self);
    public static native String TextComponent_stateAsJson(long self);
    public static native long TextComponent_state(long self);
    public static native void TextComponent_setCenter(long self, String text);
    public static native void TextComponent_setLeft(long self, String text);
    public static native void TextComponent_setRight(long self, String text);
    public static native void TextComponentState_drop(long self);
    public static native String TextComponentState_left(long self);
    public static native String TextComponentState_right(long self);
    public static native String TextComponentState_center(long self);
    public static native boolean TextComponentState_isSplit(long self);
    public static native void Time_drop(long self);
    public static native long Time_clone(long self);
    public static native long Time_realTime(long self);
    public static native long Time_gameTime(long self);
    public static native long Time_index(long self, byte timingMethod);
    public static native long TimeSpan_fromSeconds(double seconds);
    public static native long TimeSpan_parse(String text);
    public static native void TimeSpan_drop(long self);
    public static native long TimeSpan_clone(long self);
    public static native double TimeSpan_totalSeconds(long self);
    public static native long Timer_new(long run);
    public static native long Timer_intoShared(long self);
    public static native long Timer_intoRun(long self, boolean updateSplits);
    public static native void Timer_drop(long self);
    public static native byte Timer_currentTimingMethod(long self);
    public static native String Timer_currentComparison(long self);
    public static native boolean Timer_isGameTimeInitialized(long self);
    public static native boolean Timer_isGameTimePaused(long self);
    public static native long Timer_loadingTimes(long self);
    public static native byte Timer_currentPhase(long self);
    public static native long Timer_getRun(long self);
    public static native String Timer_saveAsLss(long self);
    public static native void Timer_printDebug(long self);
    public static native long Timer_currentTime(long self);
    public static native boolean Timer_replaceRun(long self, long run, boolean updateSplits);
    public static native long Timer_setRun(long self, long run);
    public static native void Timer_start(long self);
    public static native void Timer_split(long self);
    public static native void Timer_splitOrStart(long self);
    public static native void Timer_skipSplit(long self);
    public static native void Timer_undoSplit(long self);
    public static native void Timer_reset(long self, boolean updateSplits);
    public static native void Timer_resetAndSetAttemptAsPb(long self);
    public static native void Timer_pause(long self);
    public static native void Timer_resume(long self);
    public static native void Timer_togglePause(long self);
    public static native void Timer_togglePauseOrStart(long self);
    public static native void Timer_undoAllPauses(long self);
    public static native void Timer_setCurrentTimingMethod(long self, byte method);
    public static native void Timer_switchToNextComparison(long self);
    public static native void Timer_switchToPreviousComparison(long self);
    public static native void Timer_initializeGameTime(long self);
    public static native void Timer_deinitializeGameTime(long self);
    public static native void Timer_pauseGameTime(long self);
    public static native void Timer_resumeGameTime(long self);
    public static native void Timer_setGameTime(long self, long time);
    public static native void Timer_setLoadingTimes(long self, long time);
    public static native void Timer_markAsUnmodified(long self);
    public static native long TimerComponent_new();
    public static native void TimerComponent_drop(long self);
    public static native long TimerComponent_intoGeneric(long self);
    public static native String TimerComponent_stateAsJson(long self, long timer, long layoutSettings);
    public static native long TimerComponent_state(long self, long timer, long layoutSettings);
    public static native void TimerComponentState_drop(long self);
    public static native String TimerComponentState_time(long self);
    public static native String TimerComponentState_fraction(long self);
    public static native String TimerComponentState_semanticColor(long self);
    public static native void TimerReadLock_drop(long self);
    public static native long TimerReadLock_timer(long self);
    public static native void TimerWriteLock_drop(long self);
    public static native long TimerWriteLock_timer(long self);
    public static native long TitleComponent_new();
    public static native void TitleComponent_drop(long self);
    public static native long TitleComponent_intoGeneric(long self);
    public static native String TitleComponent_stateAsJson(long self, long timer);
    public static native long TitleComponent_state(long self, long timer);
    public static native void TitleComponentState_drop(long self);
    public static native String TitleComponentState_iconChange(long self);
    public static native String TitleComponentState_line1(long self);
    public static native String TitleComponentState_line2(long self);
    public static native boolean TitleComponentState_isCentered(long self);
    public static native boolean TitleComponentState_showsFinishedRuns(long self);
    public static native int TitleComponentState_finishedRuns(long self);
    public static native boolean TitleComponentState_showsAttempts(long self);
    public static native int TitleComponentState_attempts(long self);
    public static native long TotalPlaytimeComponent_new();
    public static native void TotalPlaytimeComponent_drop(long self);
    public static native long TotalPlaytimeComponent_intoGeneric(long self);
    public static native String TotalPlaytimeComponent_stateAsJson(long self, long timer);
    public static native long TotalPlaytimeComponent_state(long self, long timer);
    public static native void TotalPlaytimeComponentState_drop(long self);
    public static native String TotalPlaytimeComponentState_text(long self);
    public static native String TotalPlaytimeComponentState_time(long self);
}
