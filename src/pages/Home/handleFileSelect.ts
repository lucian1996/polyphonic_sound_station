import {open} from "@tauri-apps/api/dialog"

export const handleFileSelect = async (index: number) => {
  try {
    const result = await open({
      filters: [
        {
          name: "MP3 Files",
          extensions: ["mp3"],
        },
      ],
    })
    if (result && result.length > 0) {
      const selectedFile = result[0]
      if (index === 1) {
        localStorage.setItem("selectedMP31", JSON.stringify(selectedFile))
      } else if (index === 2) {
        localStorage.setItem("selectedMP32", JSON.stringify(selectedFile))
      }
    }
   } catch (error) {
    console.error(error)
  }
}
