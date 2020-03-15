"use strict";
const ffi = require('ffi');
const fs = require('fs');
const ref = require('ref');

const liveSplitCoreNative = ffi.Library('livesplit_core', {
    'Analysis_calculate_sum_of_best': ['pointer', ['pointer', 'bool', 'bool', 'uint8']],
    'Analysis_calculate_total_playtime_for_run': ['pointer', ['pointer']],
    'Analysis_calculate_total_playtime_for_timer': ['pointer', ['pointer']],
    'AtomicDateTime_drop': ['void', ['pointer']],
    'AtomicDateTime_is_synchronized': ['bool', ['pointer']],
    'AtomicDateTime_to_rfc2822': ['CString', ['pointer']],
    'AtomicDateTime_to_rfc3339': ['CString', ['pointer']],
    'Attempt_index': ['int32', ['pointer']],
    'Attempt_time': ['pointer', ['pointer']],
    'Attempt_pause_time': ['pointer', ['pointer']],
    'Attempt_started': ['pointer', ['pointer']],
    'Attempt_ended': ['pointer', ['pointer']],
    'BlankSpaceComponent_new': ['pointer', []],
    'BlankSpaceComponent_drop': ['void', ['pointer']],
    'BlankSpaceComponent_into_generic': ['pointer', ['pointer']],
    'BlankSpaceComponent_state_as_json': ['CString', ['pointer', 'pointer']],
    'BlankSpaceComponent_state': ['pointer', ['pointer', 'pointer']],
    'BlankSpaceComponentState_drop': ['void', ['pointer']],
    'BlankSpaceComponentState_size': ['uint32', ['pointer']],
    'Component_drop': ['void', ['pointer']],
    'CurrentComparisonComponent_new': ['pointer', []],
    'CurrentComparisonComponent_drop': ['void', ['pointer']],
    'CurrentComparisonComponent_into_generic': ['pointer', ['pointer']],
    'CurrentComparisonComponent_state_as_json': ['CString', ['pointer', 'pointer']],
    'CurrentComparisonComponent_state': ['pointer', ['pointer', 'pointer']],
    'CurrentComparisonComponentState_drop': ['void', ['pointer']],
    'CurrentComparisonComponentState_text': ['CString', ['pointer']],
    'CurrentComparisonComponentState_comparison': ['CString', ['pointer']],
    'CurrentPaceComponent_new': ['pointer', []],
    'CurrentPaceComponent_drop': ['void', ['pointer']],
    'CurrentPaceComponent_into_generic': ['pointer', ['pointer']],
    'CurrentPaceComponent_state_as_json': ['CString', ['pointer', 'pointer']],
    'CurrentPaceComponent_state': ['pointer', ['pointer', 'pointer']],
    'CurrentPaceComponentState_drop': ['void', ['pointer']],
    'CurrentPaceComponentState_text': ['CString', ['pointer']],
    'CurrentPaceComponentState_time': ['CString', ['pointer']],
    'DeltaComponent_new': ['pointer', []],
    'DeltaComponent_drop': ['void', ['pointer']],
    'DeltaComponent_into_generic': ['pointer', ['pointer']],
    'DeltaComponent_state_as_json': ['CString', ['pointer', 'pointer', 'pointer']],
    'DeltaComponent_state': ['pointer', ['pointer', 'pointer', 'pointer']],
    'DeltaComponentState_drop': ['void', ['pointer']],
    'DeltaComponentState_text': ['CString', ['pointer']],
    'DeltaComponentState_time': ['CString', ['pointer']],
    'DeltaComponentState_semantic_color': ['CString', ['pointer']],
    'DetailedTimerComponent_new': ['pointer', []],
    'DetailedTimerComponent_drop': ['void', ['pointer']],
    'DetailedTimerComponent_into_generic': ['pointer', ['pointer']],
    'DetailedTimerComponent_state_as_json': ['CString', ['pointer', 'pointer', 'pointer']],
    'DetailedTimerComponent_state': ['pointer', ['pointer', 'pointer', 'pointer']],
    'DetailedTimerComponentState_drop': ['void', ['pointer']],
    'DetailedTimerComponentState_timer_time': ['CString', ['pointer']],
    'DetailedTimerComponentState_timer_fraction': ['CString', ['pointer']],
    'DetailedTimerComponentState_timer_semantic_color': ['CString', ['pointer']],
    'DetailedTimerComponentState_segment_timer_time': ['CString', ['pointer']],
    'DetailedTimerComponentState_segment_timer_fraction': ['CString', ['pointer']],
    'DetailedTimerComponentState_comparison1_visible': ['bool', ['pointer']],
    'DetailedTimerComponentState_comparison1_name': ['CString', ['pointer']],
    'DetailedTimerComponentState_comparison1_time': ['CString', ['pointer']],
    'DetailedTimerComponentState_comparison2_visible': ['bool', ['pointer']],
    'DetailedTimerComponentState_comparison2_name': ['CString', ['pointer']],
    'DetailedTimerComponentState_comparison2_time': ['CString', ['pointer']],
    'DetailedTimerComponentState_icon_change': ['CString', ['pointer']],
    'DetailedTimerComponentState_segment_name': ['CString', ['pointer']],
    'FuzzyList_new': ['pointer', []],
    'FuzzyList_drop': ['void', ['pointer']],
    'FuzzyList_search': ['CString', ['pointer', 'CString', 'size_t']],
    'FuzzyList_push': ['void', ['pointer', 'CString']],
    'GeneralLayoutSettings_default': ['pointer', []],
    'GeneralLayoutSettings_drop': ['void', ['pointer']],
    'GraphComponent_new': ['pointer', []],
    'GraphComponent_drop': ['void', ['pointer']],
    'GraphComponent_into_generic': ['pointer', ['pointer']],
    'GraphComponent_state_as_json': ['CString', ['pointer', 'pointer', 'pointer']],
    'GraphComponent_state': ['pointer', ['pointer', 'pointer', 'pointer']],
    'GraphComponentState_drop': ['void', ['pointer']],
    'GraphComponentState_points_len': ['size_t', ['pointer']],
    'GraphComponentState_point_x': ['float', ['pointer', 'size_t']],
    'GraphComponentState_point_y': ['float', ['pointer', 'size_t']],
    'GraphComponentState_point_is_best_segment': ['bool', ['pointer', 'size_t']],
    'GraphComponentState_horizontal_grid_lines_len': ['size_t', ['pointer']],
    'GraphComponentState_horizontal_grid_line': ['float', ['pointer', 'size_t']],
    'GraphComponentState_vertical_grid_lines_len': ['size_t', ['pointer']],
    'GraphComponentState_vertical_grid_line': ['float', ['pointer', 'size_t']],
    'GraphComponentState_middle': ['float', ['pointer']],
    'GraphComponentState_is_live_delta_active': ['bool', ['pointer']],
    'GraphComponentState_is_flipped': ['bool', ['pointer']],
    'HotkeyConfig_parse_json': ['pointer', ['CString']],
    'HotkeyConfig_drop': ['void', ['pointer']],
    'HotkeyConfig_settings_description_as_json': ['CString', ['pointer']],
    'HotkeyConfig_as_json': ['CString', ['pointer']],
    'HotkeyConfig_set_value': ['bool', ['pointer', 'size_t', 'pointer']],
    'HotkeySystem_new': ['pointer', ['pointer']],
    'HotkeySystem_with_config': ['pointer', ['pointer', 'pointer']],
    'HotkeySystem_drop': ['void', ['pointer']],
    'HotkeySystem_deactivate': ['void', ['pointer']],
    'HotkeySystem_activate': ['void', ['pointer']],
    'HotkeySystem_config': ['pointer', ['pointer']],
    'HotkeySystem_set_config': ['bool', ['pointer', 'pointer']],
    'Layout_new': ['pointer', []],
    'Layout_default_layout': ['pointer', []],
    'Layout_parse_json': ['pointer', ['CString']],
    'Layout_parse_original_livesplit': ['pointer', ['pointer', 'size_t']],
    'Layout_drop': ['void', ['pointer']],
    'Layout_clone': ['pointer', ['pointer']],
    'Layout_settings_as_json': ['CString', ['pointer']],
    'Layout_state_as_json': ['CString', ['pointer', 'pointer']],
    'Layout_push': ['void', ['pointer', 'pointer']],
    'Layout_scroll_up': ['void', ['pointer']],
    'Layout_scroll_down': ['void', ['pointer']],
    'Layout_remount': ['void', ['pointer']],
    'LayoutEditor_new': ['pointer', ['pointer']],
    'LayoutEditor_close': ['pointer', ['pointer']],
    'LayoutEditor_state_as_json': ['CString', ['pointer']],
    'LayoutEditor_layout_state_as_json': ['CString', ['pointer', 'pointer']],
    'LayoutEditor_select': ['void', ['pointer', 'size_t']],
    'LayoutEditor_add_component': ['void', ['pointer', 'pointer']],
    'LayoutEditor_remove_component': ['void', ['pointer']],
    'LayoutEditor_move_component_up': ['void', ['pointer']],
    'LayoutEditor_move_component_down': ['void', ['pointer']],
    'LayoutEditor_move_component': ['void', ['pointer', 'size_t']],
    'LayoutEditor_duplicate_component': ['void', ['pointer']],
    'LayoutEditor_set_component_settings_value': ['void', ['pointer', 'size_t', 'pointer']],
    'LayoutEditor_set_general_settings_value': ['void', ['pointer', 'size_t', 'pointer']],
    'ParseRunResult_drop': ['void', ['pointer']],
    'ParseRunResult_unwrap': ['pointer', ['pointer']],
    'ParseRunResult_parsed_successfully': ['bool', ['pointer']],
    'ParseRunResult_timer_kind': ['CString', ['pointer']],
    'ParseRunResult_is_generic_timer': ['bool', ['pointer']],
    'PossibleTimeSaveComponent_new': ['pointer', []],
    'PossibleTimeSaveComponent_drop': ['void', ['pointer']],
    'PossibleTimeSaveComponent_into_generic': ['pointer', ['pointer']],
    'PossibleTimeSaveComponent_state_as_json': ['CString', ['pointer', 'pointer']],
    'PossibleTimeSaveComponent_state': ['pointer', ['pointer', 'pointer']],
    'PossibleTimeSaveComponentState_drop': ['void', ['pointer']],
    'PossibleTimeSaveComponentState_text': ['CString', ['pointer']],
    'PossibleTimeSaveComponentState_time': ['CString', ['pointer']],
    'PotentialCleanUp_drop': ['void', ['pointer']],
    'PotentialCleanUp_message': ['CString', ['pointer']],
    'PreviousSegmentComponent_new': ['pointer', []],
    'PreviousSegmentComponent_drop': ['void', ['pointer']],
    'PreviousSegmentComponent_into_generic': ['pointer', ['pointer']],
    'PreviousSegmentComponent_state_as_json': ['CString', ['pointer', 'pointer', 'pointer']],
    'PreviousSegmentComponent_state': ['pointer', ['pointer', 'pointer', 'pointer']],
    'PreviousSegmentComponentState_drop': ['void', ['pointer']],
    'PreviousSegmentComponentState_text': ['CString', ['pointer']],
    'PreviousSegmentComponentState_time': ['CString', ['pointer']],
    'PreviousSegmentComponentState_semantic_color': ['CString', ['pointer']],
    'Run_new': ['pointer', []],
    'Run_parse': ['pointer', ['pointer', 'size_t', 'CString', 'bool']],
    'Run_parse_file_handle': ['pointer', ['int64', 'CString', 'bool']],
    'Run_drop': ['void', ['pointer']],
    'Run_clone': ['pointer', ['pointer']],
    'Run_game_name': ['CString', ['pointer']],
    'Run_game_icon': ['CString', ['pointer']],
    'Run_category_name': ['CString', ['pointer']],
    'Run_extended_file_name': ['CString', ['pointer', 'bool']],
    'Run_extended_name': ['CString', ['pointer', 'bool']],
    'Run_extended_category_name': ['CString', ['pointer', 'bool', 'bool', 'bool']],
    'Run_attempt_count': ['uint32', ['pointer']],
    'Run_metadata': ['pointer', ['pointer']],
    'Run_offset': ['pointer', ['pointer']],
    'Run_len': ['size_t', ['pointer']],
    'Run_has_been_modified': ['bool', ['pointer']],
    'Run_segment': ['pointer', ['pointer', 'size_t']],
    'Run_attempt_history_len': ['size_t', ['pointer']],
    'Run_attempt_history_index': ['pointer', ['pointer', 'size_t']],
    'Run_save_as_lss': ['CString', ['pointer']],
    'Run_custom_comparisons_len': ['size_t', ['pointer']],
    'Run_custom_comparison': ['CString', ['pointer', 'size_t']],
    'Run_auto_splitter_settings': ['CString', ['pointer']],
    'Run_push_segment': ['void', ['pointer', 'pointer']],
    'Run_set_game_name': ['void', ['pointer', 'CString']],
    'Run_set_category_name': ['void', ['pointer', 'CString']],
    'Run_mark_as_modified': ['void', ['pointer']],
    'RunEditor_new': ['pointer', ['pointer']],
    'RunEditor_close': ['pointer', ['pointer']],
    'RunEditor_state_as_json': ['CString', ['pointer']],
    'RunEditor_select_timing_method': ['void', ['pointer', 'uint8']],
    'RunEditor_unselect': ['void', ['pointer', 'size_t']],
    'RunEditor_select_additionally': ['void', ['pointer', 'size_t']],
    'RunEditor_select_only': ['void', ['pointer', 'size_t']],
    'RunEditor_set_game_name': ['void', ['pointer', 'CString']],
    'RunEditor_set_category_name': ['void', ['pointer', 'CString']],
    'RunEditor_parse_and_set_offset': ['bool', ['pointer', 'CString']],
    'RunEditor_parse_and_set_attempt_count': ['bool', ['pointer', 'CString']],
    'RunEditor_set_game_icon': ['void', ['pointer', 'pointer', 'size_t']],
    'RunEditor_remove_game_icon': ['void', ['pointer']],
    'RunEditor_set_run_id': ['void', ['pointer', 'CString']],
    'RunEditor_set_region_name': ['void', ['pointer', 'CString']],
    'RunEditor_set_platform_name': ['void', ['pointer', 'CString']],
    'RunEditor_set_emulator_usage': ['void', ['pointer', 'bool']],
    'RunEditor_set_variable': ['void', ['pointer', 'CString', 'CString']],
    'RunEditor_remove_variable': ['void', ['pointer', 'CString']],
    'RunEditor_clear_metadata': ['void', ['pointer']],
    'RunEditor_insert_segment_above': ['void', ['pointer']],
    'RunEditor_insert_segment_below': ['void', ['pointer']],
    'RunEditor_remove_segments': ['void', ['pointer']],
    'RunEditor_move_segments_up': ['void', ['pointer']],
    'RunEditor_move_segments_down': ['void', ['pointer']],
    'RunEditor_active_set_icon': ['void', ['pointer', 'pointer', 'size_t']],
    'RunEditor_active_remove_icon': ['void', ['pointer']],
    'RunEditor_active_set_name': ['void', ['pointer', 'CString']],
    'RunEditor_active_parse_and_set_split_time': ['bool', ['pointer', 'CString']],
    'RunEditor_active_parse_and_set_segment_time': ['bool', ['pointer', 'CString']],
    'RunEditor_active_parse_and_set_best_segment_time': ['bool', ['pointer', 'CString']],
    'RunEditor_active_parse_and_set_comparison_time': ['bool', ['pointer', 'CString', 'CString']],
    'RunEditor_add_comparison': ['bool', ['pointer', 'CString']],
    'RunEditor_import_comparison': ['bool', ['pointer', 'pointer', 'CString']],
    'RunEditor_remove_comparison': ['void', ['pointer', 'CString']],
    'RunEditor_rename_comparison': ['bool', ['pointer', 'CString', 'CString']],
    'RunEditor_move_comparison': ['bool', ['pointer', 'size_t', 'size_t']],
    'RunEditor_clear_history': ['void', ['pointer']],
    'RunEditor_clear_times': ['void', ['pointer']],
    'RunEditor_clean_sum_of_best': ['pointer', ['pointer']],
    'RunMetadata_run_id': ['CString', ['pointer']],
    'RunMetadata_platform_name': ['CString', ['pointer']],
    'RunMetadata_uses_emulator': ['bool', ['pointer']],
    'RunMetadata_region_name': ['CString', ['pointer']],
    'RunMetadata_variables': ['pointer', ['pointer']],
    'RunMetadataVariable_drop': ['void', ['pointer']],
    'RunMetadataVariable_name': ['CString', ['pointer']],
    'RunMetadataVariable_value': ['CString', ['pointer']],
    'RunMetadataVariablesIter_drop': ['void', ['pointer']],
    'RunMetadataVariablesIter_next': ['pointer', ['pointer']],
    'Segment_new': ['pointer', ['CString']],
    'Segment_drop': ['void', ['pointer']],
    'Segment_name': ['CString', ['pointer']],
    'Segment_icon': ['CString', ['pointer']],
    'Segment_comparison': ['pointer', ['pointer', 'CString']],
    'Segment_personal_best_split_time': ['pointer', ['pointer']],
    'Segment_best_segment_time': ['pointer', ['pointer']],
    'Segment_segment_history': ['pointer', ['pointer']],
    'SegmentHistory_iter': ['pointer', ['pointer']],
    'SegmentHistoryElement_index': ['int32', ['pointer']],
    'SegmentHistoryElement_time': ['pointer', ['pointer']],
    'SegmentHistoryIter_drop': ['void', ['pointer']],
    'SegmentHistoryIter_next': ['pointer', ['pointer']],
    'SeparatorComponent_new': ['pointer', []],
    'SeparatorComponent_drop': ['void', ['pointer']],
    'SeparatorComponent_into_generic': ['pointer', ['pointer']],
    'SettingValue_from_bool': ['pointer', ['bool']],
    'SettingValue_from_uint': ['pointer', ['uint32']],
    'SettingValue_from_int': ['pointer', ['int32']],
    'SettingValue_from_string': ['pointer', ['CString']],
    'SettingValue_from_optional_string': ['pointer', ['CString']],
    'SettingValue_from_optional_empty_string': ['pointer', []],
    'SettingValue_from_float': ['pointer', ['double']],
    'SettingValue_from_accuracy': ['pointer', ['CString']],
    'SettingValue_from_digits_format': ['pointer', ['CString']],
    'SettingValue_from_optional_timing_method': ['pointer', ['CString']],
    'SettingValue_from_optional_empty_timing_method': ['pointer', []],
    'SettingValue_from_color': ['pointer', ['float', 'float', 'float', 'float']],
    'SettingValue_from_optional_color': ['pointer', ['float', 'float', 'float', 'float']],
    'SettingValue_from_optional_empty_color': ['pointer', []],
    'SettingValue_from_transparent_gradient': ['pointer', []],
    'SettingValue_from_vertical_gradient': ['pointer', ['float', 'float', 'float', 'float', 'float', 'float', 'float', 'float']],
    'SettingValue_from_horizontal_gradient': ['pointer', ['float', 'float', 'float', 'float', 'float', 'float', 'float', 'float']],
    'SettingValue_from_alternating_gradient': ['pointer', ['float', 'float', 'float', 'float', 'float', 'float', 'float', 'float']],
    'SettingValue_from_alignment': ['pointer', ['CString']],
    'SettingValue_from_column_start_with': ['pointer', ['CString']],
    'SettingValue_from_column_update_with': ['pointer', ['CString']],
    'SettingValue_from_column_update_trigger': ['pointer', ['CString']],
    'SettingValue_drop': ['void', ['pointer']],
    'SharedTimer_drop': ['void', ['pointer']],
    'SharedTimer_share': ['pointer', ['pointer']],
    'SharedTimer_read': ['pointer', ['pointer']],
    'SharedTimer_write': ['pointer', ['pointer']],
    'SharedTimer_replace_inner': ['void', ['pointer', 'pointer']],
    'SplitComponentState_columns_len': ['size_t', ['pointer', 'size_t']],
    'SplitsComponent_new': ['pointer', []],
    'SplitsComponent_drop': ['void', ['pointer']],
    'SplitsComponent_into_generic': ['pointer', ['pointer']],
    'SplitsComponent_state_as_json': ['CString', ['pointer', 'pointer', 'pointer']],
    'SplitsComponent_state': ['pointer', ['pointer', 'pointer', 'pointer']],
    'SplitsComponent_scroll_up': ['void', ['pointer']],
    'SplitsComponent_scroll_down': ['void', ['pointer']],
    'SplitsComponent_set_visual_split_count': ['void', ['pointer', 'size_t']],
    'SplitsComponent_set_split_preview_count': ['void', ['pointer', 'size_t']],
    'SplitsComponent_set_always_show_last_split': ['void', ['pointer', 'bool']],
    'SplitsComponent_set_separator_last_split': ['void', ['pointer', 'bool']],
    'SplitsComponentState_drop': ['void', ['pointer']],
    'SplitsComponentState_final_separator_shown': ['bool', ['pointer']],
    'SplitsComponentState_len': ['size_t', ['pointer']],
    'SplitsComponentState_icon_change_count': ['size_t', ['pointer']],
    'SplitsComponentState_icon_change_segment_index': ['size_t', ['pointer', 'size_t']],
    'SplitsComponentState_icon_change_icon': ['CString', ['pointer', 'size_t']],
    'SplitsComponentState_name': ['CString', ['pointer', 'size_t']],
    'SplitsComponentState_column_value': ['CString', ['pointer', 'size_t', 'size_t']],
    'SplitsComponentState_column_semantic_color': ['CString', ['pointer', 'size_t', 'size_t']],
    'SplitsComponentState_is_current_split': ['bool', ['pointer', 'size_t']],
    'SumOfBestCleaner_drop': ['void', ['pointer']],
    'SumOfBestCleaner_next_potential_clean_up': ['pointer', ['pointer']],
    'SumOfBestCleaner_apply': ['void', ['pointer', 'pointer']],
    'SumOfBestComponent_new': ['pointer', []],
    'SumOfBestComponent_drop': ['void', ['pointer']],
    'SumOfBestComponent_into_generic': ['pointer', ['pointer']],
    'SumOfBestComponent_state_as_json': ['CString', ['pointer', 'pointer']],
    'SumOfBestComponent_state': ['pointer', ['pointer', 'pointer']],
    'SumOfBestComponentState_drop': ['void', ['pointer']],
    'SumOfBestComponentState_text': ['CString', ['pointer']],
    'SumOfBestComponentState_time': ['CString', ['pointer']],
    'TextComponent_new': ['pointer', []],
    'TextComponent_drop': ['void', ['pointer']],
    'TextComponent_into_generic': ['pointer', ['pointer']],
    'TextComponent_state_as_json': ['CString', ['pointer']],
    'TextComponent_state': ['pointer', ['pointer']],
    'TextComponent_set_center': ['void', ['pointer', 'CString']],
    'TextComponent_set_left': ['void', ['pointer', 'CString']],
    'TextComponent_set_right': ['void', ['pointer', 'CString']],
    'TextComponentState_drop': ['void', ['pointer']],
    'TextComponentState_left': ['CString', ['pointer']],
    'TextComponentState_right': ['CString', ['pointer']],
    'TextComponentState_center': ['CString', ['pointer']],
    'TextComponentState_is_split': ['bool', ['pointer']],
    'Time_drop': ['void', ['pointer']],
    'Time_clone': ['pointer', ['pointer']],
    'Time_real_time': ['pointer', ['pointer']],
    'Time_game_time': ['pointer', ['pointer']],
    'Time_index': ['pointer', ['pointer', 'uint8']],
    'TimeSpan_from_seconds': ['pointer', ['double']],
    'TimeSpan_parse': ['pointer', ['CString']],
    'TimeSpan_drop': ['void', ['pointer']],
    'TimeSpan_clone': ['pointer', ['pointer']],
    'TimeSpan_total_seconds': ['double', ['pointer']],
    'Timer_new': ['pointer', ['pointer']],
    'Timer_into_shared': ['pointer', ['pointer']],
    'Timer_into_run': ['pointer', ['pointer', 'bool']],
    'Timer_drop': ['void', ['pointer']],
    'Timer_current_timing_method': ['uint8', ['pointer']],
    'Timer_current_comparison': ['CString', ['pointer']],
    'Timer_is_game_time_initialized': ['bool', ['pointer']],
    'Timer_is_game_time_paused': ['bool', ['pointer']],
    'Timer_loading_times': ['pointer', ['pointer']],
    'Timer_current_phase': ['uint8', ['pointer']],
    'Timer_get_run': ['pointer', ['pointer']],
    'Timer_save_as_lss': ['CString', ['pointer']],
    'Timer_print_debug': ['void', ['pointer']],
    'Timer_current_time': ['pointer', ['pointer']],
    'Timer_replace_run': ['bool', ['pointer', 'pointer', 'bool']],
    'Timer_set_run': ['pointer', ['pointer', 'pointer']],
    'Timer_start': ['void', ['pointer']],
    'Timer_split': ['void', ['pointer']],
    'Timer_split_or_start': ['void', ['pointer']],
    'Timer_skip_split': ['void', ['pointer']],
    'Timer_undo_split': ['void', ['pointer']],
    'Timer_reset': ['void', ['pointer', 'bool']],
    'Timer_reset_and_set_attempt_as_pb': ['void', ['pointer']],
    'Timer_pause': ['void', ['pointer']],
    'Timer_resume': ['void', ['pointer']],
    'Timer_toggle_pause': ['void', ['pointer']],
    'Timer_toggle_pause_or_start': ['void', ['pointer']],
    'Timer_undo_all_pauses': ['void', ['pointer']],
    'Timer_set_current_timing_method': ['void', ['pointer', 'uint8']],
    'Timer_switch_to_next_comparison': ['void', ['pointer']],
    'Timer_switch_to_previous_comparison': ['void', ['pointer']],
    'Timer_initialize_game_time': ['void', ['pointer']],
    'Timer_deinitialize_game_time': ['void', ['pointer']],
    'Timer_pause_game_time': ['void', ['pointer']],
    'Timer_resume_game_time': ['void', ['pointer']],
    'Timer_set_game_time': ['void', ['pointer', 'pointer']],
    'Timer_set_loading_times': ['void', ['pointer', 'pointer']],
    'Timer_mark_as_unmodified': ['void', ['pointer']],
    'TimerComponent_new': ['pointer', []],
    'TimerComponent_drop': ['void', ['pointer']],
    'TimerComponent_into_generic': ['pointer', ['pointer']],
    'TimerComponent_state_as_json': ['CString', ['pointer', 'pointer', 'pointer']],
    'TimerComponent_state': ['pointer', ['pointer', 'pointer', 'pointer']],
    'TimerComponentState_drop': ['void', ['pointer']],
    'TimerComponentState_time': ['CString', ['pointer']],
    'TimerComponentState_fraction': ['CString', ['pointer']],
    'TimerComponentState_semantic_color': ['CString', ['pointer']],
    'TimerReadLock_drop': ['void', ['pointer']],
    'TimerReadLock_timer': ['pointer', ['pointer']],
    'TimerWriteLock_drop': ['void', ['pointer']],
    'TimerWriteLock_timer': ['pointer', ['pointer']],
    'TitleComponent_new': ['pointer', []],
    'TitleComponent_drop': ['void', ['pointer']],
    'TitleComponent_into_generic': ['pointer', ['pointer']],
    'TitleComponent_state_as_json': ['CString', ['pointer', 'pointer']],
    'TitleComponent_state': ['pointer', ['pointer', 'pointer']],
    'TitleComponentState_drop': ['void', ['pointer']],
    'TitleComponentState_icon_change': ['CString', ['pointer']],
    'TitleComponentState_line1': ['CString', ['pointer']],
    'TitleComponentState_line2': ['CString', ['pointer']],
    'TitleComponentState_is_centered': ['bool', ['pointer']],
    'TitleComponentState_shows_finished_runs': ['bool', ['pointer']],
    'TitleComponentState_finished_runs': ['uint32', ['pointer']],
    'TitleComponentState_shows_attempts': ['bool', ['pointer']],
    'TitleComponentState_attempts': ['uint32', ['pointer']],
    'TotalPlaytimeComponent_new': ['pointer', []],
    'TotalPlaytimeComponent_drop': ['void', ['pointer']],
    'TotalPlaytimeComponent_into_generic': ['pointer', ['pointer']],
    'TotalPlaytimeComponent_state_as_json': ['CString', ['pointer', 'pointer']],
    'TotalPlaytimeComponent_state': ['pointer', ['pointer', 'pointer']],
    'TotalPlaytimeComponentState_drop': ['void', ['pointer']],
    'TotalPlaytimeComponentState_text': ['CString', ['pointer']],
    'TotalPlaytimeComponentState_time': ['CString', ['pointer']],
});

