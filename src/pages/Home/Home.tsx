import {useState} from "react"
import "./Home.css"
import {handleFileSelect} from "./handleFileSelect"
import {invoke} from "@tauri-apps/api/tauri"

export default function Home() {
  const [track1, setTrack1] = useState<AudioTrack | undefined>(undefined)
  const [playback, setPlayback] = useState(false)

  const handlePlayback = async () => {
    await invoke("toggle_playback")
    setPlayback(!playback)
  }

  const handleInput = async () => {
    const trackData = await handleFileSelect()
    setTrack1(trackData)
  }

  return (
    <div className='container'>
      <h1 className='title'>Polyphonic Sound Station</h1>
      <div className='body'>
        <div className='input'>
          <div className='input-select'>
            <button onClick={() => handleInput()}>Select MP3 File 1</button>
          </div>
          <div className='input-data'>
            <div className='input-track'>
              <div>{track1 ? track1.title : "No track loaded"}</div>
              <div>{track1 ? track1.artist : ""}</div>
            </div>
          </div>
        </div>
        <div className='control'>
          <button className='previous'>back</button>
          {playback ? (
            <button
              onClick={handlePlayback}
              className='playback bg-purple-900 opacity-70'
            >
              stop
            </button>
          ) : (
            <button
              onClick={handlePlayback}
              className='playback bg-teal-900 opacity-70'
            >
              play
            </button>
          )}
          <button className='next'>next</button>
        </div>
      </div>
    </div>
  )
}
