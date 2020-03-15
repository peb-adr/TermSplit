const LiveSplitCore = require('./livesplit_core');
const emscriptenModule = LiveSplitCore({});
const liveSplitCoreNative = {};
liveSplitCoreNative.Analysis_calculate_sum_of_best = emscriptenModule.cwrap('Analysis_calculate_sum_of_best', "number", ["number", "number", "number", "number"]);
liveSplitCoreNative.Analysis_calculate_total_playtime_for_run = emscriptenModule.cwrap('Analysis_calculate_total_playtime_for_run', "number", ["number"]);
liveSplitCoreNative.Analysis_calculate_total_playtime_for_timer = emscriptenModule.cwrap('Analysis_calculate_total_playtime_for_timer', "number", ["number"]);
liveSplitCoreNative.AtomicDateTime_drop = emscriptenModule.cwrap('AtomicDateTime_drop', null, ["number"]);
liveSplitCoreNative.AtomicDateTime_is_synchronized = emscriptenModule.cwrap('AtomicDateTime_is_synchronized', "number", ["number"]);
liveSplitCoreNative.AtomicDateTime_to_rfc2822 = emscriptenModule.cwrap('AtomicDateTime_to_rfc2822', "string", ["number"]);
liveSplitCoreNative.AtomicDateTime_to_rfc3339 = emscriptenModule.cwrap('AtomicDateTime_to_rfc3339', "string", ["number"]);
liveSplitCoreNative.Attempt_index = emscriptenModule.cwrap('Attempt_index', "number", ["number"]);
liveSplitCoreNative.Attempt_time = emscriptenModule.cwrap('Attempt_time', "number", ["number"]);
liveSplitCoreNative.Attempt_pause_time = emscriptenModule.cwrap('Attempt_pause_time', "number", ["number"]);
liveSplitCoreNative.Attempt_started = emscriptenModule.cwrap('Attempt_started', "number", ["number"]);
liveSplitCoreNative.Attempt_ended = emscriptenModule.cwrap('Attempt_ended', "number", ["number"]);
liveSplitCoreNative.BlankSpaceComponent_new = emscriptenModule.cwrap('BlankSpaceComponent_new', "number", []);
liveSplitCoreNative.BlankSpaceComponent_drop = emscriptenModule.cwrap('BlankSpaceComponent_drop', null, ["number"]);
liveSplitCoreNative.BlankSpaceComponent_into_generic = emscriptenModule.cwrap('BlankSpaceComponent_into_generic', "number", ["number"]);
liveSplitCoreNative.BlankSpaceComponent_state_as_json = emscriptenModule.cwrap('BlankSpaceComponent_state_as_json', "string", ["number", "number"]);
liveSplitCoreNative.BlankSpaceComponent_state = emscriptenModule.cwrap('BlankSpaceComponent_state', "number", ["number", "number"]);
liveSplitCoreNative.BlankSpaceComponentState_drop = emscriptenModule.cwrap('BlankSpaceComponentState_drop', null, ["number"]);
liveSplitCoreNative.BlankSpaceComponentState_size = emscriptenModule.cwrap('BlankSpaceComponentState_size', "number", ["number"]);
liveSplitCoreNative.Component_drop = emscriptenModule.cwrap('Component_drop', null, ["number"]);
liveSplitCoreNative.CurrentComparisonComponent_new = emscriptenModule.cwrap('CurrentComparisonComponent_new', "number", []);
liveSplitCoreNative.CurrentComparisonComponent_drop = emscriptenModule.cwrap('CurrentComparisonComponent_drop', null, ["number"]);
liveSplitCoreNative.CurrentComparisonComponent_into_generic = emscriptenModule.cwrap('CurrentComparisonComponent_into_generic', "number", ["number"]);
liveSplitCoreNative.CurrentComparisonComponent_state_as_json = emscriptenModule.cwrap('CurrentComparisonComponent_state_as_json', "string", ["number", "number"]);
liveSplitCoreNative.CurrentComparisonComponent_state = emscriptenModule.cwrap('CurrentComparisonComponent_state', "number", ["number", "number"]);
liveSplitCoreNative.CurrentComparisonComponentState_drop = emscriptenModule.cwrap('CurrentComparisonComponentState_drop', null, ["number"]);
liveSplitCoreNative.CurrentComparisonComponentState_text = emscriptenModule.cwrap('CurrentComparisonComponentState_text', "string", ["number"]);
liveSplitCoreNative.CurrentComparisonComponentState_comparison = emscriptenModule.cwrap('CurrentComparisonComponentState_comparison', "string", ["number"]);
liveSplitCoreNative.CurrentPaceComponent_new = emscriptenModule.cwrap('CurrentPaceComponent_new', "number", []);
liveSplitCoreNative.CurrentPaceComponent_drop = emscriptenModule.cwrap('CurrentPaceComponent_drop', null, ["number"]);
liveSplitCoreNative.CurrentPaceComponent_into_generic = emscriptenModule.cwrap('CurrentPaceComponent_into_generic', "number", ["number"]);
liveSplitCoreNative.CurrentPaceComponent_state_as_json = emscriptenModule.cwrap('CurrentPaceComponent_state_as_json', "string", ["number", "number"]);
liveSplitCoreNative.CurrentPaceComponent_state = emscriptenModule.cwrap('CurrentPaceComponent_state', "number", ["number", "number"]);
liveSplitCoreNative.CurrentPaceComponentState_drop = emscriptenModule.cwrap('CurrentPaceComponentState_drop', null, ["number"]);
liveSplitCoreNative.CurrentPaceComponentState_text = emscriptenModule.cwrap('CurrentPaceComponentState_text', "string", ["number"]);
liveSplitCoreNative.CurrentPaceComponentState_time = emscriptenModule.cwrap('CurrentPaceComponentState_time', "string", ["number"]);
liveSplitCoreNative.DeltaComponent_new = emscriptenModule.cwrap('DeltaComponent_new', "number", []);
liveSplitCoreNative.DeltaComponent_drop = emscriptenModule.cwrap('DeltaComponent_drop', null, ["number"]);
liveSplitCoreNative.DeltaComponent_into_generic = emscriptenModule.cwrap('DeltaComponent_into_generic', "number", ["number"]);
liveSplitCoreNative.DeltaComponent_state_as_json = emscriptenModule.cwrap('DeltaComponent_state_as_json', "string", ["number", "number", "number"]);
liveSplitCoreNative.DeltaComponent_state = emscriptenModule.cwrap('DeltaComponent_state', "number", ["number", "number", "number"]);
liveSplitCoreNative.DeltaComponentState_drop = emscriptenModule.cwrap('DeltaComponentState_drop', null, ["number"]);
liveSplitCoreNative.DeltaComponentState_text = emscriptenModule.cwrap('DeltaComponentState_text', "string", ["number"]);
liveSplitCoreNative.DeltaComponentState_time = emscriptenModule.cwrap('DeltaComponentState_time', "string", ["number"]);
liveSplitCoreNative.DeltaComponentState_semantic_color = emscriptenModule.cwrap('DeltaComponentState_semantic_color', "string", ["number"]);
liveSplitCoreNative.DetailedTimerComponent_new = emscriptenModule.cwrap('DetailedTimerComponent_new', "number", []);
liveSplitCoreNative.DetailedTimerComponent_drop = emscriptenModule.cwrap('DetailedTimerComponent_drop', null, ["number"]);
liveSplitCoreNative.DetailedTimerComponent_into_generic = emscriptenModule.cwrap('DetailedTimerComponent_into_generic', "number", ["number"]);
liveSplitCoreNative.DetailedTimerComponent_state_as_json = emscriptenModule.cwrap('DetailedTimerComponent_state_as_json', "string", ["number", "number", "number"]);
liveSplitCoreNative.DetailedTimerComponent_state = emscriptenModule.cwrap('DetailedTimerComponent_state', "number", ["number", "number", "number"]);
liveSplitCoreNative.DetailedTimerComponentState_drop = emscriptenModule.cwrap('DetailedTimerComponentState_drop', null, ["number"]);
liveSplitCoreNative.DetailedTimerComponentState_timer_time = emscriptenModule.cwrap('DetailedTimerComponentState_timer_time', "string", ["number"]);
liveSplitCoreNative.DetailedTimerComponentState_timer_fraction = emscriptenModule.cwrap('DetailedTimerComponentState_timer_fraction', "string", ["number"]);
liveSplitCoreNative.DetailedTimerComponentState_timer_semantic_color = emscriptenModule.cwrap('DetailedTimerComponentState_timer_semantic_color', "string", ["number"]);
liveSplitCoreNative.DetailedTimerComponentState_segment_timer_time = emscriptenModule.cwrap('DetailedTimerComponentState_segment_timer_time', "string", ["number"]);
liveSplitCoreNative.DetailedTimerComponentState_segment_timer_fraction = emscriptenModule.cwrap('DetailedTimerComponentState_segment_timer_fraction', "string", ["number"]);
liveSplitCoreNative.DetailedTimerComponentState_comparison1_visible = emscriptenModule.cwrap('DetailedTimerComponentState_comparison1_visible', "number", ["number"]);
liveSplitCoreNative.DetailedTimerComponentState_comparison1_name = emscriptenModule.cwrap('DetailedTimerComponentState_comparison1_name', "string", ["number"]);
liveSplitCoreNative.DetailedTimerComponentState_comparison1_time = emscriptenModule.cwrap('DetailedTimerComponentState_comparison1_time', "string", ["number"]);
liveSplitCoreNative.DetailedTimerComponentState_comparison2_visible = emscriptenModule.cwrap('DetailedTimerComponentState_comparison2_visible', "number", ["number"]);
liveSplitCoreNative.DetailedTimerComponentState_comparison2_name = emscriptenModule.cwrap('DetailedTimerComponentState_comparison2_name', "string", ["number"]);
liveSplitCoreNative.DetailedTimerComponentState_comparison2_time = emscriptenModule.cwrap('DetailedTimerComponentState_comparison2_time', "string", ["number"]);
liveSplitCoreNative.DetailedTimerComponentState_icon_change = emscriptenModule.cwrap('DetailedTimerComponentState_icon_change', "string", ["number"]);
liveSplitCoreNative.DetailedTimerComponentState_segment_name = emscriptenModule.cwrap('DetailedTimerComponentState_segment_name', "string", ["number"]);
liveSplitCoreNative.FuzzyList_new = emscriptenModule.cwrap('FuzzyList_new', "number", []);
liveSplitCoreNative.FuzzyList_drop = emscriptenModule.cwrap('FuzzyList_drop', null, ["number"]);
liveSplitCoreNative.FuzzyList_search = emscriptenModule.cwrap('FuzzyList_search', "string", ["number", "string", "number"]);
liveSplitCoreNative.FuzzyList_push = emscriptenModule.cwrap('FuzzyList_push', null, ["number", "string"]);
liveSplitCoreNative.GeneralLayoutSettings_default = emscriptenModule.cwrap('GeneralLayoutSettings_default', "number", []);
liveSplitCoreNative.GeneralLayoutSettings_drop = emscriptenModule.cwrap('GeneralLayoutSettings_drop', null, ["number"]);
liveSplitCoreNative.GraphComponent_new = emscriptenModule.cwrap('GraphComponent_new', "number", []);
liveSplitCoreNative.GraphComponent_drop = emscriptenModule.cwrap('GraphComponent_drop', null, ["number"]);
liveSplitCoreNative.GraphComponent_into_generic = emscriptenModule.cwrap('GraphComponent_into_generic', "number", ["number"]);
liveSplitCoreNative.GraphComponent_state_as_json = emscriptenModule.cwrap('GraphComponent_state_as_json', "string", ["number", "number", "number"]);
liveSplitCoreNative.GraphComponent_state = emscriptenModule.cwrap('GraphComponent_state', "number", ["number", "number", "number"]);
liveSplitCoreNative.GraphComponentState_drop = emscriptenModule.cwrap('GraphComponentState_drop', null, ["number"]);
liveSplitCoreNative.GraphComponentState_points_len = emscriptenModule.cwrap('GraphComponentState_points_len', "number", ["number"]);
liveSplitCoreNative.GraphComponentState_point_x = emscriptenModule.cwrap('GraphComponentState_point_x', "number", ["number", "number"]);
liveSplitCoreNative.GraphComponentState_point_y = emscriptenModule.cwrap('GraphComponentState_point_y', "number", ["number", "number"]);
liveSplitCoreNative.GraphComponentState_point_is_best_segment = emscriptenModule.cwrap('GraphComponentState_point_is_best_segment', "number", ["number", "number"]);
liveSplitCoreNative.GraphComponentState_horizontal_grid_lines_len = emscriptenModule.cwrap('GraphComponentState_horizontal_grid_lines_len', "number", ["number"]);
liveSplitCoreNative.GraphComponentState_horizontal_grid_line = emscriptenModule.cwrap('GraphComponentState_horizontal_grid_line', "number", ["number", "number"]);
liveSplitCoreNative.GraphComponentState_vertical_grid_lines_len = emscriptenModule.cwrap('GraphComponentState_vertical_grid_lines_len', "number", ["number"]);
liveSplitCoreNative.GraphComponentState_vertical_grid_line = emscriptenModule.cwrap('GraphComponentState_vertical_grid_line', "number", ["number", "number"]);
liveSplitCoreNative.GraphComponentState_middle = emscriptenModule.cwrap('GraphComponentState_middle', "number", ["number"]);
liveSplitCoreNative.GraphComponentState_is_live_delta_active = emscriptenModule.cwrap('GraphComponentState_is_live_delta_active', "number", ["number"]);
liveSplitCoreNative.GraphComponentState_is_flipped = emscriptenModule.cwrap('GraphComponentState_is_flipped', "number", ["number"]);
liveSplitCoreNative.HotkeyConfig_parse_json = emscriptenModule.cwrap('HotkeyConfig_parse_json', "number", ["string"]);
liveSplitCoreNative.HotkeyConfig_drop = emscriptenModule.cwrap('HotkeyConfig_drop', null, ["number"]);
liveSplitCoreNative.HotkeyConfig_settings_description_as_json = emscriptenModule.cwrap('HotkeyConfig_settings_description_as_json', "string", ["number"]);
liveSplitCoreNative.HotkeyConfig_as_json = emscriptenModule.cwrap('HotkeyConfig_as_json', "string", ["number"]);
liveSplitCoreNative.HotkeyConfig_set_value = emscriptenModule.cwrap('HotkeyConfig_set_value', "number", ["number", "number", "number"]);
liveSplitCoreNative.HotkeySystem_new = emscriptenModule.cwrap('HotkeySystem_new', "number", ["number"]);
liveSplitCoreNative.HotkeySystem_with_config = emscriptenModule.cwrap('HotkeySystem_with_config', "number", ["number", "number"]);
liveSplitCoreNative.HotkeySystem_drop = emscriptenModule.cwrap('HotkeySystem_drop', null, ["number"]);
liveSplitCoreNative.HotkeySystem_deactivate = emscriptenModule.cwrap('HotkeySystem_deactivate', null, ["number"]);
liveSplitCoreNative.HotkeySystem_activate = emscriptenModule.cwrap('HotkeySystem_activate', null, ["number"]);
liveSplitCoreNative.HotkeySystem_config = emscriptenModule.cwrap('HotkeySystem_config', "number", ["number"]);
liveSplitCoreNative.HotkeySystem_set_config = emscriptenModule.cwrap('HotkeySystem_set_config', "number", ["number", "number"]);
liveSplitCoreNative.Layout_new = emscriptenModule.cwrap('Layout_new', "number", []);
liveSplitCoreNative.Layout_default_layout = emscriptenModule.cwrap('Layout_default_layout', "number", []);
liveSplitCoreNative.Layout_parse_json = emscriptenModule.cwrap('Layout_parse_json', "number", ["string"]);
liveSplitCoreNative.Layout_parse_original_livesplit = emscriptenModule.cwrap('Layout_parse_original_livesplit', "number", ["number", "number"]);
liveSplitCoreNative.Layout_drop = emscriptenModule.cwrap('Layout_drop', null, ["number"]);
liveSplitCoreNative.Layout_clone = emscriptenModule.cwrap('Layout_clone', "number", ["number"]);
liveSplitCoreNative.Layout_settings_as_json = emscriptenModule.cwrap('Layout_settings_as_json', "string", ["number"]);
liveSplitCoreNative.Layout_state_as_json = emscriptenModule.cwrap('Layout_state_as_json', "string", ["number", "number"]);
liveSplitCoreNative.Layout_push = emscriptenModule.cwrap('Layout_push', null, ["number", "number"]);
liveSplitCoreNative.Layout_scroll_up = emscriptenModule.cwrap('Layout_scroll_up', null, ["number"]);
liveSplitCoreNative.Layout_scroll_down = emscriptenModule.cwrap('Layout_scroll_down', null, ["number"]);
liveSplitCoreNative.Layout_remount = emscriptenModule.cwrap('Layout_remount', null, ["number"]);
liveSplitCoreNative.LayoutEditor_new = emscriptenModule.cwrap('LayoutEditor_new', "number", ["number"]);
liveSplitCoreNative.LayoutEditor_close = emscriptenModule.cwrap('LayoutEditor_close', "number", ["number"]);
liveSplitCoreNative.LayoutEditor_state_as_json = emscriptenModule.cwrap('LayoutEditor_state_as_json', "string", ["number"]);
liveSplitCoreNative.LayoutEditor_layout_state_as_json = emscriptenModule.cwrap('LayoutEditor_layout_state_as_json', "string", ["number", "number"]);
liveSplitCoreNative.LayoutEditor_select = emscriptenModule.cwrap('LayoutEditor_select', null, ["number", "number"]);
liveSplitCoreNative.LayoutEditor_add_component = emscriptenModule.cwrap('LayoutEditor_add_component', null, ["number", "number"]);
liveSplitCoreNative.LayoutEditor_remove_component = emscriptenModule.cwrap('LayoutEditor_remove_component', null, ["number"]);
liveSplitCoreNative.LayoutEditor_move_component_up = emscriptenModule.cwrap('LayoutEditor_move_component_up', null, ["number"]);
liveSplitCoreNative.LayoutEditor_move_component_down = emscriptenModule.cwrap('LayoutEditor_move_component_down', null, ["number"]);
liveSplitCoreNative.LayoutEditor_move_component = emscriptenModule.cwrap('LayoutEditor_move_component', null, ["number", "number"]);
liveSplitCoreNative.LayoutEditor_duplicate_component = emscriptenModule.cwrap('LayoutEditor_duplicate_component', null, ["number"]);
liveSplitCoreNative.LayoutEditor_set_component_settings_value = emscriptenModule.cwrap('LayoutEditor_set_component_settings_value', null, ["number", "number", "number"]);
liveSplitCoreNative.LayoutEditor_set_general_settings_value = emscriptenModule.cwrap('LayoutEditor_set_general_settings_value', null, ["number", "number", "number"]);
liveSplitCoreNative.ParseRunResult_drop = emscriptenModule.cwrap('ParseRunResult_drop', null, ["number"]);
liveSplitCoreNative.ParseRunResult_unwrap = emscriptenModule.cwrap('ParseRunResult_unwrap', "number", ["number"]);
liveSplitCoreNative.ParseRunResult_parsed_successfully = emscriptenModule.cwrap('ParseRunResult_parsed_successfully', "number", ["number"]);
liveSplitCoreNative.ParseRunResult_timer_kind = emscriptenModule.cwrap('ParseRunResult_timer_kind', "string", ["number"]);
liveSplitCoreNative.ParseRunResult_is_generic_timer = emscriptenModule.cwrap('ParseRunResult_is_generic_timer', "number", ["number"]);
liveSplitCoreNative.PossibleTimeSaveComponent_new = emscriptenModule.cwrap('PossibleTimeSaveComponent_new', "number", []);
liveSplitCoreNative.PossibleTimeSaveComponent_drop = emscriptenModule.cwrap('PossibleTimeSaveComponent_drop', null, ["number"]);
liveSplitCoreNative.PossibleTimeSaveComponent_into_generic = emscriptenModule.cwrap('PossibleTimeSaveComponent_into_generic', "number", ["number"]);
liveSplitCoreNative.PossibleTimeSaveComponent_state_as_json = emscriptenModule.cwrap('PossibleTimeSaveComponent_state_as_json', "string", ["number", "number"]);
liveSplitCoreNative.PossibleTimeSaveComponent_state = emscriptenModule.cwrap('PossibleTimeSaveComponent_state', "number", ["number", "number"]);
liveSplitCoreNative.PossibleTimeSaveComponentState_drop = emscriptenModule.cwrap('PossibleTimeSaveComponentState_drop', null, ["number"]);
liveSplitCoreNative.PossibleTimeSaveComponentState_text = emscriptenModule.cwrap('PossibleTimeSaveComponentState_text', "string", ["number"]);
liveSplitCoreNative.PossibleTimeSaveComponentState_time = emscriptenModule.cwrap('PossibleTimeSaveComponentState_time', "string", ["number"]);
liveSplitCoreNative.PotentialCleanUp_drop = emscriptenModule.cwrap('PotentialCleanUp_drop', null, ["number"]);
liveSplitCoreNative.PotentialCleanUp_message = emscriptenModule.cwrap('PotentialCleanUp_message', "string", ["number"]);
liveSplitCoreNative.PreviousSegmentComponent_new = emscriptenModule.cwrap('PreviousSegmentComponent_new', "number", []);
liveSplitCoreNative.PreviousSegmentComponent_drop = emscriptenModule.cwrap('PreviousSegmentComponent_drop', null, ["number"]);
liveSplitCoreNative.PreviousSegmentComponent_into_generic = emscriptenModule.cwrap('PreviousSegmentComponent_into_generic', "number", ["number"]);
liveSplitCoreNative.PreviousSegmentComponent_state_as_json = emscriptenModule.cwrap('PreviousSegmentComponent_state_as_json', "string", ["number", "number", "number"]);
liveSplitCoreNative.PreviousSegmentComponent_state = emscriptenModule.cwrap('PreviousSegmentComponent_state', "number", ["number", "number", "number"]);
liveSplitCoreNative.PreviousSegmentComponentState_drop = emscriptenModule.cwrap('PreviousSegmentComponentState_drop', null, ["number"]);
liveSplitCoreNative.PreviousSegmentComponentState_text = emscriptenModule.cwrap('PreviousSegmentComponentState_text', "string", ["number"]);
liveSplitCoreNative.PreviousSegmentComponentState_time = emscriptenModule.cwrap('PreviousSegmentComponentState_time', "string", ["number"]);
liveSplitCoreNative.PreviousSegmentComponentState_semantic_color = emscriptenModule.cwrap('PreviousSegmentComponentState_semantic_color', "string", ["number"]);
liveSplitCoreNative.Run_new = emscriptenModule.cwrap('Run_new', "number", []);
liveSplitCoreNative.Run_parse = emscriptenModule.cwrap('Run_parse', "number", ["number", "number", "string", "number"]);
liveSplitCoreNative.Run_parse_file_handle = emscriptenModule.cwrap('Run_parse_file_handle', "number", ["number", "string", "number"]);
liveSplitCoreNative.Run_drop = emscriptenModule.cwrap('Run_drop', null, ["number"]);
liveSplitCoreNative.Run_clone = emscriptenModule.cwrap('Run_clone', "number", ["number"]);
liveSplitCoreNative.Run_game_name = emscriptenModule.cwrap('Run_game_name', "string", ["number"]);
liveSplitCoreNative.Run_game_icon = emscriptenModule.cwrap('Run_game_icon', "string", ["number"]);
liveSplitCoreNative.Run_category_name = emscriptenModule.cwrap('Run_category_name', "string", ["number"]);
liveSplitCoreNative.Run_extended_file_name = emscriptenModule.cwrap('Run_extended_file_name', "string", ["number", "number"]);
liveSplitCoreNative.Run_extended_name = emscriptenModule.cwrap('Run_extended_name', "string", ["number", "number"]);
liveSplitCoreNative.Run_extended_category_name = emscriptenModule.cwrap('Run_extended_category_name', "string", ["number", "number", "number", "number"]);
liveSplitCoreNative.Run_attempt_count = emscriptenModule.cwrap('Run_attempt_count', "number", ["number"]);
liveSplitCoreNative.Run_metadata = emscriptenModule.cwrap('Run_metadata', "number", ["number"]);
liveSplitCoreNative.Run_offset = emscriptenModule.cwrap('Run_offset', "number", ["number"]);
liveSplitCoreNative.Run_len = emscriptenModule.cwrap('Run_len', "number", ["number"]);
liveSplitCoreNative.Run_has_been_modified = emscriptenModule.cwrap('Run_has_been_modified', "number", ["number"]);
liveSplitCoreNative.Run_segment = emscriptenModule.cwrap('Run_segment', "number", ["number", "number"]);
liveSplitCoreNative.Run_attempt_history_len = emscriptenModule.cwrap('Run_attempt_history_len', "number", ["number"]);
liveSplitCoreNative.Run_attempt_history_index = emscriptenModule.cwrap('Run_attempt_history_index', "number", ["number", "number"]);
liveSplitCoreNative.Run_save_as_lss = emscriptenModule.cwrap('Run_save_as_lss', "string", ["number"]);
liveSplitCoreNative.Run_custom_comparisons_len = emscriptenModule.cwrap('Run_custom_comparisons_len', "number", ["number"]);
liveSplitCoreNative.Run_custom_comparison = emscriptenModule.cwrap('Run_custom_comparison', "string", ["number", "number"]);
liveSplitCoreNative.Run_auto_splitter_settings = emscriptenModule.cwrap('Run_auto_splitter_settings', "string", ["number"]);
liveSplitCoreNative.Run_push_segment = emscriptenModule.cwrap('Run_push_segment', null, ["number", "number"]);
liveSplitCoreNative.Run_set_game_name = emscriptenModule.cwrap('Run_set_game_name', null, ["number", "string"]);
liveSplitCoreNative.Run_set_category_name = emscriptenModule.cwrap('Run_set_category_name', null, ["number", "string"]);
liveSplitCoreNative.Run_mark_as_modified = emscriptenModule.cwrap('Run_mark_as_modified', null, ["number"]);
liveSplitCoreNative.RunEditor_new = emscriptenModule.cwrap('RunEditor_new', "number", ["number"]);
liveSplitCoreNative.RunEditor_close = emscriptenModule.cwrap('RunEditor_close', "number", ["number"]);
liveSplitCoreNative.RunEditor_state_as_json = emscriptenModule.cwrap('RunEditor_state_as_json', "string", ["number"]);
liveSplitCoreNative.RunEditor_select_timing_method = emscriptenModule.cwrap('RunEditor_select_timing_method', null, ["number", "number"]);
liveSplitCoreNative.RunEditor_unselect = emscriptenModule.cwrap('RunEditor_unselect', null, ["number", "number"]);
liveSplitCoreNative.RunEditor_select_additionally = emscriptenModule.cwrap('RunEditor_select_additionally', null, ["number", "number"]);
liveSplitCoreNative.RunEditor_select_only = emscriptenModule.cwrap('RunEditor_select_only', null, ["number", "number"]);
liveSplitCoreNative.RunEditor_set_game_name = emscriptenModule.cwrap('RunEditor_set_game_name', null, ["number", "string"]);
liveSplitCoreNative.RunEditor_set_category_name = emscriptenModule.cwrap('RunEditor_set_category_name', null, ["number", "string"]);
liveSplitCoreNative.RunEditor_parse_and_set_offset = emscriptenModule.cwrap('RunEditor_parse_and_set_offset', "number", ["number", "string"]);
liveSplitCoreNative.RunEditor_parse_and_set_attempt_count = emscriptenModule.cwrap('RunEditor_parse_and_set_attempt_count', "number", ["number", "string"]);
liveSplitCoreNative.RunEditor_set_game_icon = emscriptenModule.cwrap('RunEditor_set_game_icon', null, ["number", "number", "number"]);
liveSplitCoreNative.RunEditor_remove_game_icon = emscriptenModule.cwrap('RunEditor_remove_game_icon', null, ["number"]);
liveSplitCoreNative.RunEditor_set_run_id = emscriptenModule.cwrap('RunEditor_set_run_id', null, ["number", "string"]);
liveSplitCoreNative.RunEditor_set_region_name = emscriptenModule.cwrap('RunEditor_set_region_name', null, ["number", "string"]);
liveSplitCoreNative.RunEditor_set_platform_name = emscriptenModule.cwrap('RunEditor_set_platform_name', null, ["number", "string"]);
liveSplitCoreNative.RunEditor_set_emulator_usage = emscriptenModule.cwrap('RunEditor_set_emulator_usage', null, ["number", "number"]);
liveSplitCoreNative.RunEditor_set_variable = emscriptenModule.cwrap('RunEditor_set_variable', null, ["number", "string", "string"]);
liveSplitCoreNative.RunEditor_remove_variable = emscriptenModule.cwrap('RunEditor_remove_variable', null, ["number", "string"]);
liveSplitCoreNative.RunEditor_clear_metadata = emscriptenModule.cwrap('RunEditor_clear_metadata', null, ["number"]);
liveSplitCoreNative.RunEditor_insert_segment_above = emscriptenModule.cwrap('RunEditor_insert_segment_above', null, ["number"]);
liveSplitCoreNative.RunEditor_insert_segment_below = emscriptenModule.cwrap('RunEditor_insert_segment_below', null, ["number"]);
liveSplitCoreNative.RunEditor_remove_segments = emscriptenModule.cwrap('RunEditor_remove_segments', null, ["number"]);
liveSplitCoreNative.RunEditor_move_segments_up = emscriptenModule.cwrap('RunEditor_move_segments_up', null, ["number"]);
liveSplitCoreNative.RunEditor_move_segments_down = emscriptenModule.cwrap('RunEditor_move_segments_down', null, ["number"]);
liveSplitCoreNative.RunEditor_active_set_icon = emscriptenModule.cwrap('RunEditor_active_set_icon', null, ["number", "number", "number"]);
liveSplitCoreNative.RunEditor_active_remove_icon = emscriptenModule.cwrap('RunEditor_active_remove_icon', null, ["number"]);
liveSplitCoreNative.RunEditor_active_set_name = emscriptenModule.cwrap('RunEditor_active_set_name', null, ["number", "string"]);
liveSplitCoreNative.RunEditor_active_parse_and_set_split_time = emscriptenModule.cwrap('RunEditor_active_parse_and_set_split_time', "number", ["number", "string"]);
liveSplitCoreNative.RunEditor_active_parse_and_set_segment_time = emscriptenModule.cwrap('RunEditor_active_parse_and_set_segment_time', "number", ["number", "string"]);
liveSplitCoreNative.RunEditor_active_parse_and_set_best_segment_time = emscriptenModule.cwrap('RunEditor_active_parse_and_set_best_segment_time', "number", ["number", "string"]);
liveSplitCoreNative.RunEditor_active_parse_and_set_comparison_time = emscriptenModule.cwrap('RunEditor_active_parse_and_set_comparison_time', "number", ["number", "string", "string"]);
liveSplitCoreNative.RunEditor_add_comparison = emscriptenModule.cwrap('RunEditor_add_comparison', "number", ["number", "string"]);
liveSplitCoreNative.RunEditor_import_comparison = emscriptenModule.cwrap('RunEditor_import_comparison', "number", ["number", "number", "string"]);
liveSplitCoreNative.RunEditor_remove_comparison = emscriptenModule.cwrap('RunEditor_remove_comparison', null, ["number", "string"]);
liveSplitCoreNative.RunEditor_rename_comparison = emscriptenModule.cwrap('RunEditor_rename_comparison', "number", ["number", "string", "string"]);
liveSplitCoreNative.RunEditor_move_comparison = emscriptenModule.cwrap('RunEditor_move_comparison', "number", ["number", "number", "number"]);
liveSplitCoreNative.RunEditor_clear_history = emscriptenModule.cwrap('RunEditor_clear_history', null, ["number"]);
liveSplitCoreNative.RunEditor_clear_times = emscriptenModule.cwrap('RunEditor_clear_times', null, ["number"]);
liveSplitCoreNative.RunEditor_clean_sum_of_best = emscriptenModule.cwrap('RunEditor_clean_sum_of_best', "number", ["number"]);
liveSplitCoreNative.RunMetadata_run_id = emscriptenModule.cwrap('RunMetadata_run_id', "string", ["number"]);
liveSplitCoreNative.RunMetadata_platform_name = emscriptenModule.cwrap('RunMetadata_platform_name', "string", ["number"]);
liveSplitCoreNative.RunMetadata_uses_emulator = emscriptenModule.cwrap('RunMetadata_uses_emulator', "number", ["number"]);
liveSplitCoreNative.RunMetadata_region_name = emscriptenModule.cwrap('RunMetadata_region_name', "string", ["number"]);
liveSplitCoreNative.RunMetadata_variables = emscriptenModule.cwrap('RunMetadata_variables', "number", ["number"]);
liveSplitCoreNative.RunMetadataVariable_drop = emscriptenModule.cwrap('RunMetadataVariable_drop', null, ["number"]);
liveSplitCoreNative.RunMetadataVariable_name = emscriptenModule.cwrap('RunMetadataVariable_name', "string", ["number"]);
liveSplitCoreNative.RunMetadataVariable_value = emscriptenModule.cwrap('RunMetadataVariable_value', "string", ["number"]);
liveSplitCoreNative.RunMetadataVariablesIter_drop = emscriptenModule.cwrap('RunMetadataVariablesIter_drop', null, ["number"]);
liveSplitCoreNative.RunMetadataVariablesIter_next = emscriptenModule.cwrap('RunMetadataVariablesIter_next', "number", ["number"]);
liveSplitCoreNative.Segment_new = emscriptenModule.cwrap('Segment_new', "number", ["string"]);
liveSplitCoreNative.Segment_drop = emscriptenModule.cwrap('Segment_drop', null, ["number"]);
liveSplitCoreNative.Segment_name = emscriptenModule.cwrap('Segment_name', "string", ["number"]);
liveSplitCoreNative.Segment_icon = emscriptenModule.cwrap('Segment_icon', "string", ["number"]);
liveSplitCoreNative.Segment_comparison = emscriptenModule.cwrap('Segment_comparison', "number", ["number", "string"]);
liveSplitCoreNative.Segment_personal_best_split_time = emscriptenModule.cwrap('Segment_personal_best_split_time', "number", ["number"]);
liveSplitCoreNative.Segment_best_segment_time = emscriptenModule.cwrap('Segment_best_segment_time', "number", ["number"]);
liveSplitCoreNative.Segment_segment_history = emscriptenModule.cwrap('Segment_segment_history', "number", ["number"]);
liveSplitCoreNative.SegmentHistory_iter = emscriptenModule.cwrap('SegmentHistory_iter', "number", ["number"]);
liveSplitCoreNative.SegmentHistoryElement_index = emscriptenModule.cwrap('SegmentHistoryElement_index', "number", ["number"]);
liveSplitCoreNative.SegmentHistoryElement_time = emscriptenModule.cwrap('SegmentHistoryElement_time', "number", ["number"]);
liveSplitCoreNative.SegmentHistoryIter_drop = emscriptenModule.cwrap('SegmentHistoryIter_drop', null, ["number"]);
liveSplitCoreNative.SegmentHistoryIter_next = emscriptenModule.cwrap('SegmentHistoryIter_next', "number", ["number"]);
liveSplitCoreNative.SeparatorComponent_new = emscriptenModule.cwrap('SeparatorComponent_new', "number", []);
liveSplitCoreNative.SeparatorComponent_drop = emscriptenModule.cwrap('SeparatorComponent_drop', null, ["number"]);
liveSplitCoreNative.SeparatorComponent_into_generic = emscriptenModule.cwrap('SeparatorComponent_into_generic', "number", ["number"]);
liveSplitCoreNative.SettingValue_from_bool = emscriptenModule.cwrap('SettingValue_from_bool', "number", ["number"]);
liveSplitCoreNative.SettingValue_from_uint = emscriptenModule.cwrap('SettingValue_from_uint', "number", ["number"]);
liveSplitCoreNative.SettingValue_from_int = emscriptenModule.cwrap('SettingValue_from_int', "number", ["number"]);
liveSplitCoreNative.SettingValue_from_string = emscriptenModule.cwrap('SettingValue_from_string', "number", ["string"]);
liveSplitCoreNative.SettingValue_from_optional_string = emscriptenModule.cwrap('SettingValue_from_optional_string', "number", ["string"]);
liveSplitCoreNative.SettingValue_from_optional_empty_string = emscriptenModule.cwrap('SettingValue_from_optional_empty_string', "number", []);
liveSplitCoreNative.SettingValue_from_float = emscriptenModule.cwrap('SettingValue_from_float', "number", ["number"]);
liveSplitCoreNative.SettingValue_from_accuracy = emscriptenModule.cwrap('SettingValue_from_accuracy', "number", ["string"]);
liveSplitCoreNative.SettingValue_from_digits_format = emscriptenModule.cwrap('SettingValue_from_digits_format', "number", ["string"]);
liveSplitCoreNative.SettingValue_from_optional_timing_method = emscriptenModule.cwrap('SettingValue_from_optional_timing_method', "number", ["string"]);
liveSplitCoreNative.SettingValue_from_optional_empty_timing_method = emscriptenModule.cwrap('SettingValue_from_optional_empty_timing_method', "number", []);
liveSplitCoreNative.SettingValue_from_color = emscriptenModule.cwrap('SettingValue_from_color', "number", ["number", "number", "number", "number"]);
liveSplitCoreNative.SettingValue_from_optional_color = emscriptenModule.cwrap('SettingValue_from_optional_color', "number", ["number", "number", "number", "number"]);
liveSplitCoreNative.SettingValue_from_optional_empty_color = emscriptenModule.cwrap('SettingValue_from_optional_empty_color', "number", []);
liveSplitCoreNative.SettingValue_from_transparent_gradient = emscriptenModule.cwrap('SettingValue_from_transparent_gradient', "number", []);
liveSplitCoreNative.SettingValue_from_vertical_gradient = emscriptenModule.cwrap('SettingValue_from_vertical_gradient', "number", ["number", "number", "number", "number", "number", "number", "number", "number"]);
liveSplitCoreNative.SettingValue_from_horizontal_gradient = emscriptenModule.cwrap('SettingValue_from_horizontal_gradient', "number", ["number", "number", "number", "number", "number", "number", "number", "number"]);
liveSplitCoreNative.SettingValue_from_alternating_gradient = emscriptenModule.cwrap('SettingValue_from_alternating_gradient', "number", ["number", "number", "number", "number", "number", "number", "number", "number"]);
liveSplitCoreNative.SettingValue_from_alignment = emscriptenModule.cwrap('SettingValue_from_alignment', "number", ["string"]);
liveSplitCoreNative.SettingValue_from_column_start_with = emscriptenModule.cwrap('SettingValue_from_column_start_with', "number", ["string"]);
liveSplitCoreNative.SettingValue_from_column_update_with = emscriptenModule.cwrap('SettingValue_from_column_update_with', "number", ["string"]);
liveSplitCoreNative.SettingValue_from_column_update_trigger = emscriptenModule.cwrap('SettingValue_from_column_update_trigger', "number", ["string"]);
liveSplitCoreNative.SettingValue_drop = emscriptenModule.cwrap('SettingValue_drop', null, ["number"]);
liveSplitCoreNative.SharedTimer_drop = emscriptenModule.cwrap('SharedTimer_drop', null, ["number"]);
liveSplitCoreNative.SharedTimer_share = emscriptenModule.cwrap('SharedTimer_share', "number", ["number"]);
liveSplitCoreNative.SharedTimer_read = emscriptenModule.cwrap('SharedTimer_read', "number", ["number"]);
liveSplitCoreNative.SharedTimer_write = emscriptenModule.cwrap('SharedTimer_write', "number", ["number"]);
liveSplitCoreNative.SharedTimer_replace_inner = emscriptenModule.cwrap('SharedTimer_replace_inner', null, ["number", "number"]);
liveSplitCoreNative.SplitComponentState_columns_len = emscriptenModule.cwrap('SplitComponentState_columns_len', "number", ["number", "number"]);
liveSplitCoreNative.SplitsComponent_new = emscriptenModule.cwrap('SplitsComponent_new', "number", []);
liveSplitCoreNative.SplitsComponent_drop = emscriptenModule.cwrap('SplitsComponent_drop', null, ["number"]);
liveSplitCoreNative.SplitsComponent_into_generic = emscriptenModule.cwrap('SplitsComponent_into_generic', "number", ["number"]);
liveSplitCoreNative.SplitsComponent_state_as_json = emscriptenModule.cwrap('SplitsComponent_state_as_json', "string", ["number", "number", "number"]);
liveSplitCoreNative.SplitsComponent_state = emscriptenModule.cwrap('SplitsComponent_state', "number", ["number", "number", "number"]);
liveSplitCoreNative.SplitsComponent_scroll_up = emscriptenModule.cwrap('SplitsComponent_scroll_up', null, ["number"]);
liveSplitCoreNative.SplitsComponent_scroll_down = emscriptenModule.cwrap('SplitsComponent_scroll_down', null, ["number"]);
liveSplitCoreNative.SplitsComponent_set_visual_split_count = emscriptenModule.cwrap('SplitsComponent_set_visual_split_count', null, ["number", "number"]);
liveSplitCoreNative.SplitsComponent_set_split_preview_count = emscriptenModule.cwrap('SplitsComponent_set_split_preview_count', null, ["number", "number"]);
liveSplitCoreNative.SplitsComponent_set_always_show_last_split = emscriptenModule.cwrap('SplitsComponent_set_always_show_last_split', null, ["number", "number"]);
liveSplitCoreNative.SplitsComponent_set_separator_last_split = emscriptenModule.cwrap('SplitsComponent_set_separator_last_split', null, ["number", "number"]);
liveSplitCoreNative.SplitsComponentState_drop = emscriptenModule.cwrap('SplitsComponentState_drop', null, ["number"]);
liveSplitCoreNative.SplitsComponentState_final_separator_shown = emscriptenModule.cwrap('SplitsComponentState_final_separator_shown', "number", ["number"]);
liveSplitCoreNative.SplitsComponentState_len = emscriptenModule.cwrap('SplitsComponentState_len', "number", ["number"]);
liveSplitCoreNative.SplitsComponentState_icon_change_count = emscriptenModule.cwrap('SplitsComponentState_icon_change_count', "number", ["number"]);
liveSplitCoreNative.SplitsComponentState_icon_change_segment_index = emscriptenModule.cwrap('SplitsComponentState_icon_change_segment_index', "number", ["number", "number"]);
liveSplitCoreNative.SplitsComponentState_icon_change_icon = emscriptenModule.cwrap('SplitsComponentState_icon_change_icon', "string", ["number", "number"]);
liveSplitCoreNative.SplitsComponentState_name = emscriptenModule.cwrap('SplitsComponentState_name', "string", ["number", "number"]);
liveSplitCoreNative.SplitsComponentState_column_value = emscriptenModule.cwrap('SplitsComponentState_column_value', "string", ["number", "number", "number"]);
liveSplitCoreNative.SplitsComponentState_column_semantic_color = emscriptenModule.cwrap('SplitsComponentState_column_semantic_color', "string", ["number", "number", "number"]);
liveSplitCoreNative.SplitsComponentState_is_current_split = emscriptenModule.cwrap('SplitsComponentState_is_current_split', "number", ["number", "number"]);
liveSplitCoreNative.SumOfBestCleaner_drop = emscriptenModule.cwrap('SumOfBestCleaner_drop', null, ["number"]);
liveSplitCoreNative.SumOfBestCleaner_next_potential_clean_up = emscriptenModule.cwrap('SumOfBestCleaner_next_potential_clean_up', "number", ["number"]);
liveSplitCoreNative.SumOfBestCleaner_apply = emscriptenModule.cwrap('SumOfBestCleaner_apply', null, ["number", "number"]);
liveSplitCoreNative.SumOfBestComponent_new = emscriptenModule.cwrap('SumOfBestComponent_new', "number", []);
liveSplitCoreNative.SumOfBestComponent_drop = emscriptenModule.cwrap('SumOfBestComponent_drop', null, ["number"]);
liveSplitCoreNative.SumOfBestComponent_into_generic = emscriptenModule.cwrap('SumOfBestComponent_into_generic', "number", ["number"]);
liveSplitCoreNative.SumOfBestComponent_state_as_json = emscriptenModule.cwrap('SumOfBestComponent_state_as_json', "string", ["number", "number"]);
liveSplitCoreNative.SumOfBestComponent_state = emscriptenModule.cwrap('SumOfBestComponent_state', "number", ["number", "number"]);
liveSplitCoreNative.SumOfBestComponentState_drop = emscriptenModule.cwrap('SumOfBestComponentState_drop', null, ["number"]);
liveSplitCoreNative.SumOfBestComponentState_text = emscriptenModule.cwrap('SumOfBestComponentState_text', "string", ["number"]);
liveSplitCoreNative.SumOfBestComponentState_time = emscriptenModule.cwrap('SumOfBestComponentState_time', "string", ["number"]);
liveSplitCoreNative.TextComponent_new = emscriptenModule.cwrap('TextComponent_new', "number", []);
liveSplitCoreNative.TextComponent_drop = emscriptenModule.cwrap('TextComponent_drop', null, ["number"]);
liveSplitCoreNative.TextComponent_into_generic = emscriptenModule.cwrap('TextComponent_into_generic', "number", ["number"]);
liveSplitCoreNative.TextComponent_state_as_json = emscriptenModule.cwrap('TextComponent_state_as_json', "string", ["number"]);
liveSplitCoreNative.TextComponent_state = emscriptenModule.cwrap('TextComponent_state', "number", ["number"]);
liveSplitCoreNative.TextComponent_set_center = emscriptenModule.cwrap('TextComponent_set_center', null, ["number", "string"]);
liveSplitCoreNative.TextComponent_set_left = emscriptenModule.cwrap('TextComponent_set_left', null, ["number", "string"]);
liveSplitCoreNative.TextComponent_set_right = emscriptenModule.cwrap('TextComponent_set_right', null, ["number", "string"]);
liveSplitCoreNative.TextComponentState_drop = emscriptenModule.cwrap('TextComponentState_drop', null, ["number"]);
liveSplitCoreNative.TextComponentState_left = emscriptenModule.cwrap('TextComponentState_left', "string", ["number"]);
liveSplitCoreNative.TextComponentState_right = emscriptenModule.cwrap('TextComponentState_right', "string", ["number"]);
liveSplitCoreNative.TextComponentState_center = emscriptenModule.cwrap('TextComponentState_center', "string", ["number"]);
liveSplitCoreNative.TextComponentState_is_split = emscriptenModule.cwrap('TextComponentState_is_split', "number", ["number"]);
liveSplitCoreNative.Time_drop = emscriptenModule.cwrap('Time_drop', null, ["number"]);
liveSplitCoreNative.Time_clone = emscriptenModule.cwrap('Time_clone', "number", ["number"]);
liveSplitCoreNative.Time_real_time = emscriptenModule.cwrap('Time_real_time', "number", ["number"]);
liveSplitCoreNative.Time_game_time = emscriptenModule.cwrap('Time_game_time', "number", ["number"]);
liveSplitCoreNative.Time_index = emscriptenModule.cwrap('Time_index', "number", ["number", "number"]);
liveSplitCoreNative.TimeSpan_from_seconds = emscriptenModule.cwrap('TimeSpan_from_seconds', "number", ["number"]);
liveSplitCoreNative.TimeSpan_parse = emscriptenModule.cwrap('TimeSpan_parse', "number", ["string"]);
liveSplitCoreNative.TimeSpan_drop = emscriptenModule.cwrap('TimeSpan_drop', null, ["number"]);
liveSplitCoreNative.TimeSpan_clone = emscriptenModule.cwrap('TimeSpan_clone', "number", ["number"]);
liveSplitCoreNative.TimeSpan_total_seconds = emscriptenModule.cwrap('TimeSpan_total_seconds', "number", ["number"]);
liveSplitCoreNative.Timer_new = emscriptenModule.cwrap('Timer_new', "number", ["number"]);
liveSplitCoreNative.Timer_into_shared = emscriptenModule.cwrap('Timer_into_shared', "number", ["number"]);
liveSplitCoreNative.Timer_into_run = emscriptenModule.cwrap('Timer_into_run', "number", ["number", "number"]);
liveSplitCoreNative.Timer_drop = emscriptenModule.cwrap('Timer_drop', null, ["number"]);
liveSplitCoreNative.Timer_current_timing_method = emscriptenModule.cwrap('Timer_current_timing_method', "number", ["number"]);
liveSplitCoreNative.Timer_current_comparison = emscriptenModule.cwrap('Timer_current_comparison', "string", ["number"]);
liveSplitCoreNative.Timer_is_game_time_initialized = emscriptenModule.cwrap('Timer_is_game_time_initialized', "number", ["number"]);
liveSplitCoreNative.Timer_is_game_time_paused = emscriptenModule.cwrap('Timer_is_game_time_paused', "number", ["number"]);
liveSplitCoreNative.Timer_loading_times = emscriptenModule.cwrap('Timer_loading_times', "number", ["number"]);
liveSplitCoreNative.Timer_current_phase = emscriptenModule.cwrap('Timer_current_phase', "number", ["number"]);
liveSplitCoreNative.Timer_get_run = emscriptenModule.cwrap('Timer_get_run', "number", ["number"]);
liveSplitCoreNative.Timer_save_as_lss = emscriptenModule.cwrap('Timer_save_as_lss', "string", ["number"]);
liveSplitCoreNative.Timer_print_debug = emscriptenModule.cwrap('Timer_print_debug', null, ["number"]);
liveSplitCoreNative.Timer_current_time = emscriptenModule.cwrap('Timer_current_time', "number", ["number"]);
liveSplitCoreNative.Timer_replace_run = emscriptenModule.cwrap('Timer_replace_run', "number", ["number", "number", "number"]);
liveSplitCoreNative.Timer_set_run = emscriptenModule.cwrap('Timer_set_run', "number", ["number", "number"]);
liveSplitCoreNative.Timer_start = emscriptenModule.cwrap('Timer_start', null, ["number"]);
liveSplitCoreNative.Timer_split = emscriptenModule.cwrap('Timer_split', null, ["number"]);
liveSplitCoreNative.Timer_split_or_start = emscriptenModule.cwrap('Timer_split_or_start', null, ["number"]);
liveSplitCoreNative.Timer_skip_split = emscriptenModule.cwrap('Timer_skip_split', null, ["number"]);
liveSplitCoreNative.Timer_undo_split = emscriptenModule.cwrap('Timer_undo_split', null, ["number"]);
liveSplitCoreNative.Timer_reset = emscriptenModule.cwrap('Timer_reset', null, ["number", "number"]);
liveSplitCoreNative.Timer_reset_and_set_attempt_as_pb = emscriptenModule.cwrap('Timer_reset_and_set_attempt_as_pb', null, ["number"]);
liveSplitCoreNative.Timer_pause = emscriptenModule.cwrap('Timer_pause', null, ["number"]);
liveSplitCoreNative.Timer_resume = emscriptenModule.cwrap('Timer_resume', null, ["number"]);
liveSplitCoreNative.Timer_toggle_pause = emscriptenModule.cwrap('Timer_toggle_pause', null, ["number"]);
liveSplitCoreNative.Timer_toggle_pause_or_start = emscriptenModule.cwrap('Timer_toggle_pause_or_start', null, ["number"]);
liveSplitCoreNative.Timer_undo_all_pauses = emscriptenModule.cwrap('Timer_undo_all_pauses', null, ["number"]);
liveSplitCoreNative.Timer_set_current_timing_method = emscriptenModule.cwrap('Timer_set_current_timing_method', null, ["number", "number"]);
liveSplitCoreNative.Timer_switch_to_next_comparison = emscriptenModule.cwrap('Timer_switch_to_next_comparison', null, ["number"]);
liveSplitCoreNative.Timer_switch_to_previous_comparison = emscriptenModule.cwrap('Timer_switch_to_previous_comparison', null, ["number"]);
liveSplitCoreNative.Timer_initialize_game_time = emscriptenModule.cwrap('Timer_initialize_game_time', null, ["number"]);
liveSplitCoreNative.Timer_deinitialize_game_time = emscriptenModule.cwrap('Timer_deinitialize_game_time', null, ["number"]);
liveSplitCoreNative.Timer_pause_game_time = emscriptenModule.cwrap('Timer_pause_game_time', null, ["number"]);
liveSplitCoreNative.Timer_resume_game_time = emscriptenModule.cwrap('Timer_resume_game_time', null, ["number"]);
liveSplitCoreNative.Timer_set_game_time = emscriptenModule.cwrap('Timer_set_game_time', null, ["number", "number"]);
liveSplitCoreNative.Timer_set_loading_times = emscriptenModule.cwrap('Timer_set_loading_times', null, ["number", "number"]);
liveSplitCoreNative.Timer_mark_as_unmodified = emscriptenModule.cwrap('Timer_mark_as_unmodified', null, ["number"]);
liveSplitCoreNative.TimerComponent_new = emscriptenModule.cwrap('TimerComponent_new', "number", []);
liveSplitCoreNative.TimerComponent_drop = emscriptenModule.cwrap('TimerComponent_drop', null, ["number"]);
liveSplitCoreNative.TimerComponent_into_generic = emscriptenModule.cwrap('TimerComponent_into_generic', "number", ["number"]);
liveSplitCoreNative.TimerComponent_state_as_json = emscriptenModule.cwrap('TimerComponent_state_as_json', "string", ["number", "number", "number"]);
liveSplitCoreNative.TimerComponent_state = emscriptenModule.cwrap('TimerComponent_state', "number", ["number", "number", "number"]);
liveSplitCoreNative.TimerComponentState_drop = emscriptenModule.cwrap('TimerComponentState_drop', null, ["number"]);
liveSplitCoreNative.TimerComponentState_time = emscriptenModule.cwrap('TimerComponentState_time', "string", ["number"]);
liveSplitCoreNative.TimerComponentState_fraction = emscriptenModule.cwrap('TimerComponentState_fraction', "string", ["number"]);
liveSplitCoreNative.TimerComponentState_semantic_color = emscriptenModule.cwrap('TimerComponentState_semantic_color', "string", ["number"]);
liveSplitCoreNative.TimerReadLock_drop = emscriptenModule.cwrap('TimerReadLock_drop', null, ["number"]);
liveSplitCoreNative.TimerReadLock_timer = emscriptenModule.cwrap('TimerReadLock_timer', "number", ["number"]);
liveSplitCoreNative.TimerWriteLock_drop = emscriptenModule.cwrap('TimerWriteLock_drop', null, ["number"]);
liveSplitCoreNative.TimerWriteLock_timer = emscriptenModule.cwrap('TimerWriteLock_timer', "number", ["number"]);
liveSplitCoreNative.TitleComponent_new = emscriptenModule.cwrap('TitleComponent_new', "number", []);
liveSplitCoreNative.TitleComponent_drop = emscriptenModule.cwrap('TitleComponent_drop', null, ["number"]);
liveSplitCoreNative.TitleComponent_into_generic = emscriptenModule.cwrap('TitleComponent_into_generic', "number", ["number"]);
liveSplitCoreNative.TitleComponent_state_as_json = emscriptenModule.cwrap('TitleComponent_state_as_json', "string", ["number", "number"]);
liveSplitCoreNative.TitleComponent_state = emscriptenModule.cwrap('TitleComponent_state', "number", ["number", "number"]);
liveSplitCoreNative.TitleComponentState_drop = emscriptenModule.cwrap('TitleComponentState_drop', null, ["number"]);
liveSplitCoreNative.TitleComponentState_icon_change = emscriptenModule.cwrap('TitleComponentState_icon_change', "string", ["number"]);
liveSplitCoreNative.TitleComponentState_line1 = emscriptenModule.cwrap('TitleComponentState_line1', "string", ["number"]);
liveSplitCoreNative.TitleComponentState_line2 = emscriptenModule.cwrap('TitleComponentState_line2', "string", ["number"]);
liveSplitCoreNative.TitleComponentState_is_centered = emscriptenModule.cwrap('TitleComponentState_is_centered', "number", ["number"]);
liveSplitCoreNative.TitleComponentState_shows_finished_runs = emscriptenModule.cwrap('TitleComponentState_shows_finished_runs', "number", ["number"]);
liveSplitCoreNative.TitleComponentState_finished_runs = emscriptenModule.cwrap('TitleComponentState_finished_runs', "number", ["number"]);
liveSplitCoreNative.TitleComponentState_shows_attempts = emscriptenModule.cwrap('TitleComponentState_shows_attempts', "number", ["number"]);
liveSplitCoreNative.TitleComponentState_attempts = emscriptenModule.cwrap('TitleComponentState_attempts', "number", ["number"]);
liveSplitCoreNative.TotalPlaytimeComponent_new = emscriptenModule.cwrap('TotalPlaytimeComponent_new', "number", []);
liveSplitCoreNative.TotalPlaytimeComponent_drop = emscriptenModule.cwrap('TotalPlaytimeComponent_drop', null, ["number"]);
liveSplitCoreNative.TotalPlaytimeComponent_into_generic = emscriptenModule.cwrap('TotalPlaytimeComponent_into_generic', "number", ["number"]);
liveSplitCoreNative.TotalPlaytimeComponent_state_as_json = emscriptenModule.cwrap('TotalPlaytimeComponent_state_as_json', "string", ["number", "number"]);
liveSplitCoreNative.TotalPlaytimeComponent_state = emscriptenModule.cwrap('TotalPlaytimeComponent_state', "number", ["number", "number"]);
liveSplitCoreNative.TotalPlaytimeComponentState_drop = emscriptenModule.cwrap('TotalPlaytimeComponentState_drop', null, ["number"]);
liveSplitCoreNative.TotalPlaytimeComponentState_text = emscriptenModule.cwrap('TotalPlaytimeComponentState_text', "string", ["number"]);
liveSplitCoreNative.TotalPlaytimeComponentState_time = emscriptenModule.cwrap('TotalPlaytimeComponentState_time', "string", ["number"]);