/**
 * The analysis module provides a variety of functions for calculating
 * information about runs.
 */
class AnalysisRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.AnalysisRef = AnalysisRef;

/**
 * The analysis module provides a variety of functions for calculating
 * information about runs.
 */
class AnalysisRefMut extends AnalysisRef {
}
exports.AnalysisRefMut = AnalysisRefMut;

/**
 * The analysis module provides a variety of functions for calculating
 * information about runs.
 */
class Analysis extends AnalysisRefMut {
    /**
     * @param {function(Analysis)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            this.ptr = ref.NULL;
        }
    }
    /**
     * Calculates the Sum of Best Segments for the timing method provided. This is
     * the fastest time possible to complete a run of a category, based on
     * information collected from all the previous attempts. This often matches up
     * with the sum of the best segment times of all the segments, but that may not
     * always be the case, as skipped segments may introduce combined segments that
     * may be faster than the actual sum of their best segment times. The name is
     * therefore a bit misleading, but sticks around for historical reasons. You
     * can choose to do a simple calculation instead, which excludes the Segment
     * History from the calculation process. If there's an active attempt, you can
     * choose to take it into account as well. Can return null.
     * @param {RunRef} run
     * @param {boolean} simpleCalculation
     * @param {boolean} useCurrentRun
     * @param {number} method
     * @return {TimeSpan | null}
     */
    static calculateSumOfBest(run, simpleCalculation, useCurrentRun, method) {
        if (ref.isNull(run.ptr)) {
            throw "run is disposed";
        }
        const result = new TimeSpan(liveSplitCoreNative.Analysis_calculate_sum_of_best(run.ptr, simpleCalculation, useCurrentRun, method));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * Calculates the total playtime of the passed Run.
     * @param {RunRef} run
     * @return {TimeSpan}
     */
    static calculateTotalPlaytimeForRun(run) {
        if (ref.isNull(run.ptr)) {
            throw "run is disposed";
        }
        const result = new TimeSpan(liveSplitCoreNative.Analysis_calculate_total_playtime_for_run(run.ptr));
        return result;
    }
    /**
     * Calculates the total playtime of the passed Timer.
     * @param {TimerRef} timer
     * @return {TimeSpan}
     */
    static calculateTotalPlaytimeForTimer(timer) {
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        const result = new TimeSpan(liveSplitCoreNative.Analysis_calculate_total_playtime_for_timer(timer.ptr));
        return result;
    }
}
exports.Analysis = Analysis;

/**
 * An Atomic Date Time represents a UTC Date Time that tries to be as close to
 * an atomic clock as possible.
 */
class AtomicDateTimeRef {
    /**
     * Represents whether the date time is actually properly derived from an
     * atomic clock. If the synchronization with the atomic clock didn't happen
     * yet or failed, this is set to false.
     * @return {boolean}
     */
    isSynchronized() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.AtomicDateTime_is_synchronized(this.ptr);
        return result;
    }
    /**
     * Converts this atomic date time into a RFC 2822 formatted date time.
     * @return {string}
     */
    toRfc2822() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.AtomicDateTime_to_rfc2822(this.ptr);
        return result;
    }
    /**
     * Converts this atomic date time into a RFC 3339 formatted date time.
     * @return {string}
     */
    toRfc3339() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.AtomicDateTime_to_rfc3339(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.AtomicDateTimeRef = AtomicDateTimeRef;

/**
 * An Atomic Date Time represents a UTC Date Time that tries to be as close to
 * an atomic clock as possible.
 */
class AtomicDateTimeRefMut extends AtomicDateTimeRef {
}
exports.AtomicDateTimeRefMut = AtomicDateTimeRefMut;

/**
 * An Atomic Date Time represents a UTC Date Time that tries to be as close to
 * an atomic clock as possible.
 */
class AtomicDateTime extends AtomicDateTimeRefMut {
    /**
     * @param {function(AtomicDateTime)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.AtomicDateTime_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.AtomicDateTime = AtomicDateTime;

/**
 * An Attempt describes information about an attempt to run a specific category
 * by a specific runner in the past. Every time a new attempt is started and
 * then reset, an Attempt describing general information about it is created.
 */
class AttemptRef {
    /**
     * Accesses the unique index of the attempt. This index is unique for the
     * Run, not for all of them.
     * @return {number}
     */
    index() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Attempt_index(this.ptr);
        return result;
    }
    /**
     * Accesses the split time of the last segment. If the attempt got reset
     * early and didn't finish, this may be empty.
     * @return {TimeRef}
     */
    time() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TimeRef(liveSplitCoreNative.Attempt_time(this.ptr));
        return result;
    }
    /**
     * Accesses the amount of time the attempt has been paused for. If it is not
     * known, this returns null. This means that it may not necessarily be
     * possible to differentiate whether a Run has not been paused or it simply
     * wasn't stored.
     * @return {TimeSpanRef | null}
     */
    pauseTime() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TimeSpanRef(liveSplitCoreNative.Attempt_pause_time(this.ptr));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * Accesses the point in time the attempt was started at. This returns null
     * if this information is not known.
     * @return {AtomicDateTime | null}
     */
    started() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new AtomicDateTime(liveSplitCoreNative.Attempt_started(this.ptr));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * Accesses the point in time the attempt was ended at. This returns null if
     * this information is not known.
     * @return {AtomicDateTime | null}
     */
    ended() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new AtomicDateTime(liveSplitCoreNative.Attempt_ended(this.ptr));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.AttemptRef = AttemptRef;

/**
 * An Attempt describes information about an attempt to run a specific category
 * by a specific runner in the past. Every time a new attempt is started and
 * then reset, an Attempt describing general information about it is created.
 */
class AttemptRefMut extends AttemptRef {
}
exports.AttemptRefMut = AttemptRefMut;

/**
 * An Attempt describes information about an attempt to run a specific category
 * by a specific runner in the past. Every time a new attempt is started and
 * then reset, an Attempt describing general information about it is created.
 */
class Attempt extends AttemptRefMut {
    /**
     * @param {function(Attempt)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            this.ptr = ref.NULL;
        }
    }
}
exports.Attempt = Attempt;

/**
 * The Blank Space Component is simply an empty component that doesn't show
 * anything other than a background. It mostly serves as padding between other
 * components.
 */
class BlankSpaceComponentRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.BlankSpaceComponentRef = BlankSpaceComponentRef;

/**
 * The Blank Space Component is simply an empty component that doesn't show
 * anything other than a background. It mostly serves as padding between other
 * components.
 */
class BlankSpaceComponentRefMut extends BlankSpaceComponentRef {
    /**
     * Encodes the component's state information as JSON.
     * @param {TimerRef} timer
     * @return {any}
     */
    stateAsJson(timer) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        const result = liveSplitCoreNative.BlankSpaceComponent_state_as_json(this.ptr, timer.ptr);
        return JSON.parse(result);
    }
    /**
     * Calculates the component's state based on the timer provided.
     * @param {TimerRef} timer
     * @return {BlankSpaceComponentState}
     */
    state(timer) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        const result = new BlankSpaceComponentState(liveSplitCoreNative.BlankSpaceComponent_state(this.ptr, timer.ptr));
        return result;
    }
}
exports.BlankSpaceComponentRefMut = BlankSpaceComponentRefMut;

/**
 * The Blank Space Component is simply an empty component that doesn't show
 * anything other than a background. It mostly serves as padding between other
 * components.
 */
