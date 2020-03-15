package livesplitcore;

import com.sun.jna.*;

public interface LiveSplitCoreNative extends Library {
    LiveSplitCoreNative INSTANCE = (LiveSplitCoreNative) Native.loadLibrary("livesplit_core", LiveSplitCoreNative.class);

    Pointer Analysis_calculate_sum_of_best(Pointer run, byte simpleCalculation, byte useCurrentRun, byte method);
    Pointer Analysis_calculate_total_playtime_for_run(Pointer run);
    Pointer Analysis_calculate_total_playtime_for_timer(Pointer timer);
    void AtomicDateTime_drop(Pointer self);
    byte AtomicDateTime_is_synchronized(Pointer self);
    String AtomicDateTime_to_rfc2822(Pointer self);
    String AtomicDateTime_to_rfc3339(Pointer self);
    int Attempt_index(Pointer self);
    Pointer Attempt_time(Pointer self);
    Pointer Attempt_pause_time(Pointer self);
    Pointer Attempt_started(Pointer self);
    Pointer Attempt_ended(Pointer self);
    Pointer BlankSpaceComponent_new();
    void BlankSpaceComponent_drop(Pointer self);
    Pointer BlankSpaceComponent_into_generic(Pointer self);
    String BlankSpaceComponent_state_as_json(Pointer self, Pointer timer);
    Pointer BlankSpaceComponent_state(Pointer self, Pointer timer);
    void BlankSpaceComponentState_drop(Pointer self);
    int BlankSpaceComponentState_size(Pointer self);
    void Component_drop(Pointer self);
    Pointer CurrentComparisonComponent_new();
    void CurrentComparisonComponent_drop(Pointer self);
    Pointer CurrentComparisonComponent_into_generic(Pointer self);
    String CurrentComparisonComponent_state_as_json(Pointer self, Pointer timer);
    Pointer CurrentComparisonComponent_state(Pointer self, Pointer timer);
    void CurrentComparisonComponentState_drop(Pointer self);
    String CurrentComparisonComponentState_text(Pointer self);
    String CurrentComparisonComponentState_comparison(Pointer self);
    Pointer CurrentPaceComponent_new();
    void CurrentPaceComponent_drop(Pointer self);
    Pointer CurrentPaceComponent_into_generic(Pointer self);
    String CurrentPaceComponent_state_as_json(Pointer self, Pointer timer);
    Pointer CurrentPaceComponent_state(Pointer self, Pointer timer);
    void CurrentPaceComponentState_drop(Pointer self);
    String CurrentPaceComponentState_text(Pointer self);
    String CurrentPaceComponentState_time(Pointer self);
    Pointer DeltaComponent_new();
    void DeltaComponent_drop(Pointer self);
    Pointer DeltaComponent_into_generic(Pointer self);
    String DeltaComponent_state_as_json(Pointer self, Pointer timer, Pointer layoutSettings);
    Pointer DeltaComponent_state(Pointer self, Pointer timer, Pointer layoutSettings);
    void DeltaComponentState_drop(Pointer self);
    String DeltaComponentState_text(Pointer self);
    String DeltaComponentState_time(Pointer self);
    String DeltaComponentState_semantic_color(Pointer self);
    Pointer DetailedTimerComponent_new();
    void DetailedTimerComponent_drop(Pointer self);
    Pointer DetailedTimerComponent_into_generic(Pointer self);
    String DetailedTimerComponent_state_as_json(Pointer self, Pointer timer, Pointer layoutSettings);
    Pointer DetailedTimerComponent_state(Pointer self, Pointer timer, Pointer layoutSettings);
    void DetailedTimerComponentState_drop(Pointer self);
    String DetailedTimerComponentState_timer_time(Pointer self);
    String DetailedTimerComponentState_timer_fraction(Pointer self);
    String DetailedTimerComponentState_timer_semantic_color(Pointer self);
    String DetailedTimerComponentState_segment_timer_time(Pointer self);
    String DetailedTimerComponentState_segment_timer_fraction(Pointer self);
    byte DetailedTimerComponentState_comparison1_visible(Pointer self);
    String DetailedTimerComponentState_comparison1_name(Pointer self);
    String DetailedTimerComponentState_comparison1_time(Pointer self);
    byte DetailedTimerComponentState_comparison2_visible(Pointer self);
    String DetailedTimerComponentState_comparison2_name(Pointer self);
    String DetailedTimerComponentState_comparison2_time(Pointer self);
    String DetailedTimerComponentState_icon_change(Pointer self);
    String DetailedTimerComponentState_segment_name(Pointer self);
    Pointer FuzzyList_new();
    void FuzzyList_drop(Pointer self);
    String FuzzyList_search(Pointer self, String pattern, NativeLong max);
    void FuzzyList_push(Pointer self, String text);
    Pointer GeneralLayoutSettings_default();
    void GeneralLayoutSettings_drop(Pointer self);
    Pointer GraphComponent_new();
    void GraphComponent_drop(Pointer self);
    Pointer GraphComponent_into_generic(Pointer self);
    String GraphComponent_state_as_json(Pointer self, Pointer timer, Pointer layoutSettings);
    Pointer GraphComponent_state(Pointer self, Pointer timer, Pointer layoutSettings);
    void GraphComponentState_drop(Pointer self);
    NativeLong GraphComponentState_points_len(Pointer self);
    float GraphComponentState_point_x(Pointer self, NativeLong index);
    float GraphComponentState_point_y(Pointer self, NativeLong index);
    byte GraphComponentState_point_is_best_segment(Pointer self, NativeLong index);
    NativeLong GraphComponentState_horizontal_grid_lines_len(Pointer self);
    float GraphComponentState_horizontal_grid_line(Pointer self, NativeLong index);
    NativeLong GraphComponentState_vertical_grid_lines_len(Pointer self);
    float GraphComponentState_vertical_grid_line(Pointer self, NativeLong index);
    float GraphComponentState_middle(Pointer self);
    byte GraphComponentState_is_live_delta_active(Pointer self);
    byte GraphComponentState_is_flipped(Pointer self);
    Pointer HotkeyConfig_parse_json(String settings);
    void HotkeyConfig_drop(Pointer self);
    String HotkeyConfig_settings_description_as_json(Pointer self);
    String HotkeyConfig_as_json(Pointer self);
    byte HotkeyConfig_set_value(Pointer self, NativeLong index, Pointer value);
    Pointer HotkeySystem_new(Pointer sharedTimer);
    Pointer HotkeySystem_with_config(Pointer sharedTimer, Pointer config);
    void HotkeySystem_drop(Pointer self);
    void HotkeySystem_deactivate(Pointer self);
    void HotkeySystem_activate(Pointer self);
    Pointer HotkeySystem_config(Pointer self);
    byte HotkeySystem_set_config(Pointer self, Pointer config);
    Pointer Layout_new();
    Pointer Layout_default_layout();
    Pointer Layout_parse_json(String settings);
    Pointer Layout_parse_original_livesplit(Pointer data, NativeLong length);
    void Layout_drop(Pointer self);
    Pointer Layout_clone(Pointer self);
    String Layout_settings_as_json(Pointer self);
    String Layout_state_as_json(Pointer self, Pointer timer);
    void Layout_push(Pointer self, Pointer component);
    void Layout_scroll_up(Pointer self);
    void Layout_scroll_down(Pointer self);
    void Layout_remount(Pointer self);
    Pointer LayoutEditor_new(Pointer layout);
    Pointer LayoutEditor_close(Pointer self);
    String LayoutEditor_state_as_json(Pointer self);
    String LayoutEditor_layout_state_as_json(Pointer self, Pointer timer);
    void LayoutEditor_select(Pointer self, NativeLong index);
    void LayoutEditor_add_component(Pointer self, Pointer component);
    void LayoutEditor_remove_component(Pointer self);
    void LayoutEditor_move_component_up(Pointer self);
    void LayoutEditor_move_component_down(Pointer self);
    void LayoutEditor_move_component(Pointer self, NativeLong dstIndex);
    void LayoutEditor_duplicate_component(Pointer self);
    void LayoutEditor_set_component_settings_value(Pointer self, NativeLong index, Pointer value);
    void LayoutEditor_set_general_settings_value(Pointer self, NativeLong index, Pointer value);
    void ParseRunResult_drop(Pointer self);
    Pointer ParseRunResult_unwrap(Pointer self);
    byte ParseRunResult_parsed_successfully(Pointer self);
    String ParseRunResult_timer_kind(Pointer self);
    byte ParseRunResult_is_generic_timer(Pointer self);
    Pointer PossibleTimeSaveComponent_new();
    void PossibleTimeSaveComponent_drop(Pointer self);
    Pointer PossibleTimeSaveComponent_into_generic(Pointer self);
    String PossibleTimeSaveComponent_state_as_json(Pointer self, Pointer timer);
    Pointer PossibleTimeSaveComponent_state(Pointer self, Pointer timer);
    void PossibleTimeSaveComponentState_drop(Pointer self);
    String PossibleTimeSaveComponentState_text(Pointer self);
    String PossibleTimeSaveComponentState_time(Pointer self);
    void PotentialCleanUp_drop(Pointer self);
    String PotentialCleanUp_message(Pointer self);
    Pointer PreviousSegmentComponent_new();
    void PreviousSegmentComponent_drop(Pointer self);
    Pointer PreviousSegmentComponent_into_generic(Pointer self);
    String PreviousSegmentComponent_state_as_json(Pointer self, Pointer timer, Pointer layoutSettings);
    Pointer PreviousSegmentComponent_state(Pointer self, Pointer timer, Pointer layoutSettings);
    void PreviousSegmentComponentState_drop(Pointer self);
    String PreviousSegmentComponentState_text(Pointer self);
    String PreviousSegmentComponentState_time(Pointer self);
    String PreviousSegmentComponentState_semantic_color(Pointer self);
    Pointer Run_new();
    Pointer Run_parse(Pointer data, NativeLong length, String path, byte loadFiles);
    Pointer Run_parse_file_handle(long handle, String path, byte loadFiles);
    void Run_drop(Pointer self);
    Pointer Run_clone(Pointer self);
    String Run_game_name(Pointer self);
    String Run_game_icon(Pointer self);
    String Run_category_name(Pointer self);
    String Run_extended_file_name(Pointer self, byte useExtendedCategoryName);
    String Run_extended_name(Pointer self, byte useExtendedCategoryName);
    String Run_extended_category_name(Pointer self, byte showRegion, byte showPlatform, byte showVariables);
    int Run_attempt_count(Pointer self);
    Pointer Run_metadata(Pointer self);
    Pointer Run_offset(Pointer self);
    NativeLong Run_len(Pointer self);
    byte Run_has_been_modified(Pointer self);
    Pointer Run_segment(Pointer self, NativeLong index);
    NativeLong Run_attempt_history_len(Pointer self);
    Pointer Run_attempt_history_index(Pointer self, NativeLong index);
    String Run_save_as_lss(Pointer self);
    NativeLong Run_custom_comparisons_len(Pointer self);
    String Run_custom_comparison(Pointer self, NativeLong index);
    String Run_auto_splitter_settings(Pointer self);
    void Run_push_segment(Pointer self, Pointer segment);
    void Run_set_game_name(Pointer self, String game);
    void Run_set_category_name(Pointer self, String category);
    void Run_mark_as_modified(Pointer self);
    Pointer RunEditor_new(Pointer run);
    Pointer RunEditor_close(Pointer self);
    String RunEditor_state_as_json(Pointer self);
    void RunEditor_select_timing_method(Pointer self, byte method);
    void RunEditor_unselect(Pointer self, NativeLong index);
    void RunEditor_select_additionally(Pointer self, NativeLong index);
    void RunEditor_select_only(Pointer self, NativeLong index);
    void RunEditor_set_game_name(Pointer self, String game);
    void RunEditor_set_category_name(Pointer self, String category);
    byte RunEditor_parse_and_set_offset(Pointer self, String offset);
    byte RunEditor_parse_and_set_attempt_count(Pointer self, String attempts);
    void RunEditor_set_game_icon(Pointer self, Pointer data, NativeLong length);
    void RunEditor_remove_game_icon(Pointer self);
    void RunEditor_set_run_id(Pointer self, String name);
    void RunEditor_set_region_name(Pointer self, String name);
    void RunEditor_set_platform_name(Pointer self, String name);
    void RunEditor_set_emulator_usage(Pointer self, byte usesEmulator);
    void RunEditor_set_variable(Pointer self, String name, String value);
    void RunEditor_remove_variable(Pointer self, String name);
    void RunEditor_clear_metadata(Pointer self);
    void RunEditor_insert_segment_above(Pointer self);
    void RunEditor_insert_segment_below(Pointer self);
    void RunEditor_remove_segments(Pointer self);
    void RunEditor_move_segments_up(Pointer self);
    void RunEditor_move_segments_down(Pointer self);
    void RunEditor_active_set_icon(Pointer self, Pointer data, NativeLong length);
    void RunEditor_active_remove_icon(Pointer self);
    void RunEditor_active_set_name(Pointer self, String name);
    byte RunEditor_active_parse_and_set_split_time(Pointer self, String time);
    byte RunEditor_active_parse_and_set_segment_time(Pointer self, String time);
    byte RunEditor_active_parse_and_set_best_segment_time(Pointer self, String time);
    byte RunEditor_active_parse_and_set_comparison_time(Pointer self, String comparison, String time);
    byte RunEditor_add_comparison(Pointer self, String comparison);
    byte RunEditor_import_comparison(Pointer self, Pointer run, String comparison);
    void RunEditor_remove_comparison(Pointer self, String comparison);
    byte RunEditor_rename_comparison(Pointer self, String oldName, String newName);
    byte RunEditor_move_comparison(Pointer self, NativeLong srcIndex, NativeLong dstIndex);
    void RunEditor_clear_history(Pointer self);
    void RunEditor_clear_times(Pointer self);
    Pointer RunEditor_clean_sum_of_best(Pointer self);
    String RunMetadata_run_id(Pointer self);
    String RunMetadata_platform_name(Pointer self);
    byte RunMetadata_uses_emulator(Pointer self);
    String RunMetadata_region_name(Pointer self);
    Pointer RunMetadata_variables(Pointer self);
    void RunMetadataVariable_drop(Pointer self);
    String RunMetadataVariable_name(Pointer self);
    String RunMetadataVariable_value(Pointer self);
    void RunMetadataVariablesIter_drop(Pointer self);
    Pointer RunMetadataVariablesIter_next(Pointer self);
    Pointer Segment_new(String name);
    void Segment_drop(Pointer self);
    String Segment_name(Pointer self);
    String Segment_icon(Pointer self);
    Pointer Segment_comparison(Pointer self, String comparison);
    Pointer Segment_personal_best_split_time(Pointer self);
    Pointer Segment_best_segment_time(Pointer self);
    Pointer Segment_segment_history(Pointer self);
    Pointer SegmentHistory_iter(Pointer self);
    int SegmentHistoryElement_index(Pointer self);
    Pointer SegmentHistoryElement_time(Pointer self);
    void SegmentHistoryIter_drop(Pointer self);
    Pointer SegmentHistoryIter_next(Pointer self);
    Pointer SeparatorComponent_new();
    void SeparatorComponent_drop(Pointer self);
    Pointer SeparatorComponent_into_generic(Pointer self);
    Pointer SettingValue_from_bool(byte value);
    Pointer SettingValue_from_uint(int value);
    Pointer SettingValue_from_int(int value);
    Pointer SettingValue_from_string(String value);
    Pointer SettingValue_from_optional_string(String value);
    Pointer SettingValue_from_optional_empty_string();
    Pointer SettingValue_from_float(double value);
    Pointer SettingValue_from_accuracy(String value);
    Pointer SettingValue_from_digits_format(String value);
    Pointer SettingValue_from_optional_timing_method(String value);
    Pointer SettingValue_from_optional_empty_timing_method();
    Pointer SettingValue_from_color(float r, float g, float b, float a);
    Pointer SettingValue_from_optional_color(float r, float g, float b, float a);
    Pointer SettingValue_from_optional_empty_color();
    Pointer SettingValue_from_transparent_gradient();
    Pointer SettingValue_from_vertical_gradient(float r1, float g1, float b1, float a1, float r2, float g2, float b2, float a2);
    Pointer SettingValue_from_horizontal_gradient(float r1, float g1, float b1, float a1, float r2, float g2, float b2, float a2);
    Pointer SettingValue_from_alternating_gradient(float r1, float g1, float b1, float a1, float r2, float g2, float b2, float a2);
    Pointer SettingValue_from_alignment(String value);
    Pointer SettingValue_from_column_start_with(String value);
    Pointer SettingValue_from_column_update_with(String value);
    Pointer SettingValue_from_column_update_trigger(String value);
    void SettingValue_drop(Pointer self);
    void SharedTimer_drop(Pointer self);
    Pointer SharedTimer_share(Pointer self);
    Pointer SharedTimer_read(Pointer self);
    Pointer SharedTimer_write(Pointer self);
    void SharedTimer_replace_inner(Pointer self, Pointer timer);
    NativeLong SplitComponentState_columns_len(Pointer self, NativeLong index);
    Pointer SplitsComponent_new();
    void SplitsComponent_drop(Pointer self);
    Pointer SplitsComponent_into_generic(Pointer self);
    String SplitsComponent_state_as_json(Pointer self, Pointer timer, Pointer layoutSettings);
    Pointer SplitsComponent_state(Pointer self, Pointer timer, Pointer layoutSettings);
    void SplitsComponent_scroll_up(Pointer self);
    void SplitsComponent_scroll_down(Pointer self);
    void SplitsComponent_set_visual_split_count(Pointer self, NativeLong count);
    void SplitsComponent_set_split_preview_count(Pointer self, NativeLong count);
    void SplitsComponent_set_always_show_last_split(Pointer self, byte alwaysShowLastSplit);
    void SplitsComponent_set_separator_last_split(Pointer self, byte separatorLastSplit);
    void SplitsComponentState_drop(Pointer self);
    byte SplitsComponentState_final_separator_shown(Pointer self);
    NativeLong SplitsComponentState_len(Pointer self);
    NativeLong SplitsComponentState_icon_change_count(Pointer self);
    NativeLong SplitsComponentState_icon_change_segment_index(Pointer self, NativeLong iconChangeIndex);
    String SplitsComponentState_icon_change_icon(Pointer self, NativeLong iconChangeIndex);
    String SplitsComponentState_name(Pointer self, NativeLong index);
    String SplitsComponentState_column_value(Pointer self, NativeLong index, NativeLong columnIndex);
    String SplitsComponentState_column_semantic_color(Pointer self, NativeLong index, NativeLong columnIndex);
    byte SplitsComponentState_is_current_split(Pointer self, NativeLong index);
    void SumOfBestCleaner_drop(Pointer self);
    Pointer SumOfBestCleaner_next_potential_clean_up(Pointer self);
    void SumOfBestCleaner_apply(Pointer self, Pointer cleanUp);
    Pointer SumOfBestComponent_new();
    void SumOfBestComponent_drop(Pointer self);
    Pointer SumOfBestComponent_into_generic(Pointer self);
    String SumOfBestComponent_state_as_json(Pointer self, Pointer timer);
    Pointer SumOfBestComponent_state(Pointer self, Pointer timer);
    void SumOfBestComponentState_drop(Pointer self);
    String SumOfBestComponentState_text(Pointer self);
    String SumOfBestComponentState_time(Pointer self);
    Pointer TextComponent_new();
    void TextComponent_drop(Pointer self);
    Pointer TextComponent_into_generic(Pointer self);
    String TextComponent_state_as_json(Pointer self);
    Pointer TextComponent_state(Pointer self);
    void TextComponent_set_center(Pointer self, String text);
    void TextComponent_set_left(Pointer self, String text);
    void TextComponent_set_right(Pointer self, String text);
    void TextComponentState_drop(Pointer self);
    String TextComponentState_left(Pointer self);
    String TextComponentState_right(Pointer self);
    String TextComponentState_center(Pointer self);
    byte TextComponentState_is_split(Pointer self);
    void Time_drop(Pointer self);
    Pointer Time_clone(Pointer self);
    Pointer Time_real_time(Pointer self);
    Pointer Time_game_time(Pointer self);
    Pointer Time_index(Pointer self, byte timingMethod);
    Pointer TimeSpan_from_seconds(double seconds);
    Pointer TimeSpan_parse(String text);
    void TimeSpan_drop(Pointer self);
    Pointer TimeSpan_clone(Pointer self);
    double TimeSpan_total_seconds(Pointer self);
    Pointer Timer_new(Pointer run);
    Pointer Timer_into_shared(Pointer self);
    Pointer Timer_into_run(Pointer self, byte updateSplits);
    void Timer_drop(Pointer self);
    byte Timer_current_timing_method(Pointer self);
    String Timer_current_comparison(Pointer self);
    byte Timer_is_game_time_initialized(Pointer self);
    byte Timer_is_game_time_paused(Pointer self);
    Pointer Timer_loading_times(Pointer self);
    byte Timer_current_phase(Pointer self);
    Pointer Timer_get_run(Pointer self);
    String Timer_save_as_lss(Pointer self);
    void Timer_print_debug(Pointer self);
    Pointer Timer_current_time(Pointer self);
    byte Timer_replace_run(Pointer self, Pointer run, byte updateSplits);
    Pointer Timer_set_run(Pointer self, Pointer run);
    void Timer_start(Pointer self);
    void Timer_split(Pointer self);
    void Timer_split_or_start(Pointer self);
    void Timer_skip_split(Pointer self);
    void Timer_undo_split(Pointer self);
    void Timer_reset(Pointer self, byte updateSplits);
    void Timer_reset_and_set_attempt_as_pb(Pointer self);
    void Timer_pause(Pointer self);
    void Timer_resume(Pointer self);
    void Timer_toggle_pause(Pointer self);
    void Timer_toggle_pause_or_start(Pointer self);
    void Timer_undo_all_pauses(Pointer self);
    void Timer_set_current_timing_method(Pointer self, byte method);
    void Timer_switch_to_next_comparison(Pointer self);
    void Timer_switch_to_previous_comparison(Pointer self);
    void Timer_initialize_game_time(Pointer self);
    void Timer_deinitialize_game_time(Pointer self);
    void Timer_pause_game_time(Pointer self);
    void Timer_resume_game_time(Pointer self);
    void Timer_set_game_time(Pointer self, Pointer time);
    void Timer_set_loading_times(Pointer self, Pointer time);
    void Timer_mark_as_unmodified(Pointer self);
    Pointer TimerComponent_new();
    void TimerComponent_drop(Pointer self);
    Pointer TimerComponent_into_generic(Pointer self);
    String TimerComponent_state_as_json(Pointer self, Pointer timer, Pointer layoutSettings);
    Pointer TimerComponent_state(Pointer self, Pointer timer, Pointer layoutSettings);
    void TimerComponentState_drop(Pointer self);
    String TimerComponentState_time(Pointer self);
    String TimerComponentState_fraction(Pointer self);
    String TimerComponentState_semantic_color(Pointer self);
    void TimerReadLock_drop(Pointer self);
    Pointer TimerReadLock_timer(Pointer self);
    void TimerWriteLock_drop(Pointer self);
    Pointer TimerWriteLock_timer(Pointer self);
    Pointer TitleComponent_new();
    void TitleComponent_drop(Pointer self);
    Pointer TitleComponent_into_generic(Pointer self);
    String TitleComponent_state_as_json(Pointer self, Pointer timer);
    Pointer TitleComponent_state(Pointer self, Pointer timer);
    void TitleComponentState_drop(Pointer self);
    String TitleComponentState_icon_change(Pointer self);
    String TitleComponentState_line1(Pointer self);
    String TitleComponentState_line2(Pointer self);
    byte TitleComponentState_is_centered(Pointer self);
    byte TitleComponentState_shows_finished_runs(Pointer self);
    int TitleComponentState_finished_runs(Pointer self);
    byte TitleComponentState_shows_attempts(Pointer self);
    int TitleComponentState_attempts(Pointer self);
    Pointer TotalPlaytimeComponent_new();
    void TotalPlaytimeComponent_drop(Pointer self);
    Pointer TotalPlaytimeComponent_into_generic(Pointer self);
    String TotalPlaytimeComponent_state_as_json(Pointer self, Pointer timer);
    Pointer TotalPlaytimeComponent_state(Pointer self, Pointer timer);
    void TotalPlaytimeComponentState_drop(Pointer self);
    String TotalPlaytimeComponentState_text(Pointer self);
    String TotalPlaytimeComponentState_time(Pointer self);
}
