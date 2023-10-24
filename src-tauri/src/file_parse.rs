use audiotags::Tag;
use lazy_static::lazy_static;
use std::sync::Mutex;

struct Metadata {
    title: Option<String>,
    artist: Option<String>,
    file_path: String,
}

lazy_static! {
    static ref METADATA: Mutex<Option<Metadata>> = Mutex::new(None);
}

fn read_audio_metadata(file_path: String) {
    let tag = Tag::new().read_from_path(&file_path).ok();
    let title = tag.as_ref().and_then(|t| t.title()).map(String::from);
    let artist = tag.as_ref().and_then(|t| t.artist()).map(String::from);

    // Update the global METADATA
    let mut metadata = METADATA.lock().unwrap();
    *metadata = Some(Metadata {
        title,
        artist,
        file_path,
    });
}

#[tauri::command]
pub fn parse_metadata(path: &str) {
    let file_path = path.to_string(); // Convert &str to String
    read_audio_metadata(file_path.clone()); // Clone the path to avoid moving it

    // Read the global METADATA
    let metadata = METADATA.lock().unwrap();
    println!("Title: {:?}", metadata.as_ref().unwrap().title);
    println!("Artist: {:?}", metadata.as_ref().unwrap().artist);
    println!("Path: {:?}", metadata.as_ref().unwrap().file_path);
}