class BlankSpaceComponent extends BlankSpaceComponentRefMut {
    /**
     * @param {function(BlankSpaceComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.BlankSpaceComponent_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Blank Space Component.
     * @return {BlankSpaceComponent}
     */
    static new() {
        const result = new BlankSpaceComponent(liveSplitCoreNative.BlankSpaceComponent_new());
        return result;
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     * @return {Component}
     */
    intoGeneric() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.BlankSpaceComponent_into_generic(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.BlankSpaceComponent = BlankSpaceComponent;

/**
 * The state object describes the information to visualize for this component.
 */
class BlankSpaceComponentStateRef {
    /**
     * The size of the component.
     * @return {number}
     */
    size() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.BlankSpaceComponentState_size(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.BlankSpaceComponentStateRef = BlankSpaceComponentStateRef;

/**
 * The state object describes the information to visualize for this component.
 */
class BlankSpaceComponentStateRefMut extends BlankSpaceComponentStateRef {
}
exports.BlankSpaceComponentStateRefMut = BlankSpaceComponentStateRefMut;

/**
 * The state object describes the information to visualize for this component.
 */
class BlankSpaceComponentState extends BlankSpaceComponentStateRefMut {
    /**
     * @param {function(BlankSpaceComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.BlankSpaceComponentState_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.BlankSpaceComponentState = BlankSpaceComponentState;

/**
 * A Component provides information about a run in a way that is easy to
 * visualize. This type can store any of the components provided by this crate.
 */
class ComponentRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.ComponentRef = ComponentRef;

/**
 * A Component provides information about a run in a way that is easy to
 * visualize. This type can store any of the components provided by this crate.
 */
class ComponentRefMut extends ComponentRef {
}
exports.ComponentRefMut = ComponentRefMut;

/**
 * A Component provides information about a run in a way that is easy to
 * visualize. This type can store any of the components provided by this crate.
 */
class Component extends ComponentRefMut {
    /**
     * @param {function(Component)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.Component_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.Component = Component;

/**
 * The Current Comparison Component is a component that shows the name of the
 * comparison that is currently selected to be compared against.
 */
class CurrentComparisonComponentRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.CurrentComparisonComponentRef = CurrentComparisonComponentRef;

/**
 * The Current Comparison Component is a component that shows the name of the
 * comparison that is currently selected to be compared against.
 */
class CurrentComparisonComponentRefMut extends CurrentComparisonComponentRef {
    /**
     * Encodes the component's state information as JSON.
     * @param {TimerRef} timer
     * @return {any}
     */
    stateAsJson(timer) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        const result = liveSplitCoreNative.CurrentComparisonComponent_state_as_json(this.ptr, timer.ptr);
        return JSON.parse(result);
    }
    /**
     * Calculates the component's state based on the timer provided.
     * @param {TimerRef} timer
     * @return {CurrentComparisonComponentState}
     */
    state(timer) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        const result = new CurrentComparisonComponentState(liveSplitCoreNative.CurrentComparisonComponent_state(this.ptr, timer.ptr));
        return result;
    }
}
exports.CurrentComparisonComponentRefMut = CurrentComparisonComponentRefMut;

/**
 * The Current Comparison Component is a component that shows the name of the
 * comparison that is currently selected to be compared against.
 */
class CurrentComparisonComponent extends CurrentComparisonComponentRefMut {
    /**
     * @param {function(CurrentComparisonComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.CurrentComparisonComponent_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Current Comparison Component.
     * @return {CurrentComparisonComponent}
     */
    static new() {
        const result = new CurrentComparisonComponent(liveSplitCoreNative.CurrentComparisonComponent_new());
        return result;
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     * @return {Component}
     */
    intoGeneric() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.CurrentComparisonComponent_into_generic(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.CurrentComparisonComponent = CurrentComparisonComponent;

/**
 * The state object describes the information to visualize for this component.
 */
class CurrentComparisonComponentStateRef {
    /**
     * The label's text.
     * @return {string}
     */
    text() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.CurrentComparisonComponentState_text(this.ptr);
        return result;
    }
    /**
     * The name of the comparison that is currently selected to be compared
     * against.
     * @return {string}
     */
    comparison() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.CurrentComparisonComponentState_comparison(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.CurrentComparisonComponentStateRef = CurrentComparisonComponentStateRef;

/**
 * The state object describes the information to visualize for this component.
 */
class CurrentComparisonComponentStateRefMut extends CurrentComparisonComponentStateRef {
}
exports.CurrentComparisonComponentStateRefMut = CurrentComparisonComponentStateRefMut;

/**
 * The state object describes the information to visualize for this component.
 */
class CurrentComparisonComponentState extends CurrentComparisonComponentStateRefMut {
    /**
     * @param {function(CurrentComparisonComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.CurrentComparisonComponentState_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.CurrentComparisonComponentState = CurrentComparisonComponentState;

/**
 * The Current Pace Component is a component that shows a prediction of the
 * current attempt's final time, if the current attempt's pace matches the
 * chosen comparison for the remainder of the run.
 */
class CurrentPaceComponentRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.CurrentPaceComponentRef = CurrentPaceComponentRef;

/**
 * The Current Pace Component is a component that shows a prediction of the
 * current attempt's final time, if the current attempt's pace matches the
 * chosen comparison for the remainder of the run.
 */
class CurrentPaceComponentRefMut extends CurrentPaceComponentRef {
    /**
     * Encodes the component's state information as JSON.
     * @param {TimerRef} timer
     * @return {any}
     */
    stateAsJson(timer) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        const result = liveSplitCoreNative.CurrentPaceComponent_state_as_json(this.ptr, timer.ptr);
        return JSON.parse(result);
    }
    /**
     * Calculates the component's state based on the timer provided.
     * @param {TimerRef} timer
     * @return {CurrentPaceComponentState}
     */
    state(timer) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        const result = new CurrentPaceComponentState(liveSplitCoreNative.CurrentPaceComponent_state(this.ptr, timer.ptr));
        return result;
    }
}
exports.CurrentPaceComponentRefMut = CurrentPaceComponentRefMut;

/**
 * The Current Pace Component is a component that shows a prediction of the
 * current attempt's final time, if the current attempt's pace matches the
 * chosen comparison for the remainder of the run.
 */
class CurrentPaceComponent extends CurrentPaceComponentRefMut {
    /**
     * @param {function(CurrentPaceComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.CurrentPaceComponent_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Current Pace Component.
     * @return {CurrentPaceComponent}
     */
    static new() {
        const result = new CurrentPaceComponent(liveSplitCoreNative.CurrentPaceComponent_new());
        return result;
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     * @return {Component}
     */
    intoGeneric() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.CurrentPaceComponent_into_generic(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.CurrentPaceComponent = CurrentPaceComponent;

/**
 * The state object describes the information to visualize for this component.
 */
class CurrentPaceComponentStateRef {
    /**
     * The label's text.
     * @return {string}
     */
    text() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.CurrentPaceComponentState_text(this.ptr);
        return result;
    }
    /**
     * The current pace.
     * @return {string}
     */
    time() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.CurrentPaceComponentState_time(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.CurrentPaceComponentStateRef = CurrentPaceComponentStateRef;

/**
 * The state object describes the information to visualize for this component.
 */
class CurrentPaceComponentStateRefMut extends CurrentPaceComponentStateRef {
}
exports.CurrentPaceComponentStateRefMut = CurrentPaceComponentStateRefMut;

/**
 * The state object describes the information to visualize for this component.
 */
class CurrentPaceComponentState extends CurrentPaceComponentStateRefMut {
    /**
     * @param {function(CurrentPaceComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.CurrentPaceComponentState_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.CurrentPaceComponentState = CurrentPaceComponentState;

/**
 * The Delta Component is a component that shows the how far ahead or behind
 * the current attempt is compared to the chosen comparison.
 */
class DeltaComponentRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.DeltaComponentRef = DeltaComponentRef;

/**
 * The Delta Component is a component that shows the how far ahead or behind
 * the current attempt is compared to the chosen comparison.
 */
class DeltaComponentRefMut extends DeltaComponentRef {
    /**
     * Encodes the component's state information as JSON.
     * @param {TimerRef} timer
     * @param {GeneralLayoutSettingsRef} layoutSettings
     * @return {any}
     */
    stateAsJson(timer, layoutSettings) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        if (ref.isNull(layoutSettings.ptr)) {
            throw "layoutSettings is disposed";
        }
        const result = liveSplitCoreNative.DeltaComponent_state_as_json(this.ptr, timer.ptr, layoutSettings.ptr);
        return JSON.parse(result);
    }
    /**
     * Calculates the component's state based on the timer and the layout
     * settings provided.
     * @param {TimerRef} timer
     * @param {GeneralLayoutSettingsRef} layoutSettings
     * @return {DeltaComponentState}
     */
    state(timer, layoutSettings) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        if (ref.isNull(layoutSettings.ptr)) {
            throw "layoutSettings is disposed";
        }
        const result = new DeltaComponentState(liveSplitCoreNative.DeltaComponent_state(this.ptr, timer.ptr, layoutSettings.ptr));
        return result;
    }
}
exports.DeltaComponentRefMut = DeltaComponentRefMut;

/**
 * The Delta Component is a component that shows the how far ahead or behind
 * the current attempt is compared to the chosen comparison.
 */
class DeltaComponent extends DeltaComponentRefMut {
    /**
     * @param {function(DeltaComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.DeltaComponent_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Delta Component.
     * @return {DeltaComponent}
     */
    static new() {
        const result = new DeltaComponent(liveSplitCoreNative.DeltaComponent_new());
        return result;
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     * @return {Component}
     */
    intoGeneric() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.DeltaComponent_into_generic(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.DeltaComponent = DeltaComponent;

/**
 * The state object describes the information to visualize for this component.
 */
class DeltaComponentStateRef {
    /**
     * The label's text.
     * @return {string}
     */
    text() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DeltaComponentState_text(this.ptr);
        return result;
    }
    /**
     * The delta.
     * @return {string}
     */
    time() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DeltaComponentState_time(this.ptr);
        return result;
    }
    /**
     * The semantic coloring information the delta time carries.
     * @return {string}
     */
    semanticColor() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DeltaComponentState_semantic_color(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.DeltaComponentStateRef = DeltaComponentStateRef;

/**
 * The state object describes the information to visualize for this component.
 */
class DeltaComponentStateRefMut extends DeltaComponentStateRef {
}
exports.DeltaComponentStateRefMut = DeltaComponentStateRefMut;

/**
 * The state object describes the information to visualize for this component.
 */
class DeltaComponentState extends DeltaComponentStateRefMut {
    /**
     * @param {function(DeltaComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.DeltaComponentState_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.DeltaComponentState = DeltaComponentState;

/**
 * The Detailed Timer Component is a component that shows two timers, one for
 * the total time of the current attempt and one showing the time of just the
 * current segment. Other information, like segment times of up to two
 * comparisons, the segment icon, and the segment's name, can also be shown.
 */
class DetailedTimerComponentRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.DetailedTimerComponentRef = DetailedTimerComponentRef;

/**
 * The Detailed Timer Component is a component that shows two timers, one for
 * the total time of the current attempt and one showing the time of just the
 * current segment. Other information, like segment times of up to two
 * comparisons, the segment icon, and the segment's name, can also be shown.
 */
class DetailedTimerComponentRefMut extends DetailedTimerComponentRef {
    /**
     * Encodes the component's state information as JSON.
     * @param {TimerRef} timer
     * @param {GeneralLayoutSettingsRef} layoutSettings
     * @return {any}
     */
    stateAsJson(timer, layoutSettings) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        if (ref.isNull(layoutSettings.ptr)) {
            throw "layoutSettings is disposed";
        }
        const result = liveSplitCoreNative.DetailedTimerComponent_state_as_json(this.ptr, timer.ptr, layoutSettings.ptr);
        return JSON.parse(result);
    }
    /**
     * Calculates the component's state based on the timer and layout settings
     * provided.
     * @param {TimerRef} timer
     * @param {GeneralLayoutSettingsRef} layoutSettings
     * @return {DetailedTimerComponentState}
     */
    state(timer, layoutSettings) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        if (ref.isNull(layoutSettings.ptr)) {
            throw "layoutSettings is disposed";
        }
        const result = new DetailedTimerComponentState(liveSplitCoreNative.DetailedTimerComponent_state(this.ptr, timer.ptr, layoutSettings.ptr));
        return result;
    }
}
exports.DetailedTimerComponentRefMut = DetailedTimerComponentRefMut;

/**
 * The Detailed Timer Component is a component that shows two timers, one for
 * the total time of the current attempt and one showing the time of just the
 * current segment. Other information, like segment times of up to two
 * comparisons, the segment icon, and the segment's name, can also be shown.
 */
class DetailedTimerComponent extends DetailedTimerComponentRefMut {
    /**
     * @param {function(DetailedTimerComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.DetailedTimerComponent_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Detailed Timer Component.
     * @return {DetailedTimerComponent}
     */
    static new() {
        const result = new DetailedTimerComponent(liveSplitCoreNative.DetailedTimerComponent_new());
        return result;
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     * @return {Component}
     */
    intoGeneric() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.DetailedTimerComponent_into_generic(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.DetailedTimerComponent = DetailedTimerComponent;

/**
 * The state object describes the information to visualize for this component.
 */
class DetailedTimerComponentStateRef {
    /**
     * The time shown by the component's main timer without the fractional part.
     * @return {string}
     */
    timerTime() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DetailedTimerComponentState_timer_time(this.ptr);
        return result;
    }
    /**
     * The fractional part of the time shown by the main timer (including the dot).
     * @return {string}
     */
    timerFraction() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DetailedTimerComponentState_timer_fraction(this.ptr);
        return result;
    }
    /**
     * The semantic coloring information the main timer's time carries.
     * @return {string}
     */
    timerSemanticColor() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DetailedTimerComponentState_timer_semantic_color(this.ptr);
        return result;
    }
    /**
     * The time shown by the component's segment timer without the fractional part.
     * @return {string}
     */
    segmentTimerTime() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DetailedTimerComponentState_segment_timer_time(this.ptr);
        return result;
    }
    /**
     * The fractional part of the time shown by the segment timer (including the
     * dot).
     * @return {string}
     */
    segmentTimerFraction() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DetailedTimerComponentState_segment_timer_fraction(this.ptr);
        return result;
    }
    /**
     * Returns whether the first comparison is visible.
     * @return {boolean}
     */
    comparison1Visible() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DetailedTimerComponentState_comparison1_visible(this.ptr);
        return result;
    }
    /**
     * Returns the name of the first comparison. You may not call this if the first
     * comparison is not visible.
     * @return {string}
     */
    comparison1Name() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DetailedTimerComponentState_comparison1_name(this.ptr);
        return result;
    }
    /**
     * Returns the time of the first comparison. You may not call this if the first
     * comparison is not visible.
     * @return {string}
     */
    comparison1Time() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DetailedTimerComponentState_comparison1_time(this.ptr);
        return result;
    }
    /**
     * Returns whether the second comparison is visible.
     * @return {boolean}
     */
    comparison2Visible() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DetailedTimerComponentState_comparison2_visible(this.ptr);
        return result;
    }
    /**
     * Returns the name of the second comparison. You may not call this if the
     * second comparison is not visible.
     * @return {string}
     */
    comparison2Name() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DetailedTimerComponentState_comparison2_name(this.ptr);
        return result;
    }
    /**
     * Returns the time of the second comparison. You may not call this if the
     * second comparison is not visible.
     * @return {string}
     */
    comparison2Time() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DetailedTimerComponentState_comparison2_time(this.ptr);
        return result;
    }
    /**
     * The segment's icon encoded as a Data URL. This value is only specified
     * whenever the icon changes. If you explicitly want to query this value,
     * remount the component. The String itself may be empty. This indicates
     * that there is no icon.
     * @return {string | null}
     */
    iconChange() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DetailedTimerComponentState_icon_change(this.ptr);
        return result;
    }
    /**
     * The name of the segment. This may be null if it's not supposed to be
     * visualized.
     * @return {string | null}
     */
    segmentName() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DetailedTimerComponentState_segment_name(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.DetailedTimerComponentStateRef = DetailedTimerComponentStateRef;

/**
 * The state object describes the information to visualize for this component.
 */
class DetailedTimerComponentStateRefMut extends DetailedTimerComponentStateRef {
}
exports.DetailedTimerComponentStateRefMut = DetailedTimerComponentStateRefMut;

/**
 * The state object describes the information to visualize for this component.
 */
class DetailedTimerComponentState extends DetailedTimerComponentStateRefMut {
    /**
     * @param {function(DetailedTimerComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.DetailedTimerComponentState_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.DetailedTimerComponentState = DetailedTimerComponentState;

/**
 * With a Fuzzy List, you can implement a fuzzy searching algorithm. The list
 * stores all the items that can be searched for. With the `search` method you
 * can then execute the actual fuzzy search which returns a list of all the
 * elements found. This can be used to implement searching in a list of games.
 */
class FuzzyListRef {
    /**
     * Searches for the pattern provided in the list. A list of all the
     * matching elements is returned. The returned list has a maximum amount of
     * elements provided to this method.
     * @param {string} pattern
     * @param {number} max
     * @return {any}
     */
    search(pattern, max) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.FuzzyList_search(this.ptr, pattern, max);
        return JSON.parse(result);
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.FuzzyListRef = FuzzyListRef;

/**
 * With a Fuzzy List, you can implement a fuzzy searching algorithm. The list
 * stores all the items that can be searched for. With the `search` method you
 * can then execute the actual fuzzy search which returns a list of all the
 * elements found. This can be used to implement searching in a list of games.
 */
class FuzzyListRefMut extends FuzzyListRef {
    /**
     * Adds a new element to the list.
     * @param {string} text
     */
    push(text) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.FuzzyList_push(this.ptr, text);
    }
}
exports.FuzzyListRefMut = FuzzyListRefMut;

/**
 * With a Fuzzy List, you can implement a fuzzy searching algorithm. The list
 * stores all the items that can be searched for. With the `search` method you
 * can then execute the actual fuzzy search which returns a list of all the
 * elements found. This can be used to implement searching in a list of games.
 */
class FuzzyList extends FuzzyListRefMut {
    /**
     * @param {function(FuzzyList)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.FuzzyList_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Fuzzy List.
     * @return {FuzzyList}
     */
    static new() {
        const result = new FuzzyList(liveSplitCoreNative.FuzzyList_new());
        return result;
    }
}
exports.FuzzyList = FuzzyList;

/**
 * The general settings of the layout that apply to all components.
 */
class GeneralLayoutSettingsRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.GeneralLayoutSettingsRef = GeneralLayoutSettingsRef;

/**
 * The general settings of the layout that apply to all components.
 */
class GeneralLayoutSettingsRefMut extends GeneralLayoutSettingsRef {
}
exports.GeneralLayoutSettingsRefMut = GeneralLayoutSettingsRefMut;

/**
 * The general settings of the layout that apply to all components.
 */
class GeneralLayoutSettings extends GeneralLayoutSettingsRefMut {
    /**
     * @param {function(GeneralLayoutSettings)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.GeneralLayoutSettings_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a default general layout settings configuration.
     * @return {GeneralLayoutSettings}
     */
    static default() {
        const result = new GeneralLayoutSettings(liveSplitCoreNative.GeneralLayoutSettings_default());
        return result;
    }
}
exports.GeneralLayoutSettings = GeneralLayoutSettings;

/**
 * The Graph Component visualizes how far the current attempt has been ahead or
 * behind the chosen comparison throughout the whole attempt. All the
 * individual deltas are shown as points in a graph.
 */
class GraphComponentRef {
    /**
     * Encodes the component's state information as JSON.
     * @param {TimerRef} timer
     * @param {GeneralLayoutSettingsRef} layoutSettings
     * @return {any}
     */
    stateAsJson(timer, layoutSettings) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        if (ref.isNull(layoutSettings.ptr)) {
            throw "layoutSettings is disposed";
        }
        const result = liveSplitCoreNative.GraphComponent_state_as_json(this.ptr, timer.ptr, layoutSettings.ptr);
        return JSON.parse(result);
    }
    /**
     * Calculates the component's state based on the timer and layout settings
     * provided.
     * @param {TimerRef} timer
     * @param {GeneralLayoutSettingsRef} layoutSettings
     * @return {GraphComponentState}
     */
    state(timer, layoutSettings) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        if (ref.isNull(layoutSettings.ptr)) {
            throw "layoutSettings is disposed";
        }
        const result = new GraphComponentState(liveSplitCoreNative.GraphComponent_state(this.ptr, timer.ptr, layoutSettings.ptr));
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.GraphComponentRef = GraphComponentRef;

/**
 * The Graph Component visualizes how far the current attempt has been ahead or
 * behind the chosen comparison throughout the whole attempt. All the
 * individual deltas are shown as points in a graph.
 */
class GraphComponentRefMut extends GraphComponentRef {
}
exports.GraphComponentRefMut = GraphComponentRefMut;

/**
 * The Graph Component visualizes how far the current attempt has been ahead or
 * behind the chosen comparison throughout the whole attempt. All the
 * individual deltas are shown as points in a graph.
 */
class GraphComponent extends GraphComponentRefMut {
    /**
     * @param {function(GraphComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.GraphComponent_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Graph Component.
     * @return {GraphComponent}
     */
    static new() {
        const result = new GraphComponent(liveSplitCoreNative.GraphComponent_new());
        return result;
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     * @return {Component}
     */
    intoGeneric() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.GraphComponent_into_generic(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.GraphComponent = GraphComponent;

/**
 * The state object describes the information to visualize for this component.
 * All the coordinates are in the range 0..1.
 */
class GraphComponentStateRef {
    /**
     * Returns the amount of points to visualize. Connect all of them to visualize
     * the graph. If the live delta is active, the last point is to be interpreted
     * as a preview of the next split that is about to happen. Use the partial fill
     * color to visualize the region beneath that graph segment.
     * @return {number}
     */
    pointsLen() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.GraphComponentState_points_len(this.ptr);
        return result;
    }
    /**
     * Returns the x coordinate of the point specified. You may not provide an out
     * of bounds index.
     * @param {number} index
     * @return {number}
     */
    pointX(index) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.GraphComponentState_point_x(this.ptr, index);
        return result;
    }
    /**
     * Returns the y coordinate of the point specified. You may not provide an out
     * of bounds index.
     * @param {number} index
     * @return {number}
     */
    pointY(index) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.GraphComponentState_point_y(this.ptr, index);
        return result;
    }
    /**
     * Describes whether the segment the point specified is visualizing achieved a
     * new best segment time. Use the best segment color for it, in that case. You
     * may not provide an out of bounds index.
     * @param {number} index
     * @return {boolean}
     */
    pointIsBestSegment(index) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.GraphComponentState_point_is_best_segment(this.ptr, index);
        return result;
    }
    /**
     * Describes how many horizontal grid lines to visualize.
     * @return {number}
     */
    horizontalGridLinesLen() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.GraphComponentState_horizontal_grid_lines_len(this.ptr);
        return result;
    }
    /**
     * Accesses the y coordinate of the horizontal grid line specified. You may not
     * provide an out of bounds index.
     * @param {number} index
     * @return {number}
     */
    horizontalGridLine(index) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.GraphComponentState_horizontal_grid_line(this.ptr, index);
        return result;
    }
    /**
     * Describes how many vertical grid lines to visualize.
     * @return {number}
     */
    verticalGridLinesLen() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.GraphComponentState_vertical_grid_lines_len(this.ptr);
        return result;
    }
    /**
     * Accesses the x coordinate of the vertical grid line specified. You may not
     * provide an out of bounds index.
     * @param {number} index
     * @return {number}
     */
    verticalGridLine(index) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.GraphComponentState_vertical_grid_line(this.ptr, index);
        return result;
    }
    /**
     * The y coordinate that separates the region that shows the times that are
     * ahead of the comparison and those that are behind.
     * @return {number}
     */
    middle() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.GraphComponentState_middle(this.ptr);
        return result;
    }
    /**
     * If the live delta is active, the last point is to be interpreted as a
     * preview of the next split that is about to happen. Use the partial fill
     * color to visualize the region beneath that graph segment.
     * @return {boolean}
     */
    isLiveDeltaActive() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.GraphComponentState_is_live_delta_active(this.ptr);
        return result;
    }
    /**
     * Describes whether the graph is flipped vertically. For visualizing the
     * graph, this usually doesn't need to be interpreted, as this information is
     * entirely encoded into the other variables.
     * @return {boolean}
     */
    isFlipped() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.GraphComponentState_is_flipped(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.GraphComponentStateRef = GraphComponentStateRef;

/**
 * The state object describes the information to visualize for this component.
 * All the coordinates are in the range 0..1.
 */
class GraphComponentStateRefMut extends GraphComponentStateRef {
}
exports.GraphComponentStateRefMut = GraphComponentStateRefMut;

/**
 * The state object describes the information to visualize for this component.
 * All the coordinates are in the range 0..1.
 */
class GraphComponentState extends GraphComponentStateRefMut {
    /**
     * @param {function(GraphComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.GraphComponentState_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.GraphComponentState = GraphComponentState;

/**
 * The configuration to use for a Hotkey System. It describes with keys to use
 * as hotkeys for the different actions.
 */
class HotkeyConfigRef {
    /**
     * Encodes generic description of the settings available for the hotkey
     * configuration and their current values as JSON.
     * @return {any}
     */
    settingsDescriptionAsJson() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.HotkeyConfig_settings_description_as_json(this.ptr);
        return JSON.parse(result);
    }
    /**
     * Encodes the hotkey configuration as JSON.
     * @return {any}
     */
    asJson() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.HotkeyConfig_as_json(this.ptr);
        return JSON.parse(result);
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.HotkeyConfigRef = HotkeyConfigRef;

/**
 * The configuration to use for a Hotkey System. It describes with keys to use
 * as hotkeys for the different actions.
 */
class HotkeyConfigRefMut extends HotkeyConfigRef {
    /**
     * Sets a setting's value by its index to the given value.
     * 
     * false is returned if a hotkey is already in use by a different action.
     * 
     * This panics if the type of the value to be set is not compatible with the
     * type of the setting's value. A panic can also occur if the index of the
     * setting provided is out of bounds.
     * @param {number} index
     * @param {SettingValue} value
     * @return {boolean}
     */
    setValue(index, value) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(value.ptr)) {
            throw "value is disposed";
        }
        const result = liveSplitCoreNative.HotkeyConfig_set_value(this.ptr, index, value.ptr);
        value.ptr = ref.NULL;
        return result;
    }
}
exports.HotkeyConfigRefMut = HotkeyConfigRefMut;

/**
 * The configuration to use for a Hotkey System. It describes with keys to use
 * as hotkeys for the different actions.
 */
class HotkeyConfig extends HotkeyConfigRefMut {
    /**
     * @param {function(HotkeyConfig)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.HotkeyConfig_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Parses a hotkey configuration from the given JSON description. null is
     * returned if it couldn't be parsed.
     * @param {any} settings
     * @return {HotkeyConfig | null}
     */
    static parseJson(settings) {
        const result = new HotkeyConfig(liveSplitCoreNative.HotkeyConfig_parse_json(JSON.stringify(settings)));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
}
exports.HotkeyConfig = HotkeyConfig;

/**
 * With a Hotkey System the runner can use hotkeys on their keyboard to control
 * the Timer. The hotkeys are global, so the application doesn't need to be in
 * focus. The behavior of the hotkeys depends on the platform and is stubbed
 * out on platforms that don't support hotkeys. You can turn off a Hotkey
 * System temporarily. By default the Hotkey System is activated.
 */
class HotkeySystemRef {
    /**
     * Deactivates the Hotkey System. No hotkeys will go through until it gets
     * activated again. If it's already deactivated, nothing happens.
     */
    deactivate() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.HotkeySystem_deactivate(this.ptr);
    }
    /**
     * Activates a previously deactivated Hotkey System. If it's already
     * active, nothing happens.
     */
    activate() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.HotkeySystem_activate(this.ptr);
    }
    /**
     * Returns the hotkey configuration currently in use by the Hotkey System.
     * @return {HotkeyConfig}
     */
    config() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new HotkeyConfig(liveSplitCoreNative.HotkeySystem_config(this.ptr));
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.HotkeySystemRef = HotkeySystemRef;

/**
 * With a Hotkey System the runner can use hotkeys on their keyboard to control
 * the Timer. The hotkeys are global, so the application doesn't need to be in
 * focus. The behavior of the hotkeys depends on the platform and is stubbed
 * out on platforms that don't support hotkeys. You can turn off a Hotkey
 * System temporarily. By default the Hotkey System is activated.
 */
class HotkeySystemRefMut extends HotkeySystemRef {
    /**
     * Applies a new hotkey configuration to the Hotkey System. Each hotkey is
     * changed to the one specified in the configuration. This operation may fail
     * if you provide a hotkey configuration where a hotkey is used for multiple
     * operations. Returns false if the operation failed.
     * @param {HotkeyConfig} config
     * @return {boolean}
     */
    setConfig(config) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(config.ptr)) {
            throw "config is disposed";
        }
        const result = liveSplitCoreNative.HotkeySystem_set_config(this.ptr, config.ptr);
        config.ptr = ref.NULL;
        return result;
    }
}
exports.HotkeySystemRefMut = HotkeySystemRefMut;

