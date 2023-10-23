// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod file_parse;
use crate::file_parse::parse_metadata;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![parse_metadata])
        .run(tauri::generate_context!())
        .expect("error while running Tauri application");
}
