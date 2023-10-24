import {open} from "@tauri-apps/api/dialog"
import {invoke} from "@tauri-apps/api/tauri"

export const handleFileSelect = async (): Promise<AudioTrack | undefined> => {
  try {
    const result = await open()
    if (result && result.length > 0) {
      return await invoke("select_track", {path: result})
    }
  } catch (error) {
    console.error(error)
  }
}