/**
 * With a Hotkey System the runner can use hotkeys on their keyboard to control
 * the Timer. The hotkeys are global, so the application doesn't need to be in
 * focus. The behavior of the hotkeys depends on the platform and is stubbed
 * out on platforms that don't support hotkeys. You can turn off a Hotkey
 * System temporarily. By default the Hotkey System is activated.
 */
class HotkeySystem extends HotkeySystemRefMut {
    /**
     * @param {function(HotkeySystem)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.HotkeySystem_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Hotkey System for a Timer with the default hotkeys.
     * @param {SharedTimer} sharedTimer
     * @return {HotkeySystem | null}
     */
    static new(sharedTimer) {
        if (ref.isNull(sharedTimer.ptr)) {
            throw "sharedTimer is disposed";
        }
        const result = new HotkeySystem(liveSplitCoreNative.HotkeySystem_new(sharedTimer.ptr));
        sharedTimer.ptr = ref.NULL;
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * Creates a new Hotkey System for a Timer with a custom configuration for the
     * hotkeys.
     * @param {SharedTimer} sharedTimer
     * @param {HotkeyConfig} config
     * @return {HotkeySystem | null}
     */
    static withConfig(sharedTimer, config) {
        if (ref.isNull(sharedTimer.ptr)) {
            throw "sharedTimer is disposed";
        }
        if (ref.isNull(config.ptr)) {
            throw "config is disposed";
        }
        const result = new HotkeySystem(liveSplitCoreNative.HotkeySystem_with_config(sharedTimer.ptr, config.ptr));
        sharedTimer.ptr = ref.NULL;
        config.ptr = ref.NULL;
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
}
exports.HotkeySystem = HotkeySystem;

/**
 * A Layout allows you to combine multiple components together to visualize a
 * variety of information the runner is interested in.
 */
class LayoutRef {
    /**
     * Clones the layout.
     * @return {Layout}
     */
    clone() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Layout(liveSplitCoreNative.Layout_clone(this.ptr));
        return result;
    }
    /**
     * Encodes the settings of the layout as JSON.
     * @return {any}
     */
    settingsAsJson() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Layout_settings_as_json(this.ptr);
        return JSON.parse(result);
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.LayoutRef = LayoutRef;

/**
 * A Layout allows you to combine multiple components together to visualize a
 * variety of information the runner is interested in.
 */
class LayoutRefMut extends LayoutRef {
    /**
     * Calculates the layout's state based on the timer provided and encodes it as
     * JSON. You can use this to visualize all of the components of a layout.
     * @param {TimerRef} timer
     * @return {any}
     */
    stateAsJson(timer) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        const result = liveSplitCoreNative.Layout_state_as_json(this.ptr, timer.ptr);
        return JSON.parse(result);
    }
    /**
     * Adds a new component to the end of the layout.
     * @param {Component} component
     */
    push(component) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(component.ptr)) {
            throw "component is disposed";
        }
        liveSplitCoreNative.Layout_push(this.ptr, component.ptr);
        component.ptr = ref.NULL;
    }
    /**
     * Scrolls up all the components in the layout that can be scrolled up.
     */
    scrollUp() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Layout_scroll_up(this.ptr);
    }
    /**
     * Scrolls down all the components in the layout that can be scrolled down.
     */
    scrollDown() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Layout_scroll_down(this.ptr);
    }
    /**
     * Remounts all the components as if they were freshly initialized. Some
     * components may only provide some information whenever it changes or when
     * their state is first queried. Remounting returns this information again,
     * whenever the layout's state is queried the next time.
     */
    remount() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Layout_remount(this.ptr);
    }
}
exports.LayoutRefMut = LayoutRefMut;

/**
 * A Layout allows you to combine multiple components together to visualize a
 * variety of information the runner is interested in.
 */
class Layout extends LayoutRefMut {
    /**
     * @param {function(Layout)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.Layout_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new empty layout with no components.
     * @return {Layout}
     */
    static new() {
        const result = new Layout(liveSplitCoreNative.Layout_new());
        return result;
    }
    /**
     * Creates a new default layout that contains a default set of components
     * in order to provide a good default layout for runners. Which components
     * are provided by this and how they are configured may change in the
     * future.
     * @return {Layout}
     */
    static defaultLayout() {
        const result = new Layout(liveSplitCoreNative.Layout_default_layout());
        return result;
    }
    /**
     * Parses a layout from the given JSON description of its settings. null is
     * returned if it couldn't be parsed.
     * @param {any} settings
     * @return {Layout | null}
     */
    static parseJson(settings) {
        const result = new Layout(liveSplitCoreNative.Layout_parse_json(JSON.stringify(settings)));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * Parses a layout saved by the original LiveSplit. This is lossy, as not
     * everything can be converted completely. null is returned if it couldn't be
     * parsed at all.
     * @param {Buffer} data
     * @param {number} length
     * @return {Layout | null}
     */
    static parseOriginalLivesplit(data, length) {
        const result = new Layout(liveSplitCoreNative.Layout_parse_original_livesplit(data, length));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * @param {Int8Array} data
     * @return {Layout | null}
     */
    static parseOriginalLivesplitArray(data) {
        let buf = Buffer.from(data.buffer);
        if (data.byteLength !== data.buffer.byteLength) {
            buf = buf.slice(data.byteOffset, data.byteOffset + data.byteLength);
        }
        return Layout.parseOriginalLivesplit(buf, buf.byteLength);
    }
    /**
     * @param {string} text
     * @return {Layout | null}
     */
    static parseOriginalLivesplitString(text) {
        const data = new Buffer(text);
        return Layout.parseOriginalLivesplit(data, data.byteLength);
    }
}
exports.Layout = Layout;

/**
 * The Layout Editor allows modifying Layouts while ensuring all the different
 * invariants of the Layout objects are upheld no matter what kind of
 * operations are being applied. It provides the current state of the editor as
 * state objects that can be visualized by any kind of User Interface.
 */
class LayoutEditorRef {
    /**
     * Encodes the Layout Editor's state as JSON in order to visualize it.
     * @return {any}
     */
    stateAsJson() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.LayoutEditor_state_as_json(this.ptr);
        return JSON.parse(result);
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.LayoutEditorRef = LayoutEditorRef;

/**
 * The Layout Editor allows modifying Layouts while ensuring all the different
 * invariants of the Layout objects are upheld no matter what kind of
 * operations are being applied. It provides the current state of the editor as
 * state objects that can be visualized by any kind of User Interface.
 */
class LayoutEditorRefMut extends LayoutEditorRef {
    /**
     * Encodes the layout's state as JSON based on the timer provided. You can use
     * this to visualize all of the components of a layout, while it is still being
     * edited by the Layout Editor.
     * @param {TimerRef} timer
     * @return {any}
     */
    layoutStateAsJson(timer) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        const result = liveSplitCoreNative.LayoutEditor_layout_state_as_json(this.ptr, timer.ptr);
        return JSON.parse(result);
    }
    /**
     * Selects the component with the given index in order to modify its
     * settings. Only a single component is selected at any given time. You may
     * not provide an invalid index.
     * @param {number} index
     */
    select(index) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.LayoutEditor_select(this.ptr, index);
    }
    /**
     * Adds the component provided to the end of the layout. The newly added
     * component becomes the selected component.
     * @param {Component} component
     */
    addComponent(component) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(component.ptr)) {
            throw "component is disposed";
        }
        liveSplitCoreNative.LayoutEditor_add_component(this.ptr, component.ptr);
        component.ptr = ref.NULL;
    }
    /**
     * Removes the currently selected component, unless there's only one
     * component in the layout. The next component becomes the selected
     * component. If there's none, the previous component becomes the selected
     * component instead.
     */
    removeComponent() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.LayoutEditor_remove_component(this.ptr);
    }
    /**
     * Moves the selected component up, unless the first component is selected.
     */
    moveComponentUp() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.LayoutEditor_move_component_up(this.ptr);
    }
    /**
     * Moves the selected component down, unless the last component is
     * selected.
     */
    moveComponentDown() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.LayoutEditor_move_component_down(this.ptr);
    }
    /**
     * Moves the selected component to the index provided. You may not provide
     * an invalid index.
     * @param {number} dstIndex
     */
    moveComponent(dstIndex) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.LayoutEditor_move_component(this.ptr, dstIndex);
    }
    /**
     * Duplicates the currently selected component. The copy gets placed right
     * after the selected component and becomes the newly selected component.
     */
    duplicateComponent() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.LayoutEditor_duplicate_component(this.ptr);
    }
    /**
     * Sets a setting's value of the selected component by its setting index
     * to the given value.
     * 
     * This panics if the type of the value to be set is not compatible with
     * the type of the setting's value. A panic can also occur if the index of
     * the setting provided is out of bounds.
     * @param {number} index
     * @param {SettingValue} value
     */
    setComponentSettingsValue(index, value) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(value.ptr)) {
            throw "value is disposed";
        }
        liveSplitCoreNative.LayoutEditor_set_component_settings_value(this.ptr, index, value.ptr);
        value.ptr = ref.NULL;
    }
    /**
     * Sets a setting's value of the general settings by its setting index to
     * the given value.
     * 
     * This panics if the type of the value to be set is not compatible with
     * the type of the setting's value. A panic can also occur if the index of
     * the setting provided is out of bounds.
     * @param {number} index
     * @param {SettingValue} value
     */
    setGeneralSettingsValue(index, value) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(value.ptr)) {
            throw "value is disposed";
        }
        liveSplitCoreNative.LayoutEditor_set_general_settings_value(this.ptr, index, value.ptr);
        value.ptr = ref.NULL;
    }
}
exports.LayoutEditorRefMut = LayoutEditorRefMut;

/**
 * The Layout Editor allows modifying Layouts while ensuring all the different
 * invariants of the Layout objects are upheld no matter what kind of
 * operations are being applied. It provides the current state of the editor as
 * state objects that can be visualized by any kind of User Interface.
 */
class LayoutEditor extends LayoutEditorRefMut {
    /**
     * @param {function(LayoutEditor)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Layout Editor that modifies the Layout provided. Creation of
     * the Layout Editor fails when a Layout with no components is provided. In
     * that case null is returned instead.
     * @param {Layout} layout
     * @return {LayoutEditor | null}
     */
    static new(layout) {
        if (ref.isNull(layout.ptr)) {
            throw "layout is disposed";
        }
        const result = new LayoutEditor(liveSplitCoreNative.LayoutEditor_new(layout.ptr));
        layout.ptr = ref.NULL;
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * Closes the Layout Editor and gives back access to the modified Layout. In
     * case you want to implement a Cancel Button, just dispose the Layout object
     * you get here.
     * @return {Layout}
     */
    close() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Layout(liveSplitCoreNative.LayoutEditor_close(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.LayoutEditor = LayoutEditor;

/**
 * A run parsed by the Composite Parser. This contains the Run itself and
 * information about which parser parsed it.
 */
class ParseRunResultRef {
    /**
     * Returns true if the Run got parsed successfully. false is returned otherwise.
     * @return {boolean}
     */
    parsedSuccessfully() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.ParseRunResult_parsed_successfully(this.ptr);
        return result;
    }
    /**
     * Accesses the name of the Parser that parsed the Run. You may not call this
     * if the Run wasn't parsed successfully.
     * @return {string}
     */
    timerKind() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.ParseRunResult_timer_kind(this.ptr);
        return result;
    }
    /**
     * Checks whether the Parser parsed a generic timer. Since a generic timer can
     * have any name, it may clash with the specific timer formats that
     * livesplit-core supports. With this function you can determine if a generic
     * timer format was parsed, instead of one of the more specific timer formats.
     * @return {boolean}
     */
    isGenericTimer() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.ParseRunResult_is_generic_timer(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.ParseRunResultRef = ParseRunResultRef;

/**
 * A run parsed by the Composite Parser. This contains the Run itself and
 * information about which parser parsed it.
 */
class ParseRunResultRefMut extends ParseRunResultRef {
}
exports.ParseRunResultRefMut = ParseRunResultRefMut;

/**
 * A run parsed by the Composite Parser. This contains the Run itself and
 * information about which parser parsed it.
 */
class ParseRunResult extends ParseRunResultRefMut {
    /**
     * @param {function(ParseRunResult)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.ParseRunResult_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Moves the actual Run object out of the Result. You may not call this if the
     * Run wasn't parsed successfully.
     * @return {Run}
     */
    unwrap() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Run(liveSplitCoreNative.ParseRunResult_unwrap(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.ParseRunResult = ParseRunResult;

/**
 * The Possible Time Save Component is a component that shows how much time the
 * chosen comparison could've saved for the current segment, based on the Best
 * Segments. This component also allows showing the Total Possible Time Save
 * for the remainder of the current attempt.
 */
class PossibleTimeSaveComponentRef {
    /**
     * Encodes the component's state information as JSON.
     * @param {TimerRef} timer
     * @return {any}
     */
    stateAsJson(timer) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        const result = liveSplitCoreNative.PossibleTimeSaveComponent_state_as_json(this.ptr, timer.ptr);
        return JSON.parse(result);
    }
    /**
     * Calculates the component's state based on the timer provided.
     * @param {TimerRef} timer
     * @return {PossibleTimeSaveComponentState}
     */
    state(timer) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        const result = new PossibleTimeSaveComponentState(liveSplitCoreNative.PossibleTimeSaveComponent_state(this.ptr, timer.ptr));
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.PossibleTimeSaveComponentRef = PossibleTimeSaveComponentRef;

/**
 * The Possible Time Save Component is a component that shows how much time the
 * chosen comparison could've saved for the current segment, based on the Best
 * Segments. This component also allows showing the Total Possible Time Save
 * for the remainder of the current attempt.
 */
class PossibleTimeSaveComponentRefMut extends PossibleTimeSaveComponentRef {
}
exports.PossibleTimeSaveComponentRefMut = PossibleTimeSaveComponentRefMut;

/**
 * The Possible Time Save Component is a component that shows how much time the
 * chosen comparison could've saved for the current segment, based on the Best
 * Segments. This component also allows showing the Total Possible Time Save
 * for the remainder of the current attempt.
 */
class PossibleTimeSaveComponent extends PossibleTimeSaveComponentRefMut {
    /**
     * @param {function(PossibleTimeSaveComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.PossibleTimeSaveComponent_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Possible Time Save Component.
     * @return {PossibleTimeSaveComponent}
     */
    static new() {
        const result = new PossibleTimeSaveComponent(liveSplitCoreNative.PossibleTimeSaveComponent_new());
        return result;
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     * @return {Component}
     */
    intoGeneric() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.PossibleTimeSaveComponent_into_generic(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.PossibleTimeSaveComponent = PossibleTimeSaveComponent;

/**
 * The state object describes the information to visualize for this component.
 */
class PossibleTimeSaveComponentStateRef {
    /**
     * The label's text.
     * @return {string}
     */
    text() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.PossibleTimeSaveComponentState_text(this.ptr);
        return result;
    }
    /**
     * The current possible time save.
     * @return {string}
     */
    time() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.PossibleTimeSaveComponentState_time(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.PossibleTimeSaveComponentStateRef = PossibleTimeSaveComponentStateRef;

/**
 * The state object describes the information to visualize for this component.
 */
class PossibleTimeSaveComponentStateRefMut extends PossibleTimeSaveComponentStateRef {
}
exports.PossibleTimeSaveComponentStateRefMut = PossibleTimeSaveComponentStateRefMut;

/**
 * The state object describes the information to visualize for this component.
 */
class PossibleTimeSaveComponentState extends PossibleTimeSaveComponentStateRefMut {
    /**
     * @param {function(PossibleTimeSaveComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.PossibleTimeSaveComponentState_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.PossibleTimeSaveComponentState = PossibleTimeSaveComponentState;

/**
 * Describes a potential clean up that could be applied. You can query a
 * message describing the details of this potential clean up. A potential clean
 * up can then be turned into an actual clean up in order to apply it to the
 * Run.
 */
class PotentialCleanUpRef {
    /**
     * Accesses the message describing the potential clean up that can be applied
     * to a Run.
     * @return {string}
     */
    message() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.PotentialCleanUp_message(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.PotentialCleanUpRef = PotentialCleanUpRef;

/**
 * Describes a potential clean up that could be applied. You can query a
 * message describing the details of this potential clean up. A potential clean
 * up can then be turned into an actual clean up in order to apply it to the
 * Run.
 */
class PotentialCleanUpRefMut extends PotentialCleanUpRef {
}
exports.PotentialCleanUpRefMut = PotentialCleanUpRefMut;

/**
 * Describes a potential clean up that could be applied. You can query a
 * message describing the details of this potential clean up. A potential clean
 * up can then be turned into an actual clean up in order to apply it to the
 * Run.
 */
class PotentialCleanUp extends PotentialCleanUpRefMut {
    /**
     * @param {function(PotentialCleanUp)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.PotentialCleanUp_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.PotentialCleanUp = PotentialCleanUp;

/**
 * The Previous Segment Component is a component that shows how much time was
 * saved or lost during the previous segment based on the chosen comparison.
 * Additionally, the potential time save for the previous segment can be
 * displayed. This component switches to a `Live Segment` view that shows
 * active time loss whenever the runner is losing time on the current segment.
 */
class PreviousSegmentComponentRef {
    /**
     * Encodes the component's state information as JSON.
     * @param {TimerRef} timer
     * @param {GeneralLayoutSettingsRef} layoutSettings
     * @return {any}
     */
    stateAsJson(timer, layoutSettings) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        if (ref.isNull(layoutSettings.ptr)) {
            throw "layoutSettings is disposed";
        }
        const result = liveSplitCoreNative.PreviousSegmentComponent_state_as_json(this.ptr, timer.ptr, layoutSettings.ptr);
        return JSON.parse(result);
    }
    /**
     * Calculates the component's state based on the timer and the layout
     * settings provided.
     * @param {TimerRef} timer
     * @param {GeneralLayoutSettingsRef} layoutSettings
     * @return {PreviousSegmentComponentState}
     */
    state(timer, layoutSettings) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        if (ref.isNull(layoutSettings.ptr)) {
            throw "layoutSettings is disposed";
        }
        const result = new PreviousSegmentComponentState(liveSplitCoreNative.PreviousSegmentComponent_state(this.ptr, timer.ptr, layoutSettings.ptr));
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.PreviousSegmentComponentRef = PreviousSegmentComponentRef;

/**
 * The Previous Segment Component is a component that shows how much time was
 * saved or lost during the previous segment based on the chosen comparison.
 * Additionally, the potential time save for the previous segment can be
 * displayed. This component switches to a `Live Segment` view that shows
 * active time loss whenever the runner is losing time on the current segment.
 */
class PreviousSegmentComponentRefMut extends PreviousSegmentComponentRef {
}
exports.PreviousSegmentComponentRefMut = PreviousSegmentComponentRefMut;

/**
 * The Previous Segment Component is a component that shows how much time was
 * saved or lost during the previous segment based on the chosen comparison.
 * Additionally, the potential time save for the previous segment can be
 * displayed. This component switches to a `Live Segment` view that shows
 * active time loss whenever the runner is losing time on the current segment.
 */
class PreviousSegmentComponent extends PreviousSegmentComponentRefMut {
    /**
     * @param {function(PreviousSegmentComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.PreviousSegmentComponent_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Previous Segment Component.
     * @return {PreviousSegmentComponent}
     */
    static new() {
        const result = new PreviousSegmentComponent(liveSplitCoreNative.PreviousSegmentComponent_new());
        return result;
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     * @return {Component}
     */
    intoGeneric() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.PreviousSegmentComponent_into_generic(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.PreviousSegmentComponent = PreviousSegmentComponent;

/**
 * The state object describes the information to visualize for this component.
 */
class PreviousSegmentComponentStateRef {
    /**
     * The label's text.
     * @return {string}
     */
    text() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.PreviousSegmentComponentState_text(this.ptr);
        return result;
    }
    /**
     * The delta (and possibly the possible time save).
     * @return {string}
     */
    time() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.PreviousSegmentComponentState_time(this.ptr);
        return result;
    }
    /**
     * The semantic coloring information the delta time carries.
     * @return {string}
     */
    semanticColor() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.PreviousSegmentComponentState_semantic_color(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.PreviousSegmentComponentStateRef = PreviousSegmentComponentStateRef;

/**
 * The state object describes the information to visualize for this component.
 */
class PreviousSegmentComponentStateRefMut extends PreviousSegmentComponentStateRef {
}
exports.PreviousSegmentComponentStateRefMut = PreviousSegmentComponentStateRefMut;

/**
 * The state object describes the information to visualize for this component.
 */
class PreviousSegmentComponentState extends PreviousSegmentComponentStateRefMut {
    /**
     * @param {function(PreviousSegmentComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.PreviousSegmentComponentState_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.PreviousSegmentComponentState = PreviousSegmentComponentState;

/**
 * A Run stores the split times for a specific game and category of a runner.
 */
class RunRef {
    /**
     * Clones the Run object.
     * @return {Run}
     */
    clone() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Run(liveSplitCoreNative.Run_clone(this.ptr));
        return result;
    }
    /**
     * Accesses the name of the game this Run is for.
     * @return {string}
     */
    gameName() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_game_name(this.ptr);
        return result;
    }
    /**
     * Accesses the Data URL storing the game icon's data. If there is no game
     * icon, this returns an empty string instead of a URL.
     * @return {string}
     */
    gameIcon() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_game_icon(this.ptr);
        return result;
    }
    /**
     * Accesses the name of the category this Run is for.
     * @return {string}
     */
    categoryName() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_category_name(this.ptr);
        return result;
    }
    /**
     * Returns a file name (without the extension) suitable for this Run that
     * is built the following way:
     * 
     * Game Name - Category Name
     * 
     * If either is empty, the dash is omitted. Special characters that cause
     * problems in file names are also omitted. If an extended category name is
     * used, the variables of the category are appended in a parenthesis.
     * @param {boolean} useExtendedCategoryName
     * @return {string}
     */
    extendedFileName(useExtendedCategoryName) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_extended_file_name(this.ptr, useExtendedCategoryName);
        return result;
    }
    /**
     * Returns a name suitable for this Run that is built the following way:
     * 
     * Game Name - Category Name
     * 
     * If either is empty, the dash is omitted. If an extended category name is
     * used, the variables of the category are appended in a parenthesis.
     * @param {boolean} useExtendedCategoryName
     * @return {string}
     */
    extendedName(useExtendedCategoryName) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_extended_name(this.ptr, useExtendedCategoryName);
        return result;
    }
    /**
     * Returns an extended category name that possibly includes the region,
     * platform and variables, depending on the arguments provided. An extended
     * category name may look like this:
     * 
     * Any% (No Tuner, JPN, Wii Emulator)
     * @param {boolean} showRegion
     * @param {boolean} showPlatform
     * @param {boolean} showVariables
     * @return {string}
     */
    extendedCategoryName(showRegion, showPlatform, showVariables) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_extended_category_name(this.ptr, showRegion, showPlatform, showVariables);
        return result;
    }
    /**
     * Returns the amount of runs that have been attempted with these splits.
     * @return {number}
     */
    attemptCount() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_attempt_count(this.ptr);
        return result;
    }
    /**
     * Accesses additional metadata of this Run, like the platform and region
     * of the game.
     * @return {RunMetadataRef}
     */
    metadata() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new RunMetadataRef(liveSplitCoreNative.Run_metadata(this.ptr));
        return result;
    }
    /**
     * Accesses the time an attempt of this Run should start at.
     * @return {TimeSpanRef}
     */
    offset() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TimeSpanRef(liveSplitCoreNative.Run_offset(this.ptr));
        return result;
    }
    /**
     * Returns the amount of segments stored in this Run.
     * @return {number}
     */
    len() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_len(this.ptr);
        return result;
    }
    /**
     * Returns whether the Run has been modified and should be saved so that the
     * changes don't get lost.
     * @return {boolean}
     */
    hasBeenModified() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_has_been_modified(this.ptr);
        return result;
    }
    /**
     * Accesses a certain segment of this Run. You may not provide an out of bounds
     * index.
     * @param {number} index
     * @return {SegmentRef}
     */
    segment(index) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new SegmentRef(liveSplitCoreNative.Run_segment(this.ptr, index));
        return result;
    }
    /**
     * Returns the amount attempt history elements are stored in this Run.
     * @return {number}
     */
    attemptHistoryLen() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_attempt_history_len(this.ptr);
        return result;
    }
    /**
     * Accesses the an attempt history element by its index. This does not store
     * the actual segment times, just the overall attempt information. Information
     * about the individual segments is stored within each segment. You may not
     * provide an out of bounds index.
     * @param {number} index
     * @return {AttemptRef}
     */
    attemptHistoryIndex(index) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new AttemptRef(liveSplitCoreNative.Run_attempt_history_index(this.ptr, index));
        return result;
    }
    /**
     * Saves a Run as a LiveSplit splits file (*.lss). If the run is actively in
     * use by a timer, use the appropriate method on the timer instead, in order to
     * properly save the current attempt as well.
     * @return {string}
     */
    saveAsLss() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_save_as_lss(this.ptr);
        return result;
    }
    /**
     * Returns the amount of custom comparisons stored in this Run.
     * @return {number}
     */
    customComparisonsLen() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_custom_comparisons_len(this.ptr);
        return result;
    }
    /**
     * Accesses a custom comparison stored in this Run by its index. This includes
     * `Personal Best` but excludes all the other Comparison Generators. You may
     * not provide an out of bounds index.
     * @param {number} index
     * @return {string}
     */
    customComparison(index) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_custom_comparison(this.ptr, index);
        return result;
    }
    /**
     * Accesses the Auto Splitter Settings that are encoded as XML.
     * @return {string}
     */
    autoSplitterSettings() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_auto_splitter_settings(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.RunRef = RunRef;

/**
 * A Run stores the split times for a specific game and category of a runner.
 */
class RunRefMut extends RunRef {
    /**
     * Pushes the segment provided to the end of the list of segments of this Run.
     * @param {Segment} segment
     */
    pushSegment(segment) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(segment.ptr)) {
            throw "segment is disposed";
        }
        liveSplitCoreNative.Run_push_segment(this.ptr, segment.ptr);
        segment.ptr = ref.NULL;
    }
    /**
     * Sets the name of the game this Run is for.
     * @param {string} game
     */
    setGameName(game) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Run_set_game_name(this.ptr, game);
    }
    /**
     * Sets the name of the category this Run is for.
     * @param {string} category
     */
    setCategoryName(category) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Run_set_category_name(this.ptr, category);
    }
    /**
     * Marks the Run as modified, so that it is known that there are changes
     * that should be saved.
     */
    markAsModified() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Run_mark_as_modified(this.ptr);
    }
}
exports.RunRefMut = RunRefMut;

