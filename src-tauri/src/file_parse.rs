use audiotags::Tag;

fn read_audio_metadata(file_path: &str) -> Option<Metadata> {
    // Create a Tag instance and read metadata from the audio file.
    let tag = Tag::new().read_from_path(file_path).ok()?;

    // Extract the desired metadata fields.
    let title = tag.title().map(String::from);
    let artist = tag.artist().map(String::from);
    // You can also retrieve album cover image if it exists.

    Some(Metadata { title, artist })
}

struct Metadata {
    title: Option<String>,
    artist: Option<String>,
}

#[tauri::command]
pub fn parse_metadata(path: &str) {
    let file_path = path;
    if let Some(metadata) = read_audio_metadata(file_path) {
        println!("Title: {:?}", metadata.title);
        println!("Artist: {:?}", metadata.artist);
    }
}
