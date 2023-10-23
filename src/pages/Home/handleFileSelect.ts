export const handleFileSelect = (index: number) => {
  const fileInput = document.createElement("input")
  fileInput.type = "file"
  fileInput.accept = ".mp3"
  fileInput.style.display = "none"
  fileInput.addEventListener("change", (event) => {
    const selectedFile = (event.target as HTMLInputElement).files?.[0]
    if (selectedFile) {
      if (index === 1) {
        localStorage.setItem("selectedMP31", JSON.stringify(selectedFile))
      } else if (index === 2) {
        localStorage.setItem("selectedMP32", JSON.stringify(selectedFile))
      }
    }
  })
  fileInput.click()
}