/**
 * A Run stores the split times for a specific game and category of a runner.
 */
class Run extends RunRefMut {
    /**
     * @param {function(Run)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.Run_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Run object with no segments.
     * @return {Run}
     */
    static new() {
        const result = new Run(liveSplitCoreNative.Run_new());
        return result;
    }
    /**
     * Attempts to parse a splits file from an array by invoking the corresponding
     * parser for the file format detected. A path to the splits file can be
     * provided, which helps saving the splits file again later. Additionally you
     * need to specify if additional files, like external images are allowed to be
     * loaded. If you are using livesplit-core in a server-like environment, set
     * this to false. Only client-side applications should set this to true.
     * @param {Buffer} data
     * @param {number} length
     * @param {string} path
     * @param {boolean} loadFiles
     * @return {ParseRunResult}
     */
    static parse(data, length, path, loadFiles) {
        const result = new ParseRunResult(liveSplitCoreNative.Run_parse(data, length, path, loadFiles));
        return result;
    }
    /**
     * Attempts to parse a splits file from a file by invoking the corresponding
     * parser for the file format detected. A path to the splits file can be
     * provided, which helps saving the splits file again later. Additionally you
     * need to specify if additional files, like external images are allowed to be
     * loaded. If you are using livesplit-core in a server-like environment, set
     * this to false. Only client-side applications should set this to true. On
     * Unix you pass a file descriptor to this function. On Windows you pass a file
     * handle to this function. The file descriptor / handle does not get closed.
     * @param {number} handle
     * @param {string} path
     * @param {boolean} loadFiles
     * @return {ParseRunResult}
     */
    static parseFileHandle(handle, path, loadFiles) {
        const result = new ParseRunResult(liveSplitCoreNative.Run_parse_file_handle(handle, path, loadFiles));
        return result;
    }
    /**
     * @param {Int8Array} data
     * @param {string} path
     * @param {boolean} loadFiles
     * @return {ParseRunResult}
     */
    static parseArray(data, path, loadFiles) {
        let buf = Buffer.from(data.buffer);
        if (data.byteLength !== data.buffer.byteLength) {
            buf = buf.slice(data.byteOffset, data.byteOffset + data.byteLength);
        }
        return Run.parse(buf, buf.byteLength, path, loadFiles);
    }
    /**
     * @param {string | Buffer | number} file
     * @param {string} path
     * @param {boolean} loadFiles
     * @return {ParseRunResult}
     */
    static parseFile(file, path, loadFiles) {
        const data = fs.readFileSync(file);
        return Run.parse(data, data.byteLength, path, loadFiles);
    }
    /**
     * @param {string} text
     * @param {string} path
     * @param {boolean} loadFiles
     * @return {ParseRunResult}
     */
    static parseString(text, path, loadFiles) {
        const data = new Buffer(text);
        return Run.parse(data, data.byteLength, path, loadFiles);
    }
}
exports.Run = Run;

/**
 * The Run Editor allows modifying Runs while ensuring that all the different
 * invariants of the Run objects are upheld no matter what kind of operations
 * are being applied to the Run. It provides the current state of the editor as
 * state objects that can be visualized by any kind of User Interface.
 */
class RunEditorRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.RunEditorRef = RunEditorRef;

/**
 * The Run Editor allows modifying Runs while ensuring that all the different
 * invariants of the Run objects are upheld no matter what kind of operations
 * are being applied to the Run. It provides the current state of the editor as
 * state objects that can be visualized by any kind of User Interface.
 */
class RunEditorRefMut extends RunEditorRef {
    /**
     * Calculates the Run Editor's state and encodes it as
     * JSON in order to visualize it.
     * @return {any}
     */
    stateAsJson() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_state_as_json(this.ptr);
        return JSON.parse(result);
    }
    /**
     * Selects a different timing method for being modified.
     * @param {number} method
     */
    selectTimingMethod(method) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_select_timing_method(this.ptr, method);
    }
    /**
     * Unselects the segment with the given index. If it's not selected or the
     * index is out of bounds, nothing happens. The segment is not unselected,
     * when it is the only segment that is selected. If the active segment is
     * unselected, the most recently selected segment remaining becomes the
     * active segment.
     * @param {number} index
     */
    unselect(index) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_unselect(this.ptr, index);
    }
    /**
     * In addition to the segments that are already selected, the segment with
     * the given index is being selected. The segment chosen also becomes the
     * active segment.
     * 
     * This panics if the index of the segment provided is out of bounds.
     * @param {number} index
     */
    selectAdditionally(index) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_select_additionally(this.ptr, index);
    }
    /**
     * Selects the segment with the given index. All other segments are
     * unselected. The segment chosen also becomes the active segment.
     * 
     * This panics if the index of the segment provided is out of bounds.
     * @param {number} index
     */
    selectOnly(index) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_select_only(this.ptr, index);
    }
    /**
     * Sets the name of the game.
     * @param {string} game
     */
    setGameName(game) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_set_game_name(this.ptr, game);
    }
    /**
     * Sets the name of the category.
     * @param {string} category
     */
    setCategoryName(category) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_set_category_name(this.ptr, category);
    }
    /**
     * Parses and sets the timer offset from the string provided. The timer
     * offset specifies the time, the timer starts at when starting a new
     * attempt.
     * @param {string} offset
     * @return {boolean}
     */
    parseAndSetOffset(offset) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_parse_and_set_offset(this.ptr, offset);
        return result;
    }
    /**
     * Parses and sets the attempt count from the string provided. Changing
     * this has no affect on the attempt history or the segment history. This
     * number is mostly just a visual number for the runner.
     * @param {string} attempts
     * @return {boolean}
     */
    parseAndSetAttemptCount(attempts) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_parse_and_set_attempt_count(this.ptr, attempts);
        return result;
    }
    /**
     * Sets the game's icon.
     * @param {Buffer} data
     * @param {number} length
     */
    setGameIcon(data, length) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_set_game_icon(this.ptr, data, length);
    }
    /**
     * Removes the game's icon.
     */
    removeGameIcon() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_remove_game_icon(this.ptr);
    }
    /**
     * Sets the speedrun.com Run ID of the run. You need to ensure that the
     * record on speedrun.com matches up with the Personal Best of this run.
     * This may be empty if there's no association.
     * @param {string} name
     */
    setRunId(name) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_set_run_id(this.ptr, name);
    }
    /**
     * Sets the name of the region this game is from. This may be empty if it's
     * not specified.
     * @param {string} name
     */
    setRegionName(name) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_set_region_name(this.ptr, name);
    }
    /**
     * Sets the name of the platform this game is run on. This may be empty if
     * it's not specified.
     * @param {string} name
     */
    setPlatformName(name) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_set_platform_name(this.ptr, name);
    }
    /**
     * Specifies whether this speedrun is done on an emulator. Keep in mind
     * that false may also mean that this information is simply not known.
     * @param {boolean} usesEmulator
     */
    setEmulatorUsage(usesEmulator) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_set_emulator_usage(this.ptr, usesEmulator);
    }
    /**
     * Sets the variable with the name specified to the value specified. A
     * variable is an arbitrary key value pair storing additional information
     * about the category. An example of this may be whether Amiibos are used
     * in this category. If the variable doesn't exist yet, it is being
     * inserted.
     * @param {string} name
     * @param {string} value
     */
    setVariable(name, value) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_set_variable(this.ptr, name, value);
    }
    /**
     * Removes the variable with the name specified.
     * @param {string} name
     */
    removeVariable(name) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_remove_variable(this.ptr, name);
    }
    /**
     * Resets all the Metadata Information.
     */
    clearMetadata() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_clear_metadata(this.ptr);
    }
    /**
     * Inserts a new empty segment above the active segment and adjusts the
     * Run's history information accordingly. The newly created segment is then
     * the only selected segment and also the active segment.
     */
    insertSegmentAbove() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_insert_segment_above(this.ptr);
    }
    /**
     * Inserts a new empty segment below the active segment and adjusts the
     * Run's history information accordingly. The newly created segment is then
     * the only selected segment and also the active segment.
     */
    insertSegmentBelow() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_insert_segment_below(this.ptr);
    }
    /**
     * Removes all the selected segments, unless all of them are selected. The
     * run's information is automatically adjusted properly. The next
     * not-to-be-removed segment after the active segment becomes the new
     * active segment. If there's none, then the next not-to-be-removed segment
     * before the active segment, becomes the new active segment.
     */
    removeSegments() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_remove_segments(this.ptr);
    }
    /**
     * Moves all the selected segments up, unless the first segment is
     * selected. The run's information is automatically adjusted properly. The
     * active segment stays the active segment.
     */
    moveSegmentsUp() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_move_segments_up(this.ptr);
    }
    /**
     * Moves all the selected segments down, unless the last segment is
     * selected. The run's information is automatically adjusted properly. The
     * active segment stays the active segment.
     */
    moveSegmentsDown() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_move_segments_down(this.ptr);
    }
    /**
     * Sets the icon of the active segment.
     * @param {Buffer} data
     * @param {number} length
     */
    activeSetIcon(data, length) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_active_set_icon(this.ptr, data, length);
    }
    /**
     * Removes the icon of the active segment.
     */
    activeRemoveIcon() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_active_remove_icon(this.ptr);
    }
    /**
     * Sets the name of the active segment.
     * @param {string} name
     */
    activeSetName(name) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_active_set_name(this.ptr, name);
    }
    /**
     * Parses a split time from a string and sets it for the active segment with
     * the chosen timing method.
     * @param {string} time
     * @return {boolean}
     */
    activeParseAndSetSplitTime(time) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_active_parse_and_set_split_time(this.ptr, time);
        return result;
    }
    /**
     * Parses a segment time from a string and sets it for the active segment with
     * the chosen timing method.
     * @param {string} time
     * @return {boolean}
     */
    activeParseAndSetSegmentTime(time) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_active_parse_and_set_segment_time(this.ptr, time);
        return result;
    }
    /**
     * Parses a best segment time from a string and sets it for the active segment
     * with the chosen timing method.
     * @param {string} time
     * @return {boolean}
     */
    activeParseAndSetBestSegmentTime(time) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_active_parse_and_set_best_segment_time(this.ptr, time);
        return result;
    }
    /**
     * Parses a comparison time for the provided comparison and sets it for the
     * active active segment with the chosen timing method.
     * @param {string} comparison
     * @param {string} time
     * @return {boolean}
     */
    activeParseAndSetComparisonTime(comparison, time) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_active_parse_and_set_comparison_time(this.ptr, comparison, time);
        return result;
    }
    /**
     * Adds a new custom comparison. It can't be added if it starts with
     * `[Race]` or already exists.
     * @param {string} comparison
     * @return {boolean}
     */
    addComparison(comparison) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_add_comparison(this.ptr, comparison);
        return result;
    }
    /**
     * Imports the Personal Best from the provided run as a comparison. The
     * comparison can't be added if its name starts with `[Race]` or it already
     * exists.
     * @param {RunRef} run
     * @param {string} comparison
     * @return {boolean}
     */
    importComparison(run, comparison) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(run.ptr)) {
            throw "run is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_import_comparison(this.ptr, run.ptr, comparison);
        return result;
    }
    /**
     * Removes the chosen custom comparison. You can't remove a Comparison
     * Generator's Comparison or the Personal Best.
     * @param {string} comparison
     */
    removeComparison(comparison) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_remove_comparison(this.ptr, comparison);
    }
    /**
     * Renames a comparison. The comparison can't be renamed if the new name of
     * the comparison starts with `[Race]` or it already exists.
     * @param {string} oldName
     * @param {string} newName
     * @return {boolean}
     */
    renameComparison(oldName, newName) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_rename_comparison(this.ptr, oldName, newName);
        return result;
    }
    /**
     * Reorders the custom comparisons by moving the comparison with the source
     * index specified to the destination index specified. Returns false if one
     * of the indices is invalid. The indices are based on the comparison names of
     * the Run Editor's state.
     * @param {number} srcIndex
     * @param {number} dstIndex
     * @return {boolean}
     */
    moveComparison(srcIndex, dstIndex) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_move_comparison(this.ptr, srcIndex, dstIndex);
        return result;
    }
    /**
     * Clears out the Attempt History and the Segment Histories of all the
     * segments.
     */
    clearHistory() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_clear_history(this.ptr);
    }
    /**
     * Clears out the Attempt History, the Segment Histories, all the times,
     * sets the Attempt Count to 0 and clears the speedrun.com run id
     * association. All Custom Comparisons other than `Personal Best` are
     * deleted as well.
     */
    clearTimes() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_clear_times(this.ptr);
    }
    /**
     * Creates a Sum of Best Cleaner which allows you to interactively remove
     * potential issues in the segment history that lead to an inaccurate Sum
     * of Best. If you skip a split, whenever you will do the next split, the
     * combined segment time might be faster than the sum of the individual
     * best segments. The Sum of Best Cleaner will point out all of these and
     * allows you to delete them individually if any of them seem wrong.
     * @return {SumOfBestCleaner}
     */
    cleanSumOfBest() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new SumOfBestCleaner(liveSplitCoreNative.RunEditor_clean_sum_of_best(this.ptr));
        return result;
    }
    /**
     * @param {Int8Array} data
     */
    setGameIconFromArray(data) {
        let buf = Buffer.from(data.buffer);
        if (data.byteLength !== data.buffer.byteLength) {
            buf = buf.slice(data.byteOffset, data.byteOffset + data.byteLength);
        }
        this.setGameIcon(buf, buf.byteLength);
    }
    /**
     * @param {Int8Array} data
     */
    activeSetIconFromArray(data) {
        let buf = Buffer.from(data.buffer);
        if (data.byteLength !== data.buffer.byteLength) {
            buf = buf.slice(data.byteOffset, data.byteOffset + data.byteLength);
        }
        this.activeSetIconFromArray(buf, buf.byteLength);
    }
}
exports.RunEditorRefMut = RunEditorRefMut;

