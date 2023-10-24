use audiotags::Tag;
use lazy_static::lazy_static;
use serde::Serialize;
use std::sync::Mutex;

#[tauri::command]
pub fn select_track(path: &str) -> Option<Metadata> {
    let file_path = path.to_string();
    fetch_metadata(file_path);

    let metadata = TRACK1.lock().unwrap();
    metadata.clone()
}

fn fetch_metadata(file_path: String) {
    let tag = Tag::new().read_from_path(&file_path).ok();
    let title = tag.as_ref().and_then(|t| t.title()).map(String::from);
    let artist = tag.as_ref().and_then(|t| t.artist()).map(String::from);

    let mut metadata = TRACK1.lock().unwrap();
    *metadata = Some(Metadata {
        title,
        artist,
        file_path,
    });
}

#[derive(Serialize, Clone)] // Implement Serialize for Metadata
pub struct Metadata {
    title: Option<String>,
    artist: Option<String>,
    file_path: String,
}

lazy_static! {
    static ref TRACK1: Mutex<Option<Metadata>> = Mutex::new(None);
}
