import {useEffect, useState} from "react"
import "./Home.css"

export default function Home() {
  const [track1, setTrack1] = useState<File | null>(null)
  const [track2, setTrack2] = useState<File | null>(null)

  if (track1) {
    console.log(track1)
  }

  useEffect(() => {
    const storedTrack1 = localStorage.getItem("selectedMP31")
    const storedTrack2 = localStorage.getItem("selectedMP32")
    if (storedTrack1) {
      setTrack1(JSON.parse(storedTrack1))
    } else {
      setTrack1(null)
    }

    if (storedTrack2) {
      setTrack2(JSON.parse(storedTrack2))
    } else {
      setTrack2(null)
    }
  }, [])

  const handleFileSelect = (index: number) => {
    const fileInput = document.createElement("input")
    fileInput.type = "file"
    fileInput.accept = ".mp3"
    fileInput.style.display = "none"
    fileInput.addEventListener("change", (event) => {
      const selectedFile = (event.target as HTMLInputElement).files?.[0]
      if (selectedFile) {
        localStorage.setItem(
          `selectedMP3${index}`,
          JSON.stringify(selectedFile)
        )
        alert(`MP3 file ${index} selected and stored in local storage.`)
        if (index === 1) {
          setTrack1(selectedFile)
        } else if (index === 2) {
          setTrack2(selectedFile)
        }
      }
    })
    fileInput.click()
  }

  return (
    <div className='container'>
      <h1 className='title'>Polyphonic Sound Station</h1>
      <div className='body'>
        <div className='input'>
          <div className='input-select'>
            <button onClick={() => handleFileSelect(1)}>
              Select MP3 File 1
            </button>
            <button onClick={() => handleFileSelect(2)}>
              Select MP3 File 2
            </button>
          </div>
          <div className='input-data'>
            <div className='input-track'>
              <div>{track1 ? track1.artist : ""}</div>
              <div>{track1 ? `${track1.title}` : "No track loaded"}</div>
            </div>
            <div className='input-track'>
              <div>{track2 ? track2.artist : ""}</div>
              <div>{track2 ? `${track2.title}` : "No track loaded"}</div>
            </div>
          </div>
        </div>
        <div className='control'>
          <button className='back'>rewind</button>
          <button className='action'>play</button>
          <button className='next'>fast forward</button>
        </div>
      </div>
    </div>
  )
}