/**
 * The Run Editor allows modifying Runs while ensuring that all the different
 * invariants of the Run objects are upheld no matter what kind of operations
 * are being applied to the Run. It provides the current state of the editor as
 * state objects that can be visualized by any kind of User Interface.
 */
class RunEditor extends RunEditorRefMut {
    /**
     * @param {function(RunEditor)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Run Editor that modifies the Run provided. Creation of the Run
     * Editor fails when a Run with no segments is provided. If a Run object with
     * no segments is provided, the Run Editor creation fails and null is
     * returned.
     * @param {Run} run
     * @return {RunEditor | null}
     */
    static new(run) {
        if (ref.isNull(run.ptr)) {
            throw "run is disposed";
        }
        const result = new RunEditor(liveSplitCoreNative.RunEditor_new(run.ptr));
        run.ptr = ref.NULL;
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * Closes the Run Editor and gives back access to the modified Run object. In
     * case you want to implement a Cancel Button, just dispose the Run object you
     * get here.
     * @return {Run}
     */
    close() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Run(liveSplitCoreNative.RunEditor_close(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.RunEditor = RunEditor;

/**
 * The Run Metadata stores additional information about a run, like the
 * platform and region of the game. All of this information is optional.
 */
class RunMetadataRef {
    /**
     * Accesses the speedrun.com Run ID of the run. This Run ID specify which
     * Record on speedrun.com this run is associated with. This should be
     * changed once the Personal Best doesn't match up with that record
     * anymore. This may be empty if there's no association.
     * @return {string}
     */
    runId() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunMetadata_run_id(this.ptr);
        return result;
    }
    /**
     * Accesses the name of the platform this game is run on. This may be empty
     * if it's not specified.
     * @return {string}
     */
    platformName() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunMetadata_platform_name(this.ptr);
        return result;
    }
    /**
     * Returns true if this speedrun is done on an emulator. However false
     * may also indicate that this information is simply not known.
     * @return {boolean}
     */
    usesEmulator() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunMetadata_uses_emulator(this.ptr);
        return result;
    }
    /**
     * Accesses the name of the region this game is from. This may be empty if
     * it's not specified.
     * @return {string}
     */
    regionName() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunMetadata_region_name(this.ptr);
        return result;
    }
    /**
     * Returns an iterator iterating over all the variables and their values
     * that have been specified.
     * @return {RunMetadataVariablesIter}
     */
    variables() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new RunMetadataVariablesIter(liveSplitCoreNative.RunMetadata_variables(this.ptr));
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.RunMetadataRef = RunMetadataRef;

/**
 * The Run Metadata stores additional information about a run, like the
 * platform and region of the game. All of this information is optional.
 */
class RunMetadataRefMut extends RunMetadataRef {
}
exports.RunMetadataRefMut = RunMetadataRefMut;

/**
 * The Run Metadata stores additional information about a run, like the
 * platform and region of the game. All of this information is optional.
 */
class RunMetadata extends RunMetadataRefMut {
    /**
     * @param {function(RunMetadata)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            this.ptr = ref.NULL;
        }
    }
}
exports.RunMetadata = RunMetadata;

/**
 * A Run Metadata variable is an arbitrary key value pair storing additional
 * information about the category. An example of this may be whether Amiibos
 * are used in the category.
 */
class RunMetadataVariableRef {
    /**
     * Accesses the name of this Run Metadata variable.
     * @return {string}
     */
    name() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunMetadataVariable_name(this.ptr);
        return result;
    }
    /**
     * Accesses the value of this Run Metadata variable.
     * @return {string}
     */
    value() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunMetadataVariable_value(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.RunMetadataVariableRef = RunMetadataVariableRef;

/**
 * A Run Metadata variable is an arbitrary key value pair storing additional
 * information about the category. An example of this may be whether Amiibos
 * are used in the category.
 */
class RunMetadataVariableRefMut extends RunMetadataVariableRef {
}
exports.RunMetadataVariableRefMut = RunMetadataVariableRefMut;

/**
 * A Run Metadata variable is an arbitrary key value pair storing additional
 * information about the category. An example of this may be whether Amiibos
 * are used in the category.
 */
class RunMetadataVariable extends RunMetadataVariableRefMut {
    /**
     * @param {function(RunMetadataVariable)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.RunMetadataVariable_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.RunMetadataVariable = RunMetadataVariable;

/**
 * An iterator iterating over all the Run Metadata variables and their values
 * that have been specified.
 */
class RunMetadataVariablesIterRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.RunMetadataVariablesIterRef = RunMetadataVariablesIterRef;

/**
 * An iterator iterating over all the Run Metadata variables and their values
 * that have been specified.
 */
class RunMetadataVariablesIterRefMut extends RunMetadataVariablesIterRef {
    /**
     * Accesses the next Run Metadata variable. Returns null if there are no more
     * variables.
     * @return {RunMetadataVariableRef | null}
     */
    next() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new RunMetadataVariableRef(liveSplitCoreNative.RunMetadataVariablesIter_next(this.ptr));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
}
exports.RunMetadataVariablesIterRefMut = RunMetadataVariablesIterRefMut;

/**
 * An iterator iterating over all the Run Metadata variables and their values
 * that have been specified.
 */
class RunMetadataVariablesIter extends RunMetadataVariablesIterRefMut {
    /**
     * @param {function(RunMetadataVariablesIter)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.RunMetadataVariablesIter_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.RunMetadataVariablesIter = RunMetadataVariablesIter;

/**
 * A Segment describes a point in a speedrun that is suitable for storing a
 * split time. This stores the name of that segment, an icon, the split times
 * of different comparisons, and a history of segment times.
 */
class SegmentRef {
    /**
     * Accesses the name of the segment.
     * @return {string}
     */
    name() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Segment_name(this.ptr);
        return result;
    }
    /**
     * Accesses the icon of the segment encoded as a Data URL storing the image's
     * data. If the image's data is empty, this returns an empty string instead of
     * a URL.
     * @return {string}
     */
    icon() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Segment_icon(this.ptr);
        return result;
    }
    /**
     * Accesses the specified comparison's time. If there's none for this
     * comparison, an empty time is being returned (but not stored in the
     * segment).
     * @param {string} comparison
     * @return {TimeRef}
     */
    comparison(comparison) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TimeRef(liveSplitCoreNative.Segment_comparison(this.ptr, comparison));
        return result;
    }
    /**
     * Accesses the split time of the Personal Best for this segment. If it
     * doesn't exist, an empty time is returned.
     * @return {TimeRef}
     */
    personalBestSplitTime() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TimeRef(liveSplitCoreNative.Segment_personal_best_split_time(this.ptr));
        return result;
    }
    /**
     * Accesses the Best Segment Time.
     * @return {TimeRef}
     */
    bestSegmentTime() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TimeRef(liveSplitCoreNative.Segment_best_segment_time(this.ptr));
        return result;
    }
    /**
     * Accesses the Segment History of this segment.
     * @return {SegmentHistoryRef}
     */
    segmentHistory() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new SegmentHistoryRef(liveSplitCoreNative.Segment_segment_history(this.ptr));
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.SegmentRef = SegmentRef;

/**
 * A Segment describes a point in a speedrun that is suitable for storing a
 * split time. This stores the name of that segment, an icon, the split times
 * of different comparisons, and a history of segment times.
 */
class SegmentRefMut extends SegmentRef {
}
exports.SegmentRefMut = SegmentRefMut;

/**
 * A Segment describes a point in a speedrun that is suitable for storing a
 * split time. This stores the name of that segment, an icon, the split times
 * of different comparisons, and a history of segment times.
 */
class Segment extends SegmentRefMut {
    /**
     * @param {function(Segment)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.Segment_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Segment with the name given.
     * @param {string} name
     * @return {Segment}
     */
    static new(name) {
        const result = new Segment(liveSplitCoreNative.Segment_new(name));
        return result;
    }
}
exports.Segment = Segment;

/**
 * Stores the segment times achieved for a certain segment. Each segment is
 * tagged with an index. Only segment times with an index larger than 0 are
 * considered times actually achieved by the runner, while the others are
 * artifacts of route changes and similar algorithmic changes.
 */
class SegmentHistoryRef {
    /**
     * Iterates over all the segment times and their indices.
     * @return {SegmentHistoryIter}
     */
    iter() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new SegmentHistoryIter(liveSplitCoreNative.SegmentHistory_iter(this.ptr));
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.SegmentHistoryRef = SegmentHistoryRef;

/**
 * Stores the segment times achieved for a certain segment. Each segment is
 * tagged with an index. Only segment times with an index larger than 0 are
 * considered times actually achieved by the runner, while the others are
 * artifacts of route changes and similar algorithmic changes.
 */
class SegmentHistoryRefMut extends SegmentHistoryRef {
}
exports.SegmentHistoryRefMut = SegmentHistoryRefMut;

/**
 * Stores the segment times achieved for a certain segment. Each segment is
 * tagged with an index. Only segment times with an index larger than 0 are
 * considered times actually achieved by the runner, while the others are
 * artifacts of route changes and similar algorithmic changes.
 */
class SegmentHistory extends SegmentHistoryRefMut {
    /**
     * @param {function(SegmentHistory)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            this.ptr = ref.NULL;
        }
    }
}
exports.SegmentHistory = SegmentHistory;

/**
 * A segment time achieved for a segment. It is tagged with an index. Only
 * segment times with an index larger than 0 are considered times actually
 * achieved by the runner, while the others are artifacts of route changes and
 * similar algorithmic changes.
 */
class SegmentHistoryElementRef {
    /**
     * Accesses the index of the segment history element.
     * @return {number}
     */
    index() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.SegmentHistoryElement_index(this.ptr);
        return result;
    }
    /**
     * Accesses the segment time of the segment history element.
     * @return {TimeRef}
     */
    time() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TimeRef(liveSplitCoreNative.SegmentHistoryElement_time(this.ptr));
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.SegmentHistoryElementRef = SegmentHistoryElementRef;

/**
 * A segment time achieved for a segment. It is tagged with an index. Only
 * segment times with an index larger than 0 are considered times actually
 * achieved by the runner, while the others are artifacts of route changes and
 * similar algorithmic changes.
 */
class SegmentHistoryElementRefMut extends SegmentHistoryElementRef {
}
exports.SegmentHistoryElementRefMut = SegmentHistoryElementRefMut;

/**
 * A segment time achieved for a segment. It is tagged with an index. Only
 * segment times with an index larger than 0 are considered times actually
 * achieved by the runner, while the others are artifacts of route changes and
 * similar algorithmic changes.
 */
class SegmentHistoryElement extends SegmentHistoryElementRefMut {
    /**
     * @param {function(SegmentHistoryElement)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            this.ptr = ref.NULL;
        }
    }
}
exports.SegmentHistoryElement = SegmentHistoryElement;

/**
 * Iterates over all the segment times of a segment and their indices.
 */
class SegmentHistoryIterRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.SegmentHistoryIterRef = SegmentHistoryIterRef;

/**
 * Iterates over all the segment times of a segment and their indices.
 */
class SegmentHistoryIterRefMut extends SegmentHistoryIterRef {
    /**
     * Accesses the next Segment History element. Returns null if there are no
     * more elements.
     * @return {SegmentHistoryElementRef | null}
     */
    next() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new SegmentHistoryElementRef(liveSplitCoreNative.SegmentHistoryIter_next(this.ptr));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
}
exports.SegmentHistoryIterRefMut = SegmentHistoryIterRefMut;

/**
 * Iterates over all the segment times of a segment and their indices.
 */
class SegmentHistoryIter extends SegmentHistoryIterRefMut {
    /**
     * @param {function(SegmentHistoryIter)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.SegmentHistoryIter_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.SegmentHistoryIter = SegmentHistoryIter;

/**
 * The Separator Component is a simple component that only serves to render
 * separators between components.
 */
class SeparatorComponentRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.SeparatorComponentRef = SeparatorComponentRef;

/**
 * The Separator Component is a simple component that only serves to render
 * separators between components.
 */
class SeparatorComponentRefMut extends SeparatorComponentRef {
}
exports.SeparatorComponentRefMut = SeparatorComponentRefMut;

/**
 * The Separator Component is a simple component that only serves to render
 * separators between components.
 */
class SeparatorComponent extends SeparatorComponentRefMut {
    /**
     * @param {function(SeparatorComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.SeparatorComponent_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Separator Component.
     * @return {SeparatorComponent}
     */
    static new() {
        const result = new SeparatorComponent(liveSplitCoreNative.SeparatorComponent_new());
        return result;
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     * @return {Component}
     */
    intoGeneric() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.SeparatorComponent_into_generic(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.SeparatorComponent = SeparatorComponent;

/**
 * Describes a setting's value. Such a value can be of a variety of different
 * types.
 */
class SettingValueRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.SettingValueRef = SettingValueRef;

/**
 * Describes a setting's value. Such a value can be of a variety of different
 * types.
 */
class SettingValueRefMut extends SettingValueRef {
}
exports.SettingValueRefMut = SettingValueRefMut;

/**
 * Describes a setting's value. Such a value can be of a variety of different
 * types.
 */
class SettingValue extends SettingValueRefMut {
    /**
     * @param {function(SettingValue)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.SettingValue_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new setting value from a boolean value.
     * @param {boolean} value
     * @return {SettingValue}
     */
    static fromBool(value) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_bool(value));
        return result;
    }
    /**
     * Creates a new setting value from an unsigned integer.
     * @param {number} value
     * @return {SettingValue}
     */
    static fromUint(value) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_uint(value));
        return result;
    }
    /**
     * Creates a new setting value from a signed integer.
     * @param {number} value
     * @return {SettingValue}
     */
    static fromInt(value) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_int(value));
        return result;
    }
    /**
     * Creates a new setting value from a string.
     * @param {string} value
     * @return {SettingValue}
     */
    static fromString(value) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_string(value));
        return result;
    }
    /**
     * Creates a new setting value from a string that has the type `optional string`.
     * @param {string} value
     * @return {SettingValue}
     */
    static fromOptionalString(value) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_optional_string(value));
        return result;
    }
    /**
     * Creates a new empty setting value that has the type `optional string`.
     * @return {SettingValue}
     */
    static fromOptionalEmptyString() {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_optional_empty_string());
        return result;
    }
    /**
     * Creates a new setting value from a floating point number.
     * @param {number} value
     * @return {SettingValue}
     */
    static fromFloat(value) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_float(value));
        return result;
    }
    /**
     * Creates a new setting value from an accuracy name. If it doesn't match a
     * known accuracy, null is returned.
     * @param {string} value
     * @return {SettingValue | null}
     */
    static fromAccuracy(value) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_accuracy(value));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * Creates a new setting value from a digits format name. If it doesn't match a
     * known digits format, null is returned.
     * @param {string} value
     * @return {SettingValue | null}
     */
    static fromDigitsFormat(value) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_digits_format(value));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * Creates a new setting value from a timing method name with the type
     * `optional timing method`. If it doesn't match a known timing method, null
     * is returned.
     * @param {string} value
     * @return {SettingValue | null}
     */
    static fromOptionalTimingMethod(value) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_optional_timing_method(value));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * Creates a new empty setting value with the type `optional timing method`.
     * @return {SettingValue}
     */
    static fromOptionalEmptyTimingMethod() {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_optional_empty_timing_method());
        return result;
    }
    /**
     * Creates a new setting value from the color provided as RGBA.
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @param {number} a
     * @return {SettingValue}
     */
    static fromColor(r, g, b, a) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_color(r, g, b, a));
        return result;
    }
    /**
     * Creates a new setting value from the color provided as RGBA with the type
     * `optional color`.
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @param {number} a
     * @return {SettingValue}
     */
    static fromOptionalColor(r, g, b, a) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_optional_color(r, g, b, a));
        return result;
    }
    /**
     * Creates a new empty setting value with the type `optional color`.
     * @return {SettingValue}
     */
    static fromOptionalEmptyColor() {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_optional_empty_color());
        return result;
    }
    /**
     * Creates a new setting value that is a transparent gradient.
     * @return {SettingValue}
     */
    static fromTransparentGradient() {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_transparent_gradient());
        return result;
    }
    /**
     * Creates a new setting value from the vertical gradient provided as two RGBA colors.
     * @param {number} r1
     * @param {number} g1
     * @param {number} b1
     * @param {number} a1
     * @param {number} r2
     * @param {number} g2
     * @param {number} b2
     * @param {number} a2
     * @return {SettingValue}
     */
    static fromVerticalGradient(r1, g1, b1, a1, r2, g2, b2, a2) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_vertical_gradient(r1, g1, b1, a1, r2, g2, b2, a2));
        return result;
    }
    /**
     * Creates a new setting value from the horizontal gradient provided as two RGBA colors.
     * @param {number} r1
     * @param {number} g1
     * @param {number} b1
     * @param {number} a1
     * @param {number} r2
     * @param {number} g2
     * @param {number} b2
     * @param {number} a2
     * @return {SettingValue}
     */
    static fromHorizontalGradient(r1, g1, b1, a1, r2, g2, b2, a2) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_horizontal_gradient(r1, g1, b1, a1, r2, g2, b2, a2));
        return result;
    }
    /**
     * Creates a new setting value from the alternating gradient provided as two RGBA colors.
     * @param {number} r1
     * @param {number} g1
     * @param {number} b1
     * @param {number} a1
     * @param {number} r2
     * @param {number} g2
     * @param {number} b2
     * @param {number} a2
     * @return {SettingValue}
     */
    static fromAlternatingGradient(r1, g1, b1, a1, r2, g2, b2, a2) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_alternating_gradient(r1, g1, b1, a1, r2, g2, b2, a2));
        return result;
    }
    /**
     * Creates a new setting value from the alignment name provided. If it doesn't
     * match a known alignment, null is returned.
     * @param {string} value
     * @return {SettingValue | null}
     */
    static fromAlignment(value) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_alignment(value));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * Creates a new setting value from the column start with name provided. If it
     * doesn't match a known column start with, null is returned.
     * @param {string} value
     * @return {SettingValue | null}
     */
    static fromColumnStartWith(value) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_column_start_with(value));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * Creates a new setting value from the column update with name provided. If it
     * doesn't match a known column update with, null is returned.
     * @param {string} value
     * @return {SettingValue | null}
     */
    static fromColumnUpdateWith(value) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_column_update_with(value));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * Creates a new setting value from the column update trigger. If it doesn't
     * match a known column update trigger, null is returned.
     * @param {string} value
     * @return {SettingValue | null}
     */
    static fromColumnUpdateTrigger(value) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_column_update_trigger(value));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
}
exports.SettingValue = SettingValue;

/**
 * A Shared Timer that can be used to share a single timer object with multiple
 * owners.
 */