/**
 * The analysis module provides a variety of functions for calculating
 * information about runs.
 */
class AnalysisRef {
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(Analysis)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            this.ptr = 0;
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
        if (run.ptr == 0) {
            throw "run is disposed";
        }
        const result = new TimeSpan(liveSplitCoreNative.Analysis_calculate_sum_of_best(run.ptr, simpleCalculation ? 1 : 0, useCurrentRun ? 1 : 0, method));
        if (result.ptr == 0) {
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
        if (run.ptr == 0) {
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
        if (timer.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.AtomicDateTime_is_synchronized(this.ptr) != 0;
        return result;
    }
    /**
     * Converts this atomic date time into a RFC 2822 formatted date time.
     * @return {string}
     */
    toRfc2822() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.AtomicDateTime_to_rfc3339(this.ptr);
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(AtomicDateTime)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.AtomicDateTime_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new TimeSpanRef(liveSplitCoreNative.Attempt_pause_time(this.ptr));
        if (result.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new AtomicDateTime(liveSplitCoreNative.Attempt_started(this.ptr));
        if (result.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new AtomicDateTime(liveSplitCoreNative.Attempt_ended(this.ptr));
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(Attempt)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            this.ptr = 0;
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
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(BlankSpaceComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.BlankSpaceComponent_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.BlankSpaceComponent_into_generic(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.BlankSpaceComponentState_size(this.ptr);
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(BlankSpaceComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.BlankSpaceComponentState_drop(this.ptr);
            this.ptr = 0;
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
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(Component)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.Component_drop(this.ptr);
            this.ptr = 0;
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
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(CurrentComparisonComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.CurrentComparisonComponent_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.CurrentComparisonComponent_into_generic(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.CurrentComparisonComponentState_comparison(this.ptr);
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(CurrentComparisonComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.CurrentComparisonComponentState_drop(this.ptr);
            this.ptr = 0;
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
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(CurrentPaceComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.CurrentPaceComponent_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.CurrentPaceComponent_into_generic(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.CurrentPaceComponentState_time(this.ptr);
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(CurrentPaceComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.CurrentPaceComponentState_drop(this.ptr);
            this.ptr = 0;
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
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
            throw "timer is disposed";
        }
        if (layoutSettings.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
            throw "timer is disposed";
        }
        if (layoutSettings.ptr == 0) {
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(DeltaComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.DeltaComponent_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.DeltaComponent_into_generic(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DeltaComponentState_semantic_color(this.ptr);
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(DeltaComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.DeltaComponentState_drop(this.ptr);
            this.ptr = 0;
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
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
            throw "timer is disposed";
        }
        if (layoutSettings.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
            throw "timer is disposed";
        }
        if (layoutSettings.ptr == 0) {
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(DetailedTimerComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.DetailedTimerComponent_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.DetailedTimerComponent_into_generic(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DetailedTimerComponentState_comparison1_visible(this.ptr) != 0;
        return result;
    }
    /**
     * Returns the name of the first comparison. You may not call this if the first
     * comparison is not visible.
     * @return {string}
     */
    comparison1Name() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DetailedTimerComponentState_comparison2_visible(this.ptr) != 0;
        return result;
    }
    /**
     * Returns the name of the second comparison. You may not call this if the
     * second comparison is not visible.
     * @return {string}
     */
    comparison2Name() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.DetailedTimerComponentState_segment_name(this.ptr);
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(DetailedTimerComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.DetailedTimerComponentState_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.FuzzyList_search(this.ptr, pattern, max);
        return JSON.parse(result);
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(FuzzyList)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.FuzzyList_drop(this.ptr);
            this.ptr = 0;
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
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(GeneralLayoutSettings)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.GeneralLayoutSettings_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
            throw "timer is disposed";
        }
        if (layoutSettings.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
            throw "timer is disposed";
        }
        if (layoutSettings.ptr == 0) {
            throw "layoutSettings is disposed";
        }
        const result = new GraphComponentState(liveSplitCoreNative.GraphComponent_state(this.ptr, timer.ptr, layoutSettings.ptr));
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(GraphComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.GraphComponent_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.GraphComponent_into_generic(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.GraphComponentState_point_is_best_segment(this.ptr, index) != 0;
        return result;
    }
    /**
     * Describes how many horizontal grid lines to visualize.
     * @return {number}
     */
    horizontalGridLinesLen() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.GraphComponentState_is_live_delta_active(this.ptr) != 0;
        return result;
    }
    /**
     * Describes whether the graph is flipped vertically. For visualizing the
     * graph, this usually doesn't need to be interpreted, as this information is
     * entirely encoded into the other variables.
     * @return {boolean}
     */
    isFlipped() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.GraphComponentState_is_flipped(this.ptr) != 0;
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(GraphComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.GraphComponentState_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.HotkeyConfig_as_json(this.ptr);
        return JSON.parse(result);
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (value.ptr == 0) {
            throw "value is disposed";
        }
        const result = liveSplitCoreNative.HotkeyConfig_set_value(this.ptr, index, value.ptr) != 0;
        value.ptr = 0;
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(HotkeyConfig)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.HotkeyConfig_drop(this.ptr);
            this.ptr = 0;
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
        if (result.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.HotkeySystem_deactivate(this.ptr);
    }
    /**
     * Activates a previously deactivated Hotkey System. If it's already
     * active, nothing happens.
     */
    activate() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.HotkeySystem_activate(this.ptr);
    }
    /**
     * Returns the hotkey configuration currently in use by the Hotkey System.
     * @return {HotkeyConfig}
     */
    config() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new HotkeyConfig(liveSplitCoreNative.HotkeySystem_config(this.ptr));
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (config.ptr == 0) {
            throw "config is disposed";
        }
        const result = liveSplitCoreNative.HotkeySystem_set_config(this.ptr, config.ptr) != 0;
        config.ptr = 0;
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(HotkeySystem)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.HotkeySystem_drop(this.ptr);
            this.ptr = 0;
        }
    }
    /**
     * Creates a new Hotkey System for a Timer with the default hotkeys.
     * @param {SharedTimer} sharedTimer
     * @return {HotkeySystem | null}
     */
    static new(sharedTimer) {
        if (sharedTimer.ptr == 0) {
            throw "sharedTimer is disposed";
        }
        const result = new HotkeySystem(liveSplitCoreNative.HotkeySystem_new(sharedTimer.ptr));
        sharedTimer.ptr = 0;
        if (result.ptr == 0) {
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
        if (sharedTimer.ptr == 0) {
            throw "sharedTimer is disposed";
        }
        if (config.ptr == 0) {
            throw "config is disposed";
        }
        const result = new HotkeySystem(liveSplitCoreNative.HotkeySystem_with_config(sharedTimer.ptr, config.ptr));
        sharedTimer.ptr = 0;
        config.ptr = 0;
        if (result.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Layout_settings_as_json(this.ptr);
        return JSON.parse(result);
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (component.ptr == 0) {
            throw "component is disposed";
        }
        liveSplitCoreNative.Layout_push(this.ptr, component.ptr);
        component.ptr = 0;
    }
    /**
     * Scrolls up all the components in the layout that can be scrolled up.
     */
    scrollUp() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Layout_scroll_up(this.ptr);
    }
    /**
     * Scrolls down all the components in the layout that can be scrolled down.
     */
    scrollDown() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(Layout)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.Layout_drop(this.ptr);
            this.ptr = 0;
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
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    /**
     * Parses a layout saved by the original LiveSplit. This is lossy, as not
     * everything can be converted completely. null is returned if it couldn't be
     * parsed at all.
     * @param {number} data
     * @param {number} length
     * @return {Layout | null}
     */
    static parseOriginalLivesplit(data, length) {
        const result = new Layout(liveSplitCoreNative.Layout_parse_original_livesplit(data, length));
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    /**
     * @param {Int8Array} data
     * @return {Layout | null}
     */
    static parseOriginalLivesplitArray(data) {
        const buf = emscriptenModule._malloc(data.length);
        try {
            emscriptenModule.writeArrayToMemory(data, buf);
            return Layout.parseOriginalLivesplit(buf, data.length);
        } finally {
            emscriptenModule._free(buf);
        }
    }
    /**
     * @param {string} text
     * @return {Layout | null}
     */
    static parseOriginalLivesplitString(text) {
        const len = (text.length << 2) + 1;
        const buf = emscriptenModule._malloc(len);
        try {
            const actualLen = emscriptenModule.stringToUTF8(text, buf, len);
            return Layout.parseOriginalLivesplit(buf, actualLen);
        } finally {
            emscriptenModule._free(buf);
        }
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.LayoutEditor_state_as_json(this.ptr);
        return JSON.parse(result);
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (component.ptr == 0) {
            throw "component is disposed";
        }
        liveSplitCoreNative.LayoutEditor_add_component(this.ptr, component.ptr);
        component.ptr = 0;
    }
    /**
     * Removes the currently selected component, unless there's only one
     * component in the layout. The next component becomes the selected
     * component. If there's none, the previous component becomes the selected
     * component instead.
     */
    removeComponent() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.LayoutEditor_remove_component(this.ptr);
    }
    /**
     * Moves the selected component up, unless the first component is selected.
     */
    moveComponentUp() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.LayoutEditor_move_component_up(this.ptr);
    }
    /**
     * Moves the selected component down, unless the last component is
     * selected.
     */
    moveComponentDown() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.LayoutEditor_move_component(this.ptr, dstIndex);
    }
    /**
     * Duplicates the currently selected component. The copy gets placed right
     * after the selected component and becomes the newly selected component.
     */
    duplicateComponent() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (value.ptr == 0) {
            throw "value is disposed";
        }
        liveSplitCoreNative.LayoutEditor_set_component_settings_value(this.ptr, index, value.ptr);
        value.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (value.ptr == 0) {
            throw "value is disposed";
        }
        liveSplitCoreNative.LayoutEditor_set_general_settings_value(this.ptr, index, value.ptr);
        value.ptr = 0;
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(LayoutEditor)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            this.ptr = 0;
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
        if (layout.ptr == 0) {
            throw "layout is disposed";
        }
        const result = new LayoutEditor(liveSplitCoreNative.LayoutEditor_new(layout.ptr));
        layout.ptr = 0;
        if (result.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Layout(liveSplitCoreNative.LayoutEditor_close(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.ParseRunResult_parsed_successfully(this.ptr) != 0;
        return result;
    }
    /**
     * Accesses the name of the Parser that parsed the Run. You may not call this
     * if the Run wasn't parsed successfully.
     * @return {string}
     */
    timerKind() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.ParseRunResult_is_generic_timer(this.ptr) != 0;
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(ParseRunResult)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.ParseRunResult_drop(this.ptr);
            this.ptr = 0;
        }
    }
    /**
     * Moves the actual Run object out of the Result. You may not call this if the
     * Run wasn't parsed successfully.
     * @return {Run}
     */
    unwrap() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Run(liveSplitCoreNative.ParseRunResult_unwrap(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
            throw "timer is disposed";
        }
        const result = new PossibleTimeSaveComponentState(liveSplitCoreNative.PossibleTimeSaveComponent_state(this.ptr, timer.ptr));
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(PossibleTimeSaveComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.PossibleTimeSaveComponent_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.PossibleTimeSaveComponent_into_generic(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.PossibleTimeSaveComponentState_time(this.ptr);
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(PossibleTimeSaveComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.PossibleTimeSaveComponentState_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.PotentialCleanUp_message(this.ptr);
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(PotentialCleanUp)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.PotentialCleanUp_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
            throw "timer is disposed";
        }
        if (layoutSettings.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
            throw "timer is disposed";
        }
        if (layoutSettings.ptr == 0) {
            throw "layoutSettings is disposed";
        }
        const result = new PreviousSegmentComponentState(liveSplitCoreNative.PreviousSegmentComponent_state(this.ptr, timer.ptr, layoutSettings.ptr));
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(PreviousSegmentComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.PreviousSegmentComponent_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.PreviousSegmentComponent_into_generic(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.PreviousSegmentComponentState_semantic_color(this.ptr);
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(PreviousSegmentComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.PreviousSegmentComponentState_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_extended_file_name(this.ptr, useExtendedCategoryName ? 1 : 0);
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_extended_name(this.ptr, useExtendedCategoryName ? 1 : 0);
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_extended_category_name(this.ptr, showRegion ? 1 : 0, showPlatform ? 1 : 0, showVariables ? 1 : 0);
        return result;
    }
    /**
     * Returns the amount of runs that have been attempted with these splits.
     * @return {number}
     */
    attemptCount() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_has_been_modified(this.ptr) != 0;
        return result;
    }
    /**
     * Accesses a certain segment of this Run. You may not provide an out of bounds
     * index.
     * @param {number} index
     * @return {SegmentRef}
     */
    segment(index) {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Run_auto_splitter_settings(this.ptr);
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (segment.ptr == 0) {
            throw "segment is disposed";
        }
        liveSplitCoreNative.Run_push_segment(this.ptr, segment.ptr);
        segment.ptr = 0;
    }
    /**
     * Sets the name of the game this Run is for.
     * @param {string} game
     */
    setGameName(game) {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Run_set_game_name(this.ptr, game);
    }
    /**
     * Sets the name of the category this Run is for.
     * @param {string} category
     */
    setCategoryName(category) {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Run_set_category_name(this.ptr, category);
    }
    /**
     * Marks the Run as modified, so that it is known that there are changes
     * that should be saved.
     */
    markAsModified() {
        if (this.ptr == 0) {
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(Run)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.Run_drop(this.ptr);
            this.ptr = 0;
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
     * @param {number} data
     * @param {number} length
     * @param {string} path
     * @param {boolean} loadFiles
     * @return {ParseRunResult}
     */
    static parse(data, length, path, loadFiles) {
        const result = new ParseRunResult(liveSplitCoreNative.Run_parse(data, length, path, loadFiles ? 1 : 0));
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
        const result = new ParseRunResult(liveSplitCoreNative.Run_parse_file_handle(handle, path, loadFiles ? 1 : 0));
        return result;
    }
    /**
     * @param {Int8Array} data
     * @param {string} path
     * @param {boolean} loadFiles
     * @return {ParseRunResult}
     */
    static parseArray(data, path, loadFiles) {
        const buf = emscriptenModule._malloc(data.length);
        try {
            emscriptenModule.writeArrayToMemory(data, buf);
            const ptr = liveSplitCoreNative.Run_parse(buf, data.length, path, loadFiles ? 1 : 0);
            return new ParseRunResult(ptr);
        } finally {
            emscriptenModule._free(buf);
        }
    }
    /**
     * @param {string} text
     * @param {string} path
     * @param {boolean} loadFiles
     * @return {ParseRunResult}
     */
    static parseString(text, path, loadFiles) {
        const len = (text.length << 2) + 1;
        const buf = emscriptenModule._malloc(len);
        try {
            const actualLen = emscriptenModule.stringToUTF8(text, buf, len);
            const ptr = liveSplitCoreNative.Run_parse(buf, actualLen, path, loadFiles ? 1 : 0);
            return new ParseRunResult(ptr);
        } finally {
            emscriptenModule._free(buf);
        }
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
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_select_only(this.ptr, index);
    }
    /**
     * Sets the name of the game.
     * @param {string} game
     */
    setGameName(game) {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_set_game_name(this.ptr, game);
    }
    /**
     * Sets the name of the category.
     * @param {string} category
     */
    setCategoryName(category) {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_parse_and_set_offset(this.ptr, offset) != 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_parse_and_set_attempt_count(this.ptr, attempts) != 0;
        return result;
    }
    /**
     * Sets the game's icon.
     * @param {number} data
     * @param {number} length
     */
    setGameIcon(data, length) {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_set_game_icon(this.ptr, data, length);
    }
    /**
     * Removes the game's icon.
     */
    removeGameIcon() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_set_emulator_usage(this.ptr, usesEmulator ? 1 : 0);
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_set_variable(this.ptr, name, value);
    }
    /**
     * Removes the variable with the name specified.
     * @param {string} name
     */
    removeVariable(name) {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_remove_variable(this.ptr, name);
    }
    /**
     * Resets all the Metadata Information.
     */
    clearMetadata() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_move_segments_down(this.ptr);
    }
    /**
     * Sets the icon of the active segment.
     * @param {number} data
     * @param {number} length
     */
    activeSetIcon(data, length) {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_active_set_icon(this.ptr, data, length);
    }
    /**
     * Removes the icon of the active segment.
     */
    activeRemoveIcon() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.RunEditor_active_remove_icon(this.ptr);
    }
    /**
     * Sets the name of the active segment.
     * @param {string} name
     */
    activeSetName(name) {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_active_parse_and_set_split_time(this.ptr, time) != 0;
        return result;
    }
    /**
     * Parses a segment time from a string and sets it for the active segment with
     * the chosen timing method.
     * @param {string} time
     * @return {boolean}
     */
    activeParseAndSetSegmentTime(time) {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_active_parse_and_set_segment_time(this.ptr, time) != 0;
        return result;
    }
    /**
     * Parses a best segment time from a string and sets it for the active segment
     * with the chosen timing method.
     * @param {string} time
     * @return {boolean}
     */
    activeParseAndSetBestSegmentTime(time) {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_active_parse_and_set_best_segment_time(this.ptr, time) != 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_active_parse_and_set_comparison_time(this.ptr, comparison, time) != 0;
        return result;
    }
    /**
     * Adds a new custom comparison. It can't be added if it starts with
     * `[Race]` or already exists.
     * @param {string} comparison
     * @return {boolean}
     */
    addComparison(comparison) {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_add_comparison(this.ptr, comparison) != 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (run.ptr == 0) {
            throw "run is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_import_comparison(this.ptr, run.ptr, comparison) != 0;
        return result;
    }
    /**
     * Removes the chosen custom comparison. You can't remove a Comparison
     * Generator's Comparison or the Personal Best.
     * @param {string} comparison
     */
    removeComparison(comparison) {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_rename_comparison(this.ptr, oldName, newName) != 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunEditor_move_comparison(this.ptr, srcIndex, dstIndex) != 0;
        return result;
    }
    /**
     * Clears out the Attempt History and the Segment Histories of all the
     * segments.
     */
    clearHistory() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new SumOfBestCleaner(liveSplitCoreNative.RunEditor_clean_sum_of_best(this.ptr));
        return result;
    }
    /**
     * @param {Int8Array} data
     */
    setGameIconFromArray(data) {
        const buf = emscriptenModule._malloc(data.length);
        try {
            emscriptenModule.writeArrayToMemory(data, buf);
            this.setGameIcon(buf, data.length);
        } finally {
            emscriptenModule._free(buf);
        }
    }
    /**
     * @param {Int8Array} data
     */
    activeSetIconFromArray(data) {
        const buf = emscriptenModule._malloc(data.length);
        try {
            emscriptenModule.writeArrayToMemory(data, buf);
            this.activeSetIcon(buf, data.length);
        } finally {
            emscriptenModule._free(buf);
        }
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(RunEditor)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            this.ptr = 0;
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
        if (run.ptr == 0) {
            throw "run is disposed";
        }
        const result = new RunEditor(liveSplitCoreNative.RunEditor_new(run.ptr));
        run.ptr = 0;
        if (result.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Run(liveSplitCoreNative.RunEditor_close(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunMetadata_uses_emulator(this.ptr) != 0;
        return result;
    }
    /**
     * Accesses the name of the region this game is from. This may be empty if
     * it's not specified.
     * @return {string}
     */
    regionName() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new RunMetadataVariablesIter(liveSplitCoreNative.RunMetadata_variables(this.ptr));
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(RunMetadata)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.RunMetadataVariable_value(this.ptr);
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(RunMetadataVariable)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.RunMetadataVariable_drop(this.ptr);
            this.ptr = 0;
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
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new RunMetadataVariableRef(liveSplitCoreNative.RunMetadataVariablesIter_next(this.ptr));
        if (result.ptr == 0) {
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(RunMetadataVariablesIter)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.RunMetadataVariablesIter_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new SegmentHistoryRef(liveSplitCoreNative.Segment_segment_history(this.ptr));
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(Segment)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.Segment_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new SegmentHistoryIter(liveSplitCoreNative.SegmentHistory_iter(this.ptr));
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(SegmentHistory)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new TimeRef(liveSplitCoreNative.SegmentHistoryElement_time(this.ptr));
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(SegmentHistoryElement)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            this.ptr = 0;
        }
    }
}
exports.SegmentHistoryElement = SegmentHistoryElement;

/**
 * Iterates over all the segment times of a segment and their indices.
 */
class SegmentHistoryIterRef {
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new SegmentHistoryElementRef(liveSplitCoreNative.SegmentHistoryIter_next(this.ptr));
        if (result.ptr == 0) {
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(SegmentHistoryIter)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.SegmentHistoryIter_drop(this.ptr);
            this.ptr = 0;
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
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(SeparatorComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.SeparatorComponent_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.SeparatorComponent_into_generic(this.ptr));
        this.ptr = 0;
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
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(SettingValue)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.SettingValue_drop(this.ptr);
            this.ptr = 0;
        }
    }
    /**
     * Creates a new setting value from a boolean value.
     * @param {boolean} value
     * @return {SettingValue}
     */
    static fromBool(value) {
        const result = new SettingValue(liveSplitCoreNative.SettingValue_from_bool(value ? 1 : 0));
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
        if (result.ptr == 0) {
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
        if (result.ptr == 0) {
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
        if (result.ptr == 0) {
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
        if (result.ptr == 0) {
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
        if (result.ptr == 0) {
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
        if (result.ptr == 0) {
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
        if (result.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
            throw "timer is disposed";
        }
        liveSplitCoreNative.SharedTimer_replace_inner(this.ptr, timer.ptr);
        timer.ptr = 0;
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
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(SharedTimer)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.SharedTimer_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.SplitComponentState_columns_len(this.ptr, index);
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(SplitComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            this.ptr = 0;
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
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
            throw "timer is disposed";
        }
        if (layoutSettings.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
            throw "timer is disposed";
        }
        if (layoutSettings.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.SplitsComponent_scroll_up(this.ptr);
    }
    /**
     * Scrolls down the window of the segments that are shown. Doesn't move the
     * scroll window if it reaches the bottom of the segments.
     */
    scrollDown() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.SplitsComponent_set_always_show_last_split(this.ptr, alwaysShowLastSplit ? 1 : 0);
    }
    /**
     * If the last segment is to always be shown, this determines whether to
     * show a more pronounced separator in front of the last segment, if it is
     * not directly adjacent to the segment shown right before it in the
     * scrolling window.
     * @param {boolean} separatorLastSplit
     */
    setSeparatorLastSplit(separatorLastSplit) {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.SplitsComponent_set_separator_last_split(this.ptr, separatorLastSplit ? 1 : 0);
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(SplitsComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.SplitsComponent_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.SplitsComponent_into_generic(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.SplitsComponentState_final_separator_shown(this.ptr) != 0;
        return result;
    }
    /**
     * Returns the amount of segments to visualize.
     * @return {number}
     */
    len() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.SplitsComponentState_is_current_split(this.ptr, index) != 0;
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(SplitsComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.SplitsComponentState_drop(this.ptr);
            this.ptr = 0;
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
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new PotentialCleanUp(liveSplitCoreNative.SumOfBestCleaner_next_potential_clean_up(this.ptr));
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    /**
     * Applies a clean up to the Run.
     * @param {PotentialCleanUp} cleanUp
     */
    apply(cleanUp) {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (cleanUp.ptr == 0) {
            throw "cleanUp is disposed";
        }
        liveSplitCoreNative.SumOfBestCleaner_apply(this.ptr, cleanUp.ptr);
        cleanUp.ptr = 0;
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(SumOfBestCleaner)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.SumOfBestCleaner_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
            throw "timer is disposed";
        }
        const result = new SumOfBestComponentState(liveSplitCoreNative.SumOfBestComponent_state(this.ptr, timer.ptr));
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(SumOfBestComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.SumOfBestComponent_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.SumOfBestComponent_into_generic(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.SumOfBestComponentState_time(this.ptr);
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(SumOfBestComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.SumOfBestComponentState_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new TextComponentState(liveSplitCoreNative.TextComponent_state(this.ptr));
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(TextComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.TextComponent_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.TextComponent_into_generic(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TextComponentState_is_split(this.ptr) != 0;
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(TextComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.TextComponentState_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new TimeSpanRef(liveSplitCoreNative.Time_real_time(this.ptr));
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    /**
     * The Game Time value. This may be null if this time has no Game Time value.
     * @return {TimeSpanRef | null}
     */
    gameTime() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new TimeSpanRef(liveSplitCoreNative.Time_game_time(this.ptr));
        if (result.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new TimeSpanRef(liveSplitCoreNative.Time_index(this.ptr, timingMethod));
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(Time)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.Time_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TimeSpan_total_seconds(this.ptr);
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(TimeSpan)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.TimeSpan_drop(this.ptr);
            this.ptr = 0;
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
        if (result.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Timer_is_game_time_initialized(this.ptr) != 0;
        return result;
    }
    /**
     * Returns whether the Game Timer is currently paused. If the Game Timer is
     * not paused, it automatically increments similar to Real Time.
     * @return {boolean}
     */
    isGameTimePaused() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.Timer_is_game_time_paused(this.ptr) != 0;
        return result;
    }
    /**
     * Accesses the loading times. Loading times are defined as Game Time - Real Time.
     * @return {TimeSpanRef}
     */
    loadingTimes() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new TimeRef(liveSplitCoreNative.Timer_current_time(this.ptr));
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (run.ptr == 0) {
            throw "run is disposed";
        }
        const result = liveSplitCoreNative.Timer_replace_run(this.ptr, run.ptr, updateSplits ? 1 : 0) != 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (run.ptr == 0) {
            throw "run is disposed";
        }
        const result = new Run(liveSplitCoreNative.Timer_set_run(this.ptr, run.ptr));
        run.ptr = 0;
        if (result.ptr == 0) {
            return null;
        }
        return result;
    }
    /**
     * Starts the Timer if there is no attempt in progress. If that's not the
     * case, nothing happens.
     */
    start() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_start(this.ptr);
    }
    /**
     * If an attempt is in progress, stores the current time as the time of the
     * current split. The attempt ends if the last split time is stored.
     */
    split() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_split(this.ptr);
    }
    /**
     * Starts a new attempt or stores the current time as the time of the
     * current split. The attempt ends if the last split time is stored.
     */
    splitOrStart() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_split_or_start(this.ptr);
    }
    /**
     * Skips the current split if an attempt is in progress and the
     * current split is not the last split.
     */
    skipSplit() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_reset(this.ptr, updateSplits ? 1 : 0);
    }
    /**
     * Resets the current attempt if there is one in progress. The splits are
     * updated such that the current attempt's split times are being stored as
     * the new Personal Best.
     */
    resetAndSetAttemptAsPb() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_reset_and_set_attempt_as_pb(this.ptr);
    }
    /**
     * Pauses an active attempt that is not paused.
     */
    pause() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_pause(this.ptr);
    }
    /**
     * Resumes an attempt that is paused.
     */
    resume() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_resume(this.ptr);
    }
    /**
     * Toggles an active attempt between `Paused` and `Running`.
     */
    togglePause() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_toggle_pause(this.ptr);
    }
    /**
     * Toggles an active attempt between `Paused` and `Running` or starts an
     * attempt if there's none in progress.
     */
    togglePauseOrStart() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_undo_all_pauses(this.ptr);
    }
    /**
     * Sets the current Timing Method to the Timing Method provided.
     * @param {number} method
     */
    setCurrentTimingMethod(method) {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_set_current_timing_method(this.ptr, method);
    }
    /**
     * Switches the current comparison to the next comparison in the list.
     */
    switchToNextComparison() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_switch_to_next_comparison(this.ptr);
    }
    /**
     * Switches the current comparison to the previous comparison in the list.
     */
    switchToPreviousComparison() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_switch_to_previous_comparison(this.ptr);
    }
    /**
     * Initializes Game Time for the current attempt. Game Time automatically
     * gets uninitialized for each new attempt.
     */
    initializeGameTime() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_initialize_game_time(this.ptr);
    }
    /**
     * Deinitializes Game Time for the current attempt.
     */
    deinitializeGameTime() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_deinitialize_game_time(this.ptr);
    }
    /**
     * Pauses the Game Timer such that it doesn't automatically increment
     * similar to Real Time.
     */
    pauseGameTime() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        liveSplitCoreNative.Timer_pause_game_time(this.ptr);
    }
    /**
     * Resumes the Game Timer such that it automatically increments similar to
     * Real Time, starting from the Game Time it was paused at.
     */
    resumeGameTime() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (time.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (time.ptr == 0) {
            throw "time is disposed";
        }
        liveSplitCoreNative.Timer_set_loading_times(this.ptr, time.ptr);
    }
    /**
     * Marks the Run as unmodified, so that it is known that all the changes
     * have been saved.
     */
    markAsUnmodified() {
        if (this.ptr == 0) {
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(Timer)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.Timer_drop(this.ptr);
            this.ptr = 0;
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
        if (run.ptr == 0) {
            throw "run is disposed";
        }
        const result = new Timer(liveSplitCoreNative.Timer_new(run.ptr));
        run.ptr = 0;
        if (result.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new SharedTimer(liveSplitCoreNative.Timer_into_shared(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Run(liveSplitCoreNative.Timer_into_run(this.ptr, updateSplits ? 1 : 0));
        this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
            throw "timer is disposed";
        }
        if (layoutSettings.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
            throw "timer is disposed";
        }
        if (layoutSettings.ptr == 0) {
            throw "layoutSettings is disposed";
        }
        const result = new TimerComponentState(liveSplitCoreNative.TimerComponent_state(this.ptr, timer.ptr, layoutSettings.ptr));
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(TimerComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.TimerComponent_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.TimerComponent_into_generic(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TimerComponentState_semantic_color(this.ptr);
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(TimerComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.TimerComponentState_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new TimerRef(liveSplitCoreNative.TimerReadLock_timer(this.ptr));
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(TimerReadLock)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.TimerReadLock_drop(this.ptr);
            this.ptr = 0;
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
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(TimerWriteLock)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.TimerWriteLock_drop(this.ptr);
            this.ptr = 0;
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
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(TitleComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.TitleComponent_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.TitleComponent_into_generic(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TitleComponentState_is_centered(this.ptr) != 0;
        return result;
    }
    /**
     * Returns whether the amount of successfully finished attempts is supposed to
     * be shown.
     * @return {boolean}
     */
    showsFinishedRuns() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TitleComponentState_shows_finished_runs(this.ptr) != 0;
        return result;
    }
    /**
     * Returns the amount of successfully finished attempts.
     * @return {number}
     */
    finishedRuns() {
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TitleComponentState_shows_attempts(this.ptr) != 0;
        return result;
    }
    /**
     * Returns the amount of total attempts.
     * @return {number}
     */
    attempts() {
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TitleComponentState_attempts(this.ptr);
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(TitleComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.TitleComponentState_drop(this.ptr);
            this.ptr = 0;
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
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        if (timer.ptr == 0) {
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(TotalPlaytimeComponent)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.TotalPlaytimeComponent_drop(this.ptr);
            this.ptr = 0;
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = new Component(liveSplitCoreNative.TotalPlaytimeComponent_into_generic(this.ptr));
        this.ptr = 0;
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
        if (this.ptr == 0) {
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
        if (this.ptr == 0) {
            throw "this is disposed";
        }
        const result = liveSplitCoreNative.TotalPlaytimeComponentState_time(this.ptr);
        return result;
    }
    /**
     * This constructor is an implementation detail. Do not use this.
     * @param {number} ptr
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
     * Allows for scoped usage of the object. The object is guaranteed to get
     * disposed once this function returns. You are free to dispose the object
     * early yourself anywhere within the scope. The scope's return value gets
     * carried to the outside of this function.
     * @param {function(TotalPlaytimeComponentState)} closure
     */
    with(closure) {
        try {
            return closure(this);
        } finally {
            this.dispose();
        }
    }
    /**
     * Disposes the object, allowing it to clean up all of its memory. You need
     * to call this for every object that you don't use anymore and hasn't
     * already been disposed.
     */
    dispose() {
        if (this.ptr != 0) {
            liveSplitCoreNative.TotalPlaytimeComponentState_drop(this.ptr);
            this.ptr = 0;
        }
    }
}
exports.TotalPlaytimeComponentState = TotalPlaytimeComponentState;
