import {open} from "@tauri-apps/api/dialog"
import {invoke} from "@tauri-apps/api/tauri"

export const handleFileSelect = async () => {
  try {
    const result = await open()
    if (result && result.length > 0) {
      const yup = await invoke("select_track", {path: result})
      console.log(yup)
    }
  } catch (error) {
    console.error(error)
  }
}