class SharedTimerRef {
    /**
     * Creates a new shared timer handle that shares the same timer. The inner
     * timer object only gets disposed when the final handle gets disposed.
     * @return {SharedTimer}
     */
    share() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new SharedTimer(liveSplitCoreNative.SharedTimer_share(this.ptr));
        return result;
    }
    /**
     * Requests read access to the timer that is being shared. This blocks the
     * thread as long as there is an active write lock. Dispose the read lock when
     * you are done using the timer.
     * @return {TimerReadLock}
     */
    read() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TimerReadLock(liveSplitCoreNative.SharedTimer_read(this.ptr));
        return result;
    }
    /**
     * Requests write access to the timer that is being shared. This blocks the
     * thread as long as there are active write or read locks. Dispose the write
     * lock when you are done using the timer.
     * @return {TimerWriteLock}
     */
    write() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TimerWriteLock(liveSplitCoreNative.SharedTimer_write(this.ptr));
        return result;
    }
    /**
     * Replaces the timer that is being shared by the timer provided. This blocks
     * the thread as long as there are active write or read locks. Everyone who is
     * sharing the old timer will share the provided timer after successful
     * completion.
     * @param {Timer} timer
     */
    replaceInner(timer) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        liveSplitCoreNative.SharedTimer_replace_inner(this.ptr, timer.ptr);
        timer.ptr = ref.NULL;
    }
    /**
     * @param {function(TimerRef)} action
     */
    readWith(action) {
        return this.read().with(function (lock) {
            return action(lock.timer());
        });
    }
    /**
     * @param {function(TimerRefMut)} action
     */
    writeWith(action) {
        return this.write().with(function (lock) {
            return action(lock.timer());
        });
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.SharedTimerRef = SharedTimerRef;

/**
 * A Shared Timer that can be used to share a single timer object with multiple
 * owners.
 */
class SharedTimerRefMut extends SharedTimerRef {
}
exports.SharedTimerRefMut = SharedTimerRefMut;

/**
 * A Shared Timer that can be used to share a single timer object with multiple
 * owners.
 */
class SharedTimer extends SharedTimerRefMut {
    /**
     * @param {function(SharedTimer)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.SharedTimer_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.SharedTimer = SharedTimer;

/**
 * The state object that describes a single segment's information to visualize.
 */
class SplitComponentStateRef {
    /**
     * The amount of columns to visualize for the segment with the specified index.
     * The columns are specified from right to left. You may not provide an out of
     * bounds index. The amount of columns to visualize may differ from segment to
     * segment.
     * @param {number} index
     * @return {number}
     */
    columnsLen(index) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.SplitComponentState_columns_len(this.ptr, index);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.SplitComponentStateRef = SplitComponentStateRef;

/**
 * The state object that describes a single segment's information to visualize.
 */
class SplitComponentStateRefMut extends SplitComponentStateRef {
}
exports.SplitComponentStateRefMut = SplitComponentStateRefMut;

/**
 * The state object that describes a single segment's information to visualize.
 */
class SplitComponentState extends SplitComponentStateRefMut {
    /**
     * @param {function(SplitComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            this.ptr = ref.NULL;
        }
    }
}
exports.SplitComponentState = SplitComponentState;

/**
 * The Splits Component is the main component for visualizing all the split
 * times. Each segment is shown in a tabular fashion showing the segment icon,
 * segment name, the delta compared to the chosen comparison, and the split
 * time. The list provides scrolling functionality, so not every segment needs
 * to be shown all the time.
 */
class SplitsComponentRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.SplitsComponentRef = SplitsComponentRef;

/**
 * The Splits Component is the main component for visualizing all the split
 * times. Each segment is shown in a tabular fashion showing the segment icon,
 * segment name, the delta compared to the chosen comparison, and the split
 * time. The list provides scrolling functionality, so not every segment needs
 * to be shown all the time.
 */
class SplitsComponentRefMut extends SplitsComponentRef {
    /**
     * Encodes the component's state information as JSON.
     * @param {TimerRef} timer
     * @param {GeneralLayoutSettingsRef} layoutSettings
     * @return {any}
     */
    stateAsJson(timer, layoutSettings) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        if (ref.isNull(layoutSettings.ptr)) {
            throw "layoutSettings is disposed";
        }
        const result = liveSplitCoreNative.SplitsComponent_state_as_json(this.ptr, timer.ptr, layoutSettings.ptr);
        return JSON.parse(result);
    }
    /**
     * Calculates the component's state based on the timer and layout settings
     * provided.
     * @param {TimerRef} timer
     * @param {GeneralLayoutSettingsRef} layoutSettings
     * @return {SplitsComponentState}
     */
    state(timer, layoutSettings) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        if (ref.isNull(layoutSettings.ptr)) {
            throw "layoutSettings is disposed";
        }
        const result = new SplitsComponentState(liveSplitCoreNative.SplitsComponent_state(this.ptr, timer.ptr, layoutSettings.ptr));
        return result;
    }
    /**
     * Scrolls up the window of the segments that are shown. Doesn't move the
     * scroll window if it reaches the top of the segments.
     */
    scrollUp() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.SplitsComponent_scroll_up(this.ptr);
    }
    /**
     * Scrolls down the window of the segments that are shown. Doesn't move the
     * scroll window if it reaches the bottom of the segments.
     */
    scrollDown() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.SplitsComponent_scroll_down(this.ptr);
    }
    /**
     * The amount of segments to show in the list at any given time. If this is
     * set to 0, all the segments are shown. If this is set to a number lower
     * than the total amount of segments, only a certain window of all the
     * segments is shown. This window can scroll up or down.
     * @param {number} count
     */
    setVisualSplitCount(count) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.SplitsComponent_set_visual_split_count(this.ptr, count);
    }
    /**
     * If there's more segments than segments that are shown, the window
     * showing the segments automatically scrolls up and down when the current
     * segment changes. This count determines the minimum number of future
     * segments to be shown in this scrolling window when it automatically
     * scrolls.
     * @param {number} count
     */
    setSplitPreviewCount(count) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.SplitsComponent_set_split_preview_count(this.ptr, count);
    }
    /**
     * If not every segment is shown in the scrolling window of segments, then
     * this determines whether the final segment is always to be shown, as it
     * contains valuable information about the total duration of the chosen
     * comparison, which is often the runner's Personal Best.
     * @param {boolean} alwaysShowLastSplit
     */
    setAlwaysShowLastSplit(alwaysShowLastSplit) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.SplitsComponent_set_always_show_last_split(this.ptr, alwaysShowLastSplit);
    }
    /**
     * If the last segment is to always be shown, this determines whether to
     * show a more pronounced separator in front of the last segment, if it is
     * not directly adjacent to the segment shown right before it in the
     * scrolling window.
     * @param {boolean} separatorLastSplit
     */
    setSeparatorLastSplit(separatorLastSplit) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.SplitsComponent_set_separator_last_split(this.ptr, separatorLastSplit);
    }
}
exports.SplitsComponentRefMut = SplitsComponentRefMut;

/**
 * The Splits Component is the main component for visualizing all the split
 * times. Each segment is shown in a tabular fashion showing the segment icon,
 * segment name, the delta compared to the chosen comparison, and the split
 * time. The list provides scrolling functionality, so not every segment needs
 * to be shown all the time.
 */
class SplitsComponent extends SplitsComponentRefMut {
    /**
     * @param {function(SplitsComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.SplitsComponent_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Splits Component.
     * @return {SplitsComponent}
     */
    static new() {
        const result = new SplitsComponent(liveSplitCoreNative.SplitsComponent_new());
        return result;
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     * @return {Component}
     */
    intoGeneric() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.SplitsComponent_into_generic(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.SplitsComponent = SplitsComponent;

/**
 * The state object that describes a single segment's information to visualize.
 */
class SplitsComponentStateRef {
    /**
     * Describes whether a more pronounced separator should be shown in front of
     * the last segment provided.
     * @return {boolean}
     */
    finalSeparatorShown() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.SplitsComponentState_final_separator_shown(this.ptr);
        return result;
    }
    /**
     * Returns the amount of segments to visualize.
     * @return {number}
     */
    len() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.SplitsComponentState_len(this.ptr);
        return result;
    }
    /**
     * Returns the amount of icon changes that happened in this state object.
     * @return {number}
     */
    iconChangeCount() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.SplitsComponentState_icon_change_count(this.ptr);
        return result;
    }
    /**
     * Accesses the index of the segment of the icon change with the specified
     * index. This is based on the index in the run, not on the index of the
     * SplitState in the State object. The corresponding index is the index field
     * of the SplitState object. You may not provide an out of bounds index.
     * @param {number} iconChangeIndex
     * @return {number}
     */
    iconChangeSegmentIndex(iconChangeIndex) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.SplitsComponentState_icon_change_segment_index(this.ptr, iconChangeIndex);
        return result;
    }
    /**
     * The segment's icon encoded as a Data URL of the icon change with the
     * specified index. The String itself may be empty. This indicates that there
     * is no icon. You may not provide an out of bounds index.
     * @param {number} iconChangeIndex
     * @return {string}
     */
    iconChangeIcon(iconChangeIndex) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.SplitsComponentState_icon_change_icon(this.ptr, iconChangeIndex);
        return result;
    }
    /**
     * The name of the segment with the specified index. You may not provide an out
     * of bounds index.
     * @param {number} index
     * @return {string}
     */
    name(index) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.SplitsComponentState_name(this.ptr, index);
        return result;
    }
    /**
     * The column's value to show for the split and column with the specified
     * index. The columns are specified from right to left. You may not provide an
     * out of bounds index.
     * @param {number} index
     * @param {number} columnIndex
     * @return {string}
     */
    columnValue(index, columnIndex) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.SplitsComponentState_column_value(this.ptr, index, columnIndex);
        return result;
    }
    /**
     * The semantic coloring information the column's value carries of the segment
     * and column with the specified index. The columns are specified from right to
     * left. You may not provide an out of bounds index.
     * @param {number} index
     * @param {number} columnIndex
     * @return {string}
     */
    columnSemanticColor(index, columnIndex) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.SplitsComponentState_column_semantic_color(this.ptr, index, columnIndex);
        return result;
    }
    /**
     * Describes if the segment with the specified index is the segment the active
     * attempt is currently on.
     * @param {number} index
     * @return {boolean}
     */
    isCurrentSplit(index) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.SplitsComponentState_is_current_split(this.ptr, index);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.SplitsComponentStateRef = SplitsComponentStateRef;

/**
 * The state object that describes a single segment's information to visualize.
 */
class SplitsComponentStateRefMut extends SplitsComponentStateRef {
}
exports.SplitsComponentStateRefMut = SplitsComponentStateRefMut;

/**
 * The state object that describes a single segment's information to visualize.
 */
class SplitsComponentState extends SplitsComponentStateRefMut {
    /**
     * @param {function(SplitsComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.SplitsComponentState_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.SplitsComponentState = SplitsComponentState;

/**
 * A Sum of Best Cleaner allows you to interactively remove potential issues in
 * the Segment History that lead to an inaccurate Sum of Best. If you skip a
 * split, whenever you get to the next split, the combined segment time might
 * be faster than the sum of the individual best segments. The Sum of Best
 * Cleaner will point out all of occurrences of this and allows you to delete
 * them individually if any of them seem wrong.
 */
class SumOfBestCleanerRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.SumOfBestCleanerRef = SumOfBestCleanerRef;

/**
 * A Sum of Best Cleaner allows you to interactively remove potential issues in
 * the Segment History that lead to an inaccurate Sum of Best. If you skip a
 * split, whenever you get to the next split, the combined segment time might
 * be faster than the sum of the individual best segments. The Sum of Best
 * Cleaner will point out all of occurrences of this and allows you to delete
 * them individually if any of them seem wrong.
 */
class SumOfBestCleanerRefMut extends SumOfBestCleanerRef {
    /**
     * Returns the next potential clean up. If there are no more potential
     * clean ups, null is returned.
     * @return {PotentialCleanUp | null}
     */
    nextPotentialCleanUp() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new PotentialCleanUp(liveSplitCoreNative.SumOfBestCleaner_next_potential_clean_up(this.ptr));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * Applies a clean up to the Run.
     * @param {PotentialCleanUp} cleanUp
     */
    apply(cleanUp) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(cleanUp.ptr)) {
            throw "cleanUp is disposed";
        }
        liveSplitCoreNative.SumOfBestCleaner_apply(this.ptr, cleanUp.ptr);
        cleanUp.ptr = ref.NULL;
    }
}
exports.SumOfBestCleanerRefMut = SumOfBestCleanerRefMut;

/**
 * A Sum of Best Cleaner allows you to interactively remove potential issues in
 * the Segment History that lead to an inaccurate Sum of Best. If you skip a
 * split, whenever you get to the next split, the combined segment time might
 * be faster than the sum of the individual best segments. The Sum of Best
 * Cleaner will point out all of occurrences of this and allows you to delete
 * them individually if any of them seem wrong.
 */
class SumOfBestCleaner extends SumOfBestCleanerRefMut {
    /**
     * @param {function(SumOfBestCleaner)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.SumOfBestCleaner_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.SumOfBestCleaner = SumOfBestCleaner;

/**
 * The Sum of Best Segments Component shows the fastest possible time to
 * complete a run of this category, based on information collected from all the
 * previous attempts. This often matches up with the sum of the best segment
 * times of all the segments, but that may not always be the case, as skipped
 * segments may introduce combined segments that may be faster than the actual
 * sum of their best segment times. The name is therefore a bit misleading, but
 * sticks around for historical reasons.
 */
class SumOfBestComponentRef {
    /**
     * Encodes the component's state information as JSON.
     * @param {TimerRef} timer
     * @return {any}
     */
    stateAsJson(timer) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        const result = liveSplitCoreNative.SumOfBestComponent_state_as_json(this.ptr, timer.ptr);
        return JSON.parse(result);
    }
    /**
     * Calculates the component's state based on the timer provided.
     * @param {TimerRef} timer
     * @return {SumOfBestComponentState}
     */
    state(timer) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        const result = new SumOfBestComponentState(liveSplitCoreNative.SumOfBestComponent_state(this.ptr, timer.ptr));
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.SumOfBestComponentRef = SumOfBestComponentRef;

/**
 * The Sum of Best Segments Component shows the fastest possible time to
 * complete a run of this category, based on information collected from all the
 * previous attempts. This often matches up with the sum of the best segment
 * times of all the segments, but that may not always be the case, as skipped
 * segments may introduce combined segments that may be faster than the actual
 * sum of their best segment times. The name is therefore a bit misleading, but
 * sticks around for historical reasons.
 */
class SumOfBestComponentRefMut extends SumOfBestComponentRef {
}
exports.SumOfBestComponentRefMut = SumOfBestComponentRefMut;

/**
 * The Sum of Best Segments Component shows the fastest possible time to
 * complete a run of this category, based on information collected from all the
 * previous attempts. This often matches up with the sum of the best segment
 * times of all the segments, but that may not always be the case, as skipped
 * segments may introduce combined segments that may be faster than the actual
 * sum of their best segment times. The name is therefore a bit misleading, but
 * sticks around for historical reasons.
 */
class SumOfBestComponent extends SumOfBestComponentRefMut {
    /**
     * @param {function(SumOfBestComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.SumOfBestComponent_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Sum of Best Segments Component.
     * @return {SumOfBestComponent}
     */
    static new() {
        const result = new SumOfBestComponent(liveSplitCoreNative.SumOfBestComponent_new());
        return result;
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     * @return {Component}
     */
    intoGeneric() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.SumOfBestComponent_into_generic(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.SumOfBestComponent = SumOfBestComponent;

/**
 * The state object describes the information to visualize for this component.
 */
class SumOfBestComponentStateRef {
    /**
     * The label's text.
     * @return {string}
     */
    text() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.SumOfBestComponentState_text(this.ptr);
        return result;
    }
    /**
     * The sum of best segments.
     * @return {string}
     */
    time() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.SumOfBestComponentState_time(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.SumOfBestComponentStateRef = SumOfBestComponentStateRef;

/**
 * The state object describes the information to visualize for this component.
 */
class SumOfBestComponentStateRefMut extends SumOfBestComponentStateRef {
}
exports.SumOfBestComponentStateRefMut = SumOfBestComponentStateRefMut;

/**
 * The state object describes the information to visualize for this component.
 */
class SumOfBestComponentState extends SumOfBestComponentStateRefMut {
    /**
     * @param {function(SumOfBestComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.SumOfBestComponentState_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.SumOfBestComponentState = SumOfBestComponentState;

/**
 * The Text Component simply visualizes any given text. This can either be a
 * single centered text, or split up into a left and right text, which is
 * suitable for a situation where you have a label and a value.
 */
class TextComponentRef {
    /**
     * Encodes the component's state information as JSON.
     * @return {any}
     */
    stateAsJson() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TextComponent_state_as_json(this.ptr);
        return JSON.parse(result);
    }
    /**
     * Calculates the component's state.
     * @return {TextComponentState}
     */
    state() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TextComponentState(liveSplitCoreNative.TextComponent_state(this.ptr));
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.TextComponentRef = TextComponentRef;

/**
 * The Text Component simply visualizes any given text. This can either be a
 * single centered text, or split up into a left and right text, which is
 * suitable for a situation where you have a label and a value.
 */
class TextComponentRefMut extends TextComponentRef {
    /**
     * Sets the centered text. If the current mode is split, it is switched to
     * centered mode.
     * @param {string} text
     */
    setCenter(text) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.TextComponent_set_center(this.ptr, text);
    }
    /**
     * Sets the left text. If the current mode is centered, it is switched to
     * split mode, with the right text being empty.
     * @param {string} text
     */
    setLeft(text) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.TextComponent_set_left(this.ptr, text);
    }
    /**
     * Sets the right text. If the current mode is centered, it is switched to
     * split mode, with the left text being empty.
     * @param {string} text
     */
    setRight(text) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.TextComponent_set_right(this.ptr, text);
    }
}
exports.TextComponentRefMut = TextComponentRefMut;

/**
 * The Text Component simply visualizes any given text. This can either be a
 * single centered text, or split up into a left and right text, which is
 * suitable for a situation where you have a label and a value.
 */
class TextComponent extends TextComponentRefMut {
    /**
     * @param {function(TextComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.TextComponent_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Text Component.
     * @return {TextComponent}
     */
    static new() {
        const result = new TextComponent(liveSplitCoreNative.TextComponent_new());
        return result;
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     * @return {Component}
     */
    intoGeneric() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.TextComponent_into_generic(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.TextComponent = TextComponent;

/**
 * The state object describes the information to visualize for this component.
 */
class TextComponentStateRef {
    /**
     * Accesses the left part of the text. If the text isn't split up, an empty
     * string is returned instead.
     * @return {string}
     */
    left() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TextComponentState_left(this.ptr);
        return result;
    }
    /**
     * Accesses the right part of the text. If the text isn't split up, an empty
     * string is returned instead.
     * @return {string}
     */
    right() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TextComponentState_right(this.ptr);
        return result;
    }
    /**
     * Accesses the centered text. If the text isn't centered, an empty string is
     * returned instead.
     * @return {string}
     */
    center() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TextComponentState_center(this.ptr);
        return result;
    }
    /**
     * Returns whether the text is split up into a left and right part.
     * @return {boolean}
     */
    isSplit() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TextComponentState_is_split(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.TextComponentStateRef = TextComponentStateRef;

/**
 * The state object describes the information to visualize for this component.
 */
class TextComponentStateRefMut extends TextComponentStateRef {
}
exports.TextComponentStateRefMut = TextComponentStateRefMut;

/**
 * The state object describes the information to visualize for this component.
 */
class TextComponentState extends TextComponentStateRefMut {
    /**
     * @param {function(TextComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.TextComponentState_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.TextComponentState = TextComponentState;

/**
 * A time that can store a Real Time and a Game Time. Both of them are
 * optional.
 */
class TimeRef {
    /**
     * Clones the time.
     * @return {Time}
     */
    clone() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Time(liveSplitCoreNative.Time_clone(this.ptr));
        return result;
    }
    /**
     * The Real Time value. This may be null if this time has no Real Time value.
     * @return {TimeSpanRef | null}
     */
    realTime() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TimeSpanRef(liveSplitCoreNative.Time_real_time(this.ptr));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * The Game Time value. This may be null if this time has no Game Time value.
     * @return {TimeSpanRef | null}
     */
    gameTime() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TimeSpanRef(liveSplitCoreNative.Time_game_time(this.ptr));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * Access the time's value for the timing method specified.
     * @param {number} timingMethod
     * @return {TimeSpanRef | null}
     */
    index(timingMethod) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TimeSpanRef(liveSplitCoreNative.Time_index(this.ptr, timingMethod));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.TimeRef = TimeRef;

/**
 * A time that can store a Real Time and a Game Time. Both of them are
 * optional.
 */
class TimeRefMut extends TimeRef {
}
exports.TimeRefMut = TimeRefMut;

/**
 * A time that can store a Real Time and a Game Time. Both of them are
 * optional.
 */
class Time extends TimeRefMut {
    /**
     * @param {function(Time)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.Time_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.Time = Time;

/**
 * A Time Span represents a certain span of time.
 */
class TimeSpanRef {
    /**
     * Clones the Time Span.
     * @return {TimeSpan}
     */
    clone() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TimeSpan(liveSplitCoreNative.TimeSpan_clone(this.ptr));
        return result;
    }
    /**
     * Returns the total amount of seconds (including decimals) this Time Span
     * represents.
     * @return {number}
     */
    totalSeconds() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TimeSpan_total_seconds(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.TimeSpanRef = TimeSpanRef;

/**
 * A Time Span represents a certain span of time.
 */
class TimeSpanRefMut extends TimeSpanRef {
}
exports.TimeSpanRefMut = TimeSpanRefMut;

/**
 * A Time Span represents a certain span of time.
 */
class TimeSpan extends TimeSpanRefMut {
    /**
     * @param {function(TimeSpan)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.TimeSpan_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Time Span from a given amount of seconds.
     * @param {number} seconds
     * @return {TimeSpan}
     */
    static fromSeconds(seconds) {
        const result = new TimeSpan(liveSplitCoreNative.TimeSpan_from_seconds(seconds));
        return result;
    }
    /**
     * Parses a Time Span from a string. Returns null if the time can't be
     * parsed.
     * @param {string} text
     * @return {TimeSpan | null}
     */
    static parse(text) {
        const result = new TimeSpan(liveSplitCoreNative.TimeSpan_parse(text));
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
}
exports.TimeSpan = TimeSpan;

/**
 * A Timer provides all the capabilities necessary for doing speedrun attempts.
 */
class TimerRef {
    /**
     * Returns the currently selected Timing Method.
     * @return {number}
     */
    currentTimingMethod() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Timer_current_timing_method(this.ptr);
        return result;
    }
    /**
     * Returns the current comparison that is being compared against. This may
     * be a custom comparison or one of the Comparison Generators.
     * @return {string}
     */
    currentComparison() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Timer_current_comparison(this.ptr);
        return result;
    }
    /**
     * Returns whether Game Time is currently initialized. Game Time
     * automatically gets uninitialized for each new attempt.
     * @return {boolean}
     */
    isGameTimeInitialized() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Timer_is_game_time_initialized(this.ptr);
        return result;
    }
    /**
     * Returns whether the Game Timer is currently paused. If the Game Timer is
     * not paused, it automatically increments similar to Real Time.
     * @return {boolean}
     */
    isGameTimePaused() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Timer_is_game_time_paused(this.ptr);
        return result;
    }
    /**
     * Accesses the loading times. Loading times are defined as Game Time - Real Time.
     * @return {TimeSpanRef}
     */
    loadingTimes() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TimeSpanRef(liveSplitCoreNative.Timer_loading_times(this.ptr));
        return result;
    }
    /**
     * Returns the current Timer Phase.
     * @return {number}
     */
    currentPhase() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Timer_current_phase(this.ptr);
        return result;
    }
    /**
     * Accesses the Run in use by the Timer.
     * @return {RunRef}
     */
    getRun() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new RunRef(liveSplitCoreNative.Timer_get_run(this.ptr));
        return result;
    }
    /**
     * Saves the Run in use by the Timer as a LiveSplit splits file (*.lss).
     * @return {string}
     */
    saveAsLss() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Timer_save_as_lss(this.ptr);
        return result;
    }
    /**
     * Prints out debug information representing the whole state of the Timer. This
     * is being written to stdout.
     */
    printDebug() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_print_debug(this.ptr);
    }
    /**
     * Returns the current time of the Timer. The Game Time is null if the Game
     * Time has not been initialized.
     * @return {TimeRef}
     */
    currentTime() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TimeRef(liveSplitCoreNative.Timer_current_time(this.ptr));
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.TimerRef = TimerRef;

/**
 * A Timer provides all the capabilities necessary for doing speedrun attempts.
 */
class TimerRefMut extends TimerRef {
    /**
     * Replaces the Run object used by the Timer with the Run object provided. If
     * the Run provided contains no segments, it can't be used for timing and is
     * not being modified. Otherwise the Run that was in use by the Timer gets
     * stored in the Run object provided. Before the Run is returned, the current
     * attempt is reset and the splits are being updated depending on the
     * `update_splits` parameter. The return value indicates whether the Run got
     * replaced successfully.
     * @param {RunRefMut} run
     * @param {boolean} updateSplits
     * @return {boolean}
     */
    replaceRun(run, updateSplits) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(run.ptr)) {
            throw "run is disposed";
        }
        const result = liveSplitCoreNative.Timer_replace_run(this.ptr, run.ptr, updateSplits);
        return result;
    }
    /**
     * Sets the Run object used by the Timer with the Run object provided. If the
     * Run provided contains no segments, it can't be used for timing and gets
     * returned again. If the Run object can be set, the original Run object in use
     * by the Timer is disposed by this method and null is returned.
     * @param {Run} run
     * @return {Run | null}
     */
    setRun(run) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(run.ptr)) {
            throw "run is disposed";
        }
        const result = new Run(liveSplitCoreNative.Timer_set_run(this.ptr, run.ptr));
        run.ptr = ref.NULL;
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * Starts the Timer if there is no attempt in progress. If that's not the
     * case, nothing happens.
     */
    start() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_start(this.ptr);
    }
    /**
     * If an attempt is in progress, stores the current time as the time of the
     * current split. The attempt ends if the last split time is stored.
     */
    split() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_split(this.ptr);
    }
    /**
     * Starts a new attempt or stores the current time as the time of the
     * current split. The attempt ends if the last split time is stored.
     */
    splitOrStart() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_split_or_start(this.ptr);
    }
    /**
     * Skips the current split if an attempt is in progress and the
     * current split is not the last split.
     */
    skipSplit() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_skip_split(this.ptr);
    }
    /**
     * Removes the split time from the last split if an attempt is in progress
     * and there is a previous split. The Timer Phase also switches to
     * `Running` if it previously was `Ended`.
     */
    undoSplit() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_undo_split(this.ptr);
    }
    /**
     * Resets the current attempt if there is one in progress. If the splits
     * are to be updated, all the information of the current attempt is stored
     * in the Run's history. Otherwise the current attempt's information is
     * discarded.
     * @param {boolean} updateSplits
     */
    reset(updateSplits) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_reset(this.ptr, updateSplits);
    }
    /**
     * Resets the current attempt if there is one in progress. The splits are
     * updated such that the current attempt's split times are being stored as
     * the new Personal Best.
     */
    resetAndSetAttemptAsPb() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_reset_and_set_attempt_as_pb(this.ptr);
    }
    /**
     * Pauses an active attempt that is not paused.
     */
    pause() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_pause(this.ptr);
    }
    /**
     * Resumes an attempt that is paused.
     */
    resume() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_resume(this.ptr);
    }
    /**
     * Toggles an active attempt between `Paused` and `Running`.
     */
    togglePause() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_toggle_pause(this.ptr);
    }
    /**
     * Toggles an active attempt between `Paused` and `Running` or starts an
     * attempt if there's none in progress.
     */
    togglePauseOrStart() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_toggle_pause_or_start(this.ptr);
    }
    /**
     * Removes all the pause times from the current time. If the current
     * attempt is paused, it also resumes that attempt. Additionally, if the
     * attempt is finished, the final split time is adjusted to not include the
     * pause times as well.
     * 
     * # Warning
     * 
     * This behavior is not entirely optimal, as generally only the final split
     * time is modified, while all other split times are left unmodified, which
     * may not be what actually happened during the run.
     */
    undoAllPauses() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_undo_all_pauses(this.ptr);
    }
    /**
     * Sets the current Timing Method to the Timing Method provided.
     * @param {number} method
     */
    setCurrentTimingMethod(method) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_set_current_timing_method(this.ptr, method);
    }
    /**
     * Switches the current comparison to the next comparison in the list.
     */
    switchToNextComparison() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_switch_to_next_comparison(this.ptr);
    }
    /**
     * Switches the current comparison to the previous comparison in the list.
     */
    switchToPreviousComparison() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_switch_to_previous_comparison(this.ptr);
    }
    /**
     * Initializes Game Time for the current attempt. Game Time automatically
     * gets uninitialized for each new attempt.
     */
    initializeGameTime() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_initialize_game_time(this.ptr);
    }
    /**
     * Deinitializes Game Time for the current attempt.
     */
    deinitializeGameTime() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_deinitialize_game_time(this.ptr);
    }
    /**
     * Pauses the Game Timer such that it doesn't automatically increment
     * similar to Real Time.
     */
    pauseGameTime() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_pause_game_time(this.ptr);
    }
    /**
     * Resumes the Game Timer such that it automatically increments similar to
     * Real Time, starting from the Game Time it was paused at.
     */
    resumeGameTime() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_resume_game_time(this.ptr);
    }
    /**
     * Sets the Game Time to the time specified. This also works if the Game
     * Time is paused, which can be used as a way of updating the Game Timer
     * periodically without it automatically moving forward. This ensures that
     * the Game Timer never shows any time that is not coming from the game.
     * @param {TimeSpanRef} time
     */
    setGameTime(time) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(time.ptr)) {
            throw "time is disposed";
        }
        liveSplitCoreNative.Timer_set_game_time(this.ptr, time.ptr);
    }
    /**
     * Instead of setting the Game Time directly, this method can be used to
     * just specify the amount of time the game has been loading. The Game Time
     * is then automatically determined by Real Time - Loading Times.
     * @param {TimeSpanRef} time
     */
    setLoadingTimes(time) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(time.ptr)) {
            throw "time is disposed";
        }
        liveSplitCoreNative.Timer_set_loading_times(this.ptr, time.ptr);
    }
    /**
     * Marks the Run as unmodified, so that it is known that all the changes
     * have been saved.
     */
    markAsUnmodified() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_mark_as_unmodified(this.ptr);
    }
}
exports.TimerRefMut = TimerRefMut;

