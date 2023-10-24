use lazy_static::lazy_static;
use std::sync::RwLock;

#[derive(Clone)]
pub struct PlaybackState {
    playing: bool,
}

lazy_static! {
    static ref PLAYBACK_STATE: RwLock<PlaybackState> =
        RwLock::new(PlaybackState { playing: false });
}

// Toggle playback function
#[tauri::command]
pub fn toggle_playback(state: tauri::State<'_, RwLock<PlaybackState>>) -> bool {
    let mut playback_state = state.write().unwrap();
    playback_state.playing = !playback_state.playing;

    playback_state.playing
}
