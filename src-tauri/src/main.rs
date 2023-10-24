// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod file_parse;
use crate::file_parse::select_track;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![select_track])
        .run(tauri::generate_context!())
        .expect("error while running Tauri application");
}