/**
 * A Timer provides all the capabilities necessary for doing speedrun attempts.
 */
class Timer extends TimerRefMut {
    /**
     * @param {function(Timer)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.Timer_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Timer based on a Run object storing all the information
     * about the splits. The Run object needs to have at least one segment, so
     * that the Timer can store the final time. If a Run object with no
     * segments is provided, the Timer creation fails and null is returned.
     * @param {Run} run
     * @return {Timer | null}
     */
    static new(run) {
        if (ref.isNull(run.ptr)) {
            throw "run is disposed";
        }
        const result = new Timer(liveSplitCoreNative.Timer_new(run.ptr));
        run.ptr = ref.NULL;
        if (ref.isNull(result.ptr)) {
            return null;
        }
        return result;
    }
    /**
     * Consumes the Timer and creates a Shared Timer that can be shared across
     * multiple threads with multiple owners.
     * @return {SharedTimer}
     */
    intoShared() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new SharedTimer(liveSplitCoreNative.Timer_into_shared(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
    /**
     * Takes out the Run from the Timer and resets the current attempt if there
     * is one in progress. If the splits are to be updated, all the information
     * of the current attempt is stored in the Run's history. Otherwise the
     * current attempt's information is discarded.
     * @param {boolean} updateSplits
     * @return {Run}
     */
    intoRun(updateSplits) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Run(liveSplitCoreNative.Timer_into_run(this.ptr, updateSplits));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.Timer = Timer;

/**
 * The Timer Component is a component that shows the total time of the current
 * attempt as a digital clock. The color of the time shown is based on a how
 * well the current attempt is doing compared to the chosen comparison.
 */
class TimerComponentRef {
    /**
     * Encodes the component's state information as JSON.
     * @param {TimerRef} timer
     * @param {GeneralLayoutSettingsRef} layoutSettings
     * @return {any}
     */
    stateAsJson(timer, layoutSettings) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        if (ref.isNull(layoutSettings.ptr)) {
            throw "layoutSettings is disposed";
        }
        const result = liveSplitCoreNative.TimerComponent_state_as_json(this.ptr, timer.ptr, layoutSettings.ptr);
        return JSON.parse(result);
    }
    /**
     * Calculates the component's state based on the timer and the layout
     * settings provided.
     * @param {TimerRef} timer
     * @param {GeneralLayoutSettingsRef} layoutSettings
     * @return {TimerComponentState}
     */
    state(timer, layoutSettings) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        if (ref.isNull(layoutSettings.ptr)) {
            throw "layoutSettings is disposed";
        }
        const result = new TimerComponentState(liveSplitCoreNative.TimerComponent_state(this.ptr, timer.ptr, layoutSettings.ptr));
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.TimerComponentRef = TimerComponentRef;

/**
 * The Timer Component is a component that shows the total time of the current
 * attempt as a digital clock. The color of the time shown is based on a how
 * well the current attempt is doing compared to the chosen comparison.
 */
class TimerComponentRefMut extends TimerComponentRef {
}
exports.TimerComponentRefMut = TimerComponentRefMut;

/**
 * The Timer Component is a component that shows the total time of the current
 * attempt as a digital clock. The color of the time shown is based on a how
 * well the current attempt is doing compared to the chosen comparison.
 */
class TimerComponent extends TimerComponentRefMut {
    /**
     * @param {function(TimerComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.TimerComponent_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Timer Component.
     * @return {TimerComponent}
     */
    static new() {
        const result = new TimerComponent(liveSplitCoreNative.TimerComponent_new());
        return result;
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     * @return {Component}
     */
    intoGeneric() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.TimerComponent_into_generic(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.TimerComponent = TimerComponent;

/**
 * The state object describes the information to visualize for this component.
 */
class TimerComponentStateRef {
    /**
     * The time shown by the component without the fractional part.
     * @return {string}
     */
    time() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TimerComponentState_time(this.ptr);
        return result;
    }
    /**
     * The fractional part of the time shown (including the dot).
     * @return {string}
     */
    fraction() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TimerComponentState_fraction(this.ptr);
        return result;
    }
    /**
     * The semantic coloring information the time carries.
     * @return {string}
     */
    semanticColor() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TimerComponentState_semantic_color(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.TimerComponentStateRef = TimerComponentStateRef;

/**
 * The state object describes the information to visualize for this component.
 */
class TimerComponentStateRefMut extends TimerComponentStateRef {
}
exports.TimerComponentStateRefMut = TimerComponentStateRefMut;

/**
 * The state object describes the information to visualize for this component.
 */
class TimerComponentState extends TimerComponentStateRefMut {
    /**
     * @param {function(TimerComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.TimerComponentState_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.TimerComponentState = TimerComponentState;

/**
 * A Timer Read Lock allows temporary read access to a timer. Dispose this to
 * release the read lock.
 */
class TimerReadLockRef {
    /**
     * Accesses the timer.
     * @return {TimerRef}
     */
    timer() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TimerRef(liveSplitCoreNative.TimerReadLock_timer(this.ptr));
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.TimerReadLockRef = TimerReadLockRef;

/**
 * A Timer Read Lock allows temporary read access to a timer. Dispose this to
 * release the read lock.
 */
class TimerReadLockRefMut extends TimerReadLockRef {
}
exports.TimerReadLockRefMut = TimerReadLockRefMut;

/**
 * A Timer Read Lock allows temporary read access to a timer. Dispose this to
 * release the read lock.
 */
class TimerReadLock extends TimerReadLockRefMut {
    /**
     * @param {function(TimerReadLock)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.TimerReadLock_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.TimerReadLock = TimerReadLock;

/**
 * A Timer Write Lock allows temporary write access to a timer. Dispose this to
 * release the write lock.
 */
class TimerWriteLockRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.TimerWriteLockRef = TimerWriteLockRef;

/**
 * A Timer Write Lock allows temporary write access to a timer. Dispose this to
 * release the write lock.
 */
class TimerWriteLockRefMut extends TimerWriteLockRef {
    /**
     * Accesses the timer.
     * @return {TimerRefMut}
     */
    timer() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new TimerRefMut(liveSplitCoreNative.TimerWriteLock_timer(this.ptr));
        return result;
    }
}
exports.TimerWriteLockRefMut = TimerWriteLockRefMut;

/**
 * A Timer Write Lock allows temporary write access to a timer. Dispose this to
 * release the write lock.
 */
class TimerWriteLock extends TimerWriteLockRefMut {
    /**
     * @param {function(TimerWriteLock)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.TimerWriteLock_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.TimerWriteLock = TimerWriteLock;

/**
 * The Title Component is a component that shows the name of the game and the
 * category that is being run. Additionally, the game icon, the attempt count,
 * and the total number of successfully finished runs can be shown.
 */
class TitleComponentRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.TitleComponentRef = TitleComponentRef;

/**
 * The Title Component is a component that shows the name of the game and the
 * category that is being run. Additionally, the game icon, the attempt count,
 * and the total number of successfully finished runs can be shown.
 */
class TitleComponentRefMut extends TitleComponentRef {
    /**
     * Encodes the component's state information as JSON.
     * @param {TimerRef} timer
     * @return {any}
     */
    stateAsJson(timer) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        const result = liveSplitCoreNative.TitleComponent_state_as_json(this.ptr, timer.ptr);
        return JSON.parse(result);
    }
    /**
     * Calculates the component's state based on the timer provided.
     * @param {TimerRef} timer
     * @return {TitleComponentState}
     */
    state(timer) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        const result = new TitleComponentState(liveSplitCoreNative.TitleComponent_state(this.ptr, timer.ptr));
        return result;
    }
}
exports.TitleComponentRefMut = TitleComponentRefMut;

/**
 * The Title Component is a component that shows the name of the game and the
 * category that is being run. Additionally, the game icon, the attempt count,
 * and the total number of successfully finished runs can be shown.
 */
class TitleComponent extends TitleComponentRefMut {
    /**
     * @param {function(TitleComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.TitleComponent_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Title Component.
     * @return {TitleComponent}
     */
    static new() {
        const result = new TitleComponent(liveSplitCoreNative.TitleComponent_new());
        return result;
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     * @return {Component}
     */
    intoGeneric() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.TitleComponent_into_generic(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.TitleComponent = TitleComponent;

/**
 * The state object describes the information to visualize for this component.
 */
class TitleComponentStateRef {
    /**
     * The game's icon encoded as a Data URL. This value is only specified whenever
     * the icon changes. If you explicitly want to query this value, remount the
     * component. The String itself may be empty. This indicates that there is no
     * icon. If no change occurred, null is returned instead.
     * @return {string | null}
     */
    iconChange() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TitleComponentState_icon_change(this.ptr);
        return result;
    }
    /**
     * The first title line to show. This is either the game's name, or a
     * combination of the game's name and the category.
     * @return {string}
     */
    line1() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TitleComponentState_line1(this.ptr);
        return result;
    }
    /**
     * By default the category name is shown on the second line. Based on the
     * settings, it can however instead be shown in a single line together with
     * the game name. In that case null is returned instead.
     * @return {string | null}
     */
    line2() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TitleComponentState_line2(this.ptr);
        return result;
    }
    /**
     * Specifies whether the title should centered or aligned to the left
     * instead.
     * @return {boolean}
     */
    isCentered() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TitleComponentState_is_centered(this.ptr);
        return result;
    }
    /**
     * Returns whether the amount of successfully finished attempts is supposed to
     * be shown.
     * @return {boolean}
     */
    showsFinishedRuns() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TitleComponentState_shows_finished_runs(this.ptr);
        return result;
    }
    /**
     * Returns the amount of successfully finished attempts.
     * @return {number}
     */
    finishedRuns() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TitleComponentState_finished_runs(this.ptr);
        return result;
    }
    /**
     * Returns whether the amount of total attempts is supposed to be shown.
     * @return {boolean}
     */
    showsAttempts() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TitleComponentState_shows_attempts(this.ptr);
        return result;
    }
    /**
     * Returns the amount of total attempts.
     * @return {number}
     */
    attempts() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TitleComponentState_attempts(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.TitleComponentStateRef = TitleComponentStateRef;

/**
 * The state object describes the information to visualize for this component.
 */
class TitleComponentStateRefMut extends TitleComponentStateRef {
}
exports.TitleComponentStateRefMut = TitleComponentStateRefMut;

/**
 * The state object describes the information to visualize for this component.
 */
class TitleComponentState extends TitleComponentStateRefMut {
    /**
     * @param {function(TitleComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.TitleComponentState_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.TitleComponentState = TitleComponentState;

/**
 * The Total Playtime Component is a component that shows the total amount of
 * time that the current category has been played for.
 */
class TotalPlaytimeComponentRef {
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.TotalPlaytimeComponentRef = TotalPlaytimeComponentRef;

/**
 * The Total Playtime Component is a component that shows the total amount of
 * time that the current category has been played for.
 */
class TotalPlaytimeComponentRefMut extends TotalPlaytimeComponentRef {
    /**
     * Encodes the component's state information as JSON.
     * @param {TimerRef} timer
     * @return {any}
     */
    stateAsJson(timer) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        const result = liveSplitCoreNative.TotalPlaytimeComponent_state_as_json(this.ptr, timer.ptr);
        return JSON.parse(result);
    }
    /**
     * Calculates the component's state based on the timer provided.
     * @param {TimerRef} timer
     * @return {TotalPlaytimeComponentState}
     */
    state(timer) {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        if (ref.isNull(timer.ptr)) {
            throw "timer is disposed";
        }
        const result = new TotalPlaytimeComponentState(liveSplitCoreNative.TotalPlaytimeComponent_state(this.ptr, timer.ptr));
        return result;
    }
}
exports.TotalPlaytimeComponentRefMut = TotalPlaytimeComponentRefMut;

/**
 * The Total Playtime Component is a component that shows the total amount of
 * time that the current category has been played for.
 */
class TotalPlaytimeComponent extends TotalPlaytimeComponentRefMut {
    /**
     * @param {function(TotalPlaytimeComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.TotalPlaytimeComponent_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
    /**
     * Creates a new Total Playtime Component.
     * @return {TotalPlaytimeComponent}
     */
    static new() {
        const result = new TotalPlaytimeComponent(liveSplitCoreNative.TotalPlaytimeComponent_new());
        return result;
    }
    /**
     * Converts the component into a generic component suitable for using with a
     * layout.
     * @return {Component}
     */
    intoGeneric() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.TotalPlaytimeComponent_into_generic(this.ptr));
        this.ptr = ref.NULL;
        return result;
    }
}
exports.TotalPlaytimeComponent = TotalPlaytimeComponent;

/**
 * The state object describes the information to visualize for this component.
 */
class TotalPlaytimeComponentStateRef {
    /**
     * The label's text.
     * @return {string}
     */
    text() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TotalPlaytimeComponentState_text(this.ptr);
        return result;
    }
    /**
     * The total playtime.
     * @return {string}
     */
    time() {
        if (ref.isNull(this.ptr)) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TotalPlaytimeComponentState_time(this.ptr);
        return result;
    }
    /**
     * @param {Buffer} ptr
     */
    constructor(ptr) {
        this.ptr = ptr;
    }
}
exports.TotalPlaytimeComponentStateRef = TotalPlaytimeComponentStateRef;

/**
 * The state object describes the information to visualize for this component.
 */
class TotalPlaytimeComponentStateRefMut extends TotalPlaytimeComponentStateRef {
}
exports.TotalPlaytimeComponentStateRefMut = TotalPlaytimeComponentStateRefMut;

/**
 * The state object describes the information to visualize for this component.
 */
class TotalPlaytimeComponentState extends TotalPlaytimeComponentStateRefMut {
    /**
     * @param {function(TotalPlaytimeComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    dispose() {
        if (!ref.isNull(this.ptr)) {
            liveSplitCoreNative.TotalPlaytimeComponentState_drop(this.ptr);
            this.ptr = ref.NULL;
        }
    }
}
exports.TotalPlaytimeComponentState = TotalPlaytimeComponentState;
