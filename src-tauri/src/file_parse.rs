use serde::Serialize;
use std::fs;
use tauri::Error as InvokeError;

#[derive(Serialize)]
pub struct FileMetadata {
    size: u64,
}

#[tauri::command]
pub fn parse_metadata(path: String) -> Result<FileMetadata, InvokeError> {
    let metadata = fs::metadata(path)?;
    Ok(FileMetadata {
        size: metadata.len(),
    })
}
