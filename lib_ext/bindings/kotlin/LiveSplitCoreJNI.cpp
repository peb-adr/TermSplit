#include <jni.h>
#include <string>
#include "livesplit_core.h"

using namespace LiveSplit;

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Run_1parseString(JNIEnv* jni_env, jobject, jstring data, jstring path, jboolean load_files) {
    auto cstr_data = jni_env->GetStringUTFChars(data, nullptr);
    auto cstr_path = jni_env->GetStringUTFChars(path, nullptr);
    auto result = (jlong)Run_parse(cstr_data, strlen(cstr_data), cstr_path, (uint8_t)load_files);
    jni_env->ReleaseStringUTFChars(path, cstr_path);
    jni_env->ReleaseStringUTFChars(data, cstr_data);
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Analysis_1calculateSumOfBest(JNIEnv* jni_env, jobject, jlong run, jboolean simple_calculation, jboolean use_current_run, jbyte method) {
    auto result = (jlong)(Analysis_calculate_sum_of_best((RunRef)run, (bool)simple_calculation, (bool)use_current_run, (uint8_t)method));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Analysis_1calculateTotalPlaytimeForRun(JNIEnv* jni_env, jobject, jlong run) {
    auto result = (jlong)(Analysis_calculate_total_playtime_for_run((RunRef)run));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Analysis_1calculateTotalPlaytimeForTimer(JNIEnv* jni_env, jobject, jlong timer) {
    auto result = (jlong)(Analysis_calculate_total_playtime_for_timer((TimerRef)timer));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_AtomicDateTime_1drop(JNIEnv* jni_env, jobject, jlong self) {
    AtomicDateTime_drop((AtomicDateTime)self);
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_AtomicDateTime_1isSynchronized(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jboolean)(AtomicDateTime_is_synchronized((AtomicDateTimeRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_AtomicDateTime_1toRfc2822(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(AtomicDateTime_to_rfc2822((AtomicDateTimeRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_AtomicDateTime_1toRfc3339(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(AtomicDateTime_to_rfc3339((AtomicDateTimeRef)self));
    return result;
}

extern "C" JNIEXPORT jint Java_livesplitcore_LiveSplitCoreNative_Attempt_1index(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jint)(Attempt_index((AttemptRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Attempt_1time(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Attempt_time((AttemptRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Attempt_1pauseTime(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Attempt_pause_time((AttemptRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Attempt_1started(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Attempt_started((AttemptRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Attempt_1ended(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Attempt_ended((AttemptRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_BlankSpaceComponent_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(BlankSpaceComponent_new());
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_BlankSpaceComponent_1drop(JNIEnv* jni_env, jobject, jlong self) {
    BlankSpaceComponent_drop((BlankSpaceComponent)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_BlankSpaceComponent_1intoGeneric(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(BlankSpaceComponent_into_generic((BlankSpaceComponent)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_BlankSpaceComponent_1stateAsJson(JNIEnv* jni_env, jobject, jlong self, jlong timer) {
    auto result = jni_env->NewStringUTF(BlankSpaceComponent_state_as_json((BlankSpaceComponentRefMut)self, (TimerRef)timer));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_BlankSpaceComponent_1state(JNIEnv* jni_env, jobject, jlong self, jlong timer) {
    auto result = (jlong)(BlankSpaceComponent_state((BlankSpaceComponentRefMut)self, (TimerRef)timer));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_BlankSpaceComponentState_1drop(JNIEnv* jni_env, jobject, jlong self) {
    BlankSpaceComponentState_drop((BlankSpaceComponentState)self);
}

extern "C" JNIEXPORT jint Java_livesplitcore_LiveSplitCoreNative_BlankSpaceComponentState_1size(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jint)(BlankSpaceComponentState_size((BlankSpaceComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Component_1drop(JNIEnv* jni_env, jobject, jlong self) {
    Component_drop((Component)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_CurrentComparisonComponent_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(CurrentComparisonComponent_new());
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_CurrentComparisonComponent_1drop(JNIEnv* jni_env, jobject, jlong self) {
    CurrentComparisonComponent_drop((CurrentComparisonComponent)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_CurrentComparisonComponent_1intoGeneric(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(CurrentComparisonComponent_into_generic((CurrentComparisonComponent)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_CurrentComparisonComponent_1stateAsJson(JNIEnv* jni_env, jobject, jlong self, jlong timer) {
    auto result = jni_env->NewStringUTF(CurrentComparisonComponent_state_as_json((CurrentComparisonComponentRefMut)self, (TimerRef)timer));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_CurrentComparisonComponent_1state(JNIEnv* jni_env, jobject, jlong self, jlong timer) {
    auto result = (jlong)(CurrentComparisonComponent_state((CurrentComparisonComponentRefMut)self, (TimerRef)timer));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_CurrentComparisonComponentState_1drop(JNIEnv* jni_env, jobject, jlong self) {
    CurrentComparisonComponentState_drop((CurrentComparisonComponentState)self);
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_CurrentComparisonComponentState_1text(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(CurrentComparisonComponentState_text((CurrentComparisonComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_CurrentComparisonComponentState_1comparison(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(CurrentComparisonComponentState_comparison((CurrentComparisonComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_CurrentPaceComponent_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(CurrentPaceComponent_new());
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_CurrentPaceComponent_1drop(JNIEnv* jni_env, jobject, jlong self) {
    CurrentPaceComponent_drop((CurrentPaceComponent)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_CurrentPaceComponent_1intoGeneric(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(CurrentPaceComponent_into_generic((CurrentPaceComponent)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_CurrentPaceComponent_1stateAsJson(JNIEnv* jni_env, jobject, jlong self, jlong timer) {
    auto result = jni_env->NewStringUTF(CurrentPaceComponent_state_as_json((CurrentPaceComponentRefMut)self, (TimerRef)timer));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_CurrentPaceComponent_1state(JNIEnv* jni_env, jobject, jlong self, jlong timer) {
    auto result = (jlong)(CurrentPaceComponent_state((CurrentPaceComponentRefMut)self, (TimerRef)timer));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_CurrentPaceComponentState_1drop(JNIEnv* jni_env, jobject, jlong self) {
    CurrentPaceComponentState_drop((CurrentPaceComponentState)self);
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_CurrentPaceComponentState_1text(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(CurrentPaceComponentState_text((CurrentPaceComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_CurrentPaceComponentState_1time(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(CurrentPaceComponentState_time((CurrentPaceComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_DeltaComponent_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(DeltaComponent_new());
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_DeltaComponent_1drop(JNIEnv* jni_env, jobject, jlong self) {
    DeltaComponent_drop((DeltaComponent)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_DeltaComponent_1intoGeneric(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(DeltaComponent_into_generic((DeltaComponent)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_DeltaComponent_1stateAsJson(JNIEnv* jni_env, jobject, jlong self, jlong timer, jlong layout_settings) {
    auto result = jni_env->NewStringUTF(DeltaComponent_state_as_json((DeltaComponentRefMut)self, (TimerRef)timer, (GeneralLayoutSettingsRef)layout_settings));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_DeltaComponent_1state(JNIEnv* jni_env, jobject, jlong self, jlong timer, jlong layout_settings) {
    auto result = (jlong)(DeltaComponent_state((DeltaComponentRefMut)self, (TimerRef)timer, (GeneralLayoutSettingsRef)layout_settings));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_DeltaComponentState_1drop(JNIEnv* jni_env, jobject, jlong self) {
    DeltaComponentState_drop((DeltaComponentState)self);
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_DeltaComponentState_1text(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(DeltaComponentState_text((DeltaComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_DeltaComponentState_1time(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(DeltaComponentState_time((DeltaComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_DeltaComponentState_1semanticColor(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(DeltaComponentState_semantic_color((DeltaComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponent_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(DetailedTimerComponent_new());
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponent_1drop(JNIEnv* jni_env, jobject, jlong self) {
    DetailedTimerComponent_drop((DetailedTimerComponent)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponent_1intoGeneric(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(DetailedTimerComponent_into_generic((DetailedTimerComponent)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponent_1stateAsJson(JNIEnv* jni_env, jobject, jlong self, jlong timer, jlong layout_settings) {
    auto result = jni_env->NewStringUTF(DetailedTimerComponent_state_as_json((DetailedTimerComponentRefMut)self, (TimerRef)timer, (GeneralLayoutSettingsRef)layout_settings));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponent_1state(JNIEnv* jni_env, jobject, jlong self, jlong timer, jlong layout_settings) {
    auto result = (jlong)(DetailedTimerComponent_state((DetailedTimerComponentRefMut)self, (TimerRef)timer, (GeneralLayoutSettingsRef)layout_settings));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponentState_1drop(JNIEnv* jni_env, jobject, jlong self) {
    DetailedTimerComponentState_drop((DetailedTimerComponentState)self);
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponentState_1timerTime(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(DetailedTimerComponentState_timer_time((DetailedTimerComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponentState_1timerFraction(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(DetailedTimerComponentState_timer_fraction((DetailedTimerComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponentState_1timerSemanticColor(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(DetailedTimerComponentState_timer_semantic_color((DetailedTimerComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponentState_1segmentTimerTime(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(DetailedTimerComponentState_segment_timer_time((DetailedTimerComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponentState_1segmentTimerFraction(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(DetailedTimerComponentState_segment_timer_fraction((DetailedTimerComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponentState_1comparison1Visible(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jboolean)(DetailedTimerComponentState_comparison1_visible((DetailedTimerComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponentState_1comparison1Name(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(DetailedTimerComponentState_comparison1_name((DetailedTimerComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponentState_1comparison1Time(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(DetailedTimerComponentState_comparison1_time((DetailedTimerComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponentState_1comparison2Visible(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jboolean)(DetailedTimerComponentState_comparison2_visible((DetailedTimerComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponentState_1comparison2Name(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(DetailedTimerComponentState_comparison2_name((DetailedTimerComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponentState_1comparison2Time(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(DetailedTimerComponentState_comparison2_time((DetailedTimerComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponentState_1iconChange(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(DetailedTimerComponentState_icon_change((DetailedTimerComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_DetailedTimerComponentState_1segmentName(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(DetailedTimerComponentState_segment_name((DetailedTimerComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_FuzzyList_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(FuzzyList_new());
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_FuzzyList_1drop(JNIEnv* jni_env, jobject, jlong self) {
    FuzzyList_drop((FuzzyList)self);
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_FuzzyList_1search(JNIEnv* jni_env, jobject, jlong self, jstring pattern, jlong max) {
    auto cstr_pattern = jni_env->GetStringUTFChars(pattern, nullptr);
    auto result = jni_env->NewStringUTF(FuzzyList_search((FuzzyListRef)self, cstr_pattern, (size_t)max));
    jni_env->ReleaseStringUTFChars(pattern, cstr_pattern);
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_FuzzyList_1push(JNIEnv* jni_env, jobject, jlong self, jstring text) {
    auto cstr_text = jni_env->GetStringUTFChars(text, nullptr);
    FuzzyList_push((FuzzyListRefMut)self, cstr_text);
    jni_env->ReleaseStringUTFChars(text, cstr_text);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_GeneralLayoutSettings_1default(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(GeneralLayoutSettings_default());
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_GeneralLayoutSettings_1drop(JNIEnv* jni_env, jobject, jlong self) {
    GeneralLayoutSettings_drop((GeneralLayoutSettings)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_GraphComponent_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(GraphComponent_new());
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_GraphComponent_1drop(JNIEnv* jni_env, jobject, jlong self) {
    GraphComponent_drop((GraphComponent)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_GraphComponent_1intoGeneric(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(GraphComponent_into_generic((GraphComponent)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_GraphComponent_1stateAsJson(JNIEnv* jni_env, jobject, jlong self, jlong timer, jlong layout_settings) {
    auto result = jni_env->NewStringUTF(GraphComponent_state_as_json((GraphComponentRef)self, (TimerRef)timer, (GeneralLayoutSettingsRef)layout_settings));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_GraphComponent_1state(JNIEnv* jni_env, jobject, jlong self, jlong timer, jlong layout_settings) {
    auto result = (jlong)(GraphComponent_state((GraphComponentRef)self, (TimerRef)timer, (GeneralLayoutSettingsRef)layout_settings));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_GraphComponentState_1drop(JNIEnv* jni_env, jobject, jlong self) {
    GraphComponentState_drop((GraphComponentState)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_GraphComponentState_1pointsLen(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(GraphComponentState_points_len((GraphComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jfloat Java_livesplitcore_LiveSplitCoreNative_GraphComponentState_1pointX(JNIEnv* jni_env, jobject, jlong self, jlong index) {
    auto result = (jfloat)(GraphComponentState_point_x((GraphComponentStateRef)self, (size_t)index));
    return result;
}

extern "C" JNIEXPORT jfloat Java_livesplitcore_LiveSplitCoreNative_GraphComponentState_1pointY(JNIEnv* jni_env, jobject, jlong self, jlong index) {
    auto result = (jfloat)(GraphComponentState_point_y((GraphComponentStateRef)self, (size_t)index));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_GraphComponentState_1pointIsBestSegment(JNIEnv* jni_env, jobject, jlong self, jlong index) {
    auto result = (jboolean)(GraphComponentState_point_is_best_segment((GraphComponentStateRef)self, (size_t)index));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_GraphComponentState_1horizontalGridLinesLen(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(GraphComponentState_horizontal_grid_lines_len((GraphComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jfloat Java_livesplitcore_LiveSplitCoreNative_GraphComponentState_1horizontalGridLine(JNIEnv* jni_env, jobject, jlong self, jlong index) {
    auto result = (jfloat)(GraphComponentState_horizontal_grid_line((GraphComponentStateRef)self, (size_t)index));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_GraphComponentState_1verticalGridLinesLen(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(GraphComponentState_vertical_grid_lines_len((GraphComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jfloat Java_livesplitcore_LiveSplitCoreNative_GraphComponentState_1verticalGridLine(JNIEnv* jni_env, jobject, jlong self, jlong index) {
    auto result = (jfloat)(GraphComponentState_vertical_grid_line((GraphComponentStateRef)self, (size_t)index));
    return result;
}

extern "C" JNIEXPORT jfloat Java_livesplitcore_LiveSplitCoreNative_GraphComponentState_1middle(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jfloat)(GraphComponentState_middle((GraphComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_GraphComponentState_1isLiveDeltaActive(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jboolean)(GraphComponentState_is_live_delta_active((GraphComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_GraphComponentState_1isFlipped(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jboolean)(GraphComponentState_is_flipped((GraphComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_HotkeyConfig_1parseJson(JNIEnv* jni_env, jobject, jstring settings) {
    auto cstr_settings = jni_env->GetStringUTFChars(settings, nullptr);
    auto result = (jlong)(HotkeyConfig_parse_json(cstr_settings));
    jni_env->ReleaseStringUTFChars(settings, cstr_settings);
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_HotkeyConfig_1drop(JNIEnv* jni_env, jobject, jlong self) {
    HotkeyConfig_drop((HotkeyConfig)self);
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_HotkeyConfig_1settingsDescriptionAsJson(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(HotkeyConfig_settings_description_as_json((HotkeyConfigRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_HotkeyConfig_1asJson(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(HotkeyConfig_as_json((HotkeyConfigRef)self));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_HotkeyConfig_1setValue(JNIEnv* jni_env, jobject, jlong self, jlong index, jlong value) {
    auto result = (jboolean)(HotkeyConfig_set_value((HotkeyConfigRefMut)self, (size_t)index, (SettingValue)value));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_HotkeySystem_1new(JNIEnv* jni_env, jobject, jlong shared_timer) {
    auto result = (jlong)(HotkeySystem_new((SharedTimer)shared_timer));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_HotkeySystem_1withConfig(JNIEnv* jni_env, jobject, jlong shared_timer, jlong config) {
    auto result = (jlong)(HotkeySystem_with_config((SharedTimer)shared_timer, (HotkeyConfig)config));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_HotkeySystem_1drop(JNIEnv* jni_env, jobject, jlong self) {
    HotkeySystem_drop((HotkeySystem)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_HotkeySystem_1deactivate(JNIEnv* jni_env, jobject, jlong self) {
    HotkeySystem_deactivate((HotkeySystemRef)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_HotkeySystem_1activate(JNIEnv* jni_env, jobject, jlong self) {
    HotkeySystem_activate((HotkeySystemRef)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_HotkeySystem_1config(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(HotkeySystem_config((HotkeySystemRef)self));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_HotkeySystem_1setConfig(JNIEnv* jni_env, jobject, jlong self, jlong config) {
    auto result = (jboolean)(HotkeySystem_set_config((HotkeySystemRefMut)self, (HotkeyConfig)config));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Layout_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(Layout_new());
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Layout_1defaultLayout(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(Layout_default_layout());
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Layout_1parseJson(JNIEnv* jni_env, jobject, jstring settings) {
    auto cstr_settings = jni_env->GetStringUTFChars(settings, nullptr);
    auto result = (jlong)(Layout_parse_json(cstr_settings));
    jni_env->ReleaseStringUTFChars(settings, cstr_settings);
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Layout_1parseOriginalLivesplit(JNIEnv* jni_env, jobject, jlong data, jlong length) {
    auto result = (jlong)(Layout_parse_original_livesplit((void const*)data, (size_t)length));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Layout_1drop(JNIEnv* jni_env, jobject, jlong self) {
    Layout_drop((Layout)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Layout_1clone(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Layout_clone((LayoutRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_Layout_1settingsAsJson(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(Layout_settings_as_json((LayoutRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_Layout_1stateAsJson(JNIEnv* jni_env, jobject, jlong self, jlong timer) {
    auto result = jni_env->NewStringUTF(Layout_state_as_json((LayoutRefMut)self, (TimerRef)timer));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Layout_1push(JNIEnv* jni_env, jobject, jlong self, jlong component) {
    Layout_push((LayoutRefMut)self, (Component)component);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Layout_1scrollUp(JNIEnv* jni_env, jobject, jlong self) {
    Layout_scroll_up((LayoutRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Layout_1scrollDown(JNIEnv* jni_env, jobject, jlong self) {
    Layout_scroll_down((LayoutRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Layout_1remount(JNIEnv* jni_env, jobject, jlong self) {
    Layout_remount((LayoutRefMut)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_LayoutEditor_1new(JNIEnv* jni_env, jobject, jlong layout) {
    auto result = (jlong)(LayoutEditor_new((Layout)layout));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_LayoutEditor_1close(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(LayoutEditor_close((LayoutEditor)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_LayoutEditor_1stateAsJson(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(LayoutEditor_state_as_json((LayoutEditorRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_LayoutEditor_1layoutStateAsJson(JNIEnv* jni_env, jobject, jlong self, jlong timer) {
    auto result = jni_env->NewStringUTF(LayoutEditor_layout_state_as_json((LayoutEditorRefMut)self, (TimerRef)timer));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_LayoutEditor_1select(JNIEnv* jni_env, jobject, jlong self, jlong index) {
    LayoutEditor_select((LayoutEditorRefMut)self, (size_t)index);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_LayoutEditor_1addComponent(JNIEnv* jni_env, jobject, jlong self, jlong component) {
    LayoutEditor_add_component((LayoutEditorRefMut)self, (Component)component);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_LayoutEditor_1removeComponent(JNIEnv* jni_env, jobject, jlong self) {
    LayoutEditor_remove_component((LayoutEditorRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_LayoutEditor_1moveComponentUp(JNIEnv* jni_env, jobject, jlong self) {
    LayoutEditor_move_component_up((LayoutEditorRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_LayoutEditor_1moveComponentDown(JNIEnv* jni_env, jobject, jlong self) {
    LayoutEditor_move_component_down((LayoutEditorRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_LayoutEditor_1moveComponent(JNIEnv* jni_env, jobject, jlong self, jlong dst_index) {
    LayoutEditor_move_component((LayoutEditorRefMut)self, (size_t)dst_index);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_LayoutEditor_1duplicateComponent(JNIEnv* jni_env, jobject, jlong self) {
    LayoutEditor_duplicate_component((LayoutEditorRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_LayoutEditor_1setComponentSettingsValue(JNIEnv* jni_env, jobject, jlong self, jlong index, jlong value) {
    LayoutEditor_set_component_settings_value((LayoutEditorRefMut)self, (size_t)index, (SettingValue)value);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_LayoutEditor_1setGeneralSettingsValue(JNIEnv* jni_env, jobject, jlong self, jlong index, jlong value) {
    LayoutEditor_set_general_settings_value((LayoutEditorRefMut)self, (size_t)index, (SettingValue)value);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_ParseRunResult_1drop(JNIEnv* jni_env, jobject, jlong self) {
    ParseRunResult_drop((ParseRunResult)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_ParseRunResult_1unwrap(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(ParseRunResult_unwrap((ParseRunResult)self));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_ParseRunResult_1parsedSuccessfully(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jboolean)(ParseRunResult_parsed_successfully((ParseRunResultRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_ParseRunResult_1timerKind(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(ParseRunResult_timer_kind((ParseRunResultRef)self));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_ParseRunResult_1isGenericTimer(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jboolean)(ParseRunResult_is_generic_timer((ParseRunResultRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_PossibleTimeSaveComponent_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(PossibleTimeSaveComponent_new());
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_PossibleTimeSaveComponent_1drop(JNIEnv* jni_env, jobject, jlong self) {
    PossibleTimeSaveComponent_drop((PossibleTimeSaveComponent)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_PossibleTimeSaveComponent_1intoGeneric(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(PossibleTimeSaveComponent_into_generic((PossibleTimeSaveComponent)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_PossibleTimeSaveComponent_1stateAsJson(JNIEnv* jni_env, jobject, jlong self, jlong timer) {
    auto result = jni_env->NewStringUTF(PossibleTimeSaveComponent_state_as_json((PossibleTimeSaveComponentRef)self, (TimerRef)timer));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_PossibleTimeSaveComponent_1state(JNIEnv* jni_env, jobject, jlong self, jlong timer) {
    auto result = (jlong)(PossibleTimeSaveComponent_state((PossibleTimeSaveComponentRef)self, (TimerRef)timer));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_PossibleTimeSaveComponentState_1drop(JNIEnv* jni_env, jobject, jlong self) {
    PossibleTimeSaveComponentState_drop((PossibleTimeSaveComponentState)self);
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_PossibleTimeSaveComponentState_1text(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(PossibleTimeSaveComponentState_text((PossibleTimeSaveComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_PossibleTimeSaveComponentState_1time(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(PossibleTimeSaveComponentState_time((PossibleTimeSaveComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_PotentialCleanUp_1drop(JNIEnv* jni_env, jobject, jlong self) {
    PotentialCleanUp_drop((PotentialCleanUp)self);
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_PotentialCleanUp_1message(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(PotentialCleanUp_message((PotentialCleanUpRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_PreviousSegmentComponent_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(PreviousSegmentComponent_new());
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_PreviousSegmentComponent_1drop(JNIEnv* jni_env, jobject, jlong self) {
    PreviousSegmentComponent_drop((PreviousSegmentComponent)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_PreviousSegmentComponent_1intoGeneric(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(PreviousSegmentComponent_into_generic((PreviousSegmentComponent)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_PreviousSegmentComponent_1stateAsJson(JNIEnv* jni_env, jobject, jlong self, jlong timer, jlong layout_settings) {
    auto result = jni_env->NewStringUTF(PreviousSegmentComponent_state_as_json((PreviousSegmentComponentRef)self, (TimerRef)timer, (GeneralLayoutSettingsRef)layout_settings));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_PreviousSegmentComponent_1state(JNIEnv* jni_env, jobject, jlong self, jlong timer, jlong layout_settings) {
    auto result = (jlong)(PreviousSegmentComponent_state((PreviousSegmentComponentRef)self, (TimerRef)timer, (GeneralLayoutSettingsRef)layout_settings));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_PreviousSegmentComponentState_1drop(JNIEnv* jni_env, jobject, jlong self) {
    PreviousSegmentComponentState_drop((PreviousSegmentComponentState)self);
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_PreviousSegmentComponentState_1text(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(PreviousSegmentComponentState_text((PreviousSegmentComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_PreviousSegmentComponentState_1time(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(PreviousSegmentComponentState_time((PreviousSegmentComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_PreviousSegmentComponentState_1semanticColor(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(PreviousSegmentComponentState_semantic_color((PreviousSegmentComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Run_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(Run_new());
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Run_1parse(JNIEnv* jni_env, jobject, jlong data, jlong length, jstring path, jboolean load_files) {
    auto cstr_path = jni_env->GetStringUTFChars(path, nullptr);
    auto result = (jlong)(Run_parse((void const*)data, (size_t)length, cstr_path, (bool)load_files));
    jni_env->ReleaseStringUTFChars(path, cstr_path);
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Run_1parseFileHandle(JNIEnv* jni_env, jobject, jlong handle, jstring path, jboolean load_files) {
    auto cstr_path = jni_env->GetStringUTFChars(path, nullptr);
    auto result = (jlong)(Run_parse_file_handle((int64_t)handle, cstr_path, (bool)load_files));
    jni_env->ReleaseStringUTFChars(path, cstr_path);
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Run_1drop(JNIEnv* jni_env, jobject, jlong self) {
    Run_drop((Run)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Run_1clone(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Run_clone((RunRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_Run_1gameName(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(Run_game_name((RunRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_Run_1gameIcon(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(Run_game_icon((RunRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_Run_1categoryName(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(Run_category_name((RunRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_Run_1extendedFileName(JNIEnv* jni_env, jobject, jlong self, jboolean use_extended_category_name) {
    auto result = jni_env->NewStringUTF(Run_extended_file_name((RunRef)self, (bool)use_extended_category_name));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_Run_1extendedName(JNIEnv* jni_env, jobject, jlong self, jboolean use_extended_category_name) {
    auto result = jni_env->NewStringUTF(Run_extended_name((RunRef)self, (bool)use_extended_category_name));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_Run_1extendedCategoryName(JNIEnv* jni_env, jobject, jlong self, jboolean show_region, jboolean show_platform, jboolean show_variables) {
    auto result = jni_env->NewStringUTF(Run_extended_category_name((RunRef)self, (bool)show_region, (bool)show_platform, (bool)show_variables));
    return result;
}

extern "C" JNIEXPORT jint Java_livesplitcore_LiveSplitCoreNative_Run_1attemptCount(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jint)(Run_attempt_count((RunRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Run_1metadata(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Run_metadata((RunRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Run_1offset(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Run_offset((RunRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Run_1len(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Run_len((RunRef)self));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_Run_1hasBeenModified(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jboolean)(Run_has_been_modified((RunRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Run_1segment(JNIEnv* jni_env, jobject, jlong self, jlong index) {
    auto result = (jlong)(Run_segment((RunRef)self, (size_t)index));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Run_1attemptHistoryLen(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Run_attempt_history_len((RunRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Run_1attemptHistoryIndex(JNIEnv* jni_env, jobject, jlong self, jlong index) {
    auto result = (jlong)(Run_attempt_history_index((RunRef)self, (size_t)index));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_Run_1saveAsLss(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(Run_save_as_lss((RunRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Run_1customComparisonsLen(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Run_custom_comparisons_len((RunRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_Run_1customComparison(JNIEnv* jni_env, jobject, jlong self, jlong index) {
    auto result = jni_env->NewStringUTF(Run_custom_comparison((RunRef)self, (size_t)index));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_Run_1autoSplitterSettings(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(Run_auto_splitter_settings((RunRef)self));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Run_1pushSegment(JNIEnv* jni_env, jobject, jlong self, jlong segment) {
    Run_push_segment((RunRefMut)self, (Segment)segment);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Run_1setGameName(JNIEnv* jni_env, jobject, jlong self, jstring game) {
    auto cstr_game = jni_env->GetStringUTFChars(game, nullptr);
    Run_set_game_name((RunRefMut)self, cstr_game);
    jni_env->ReleaseStringUTFChars(game, cstr_game);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Run_1setCategoryName(JNIEnv* jni_env, jobject, jlong self, jstring category) {
    auto cstr_category = jni_env->GetStringUTFChars(category, nullptr);
    Run_set_category_name((RunRefMut)self, cstr_category);
    jni_env->ReleaseStringUTFChars(category, cstr_category);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Run_1markAsModified(JNIEnv* jni_env, jobject, jlong self) {
    Run_mark_as_modified((RunRefMut)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_RunEditor_1new(JNIEnv* jni_env, jobject, jlong run) {
    auto result = (jlong)(RunEditor_new((Run)run));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_RunEditor_1close(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(RunEditor_close((RunEditor)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_RunEditor_1stateAsJson(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(RunEditor_state_as_json((RunEditorRefMut)self));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1selectTimingMethod(JNIEnv* jni_env, jobject, jlong self, jbyte method) {
    RunEditor_select_timing_method((RunEditorRefMut)self, (uint8_t)method);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1unselect(JNIEnv* jni_env, jobject, jlong self, jlong index) {
    RunEditor_unselect((RunEditorRefMut)self, (size_t)index);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1selectAdditionally(JNIEnv* jni_env, jobject, jlong self, jlong index) {
    RunEditor_select_additionally((RunEditorRefMut)self, (size_t)index);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1selectOnly(JNIEnv* jni_env, jobject, jlong self, jlong index) {
    RunEditor_select_only((RunEditorRefMut)self, (size_t)index);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1setGameName(JNIEnv* jni_env, jobject, jlong self, jstring game) {
    auto cstr_game = jni_env->GetStringUTFChars(game, nullptr);
    RunEditor_set_game_name((RunEditorRefMut)self, cstr_game);
    jni_env->ReleaseStringUTFChars(game, cstr_game);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1setCategoryName(JNIEnv* jni_env, jobject, jlong self, jstring category) {
    auto cstr_category = jni_env->GetStringUTFChars(category, nullptr);
    RunEditor_set_category_name((RunEditorRefMut)self, cstr_category);
    jni_env->ReleaseStringUTFChars(category, cstr_category);
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_RunEditor_1parseAndSetOffset(JNIEnv* jni_env, jobject, jlong self, jstring offset) {
    auto cstr_offset = jni_env->GetStringUTFChars(offset, nullptr);
    auto result = (jboolean)(RunEditor_parse_and_set_offset((RunEditorRefMut)self, cstr_offset));
    jni_env->ReleaseStringUTFChars(offset, cstr_offset);
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_RunEditor_1parseAndSetAttemptCount(JNIEnv* jni_env, jobject, jlong self, jstring attempts) {
    auto cstr_attempts = jni_env->GetStringUTFChars(attempts, nullptr);
    auto result = (jboolean)(RunEditor_parse_and_set_attempt_count((RunEditorRefMut)self, cstr_attempts));
    jni_env->ReleaseStringUTFChars(attempts, cstr_attempts);
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1setGameIcon(JNIEnv* jni_env, jobject, jlong self, jlong data, jlong length) {
    RunEditor_set_game_icon((RunEditorRefMut)self, (void const*)data, (size_t)length);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1removeGameIcon(JNIEnv* jni_env, jobject, jlong self) {
    RunEditor_remove_game_icon((RunEditorRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1setRunId(JNIEnv* jni_env, jobject, jlong self, jstring name) {
    auto cstr_name = jni_env->GetStringUTFChars(name, nullptr);
    RunEditor_set_run_id((RunEditorRefMut)self, cstr_name);
    jni_env->ReleaseStringUTFChars(name, cstr_name);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1setRegionName(JNIEnv* jni_env, jobject, jlong self, jstring name) {
    auto cstr_name = jni_env->GetStringUTFChars(name, nullptr);
    RunEditor_set_region_name((RunEditorRefMut)self, cstr_name);
    jni_env->ReleaseStringUTFChars(name, cstr_name);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1setPlatformName(JNIEnv* jni_env, jobject, jlong self, jstring name) {
    auto cstr_name = jni_env->GetStringUTFChars(name, nullptr);
    RunEditor_set_platform_name((RunEditorRefMut)self, cstr_name);
    jni_env->ReleaseStringUTFChars(name, cstr_name);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1setEmulatorUsage(JNIEnv* jni_env, jobject, jlong self, jboolean uses_emulator) {
    RunEditor_set_emulator_usage((RunEditorRefMut)self, (bool)uses_emulator);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1setVariable(JNIEnv* jni_env, jobject, jlong self, jstring name, jstring value) {
    auto cstr_name = jni_env->GetStringUTFChars(name, nullptr);
    auto cstr_value = jni_env->GetStringUTFChars(value, nullptr);
    RunEditor_set_variable((RunEditorRefMut)self, cstr_name, cstr_value);
    jni_env->ReleaseStringUTFChars(name, cstr_name);
    jni_env->ReleaseStringUTFChars(value, cstr_value);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1removeVariable(JNIEnv* jni_env, jobject, jlong self, jstring name) {
    auto cstr_name = jni_env->GetStringUTFChars(name, nullptr);
    RunEditor_remove_variable((RunEditorRefMut)self, cstr_name);
    jni_env->ReleaseStringUTFChars(name, cstr_name);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1clearMetadata(JNIEnv* jni_env, jobject, jlong self) {
    RunEditor_clear_metadata((RunEditorRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1insertSegmentAbove(JNIEnv* jni_env, jobject, jlong self) {
    RunEditor_insert_segment_above((RunEditorRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1insertSegmentBelow(JNIEnv* jni_env, jobject, jlong self) {
    RunEditor_insert_segment_below((RunEditorRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1removeSegments(JNIEnv* jni_env, jobject, jlong self) {
    RunEditor_remove_segments((RunEditorRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1moveSegmentsUp(JNIEnv* jni_env, jobject, jlong self) {
    RunEditor_move_segments_up((RunEditorRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1moveSegmentsDown(JNIEnv* jni_env, jobject, jlong self) {
    RunEditor_move_segments_down((RunEditorRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1activeSetIcon(JNIEnv* jni_env, jobject, jlong self, jlong data, jlong length) {
    RunEditor_active_set_icon((RunEditorRefMut)self, (void const*)data, (size_t)length);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1activeRemoveIcon(JNIEnv* jni_env, jobject, jlong self) {
    RunEditor_active_remove_icon((RunEditorRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1activeSetName(JNIEnv* jni_env, jobject, jlong self, jstring name) {
    auto cstr_name = jni_env->GetStringUTFChars(name, nullptr);
    RunEditor_active_set_name((RunEditorRefMut)self, cstr_name);
    jni_env->ReleaseStringUTFChars(name, cstr_name);
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_RunEditor_1activeParseAndSetSplitTime(JNIEnv* jni_env, jobject, jlong self, jstring time) {
    auto cstr_time = jni_env->GetStringUTFChars(time, nullptr);
    auto result = (jboolean)(RunEditor_active_parse_and_set_split_time((RunEditorRefMut)self, cstr_time));
    jni_env->ReleaseStringUTFChars(time, cstr_time);
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_RunEditor_1activeParseAndSetSegmentTime(JNIEnv* jni_env, jobject, jlong self, jstring time) {
    auto cstr_time = jni_env->GetStringUTFChars(time, nullptr);
    auto result = (jboolean)(RunEditor_active_parse_and_set_segment_time((RunEditorRefMut)self, cstr_time));
    jni_env->ReleaseStringUTFChars(time, cstr_time);
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_RunEditor_1activeParseAndSetBestSegmentTime(JNIEnv* jni_env, jobject, jlong self, jstring time) {
    auto cstr_time = jni_env->GetStringUTFChars(time, nullptr);
    auto result = (jboolean)(RunEditor_active_parse_and_set_best_segment_time((RunEditorRefMut)self, cstr_time));
    jni_env->ReleaseStringUTFChars(time, cstr_time);
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_RunEditor_1activeParseAndSetComparisonTime(JNIEnv* jni_env, jobject, jlong self, jstring comparison, jstring time) {
    auto cstr_comparison = jni_env->GetStringUTFChars(comparison, nullptr);
    auto cstr_time = jni_env->GetStringUTFChars(time, nullptr);
    auto result = (jboolean)(RunEditor_active_parse_and_set_comparison_time((RunEditorRefMut)self, cstr_comparison, cstr_time));
    jni_env->ReleaseStringUTFChars(comparison, cstr_comparison);
    jni_env->ReleaseStringUTFChars(time, cstr_time);
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_RunEditor_1addComparison(JNIEnv* jni_env, jobject, jlong self, jstring comparison) {
    auto cstr_comparison = jni_env->GetStringUTFChars(comparison, nullptr);
    auto result = (jboolean)(RunEditor_add_comparison((RunEditorRefMut)self, cstr_comparison));
    jni_env->ReleaseStringUTFChars(comparison, cstr_comparison);
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_RunEditor_1importComparison(JNIEnv* jni_env, jobject, jlong self, jlong run, jstring comparison) {
    auto cstr_comparison = jni_env->GetStringUTFChars(comparison, nullptr);
    auto result = (jboolean)(RunEditor_import_comparison((RunEditorRefMut)self, (RunRef)run, cstr_comparison));
    jni_env->ReleaseStringUTFChars(comparison, cstr_comparison);
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1removeComparison(JNIEnv* jni_env, jobject, jlong self, jstring comparison) {
    auto cstr_comparison = jni_env->GetStringUTFChars(comparison, nullptr);
    RunEditor_remove_comparison((RunEditorRefMut)self, cstr_comparison);
    jni_env->ReleaseStringUTFChars(comparison, cstr_comparison);
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_RunEditor_1renameComparison(JNIEnv* jni_env, jobject, jlong self, jstring old_name, jstring new_name) {
    auto cstr_old_name = jni_env->GetStringUTFChars(old_name, nullptr);
    auto cstr_new_name = jni_env->GetStringUTFChars(new_name, nullptr);
    auto result = (jboolean)(RunEditor_rename_comparison((RunEditorRefMut)self, cstr_old_name, cstr_new_name));
    jni_env->ReleaseStringUTFChars(old_name, cstr_old_name);
    jni_env->ReleaseStringUTFChars(new_name, cstr_new_name);
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_RunEditor_1moveComparison(JNIEnv* jni_env, jobject, jlong self, jlong src_index, jlong dst_index) {
    auto result = (jboolean)(RunEditor_move_comparison((RunEditorRefMut)self, (size_t)src_index, (size_t)dst_index));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1clearHistory(JNIEnv* jni_env, jobject, jlong self) {
    RunEditor_clear_history((RunEditorRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunEditor_1clearTimes(JNIEnv* jni_env, jobject, jlong self) {
    RunEditor_clear_times((RunEditorRefMut)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_RunEditor_1cleanSumOfBest(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(RunEditor_clean_sum_of_best((RunEditorRefMut)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_RunMetadata_1runId(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(RunMetadata_run_id((RunMetadataRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_RunMetadata_1platformName(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(RunMetadata_platform_name((RunMetadataRef)self));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_RunMetadata_1usesEmulator(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jboolean)(RunMetadata_uses_emulator((RunMetadataRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_RunMetadata_1regionName(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(RunMetadata_region_name((RunMetadataRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_RunMetadata_1variables(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(RunMetadata_variables((RunMetadataRef)self));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunMetadataVariable_1drop(JNIEnv* jni_env, jobject, jlong self) {
    RunMetadataVariable_drop((RunMetadataVariable)self);
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_RunMetadataVariable_1name(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(RunMetadataVariable_name((RunMetadataVariableRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_RunMetadataVariable_1value(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(RunMetadataVariable_value((RunMetadataVariableRef)self));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_RunMetadataVariablesIter_1drop(JNIEnv* jni_env, jobject, jlong self) {
    RunMetadataVariablesIter_drop((RunMetadataVariablesIter)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_RunMetadataVariablesIter_1next(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(RunMetadataVariablesIter_next((RunMetadataVariablesIterRefMut)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Segment_1new(JNIEnv* jni_env, jobject, jstring name) {
    auto cstr_name = jni_env->GetStringUTFChars(name, nullptr);
    auto result = (jlong)(Segment_new(cstr_name));
    jni_env->ReleaseStringUTFChars(name, cstr_name);
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Segment_1drop(JNIEnv* jni_env, jobject, jlong self) {
    Segment_drop((Segment)self);
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_Segment_1name(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(Segment_name((SegmentRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_Segment_1icon(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(Segment_icon((SegmentRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Segment_1comparison(JNIEnv* jni_env, jobject, jlong self, jstring comparison) {
    auto cstr_comparison = jni_env->GetStringUTFChars(comparison, nullptr);
    auto result = (jlong)(Segment_comparison((SegmentRef)self, cstr_comparison));
    jni_env->ReleaseStringUTFChars(comparison, cstr_comparison);
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Segment_1personalBestSplitTime(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Segment_personal_best_split_time((SegmentRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Segment_1bestSegmentTime(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Segment_best_segment_time((SegmentRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Segment_1segmentHistory(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Segment_segment_history((SegmentRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SegmentHistory_1iter(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(SegmentHistory_iter((SegmentHistoryRef)self));
    return result;
}

extern "C" JNIEXPORT jint Java_livesplitcore_LiveSplitCoreNative_SegmentHistoryElement_1index(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jint)(SegmentHistoryElement_index((SegmentHistoryElementRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SegmentHistoryElement_1time(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(SegmentHistoryElement_time((SegmentHistoryElementRef)self));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_SegmentHistoryIter_1drop(JNIEnv* jni_env, jobject, jlong self) {
    SegmentHistoryIter_drop((SegmentHistoryIter)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SegmentHistoryIter_1next(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(SegmentHistoryIter_next((SegmentHistoryIterRefMut)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SeparatorComponent_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(SeparatorComponent_new());
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_SeparatorComponent_1drop(JNIEnv* jni_env, jobject, jlong self) {
    SeparatorComponent_drop((SeparatorComponent)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SeparatorComponent_1intoGeneric(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(SeparatorComponent_into_generic((SeparatorComponent)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromBool(JNIEnv* jni_env, jobject, jboolean value) {
    auto result = (jlong)(SettingValue_from_bool((bool)value));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromUint(JNIEnv* jni_env, jobject, jint value) {
    auto result = (jlong)(SettingValue_from_uint((uint32_t)value));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromInt(JNIEnv* jni_env, jobject, jint value) {
    auto result = (jlong)(SettingValue_from_int((int32_t)value));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromString(JNIEnv* jni_env, jobject, jstring value) {
    auto cstr_value = jni_env->GetStringUTFChars(value, nullptr);
    auto result = (jlong)(SettingValue_from_string(cstr_value));
    jni_env->ReleaseStringUTFChars(value, cstr_value);
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromOptionalString(JNIEnv* jni_env, jobject, jstring value) {
    auto cstr_value = jni_env->GetStringUTFChars(value, nullptr);
    auto result = (jlong)(SettingValue_from_optional_string(cstr_value));
    jni_env->ReleaseStringUTFChars(value, cstr_value);
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromOptionalEmptyString(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(SettingValue_from_optional_empty_string());
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromFloat(JNIEnv* jni_env, jobject, jdouble value) {
    auto result = (jlong)(SettingValue_from_float((double)value));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromAccuracy(JNIEnv* jni_env, jobject, jstring value) {
    auto cstr_value = jni_env->GetStringUTFChars(value, nullptr);
    auto result = (jlong)(SettingValue_from_accuracy(cstr_value));
    jni_env->ReleaseStringUTFChars(value, cstr_value);
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromDigitsFormat(JNIEnv* jni_env, jobject, jstring value) {
    auto cstr_value = jni_env->GetStringUTFChars(value, nullptr);
    auto result = (jlong)(SettingValue_from_digits_format(cstr_value));
    jni_env->ReleaseStringUTFChars(value, cstr_value);
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromOptionalTimingMethod(JNIEnv* jni_env, jobject, jstring value) {
    auto cstr_value = jni_env->GetStringUTFChars(value, nullptr);
    auto result = (jlong)(SettingValue_from_optional_timing_method(cstr_value));
    jni_env->ReleaseStringUTFChars(value, cstr_value);
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromOptionalEmptyTimingMethod(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(SettingValue_from_optional_empty_timing_method());
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromColor(JNIEnv* jni_env, jobject, jfloat r, jfloat g, jfloat b, jfloat a) {
    auto result = (jlong)(SettingValue_from_color((float)r, (float)g, (float)b, (float)a));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromOptionalColor(JNIEnv* jni_env, jobject, jfloat r, jfloat g, jfloat b, jfloat a) {
    auto result = (jlong)(SettingValue_from_optional_color((float)r, (float)g, (float)b, (float)a));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromOptionalEmptyColor(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(SettingValue_from_optional_empty_color());
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromTransparentGradient(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(SettingValue_from_transparent_gradient());
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromVerticalGradient(JNIEnv* jni_env, jobject, jfloat r1, jfloat g1, jfloat b1, jfloat a1, jfloat r2, jfloat g2, jfloat b2, jfloat a2) {
    auto result = (jlong)(SettingValue_from_vertical_gradient((float)r1, (float)g1, (float)b1, (float)a1, (float)r2, (float)g2, (float)b2, (float)a2));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromHorizontalGradient(JNIEnv* jni_env, jobject, jfloat r1, jfloat g1, jfloat b1, jfloat a1, jfloat r2, jfloat g2, jfloat b2, jfloat a2) {
    auto result = (jlong)(SettingValue_from_horizontal_gradient((float)r1, (float)g1, (float)b1, (float)a1, (float)r2, (float)g2, (float)b2, (float)a2));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromAlternatingGradient(JNIEnv* jni_env, jobject, jfloat r1, jfloat g1, jfloat b1, jfloat a1, jfloat r2, jfloat g2, jfloat b2, jfloat a2) {
    auto result = (jlong)(SettingValue_from_alternating_gradient((float)r1, (float)g1, (float)b1, (float)a1, (float)r2, (float)g2, (float)b2, (float)a2));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromAlignment(JNIEnv* jni_env, jobject, jstring value) {
    auto cstr_value = jni_env->GetStringUTFChars(value, nullptr);
    auto result = (jlong)(SettingValue_from_alignment(cstr_value));
    jni_env->ReleaseStringUTFChars(value, cstr_value);
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromColumnStartWith(JNIEnv* jni_env, jobject, jstring value) {
    auto cstr_value = jni_env->GetStringUTFChars(value, nullptr);
    auto result = (jlong)(SettingValue_from_column_start_with(cstr_value));
    jni_env->ReleaseStringUTFChars(value, cstr_value);
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromColumnUpdateWith(JNIEnv* jni_env, jobject, jstring value) {
    auto cstr_value = jni_env->GetStringUTFChars(value, nullptr);
    auto result = (jlong)(SettingValue_from_column_update_with(cstr_value));
    jni_env->ReleaseStringUTFChars(value, cstr_value);
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SettingValue_1fromColumnUpdateTrigger(JNIEnv* jni_env, jobject, jstring value) {
    auto cstr_value = jni_env->GetStringUTFChars(value, nullptr);
    auto result = (jlong)(SettingValue_from_column_update_trigger(cstr_value));
    jni_env->ReleaseStringUTFChars(value, cstr_value);
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_SettingValue_1drop(JNIEnv* jni_env, jobject, jlong self) {
    SettingValue_drop((SettingValue)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_SharedTimer_1drop(JNIEnv* jni_env, jobject, jlong self) {
    SharedTimer_drop((SharedTimer)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SharedTimer_1share(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(SharedTimer_share((SharedTimerRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SharedTimer_1read(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(SharedTimer_read((SharedTimerRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SharedTimer_1write(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(SharedTimer_write((SharedTimerRef)self));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_SharedTimer_1replaceInner(JNIEnv* jni_env, jobject, jlong self, jlong timer) {
    SharedTimer_replace_inner((SharedTimerRef)self, (Timer)timer);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SplitComponentState_1columnsLen(JNIEnv* jni_env, jobject, jlong self, jlong index) {
    auto result = (jlong)(SplitComponentState_columns_len((SplitsComponentStateRef)self, (size_t)index));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SplitsComponent_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(SplitsComponent_new());
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_SplitsComponent_1drop(JNIEnv* jni_env, jobject, jlong self) {
    SplitsComponent_drop((SplitsComponent)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SplitsComponent_1intoGeneric(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(SplitsComponent_into_generic((SplitsComponent)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_SplitsComponent_1stateAsJson(JNIEnv* jni_env, jobject, jlong self, jlong timer, jlong layout_settings) {
    auto result = jni_env->NewStringUTF(SplitsComponent_state_as_json((SplitsComponentRefMut)self, (TimerRef)timer, (GeneralLayoutSettingsRef)layout_settings));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SplitsComponent_1state(JNIEnv* jni_env, jobject, jlong self, jlong timer, jlong layout_settings) {
    auto result = (jlong)(SplitsComponent_state((SplitsComponentRefMut)self, (TimerRef)timer, (GeneralLayoutSettingsRef)layout_settings));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_SplitsComponent_1scrollUp(JNIEnv* jni_env, jobject, jlong self) {
    SplitsComponent_scroll_up((SplitsComponentRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_SplitsComponent_1scrollDown(JNIEnv* jni_env, jobject, jlong self) {
    SplitsComponent_scroll_down((SplitsComponentRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_SplitsComponent_1setVisualSplitCount(JNIEnv* jni_env, jobject, jlong self, jlong count) {
    SplitsComponent_set_visual_split_count((SplitsComponentRefMut)self, (size_t)count);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_SplitsComponent_1setSplitPreviewCount(JNIEnv* jni_env, jobject, jlong self, jlong count) {
    SplitsComponent_set_split_preview_count((SplitsComponentRefMut)self, (size_t)count);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_SplitsComponent_1setAlwaysShowLastSplit(JNIEnv* jni_env, jobject, jlong self, jboolean always_show_last_split) {
    SplitsComponent_set_always_show_last_split((SplitsComponentRefMut)self, (bool)always_show_last_split);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_SplitsComponent_1setSeparatorLastSplit(JNIEnv* jni_env, jobject, jlong self, jboolean separator_last_split) {
    SplitsComponent_set_separator_last_split((SplitsComponentRefMut)self, (bool)separator_last_split);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_SplitsComponentState_1drop(JNIEnv* jni_env, jobject, jlong self) {
    SplitsComponentState_drop((SplitsComponentState)self);
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_SplitsComponentState_1finalSeparatorShown(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jboolean)(SplitsComponentState_final_separator_shown((SplitsComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SplitsComponentState_1len(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(SplitsComponentState_len((SplitsComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SplitsComponentState_1iconChangeCount(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(SplitsComponentState_icon_change_count((SplitsComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SplitsComponentState_1iconChangeSegmentIndex(JNIEnv* jni_env, jobject, jlong self, jlong icon_change_index) {
    auto result = (jlong)(SplitsComponentState_icon_change_segment_index((SplitsComponentStateRef)self, (size_t)icon_change_index));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_SplitsComponentState_1iconChangeIcon(JNIEnv* jni_env, jobject, jlong self, jlong icon_change_index) {
    auto result = jni_env->NewStringUTF(SplitsComponentState_icon_change_icon((SplitsComponentStateRef)self, (size_t)icon_change_index));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_SplitsComponentState_1name(JNIEnv* jni_env, jobject, jlong self, jlong index) {
    auto result = jni_env->NewStringUTF(SplitsComponentState_name((SplitsComponentStateRef)self, (size_t)index));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_SplitsComponentState_1columnValue(JNIEnv* jni_env, jobject, jlong self, jlong index, jlong column_index) {
    auto result = jni_env->NewStringUTF(SplitsComponentState_column_value((SplitsComponentStateRef)self, (size_t)index, (size_t)column_index));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_SplitsComponentState_1columnSemanticColor(JNIEnv* jni_env, jobject, jlong self, jlong index, jlong column_index) {
    auto result = jni_env->NewStringUTF(SplitsComponentState_column_semantic_color((SplitsComponentStateRef)self, (size_t)index, (size_t)column_index));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_SplitsComponentState_1isCurrentSplit(JNIEnv* jni_env, jobject, jlong self, jlong index) {
    auto result = (jboolean)(SplitsComponentState_is_current_split((SplitsComponentStateRef)self, (size_t)index));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_SumOfBestCleaner_1drop(JNIEnv* jni_env, jobject, jlong self) {
    SumOfBestCleaner_drop((SumOfBestCleaner)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SumOfBestCleaner_1nextPotentialCleanUp(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(SumOfBestCleaner_next_potential_clean_up((SumOfBestCleanerRefMut)self));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_SumOfBestCleaner_1apply(JNIEnv* jni_env, jobject, jlong self, jlong clean_up) {
    SumOfBestCleaner_apply((SumOfBestCleanerRefMut)self, (PotentialCleanUp)clean_up);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SumOfBestComponent_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(SumOfBestComponent_new());
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_SumOfBestComponent_1drop(JNIEnv* jni_env, jobject, jlong self) {
    SumOfBestComponent_drop((SumOfBestComponent)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SumOfBestComponent_1intoGeneric(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(SumOfBestComponent_into_generic((SumOfBestComponent)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_SumOfBestComponent_1stateAsJson(JNIEnv* jni_env, jobject, jlong self, jlong timer) {
    auto result = jni_env->NewStringUTF(SumOfBestComponent_state_as_json((SumOfBestComponentRef)self, (TimerRef)timer));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_SumOfBestComponent_1state(JNIEnv* jni_env, jobject, jlong self, jlong timer) {
    auto result = (jlong)(SumOfBestComponent_state((SumOfBestComponentRef)self, (TimerRef)timer));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_SumOfBestComponentState_1drop(JNIEnv* jni_env, jobject, jlong self) {
    SumOfBestComponentState_drop((SumOfBestComponentState)self);
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_SumOfBestComponentState_1text(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(SumOfBestComponentState_text((SumOfBestComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_SumOfBestComponentState_1time(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(SumOfBestComponentState_time((SumOfBestComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_TextComponent_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(TextComponent_new());
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_TextComponent_1drop(JNIEnv* jni_env, jobject, jlong self) {
    TextComponent_drop((TextComponent)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_TextComponent_1intoGeneric(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(TextComponent_into_generic((TextComponent)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_TextComponent_1stateAsJson(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(TextComponent_state_as_json((TextComponentRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_TextComponent_1state(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(TextComponent_state((TextComponentRef)self));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_TextComponent_1setCenter(JNIEnv* jni_env, jobject, jlong self, jstring text) {
    auto cstr_text = jni_env->GetStringUTFChars(text, nullptr);
    TextComponent_set_center((TextComponentRefMut)self, cstr_text);
    jni_env->ReleaseStringUTFChars(text, cstr_text);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_TextComponent_1setLeft(JNIEnv* jni_env, jobject, jlong self, jstring text) {
    auto cstr_text = jni_env->GetStringUTFChars(text, nullptr);
    TextComponent_set_left((TextComponentRefMut)self, cstr_text);
    jni_env->ReleaseStringUTFChars(text, cstr_text);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_TextComponent_1setRight(JNIEnv* jni_env, jobject, jlong self, jstring text) {
    auto cstr_text = jni_env->GetStringUTFChars(text, nullptr);
    TextComponent_set_right((TextComponentRefMut)self, cstr_text);
    jni_env->ReleaseStringUTFChars(text, cstr_text);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_TextComponentState_1drop(JNIEnv* jni_env, jobject, jlong self) {
    TextComponentState_drop((TextComponentState)self);
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_TextComponentState_1left(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(TextComponentState_left((TextComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_TextComponentState_1right(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(TextComponentState_right((TextComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_TextComponentState_1center(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(TextComponentState_center((TextComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_TextComponentState_1isSplit(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jboolean)(TextComponentState_is_split((TextComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Time_1drop(JNIEnv* jni_env, jobject, jlong self) {
    Time_drop((Time)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Time_1clone(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Time_clone((TimeRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Time_1realTime(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Time_real_time((TimeRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Time_1gameTime(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Time_game_time((TimeRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Time_1index(JNIEnv* jni_env, jobject, jlong self, jbyte timing_method) {
    auto result = (jlong)(Time_index((TimeRef)self, (uint8_t)timing_method));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_TimeSpan_1fromSeconds(JNIEnv* jni_env, jobject, jdouble seconds) {
    auto result = (jlong)(TimeSpan_from_seconds((double)seconds));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_TimeSpan_1parse(JNIEnv* jni_env, jobject, jstring text) {
    auto cstr_text = jni_env->GetStringUTFChars(text, nullptr);
    auto result = (jlong)(TimeSpan_parse(cstr_text));
    jni_env->ReleaseStringUTFChars(text, cstr_text);
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_TimeSpan_1drop(JNIEnv* jni_env, jobject, jlong self) {
    TimeSpan_drop((TimeSpan)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_TimeSpan_1clone(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(TimeSpan_clone((TimeSpanRef)self));
    return result;
}

extern "C" JNIEXPORT jdouble Java_livesplitcore_LiveSplitCoreNative_TimeSpan_1totalSeconds(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jdouble)(TimeSpan_total_seconds((TimeSpanRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Timer_1new(JNIEnv* jni_env, jobject, jlong run) {
    auto result = (jlong)(Timer_new((Run)run));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Timer_1intoShared(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Timer_into_shared((Timer)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Timer_1intoRun(JNIEnv* jni_env, jobject, jlong self, jboolean update_splits) {
    auto result = (jlong)(Timer_into_run((Timer)self, (bool)update_splits));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1drop(JNIEnv* jni_env, jobject, jlong self) {
    Timer_drop((Timer)self);
}

extern "C" JNIEXPORT jbyte Java_livesplitcore_LiveSplitCoreNative_Timer_1currentTimingMethod(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jbyte)(Timer_current_timing_method((TimerRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_Timer_1currentComparison(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(Timer_current_comparison((TimerRef)self));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_Timer_1isGameTimeInitialized(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jboolean)(Timer_is_game_time_initialized((TimerRef)self));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_Timer_1isGameTimePaused(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jboolean)(Timer_is_game_time_paused((TimerRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Timer_1loadingTimes(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Timer_loading_times((TimerRef)self));
    return result;
}

extern "C" JNIEXPORT jbyte Java_livesplitcore_LiveSplitCoreNative_Timer_1currentPhase(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jbyte)(Timer_current_phase((TimerRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Timer_1getRun(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Timer_get_run((TimerRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_Timer_1saveAsLss(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(Timer_save_as_lss((TimerRef)self));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1printDebug(JNIEnv* jni_env, jobject, jlong self) {
    Timer_print_debug((TimerRef)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Timer_1currentTime(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(Timer_current_time((TimerRef)self));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_Timer_1replaceRun(JNIEnv* jni_env, jobject, jlong self, jlong run, jboolean update_splits) {
    auto result = (jboolean)(Timer_replace_run((TimerRefMut)self, (RunRefMut)run, (bool)update_splits));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_Timer_1setRun(JNIEnv* jni_env, jobject, jlong self, jlong run) {
    auto result = (jlong)(Timer_set_run((TimerRefMut)self, (Run)run));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1start(JNIEnv* jni_env, jobject, jlong self) {
    Timer_start((TimerRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1split(JNIEnv* jni_env, jobject, jlong self) {
    Timer_split((TimerRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1splitOrStart(JNIEnv* jni_env, jobject, jlong self) {
    Timer_split_or_start((TimerRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1skipSplit(JNIEnv* jni_env, jobject, jlong self) {
    Timer_skip_split((TimerRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1undoSplit(JNIEnv* jni_env, jobject, jlong self) {
    Timer_undo_split((TimerRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1reset(JNIEnv* jni_env, jobject, jlong self, jboolean update_splits) {
    Timer_reset((TimerRefMut)self, (bool)update_splits);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1resetAndSetAttemptAsPb(JNIEnv* jni_env, jobject, jlong self) {
    Timer_reset_and_set_attempt_as_pb((TimerRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1pause(JNIEnv* jni_env, jobject, jlong self) {
    Timer_pause((TimerRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1resume(JNIEnv* jni_env, jobject, jlong self) {
    Timer_resume((TimerRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1togglePause(JNIEnv* jni_env, jobject, jlong self) {
    Timer_toggle_pause((TimerRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1togglePauseOrStart(JNIEnv* jni_env, jobject, jlong self) {
    Timer_toggle_pause_or_start((TimerRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1undoAllPauses(JNIEnv* jni_env, jobject, jlong self) {
    Timer_undo_all_pauses((TimerRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1setCurrentTimingMethod(JNIEnv* jni_env, jobject, jlong self, jbyte method) {
    Timer_set_current_timing_method((TimerRefMut)self, (uint8_t)method);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1switchToNextComparison(JNIEnv* jni_env, jobject, jlong self) {
    Timer_switch_to_next_comparison((TimerRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1switchToPreviousComparison(JNIEnv* jni_env, jobject, jlong self) {
    Timer_switch_to_previous_comparison((TimerRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1initializeGameTime(JNIEnv* jni_env, jobject, jlong self) {
    Timer_initialize_game_time((TimerRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1deinitializeGameTime(JNIEnv* jni_env, jobject, jlong self) {
    Timer_deinitialize_game_time((TimerRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1pauseGameTime(JNIEnv* jni_env, jobject, jlong self) {
    Timer_pause_game_time((TimerRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1resumeGameTime(JNIEnv* jni_env, jobject, jlong self) {
    Timer_resume_game_time((TimerRefMut)self);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1setGameTime(JNIEnv* jni_env, jobject, jlong self, jlong time) {
    Timer_set_game_time((TimerRefMut)self, (TimeSpanRef)time);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1setLoadingTimes(JNIEnv* jni_env, jobject, jlong self, jlong time) {
    Timer_set_loading_times((TimerRefMut)self, (TimeSpanRef)time);
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_Timer_1markAsUnmodified(JNIEnv* jni_env, jobject, jlong self) {
    Timer_mark_as_unmodified((TimerRefMut)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_TimerComponent_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(TimerComponent_new());
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_TimerComponent_1drop(JNIEnv* jni_env, jobject, jlong self) {
    TimerComponent_drop((TimerComponent)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_TimerComponent_1intoGeneric(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(TimerComponent_into_generic((TimerComponent)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_TimerComponent_1stateAsJson(JNIEnv* jni_env, jobject, jlong self, jlong timer, jlong layout_settings) {
    auto result = jni_env->NewStringUTF(TimerComponent_state_as_json((TimerComponentRef)self, (TimerRef)timer, (GeneralLayoutSettingsRef)layout_settings));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_TimerComponent_1state(JNIEnv* jni_env, jobject, jlong self, jlong timer, jlong layout_settings) {
    auto result = (jlong)(TimerComponent_state((TimerComponentRef)self, (TimerRef)timer, (GeneralLayoutSettingsRef)layout_settings));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_TimerComponentState_1drop(JNIEnv* jni_env, jobject, jlong self) {
    TimerComponentState_drop((TimerComponentState)self);
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_TimerComponentState_1time(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(TimerComponentState_time((TimerComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_TimerComponentState_1fraction(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(TimerComponentState_fraction((TimerComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_TimerComponentState_1semanticColor(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(TimerComponentState_semantic_color((TimerComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_TimerReadLock_1drop(JNIEnv* jni_env, jobject, jlong self) {
    TimerReadLock_drop((TimerReadLock)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_TimerReadLock_1timer(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(TimerReadLock_timer((TimerReadLockRef)self));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_TimerWriteLock_1drop(JNIEnv* jni_env, jobject, jlong self) {
    TimerWriteLock_drop((TimerWriteLock)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_TimerWriteLock_1timer(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(TimerWriteLock_timer((TimerWriteLockRefMut)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_TitleComponent_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(TitleComponent_new());
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_TitleComponent_1drop(JNIEnv* jni_env, jobject, jlong self) {
    TitleComponent_drop((TitleComponent)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_TitleComponent_1intoGeneric(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(TitleComponent_into_generic((TitleComponent)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_TitleComponent_1stateAsJson(JNIEnv* jni_env, jobject, jlong self, jlong timer) {
    auto result = jni_env->NewStringUTF(TitleComponent_state_as_json((TitleComponentRefMut)self, (TimerRef)timer));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_TitleComponent_1state(JNIEnv* jni_env, jobject, jlong self, jlong timer) {
    auto result = (jlong)(TitleComponent_state((TitleComponentRefMut)self, (TimerRef)timer));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_TitleComponentState_1drop(JNIEnv* jni_env, jobject, jlong self) {
    TitleComponentState_drop((TitleComponentState)self);
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_TitleComponentState_1iconChange(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(TitleComponentState_icon_change((TitleComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_TitleComponentState_1line1(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(TitleComponentState_line1((TitleComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_TitleComponentState_1line2(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(TitleComponentState_line2((TitleComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_TitleComponentState_1isCentered(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jboolean)(TitleComponentState_is_centered((TitleComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_TitleComponentState_1showsFinishedRuns(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jboolean)(TitleComponentState_shows_finished_runs((TitleComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jint Java_livesplitcore_LiveSplitCoreNative_TitleComponentState_1finishedRuns(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jint)(TitleComponentState_finished_runs((TitleComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jboolean Java_livesplitcore_LiveSplitCoreNative_TitleComponentState_1showsAttempts(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jboolean)(TitleComponentState_shows_attempts((TitleComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jint Java_livesplitcore_LiveSplitCoreNative_TitleComponentState_1attempts(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jint)(TitleComponentState_attempts((TitleComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_TotalPlaytimeComponent_1new(JNIEnv* jni_env, jobject) {
    auto result = (jlong)(TotalPlaytimeComponent_new());
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_TotalPlaytimeComponent_1drop(JNIEnv* jni_env, jobject, jlong self) {
    TotalPlaytimeComponent_drop((TotalPlaytimeComponent)self);
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_TotalPlaytimeComponent_1intoGeneric(JNIEnv* jni_env, jobject, jlong self) {
    auto result = (jlong)(TotalPlaytimeComponent_into_generic((TotalPlaytimeComponent)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_TotalPlaytimeComponent_1stateAsJson(JNIEnv* jni_env, jobject, jlong self, jlong timer) {
    auto result = jni_env->NewStringUTF(TotalPlaytimeComponent_state_as_json((TotalPlaytimeComponentRefMut)self, (TimerRef)timer));
    return result;
}

extern "C" JNIEXPORT jlong Java_livesplitcore_LiveSplitCoreNative_TotalPlaytimeComponent_1state(JNIEnv* jni_env, jobject, jlong self, jlong timer) {
    auto result = (jlong)(TotalPlaytimeComponent_state((TotalPlaytimeComponentRefMut)self, (TimerRef)timer));
    return result;
}

extern "C" JNIEXPORT void Java_livesplitcore_LiveSplitCoreNative_TotalPlaytimeComponentState_1drop(JNIEnv* jni_env, jobject, jlong self) {
    TotalPlaytimeComponentState_drop((TotalPlaytimeComponentState)self);
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_TotalPlaytimeComponentState_1text(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(TotalPlaytimeComponentState_text((TotalPlaytimeComponentStateRef)self));
    return result;
}

extern "C" JNIEXPORT jstring Java_livesplitcore_LiveSplitCoreNative_TotalPlaytimeComponentState_1time(JNIEnv* jni_env, jobject, jlong self) {
    auto result = jni_env->NewStringUTF(TotalPlaytimeComponentState_time((TotalPlaytimeComponentStateRef)self));
    return result;
}
