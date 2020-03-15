package livesplitcore

object LiveSplitCoreNative {
    init {
        System.loadLibrary("native-lib")
    }
    external fun Run_parseString(data: String): Long
    external fun Analysis_calculateSumOfBest(run: Long, simpleCalculation: Boolean, useCurrentRun: Boolean, method: Byte): Long
    external fun Analysis_calculateTotalPlaytimeForRun(run: Long): Long
    external fun Analysis_calculateTotalPlaytimeForTimer(timer: Long): Long
    external fun AtomicDateTime_drop(self: Long)
    external fun AtomicDateTime_isSynchronized(self: Long): Boolean
    external fun AtomicDateTime_toRfc2822(self: Long): String
    external fun AtomicDateTime_toRfc3339(self: Long): String
    external fun Attempt_index(self: Long): Int
    external fun Attempt_time(self: Long): Long
    external fun Attempt_pauseTime(self: Long): Long
    external fun Attempt_started(self: Long): Long
    external fun Attempt_ended(self: Long): Long
    external fun BlankSpaceComponent_new(): Long
    external fun BlankSpaceComponent_drop(self: Long)
    external fun BlankSpaceComponent_intoGeneric(self: Long): Long
    external fun BlankSpaceComponent_stateAsJson(self: Long, timer: Long): String
    external fun BlankSpaceComponent_state(self: Long, timer: Long): Long
    external fun BlankSpaceComponentState_drop(self: Long)
    external fun BlankSpaceComponentState_size(self: Long): Int
    external fun Component_drop(self: Long)
    external fun CurrentComparisonComponent_new(): Long
    external fun CurrentComparisonComponent_drop(self: Long)
    external fun CurrentComparisonComponent_intoGeneric(self: Long): Long
    external fun CurrentComparisonComponent_stateAsJson(self: Long, timer: Long): String
    external fun CurrentComparisonComponent_state(self: Long, timer: Long): Long
    external fun CurrentComparisonComponentState_drop(self: Long)
    external fun CurrentComparisonComponentState_text(self: Long): String
    external fun CurrentComparisonComponentState_comparison(self: Long): String
    external fun CurrentPaceComponent_new(): Long
    external fun CurrentPaceComponent_drop(self: Long)
    external fun CurrentPaceComponent_intoGeneric(self: Long): Long
    external fun CurrentPaceComponent_stateAsJson(self: Long, timer: Long): String
    external fun CurrentPaceComponent_state(self: Long, timer: Long): Long
    external fun CurrentPaceComponentState_drop(self: Long)
    external fun CurrentPaceComponentState_text(self: Long): String
    external fun CurrentPaceComponentState_time(self: Long): String
    external fun DeltaComponent_new(): Long
    external fun DeltaComponent_drop(self: Long)
    external fun DeltaComponent_intoGeneric(self: Long): Long
    external fun DeltaComponent_stateAsJson(self: Long, timer: Long, layoutSettings: Long): String
    external fun DeltaComponent_state(self: Long, timer: Long, layoutSettings: Long): Long
    external fun DeltaComponentState_drop(self: Long)
    external fun DeltaComponentState_text(self: Long): String
    external fun DeltaComponentState_time(self: Long): String
    external fun DeltaComponentState_semanticColor(self: Long): String
    external fun DetailedTimerComponent_new(): Long
    external fun DetailedTimerComponent_drop(self: Long)
    external fun DetailedTimerComponent_intoGeneric(self: Long): Long
    external fun DetailedTimerComponent_stateAsJson(self: Long, timer: Long, layoutSettings: Long): String
    external fun DetailedTimerComponent_state(self: Long, timer: Long, layoutSettings: Long): Long
    external fun DetailedTimerComponentState_drop(self: Long)
    external fun DetailedTimerComponentState_timerTime(self: Long): String
    external fun DetailedTimerComponentState_timerFraction(self: Long): String
    external fun DetailedTimerComponentState_timerSemanticColor(self: Long): String
    external fun DetailedTimerComponentState_segmentTimerTime(self: Long): String
    external fun DetailedTimerComponentState_segmentTimerFraction(self: Long): String
    external fun DetailedTimerComponentState_comparison1Visible(self: Long): Boolean
    external fun DetailedTimerComponentState_comparison1Name(self: Long): String
    external fun DetailedTimerComponentState_comparison1Time(self: Long): String
    external fun DetailedTimerComponentState_comparison2Visible(self: Long): Boolean
    external fun DetailedTimerComponentState_comparison2Name(self: Long): String
    external fun DetailedTimerComponentState_comparison2Time(self: Long): String
    external fun DetailedTimerComponentState_iconChange(self: Long): String
    external fun DetailedTimerComponentState_segmentName(self: Long): String
    external fun FuzzyList_new(): Long
    external fun FuzzyList_drop(self: Long)
    external fun FuzzyList_search(self: Long, pattern: String, max: Long): String
    external fun FuzzyList_push(self: Long, text: String)
    external fun GeneralLayoutSettings_default(): Long
    external fun GeneralLayoutSettings_drop(self: Long)
    external fun GraphComponent_new(): Long
    external fun GraphComponent_drop(self: Long)
    external fun GraphComponent_intoGeneric(self: Long): Long
    external fun GraphComponent_stateAsJson(self: Long, timer: Long, layoutSettings: Long): String
    external fun GraphComponent_state(self: Long, timer: Long, layoutSettings: Long): Long
    external fun GraphComponentState_drop(self: Long)
    external fun GraphComponentState_pointsLen(self: Long): Long
    external fun GraphComponentState_pointX(self: Long, index: Long): Float
    external fun GraphComponentState_pointY(self: Long, index: Long): Float
    external fun GraphComponentState_pointIsBestSegment(self: Long, index: Long): Boolean
    external fun GraphComponentState_horizontalGridLinesLen(self: Long): Long
    external fun GraphComponentState_horizontalGridLine(self: Long, index: Long): Float
    external fun GraphComponentState_verticalGridLinesLen(self: Long): Long
    external fun GraphComponentState_verticalGridLine(self: Long, index: Long): Float
    external fun GraphComponentState_middle(self: Long): Float
    external fun GraphComponentState_isLiveDeltaActive(self: Long): Boolean
    external fun GraphComponentState_isFlipped(self: Long): Boolean
    external fun HotkeyConfig_parseJson(settings: String): Long
    external fun HotkeyConfig_drop(self: Long)
    external fun HotkeyConfig_settingsDescriptionAsJson(self: Long): String
    external fun HotkeyConfig_asJson(self: Long): String
    external fun HotkeyConfig_setValue(self: Long, index: Long, value: Long): Boolean
    external fun HotkeySystem_new(sharedTimer: Long): Long
    external fun HotkeySystem_withConfig(sharedTimer: Long, config: Long): Long
    external fun HotkeySystem_drop(self: Long)
    external fun HotkeySystem_deactivate(self: Long)
    external fun HotkeySystem_activate(self: Long)
    external fun HotkeySystem_config(self: Long): Long
    external fun HotkeySystem_setConfig(self: Long, config: Long): Boolean
    external fun Layout_new(): Long
    external fun Layout_defaultLayout(): Long
    external fun Layout_parseJson(settings: String): Long
    external fun Layout_parseOriginalLivesplit(data: Long, length: Long): Long
    external fun Layout_drop(self: Long)
    external fun Layout_clone(self: Long): Long
    external fun Layout_settingsAsJson(self: Long): String
    external fun Layout_stateAsJson(self: Long, timer: Long): String
    external fun Layout_push(self: Long, component: Long)
    external fun Layout_scrollUp(self: Long)
    external fun Layout_scrollDown(self: Long)
    external fun Layout_remount(self: Long)
    external fun LayoutEditor_new(layout: Long): Long
    external fun LayoutEditor_close(self: Long): Long
    external fun LayoutEditor_stateAsJson(self: Long): String
    external fun LayoutEditor_layoutStateAsJson(self: Long, timer: Long): String
    external fun LayoutEditor_select(self: Long, index: Long)
    external fun LayoutEditor_addComponent(self: Long, component: Long)
    external fun LayoutEditor_removeComponent(self: Long)
    external fun LayoutEditor_moveComponentUp(self: Long)
    external fun LayoutEditor_moveComponentDown(self: Long)
    external fun LayoutEditor_moveComponent(self: Long, dstIndex: Long)
    external fun LayoutEditor_duplicateComponent(self: Long)
    external fun LayoutEditor_setComponentSettingsValue(self: Long, index: Long, value: Long)
    external fun LayoutEditor_setGeneralSettingsValue(self: Long, index: Long, value: Long)
    external fun ParseRunResult_drop(self: Long)
    external fun ParseRunResult_unwrap(self: Long): Long
    external fun ParseRunResult_parsedSuccessfully(self: Long): Boolean
    external fun ParseRunResult_timerKind(self: Long): String
    external fun ParseRunResult_isGenericTimer(self: Long): Boolean
    external fun PossibleTimeSaveComponent_new(): Long
    external fun PossibleTimeSaveComponent_drop(self: Long)
    external fun PossibleTimeSaveComponent_intoGeneric(self: Long): Long
    external fun PossibleTimeSaveComponent_stateAsJson(self: Long, timer: Long): String
    external fun PossibleTimeSaveComponent_state(self: Long, timer: Long): Long
    external fun PossibleTimeSaveComponentState_drop(self: Long)
    external fun PossibleTimeSaveComponentState_text(self: Long): String
    external fun PossibleTimeSaveComponentState_time(self: Long): String
    external fun PotentialCleanUp_drop(self: Long)
    external fun PotentialCleanUp_message(self: Long): String
    external fun PreviousSegmentComponent_new(): Long
    external fun PreviousSegmentComponent_drop(self: Long)
    external fun PreviousSegmentComponent_intoGeneric(self: Long): Long
    external fun PreviousSegmentComponent_stateAsJson(self: Long, timer: Long, layoutSettings: Long): String
    external fun PreviousSegmentComponent_state(self: Long, timer: Long, layoutSettings: Long): Long
    external fun PreviousSegmentComponentState_drop(self: Long)
    external fun PreviousSegmentComponentState_text(self: Long): String
    external fun PreviousSegmentComponentState_time(self: Long): String
    external fun PreviousSegmentComponentState_semanticColor(self: Long): String
    external fun Run_new(): Long
    external fun Run_parse(data: Long, length: Long, path: String, loadFiles: Boolean): Long
    external fun Run_parseFileHandle(handle: Long, path: String, loadFiles: Boolean): Long
    external fun Run_drop(self: Long)
    external fun Run_clone(self: Long): Long
    external fun Run_gameName(self: Long): String
    external fun Run_gameIcon(self: Long): String
    external fun Run_categoryName(self: Long): String
    external fun Run_extendedFileName(self: Long, useExtendedCategoryName: Boolean): String
    external fun Run_extendedName(self: Long, useExtendedCategoryName: Boolean): String
    external fun Run_extendedCategoryName(self: Long, showRegion: Boolean, showPlatform: Boolean, showVariables: Boolean): String
    external fun Run_attemptCount(self: Long): Int
    external fun Run_metadata(self: Long): Long
    external fun Run_offset(self: Long): Long
    external fun Run_len(self: Long): Long
    external fun Run_hasBeenModified(self: Long): Boolean
    external fun Run_segment(self: Long, index: Long): Long
    external fun Run_attemptHistoryLen(self: Long): Long
    external fun Run_attemptHistoryIndex(self: Long, index: Long): Long
    external fun Run_saveAsLss(self: Long): String
    external fun Run_customComparisonsLen(self: Long): Long
    external fun Run_customComparison(self: Long, index: Long): String
    external fun Run_autoSplitterSettings(self: Long): String
    external fun Run_pushSegment(self: Long, segment: Long)
    external fun Run_setGameName(self: Long, game: String)
    external fun Run_setCategoryName(self: Long, category: String)
    external fun Run_markAsModified(self: Long)
    external fun RunEditor_new(run: Long): Long
    external fun RunEditor_close(self: Long): Long
    external fun RunEditor_stateAsJson(self: Long): String
    external fun RunEditor_selectTimingMethod(self: Long, method: Byte)
    external fun RunEditor_unselect(self: Long, index: Long)
    external fun RunEditor_selectAdditionally(self: Long, index: Long)
    external fun RunEditor_selectOnly(self: Long, index: Long)
    external fun RunEditor_setGameName(self: Long, game: String)
    external fun RunEditor_setCategoryName(self: Long, category: String)
    external fun RunEditor_parseAndSetOffset(self: Long, offset: String): Boolean
    external fun RunEditor_parseAndSetAttemptCount(self: Long, attempts: String): Boolean
    external fun RunEditor_setGameIcon(self: Long, data: Long, length: Long)
    external fun RunEditor_removeGameIcon(self: Long)
    external fun RunEditor_setRunId(self: Long, name: String)
    external fun RunEditor_setRegionName(self: Long, name: String)
    external fun RunEditor_setPlatformName(self: Long, name: String)
    external fun RunEditor_setEmulatorUsage(self: Long, usesEmulator: Boolean)
    external fun RunEditor_setVariable(self: Long, name: String, value: String)
    external fun RunEditor_removeVariable(self: Long, name: String)
    external fun RunEditor_clearMetadata(self: Long)
    external fun RunEditor_insertSegmentAbove(self: Long)
    external fun RunEditor_insertSegmentBelow(self: Long)
    external fun RunEditor_removeSegments(self: Long)
    external fun RunEditor_moveSegmentsUp(self: Long)
    external fun RunEditor_moveSegmentsDown(self: Long)
    external fun RunEditor_activeSetIcon(self: Long, data: Long, length: Long)
    external fun RunEditor_activeRemoveIcon(self: Long)
    external fun RunEditor_activeSetName(self: Long, name: String)
    external fun RunEditor_activeParseAndSetSplitTime(self: Long, time: String): Boolean
    external fun RunEditor_activeParseAndSetSegmentTime(self: Long, time: String): Boolean
    external fun RunEditor_activeParseAndSetBestSegmentTime(self: Long, time: String): Boolean
    external fun RunEditor_activeParseAndSetComparisonTime(self: Long, comparison: String, time: String): Boolean
    external fun RunEditor_addComparison(self: Long, comparison: String): Boolean
    external fun RunEditor_importComparison(self: Long, run: Long, comparison: String): Boolean
    external fun RunEditor_removeComparison(self: Long, comparison: String)
    external fun RunEditor_renameComparison(self: Long, oldName: String, newName: String): Boolean
    external fun RunEditor_moveComparison(self: Long, srcIndex: Long, dstIndex: Long): Boolean
    external fun RunEditor_clearHistory(self: Long)
    external fun RunEditor_clearTimes(self: Long)
    external fun RunEditor_cleanSumOfBest(self: Long): Long
    external fun RunMetadata_runId(self: Long): String
    external fun RunMetadata_platformName(self: Long): String
    external fun RunMetadata_usesEmulator(self: Long): Boolean
    external fun RunMetadata_regionName(self: Long): String
    external fun RunMetadata_variables(self: Long): Long
    external fun RunMetadataVariable_drop(self: Long)
    external fun RunMetadataVariable_name(self: Long): String
    external fun RunMetadataVariable_value(self: Long): String
    external fun RunMetadataVariablesIter_drop(self: Long)
    external fun RunMetadataVariablesIter_next(self: Long): Long
    external fun Segment_new(name: String): Long
    external fun Segment_drop(self: Long)
    external fun Segment_name(self: Long): String
    external fun Segment_icon(self: Long): String
    external fun Segment_comparison(self: Long, comparison: String): Long
    external fun Segment_personalBestSplitTime(self: Long): Long
    external fun Segment_bestSegmentTime(self: Long): Long
    external fun Segment_segmentHistory(self: Long): Long
    external fun SegmentHistory_iter(self: Long): Long
    external fun SegmentHistoryElement_index(self: Long): Int
    external fun SegmentHistoryElement_time(self: Long): Long
    external fun SegmentHistoryIter_drop(self: Long)
    external fun SegmentHistoryIter_next(self: Long): Long
    external fun SeparatorComponent_new(): Long
    external fun SeparatorComponent_drop(self: Long)
    external fun SeparatorComponent_intoGeneric(self: Long): Long
    external fun SettingValue_fromBool(value: Boolean): Long
    external fun SettingValue_fromUint(value: Int): Long
    external fun SettingValue_fromInt(value: Int): Long
    external fun SettingValue_fromString(value: String): Long
    external fun SettingValue_fromOptionalString(value: String): Long
    external fun SettingValue_fromOptionalEmptyString(): Long
    external fun SettingValue_fromFloat(value: Double): Long
    external fun SettingValue_fromAccuracy(value: String): Long
    external fun SettingValue_fromDigitsFormat(value: String): Long
    external fun SettingValue_fromOptionalTimingMethod(value: String): Long
    external fun SettingValue_fromOptionalEmptyTimingMethod(): Long
    external fun SettingValue_fromColor(r: Float, g: Float, b: Float, a: Float): Long
    external fun SettingValue_fromOptionalColor(r: Float, g: Float, b: Float, a: Float): Long
    external fun SettingValue_fromOptionalEmptyColor(): Long
    external fun SettingValue_fromTransparentGradient(): Long
    external fun SettingValue_fromVerticalGradient(r1: Float, g1: Float, b1: Float, a1: Float, r2: Float, g2: Float, b2: Float, a2: Float): Long
    external fun SettingValue_fromHorizontalGradient(r1: Float, g1: Float, b1: Float, a1: Float, r2: Float, g2: Float, b2: Float, a2: Float): Long
    external fun SettingValue_fromAlternatingGradient(r1: Float, g1: Float, b1: Float, a1: Float, r2: Float, g2: Float, b2: Float, a2: Float): Long
    external fun SettingValue_fromAlignment(value: String): Long
    external fun SettingValue_fromColumnStartWith(value: String): Long
    external fun SettingValue_fromColumnUpdateWith(value: String): Long
    external fun SettingValue_fromColumnUpdateTrigger(value: String): Long
    external fun SettingValue_drop(self: Long)
    external fun SharedTimer_drop(self: Long)
    external fun SharedTimer_share(self: Long): Long
    external fun SharedTimer_read(self: Long): Long
    external fun SharedTimer_write(self: Long): Long
    external fun SharedTimer_replaceInner(self: Long, timer: Long)
    external fun SplitComponentState_columnsLen(self: Long, index: Long): Long
    external fun SplitsComponent_new(): Long
    external fun SplitsComponent_drop(self: Long)
    external fun SplitsComponent_intoGeneric(self: Long): Long
    external fun SplitsComponent_stateAsJson(self: Long, timer: Long, layoutSettings: Long): String
    external fun SplitsComponent_state(self: Long, timer: Long, layoutSettings: Long): Long
    external fun SplitsComponent_scrollUp(self: Long)
    external fun SplitsComponent_scrollDown(self: Long)
    external fun SplitsComponent_setVisualSplitCount(self: Long, count: Long)
    external fun SplitsComponent_setSplitPreviewCount(self: Long, count: Long)
    external fun SplitsComponent_setAlwaysShowLastSplit(self: Long, alwaysShowLastSplit: Boolean)
    external fun SplitsComponent_setSeparatorLastSplit(self: Long, separatorLastSplit: Boolean)
    external fun SplitsComponentState_drop(self: Long)
    external fun SplitsComponentState_finalSeparatorShown(self: Long): Boolean
    external fun SplitsComponentState_len(self: Long): Long
    external fun SplitsComponentState_iconChangeCount(self: Long): Long
    external fun SplitsComponentState_iconChangeSegmentIndex(self: Long, iconChangeIndex: Long): Long
    external fun SplitsComponentState_iconChangeIcon(self: Long, iconChangeIndex: Long): String
    external fun SplitsComponentState_name(self: Long, index: Long): String
    external fun SplitsComponentState_columnValue(self: Long, index: Long, columnIndex: Long): String
    external fun SplitsComponentState_columnSemanticColor(self: Long, index: Long, columnIndex: Long): String
    external fun SplitsComponentState_isCurrentSplit(self: Long, index: Long): Boolean
    external fun SumOfBestCleaner_drop(self: Long)
    external fun SumOfBestCleaner_nextPotentialCleanUp(self: Long): Long
    external fun SumOfBestCleaner_apply(self: Long, cleanUp: Long)
    external fun SumOfBestComponent_new(): Long
    external fun SumOfBestComponent_drop(self: Long)
    external fun SumOfBestComponent_intoGeneric(self: Long): Long
    external fun SumOfBestComponent_stateAsJson(self: Long, timer: Long): String
    external fun SumOfBestComponent_state(self: Long, timer: Long): Long
    external fun SumOfBestComponentState_drop(self: Long)
    external fun SumOfBestComponentState_text(self: Long): String
    external fun SumOfBestComponentState_time(self: Long): String
    external fun TextComponent_new(): Long
    external fun TextComponent_drop(self: Long)
    external fun TextComponent_intoGeneric(self: Long): Long
    external fun TextComponent_stateAsJson(self: Long): String
    external fun TextComponent_state(self: Long): Long
    external fun TextComponent_setCenter(self: Long, text: String)
    external fun TextComponent_setLeft(self: Long, text: String)
    external fun TextComponent_setRight(self: Long, text: String)
    external fun TextComponentState_drop(self: Long)
    external fun TextComponentState_left(self: Long): String
    external fun TextComponentState_right(self: Long): String
    external fun TextComponentState_center(self: Long): String
    external fun TextComponentState_isSplit(self: Long): Boolean
    external fun Time_drop(self: Long)
    external fun Time_clone(self: Long): Long
    external fun Time_realTime(self: Long): Long
    external fun Time_gameTime(self: Long): Long
    external fun Time_index(self: Long, timingMethod: Byte): Long
    external fun TimeSpan_fromSeconds(seconds: Double): Long
    external fun TimeSpan_parse(text: String): Long
    external fun TimeSpan_drop(self: Long)
    external fun TimeSpan_clone(self: Long): Long
    external fun TimeSpan_totalSeconds(self: Long): Double
    external fun Timer_new(run: Long): Long
    external fun Timer_intoShared(self: Long): Long
    external fun Timer_intoRun(self: Long, updateSplits: Boolean): Long
    external fun Timer_drop(self: Long)
    external fun Timer_currentTimingMethod(self: Long): Byte
    external fun Timer_currentComparison(self: Long): String
    external fun Timer_isGameTimeInitialized(self: Long): Boolean
    external fun Timer_isGameTimePaused(self: Long): Boolean
    external fun Timer_loadingTimes(self: Long): Long
    external fun Timer_currentPhase(self: Long): Byte
    external fun Timer_getRun(self: Long): Long
    external fun Timer_saveAsLss(self: Long): String
    external fun Timer_printDebug(self: Long)
    external fun Timer_currentTime(self: Long): Long
    external fun Timer_replaceRun(self: Long, run: Long, updateSplits: Boolean): Boolean
    external fun Timer_setRun(self: Long, run: Long): Long
    external fun Timer_start(self: Long)
    external fun Timer_split(self: Long)
    external fun Timer_splitOrStart(self: Long)
    external fun Timer_skipSplit(self: Long)
    external fun Timer_undoSplit(self: Long)
    external fun Timer_reset(self: Long, updateSplits: Boolean)
    external fun Timer_resetAndSetAttemptAsPb(self: Long)
    external fun Timer_pause(self: Long)
    external fun Timer_resume(self: Long)
    external fun Timer_togglePause(self: Long)
    external fun Timer_togglePauseOrStart(self: Long)
    external fun Timer_undoAllPauses(self: Long)
    external fun Timer_setCurrentTimingMethod(self: Long, method: Byte)
    external fun Timer_switchToNextComparison(self: Long)
    external fun Timer_switchToPreviousComparison(self: Long)
    external fun Timer_initializeGameTime(self: Long)
    external fun Timer_deinitializeGameTime(self: Long)
    external fun Timer_pauseGameTime(self: Long)
    external fun Timer_resumeGameTime(self: Long)
    external fun Timer_setGameTime(self: Long, time: Long)
    external fun Timer_setLoadingTimes(self: Long, time: Long)
    external fun Timer_markAsUnmodified(self: Long)
    external fun TimerComponent_new(): Long
    external fun TimerComponent_drop(self: Long)
    external fun TimerComponent_intoGeneric(self: Long): Long
    external fun TimerComponent_stateAsJson(self: Long, timer: Long, layoutSettings: Long): String
    external fun TimerComponent_state(self: Long, timer: Long, layoutSettings: Long): Long
    external fun TimerComponentState_drop(self: Long)
    external fun TimerComponentState_time(self: Long): String
    external fun TimerComponentState_fraction(self: Long): String
    external fun TimerComponentState_semanticColor(self: Long): String
    external fun TimerReadLock_drop(self: Long)
    external fun TimerReadLock_timer(self: Long): Long
    external fun TimerWriteLock_drop(self: Long)
    external fun TimerWriteLock_timer(self: Long): Long
    external fun TitleComponent_new(): Long
    external fun TitleComponent_drop(self: Long)
    external fun TitleComponent_intoGeneric(self: Long): Long
    external fun TitleComponent_stateAsJson(self: Long, timer: Long): String
    external fun TitleComponent_state(self: Long, timer: Long): Long
    external fun TitleComponentState_drop(self: Long)
    external fun TitleComponentState_iconChange(self: Long): String
    external fun TitleComponentState_line1(self: Long): String
    external fun TitleComponentState_line2(self: Long): String
    external fun TitleComponentState_isCentered(self: Long): Boolean
    external fun TitleComponentState_showsFinishedRuns(self: Long): Boolean
    external fun TitleComponentState_finishedRuns(self: Long): Int
    external fun TitleComponentState_showsAttempts(self: Long): Boolean
    external fun TitleComponentState_attempts(self: Long): Int
    external fun TotalPlaytimeComponent_new(): Long
    external fun TotalPlaytimeComponent_drop(self: Long)
    external fun TotalPlaytimeComponent_intoGeneric(self: Long): Long
    external fun TotalPlaytimeComponent_stateAsJson(self: Long, timer: Long): String
    external fun TotalPlaytimeComponent_state(self: Long, timer: Long): Long
    external fun TotalPlaytimeComponentState_drop(self: Long)
    external fun TotalPlaytimeComponentState_text(self: Long): String
    external fun TotalPlaytimeComponentState_time(self: Long): String
}
