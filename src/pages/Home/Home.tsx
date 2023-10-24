import {useState} from "react"
import "./Home.css"
import {handleFileSelect} from "./handleFileSelect"

export default function Home() {
  const [metadata, setMetadata] = useState<AudioTrack | undefined>(undefined)

  const handleClick = async () => {
    const trackData = await handleFileSelect()
    console.log(trackData)
    setMetadata(trackData)
  }

  return (
    <div className='container'>
      <h1 className='title'>Polyphonic Sound Station</h1>
      <div className='body'>
        <div className='input'>
          <div className='input-select'>
            <button onClick={() => handleClick()}>Select MP3 File 1</button>
          </div>
          <div className='input-data'>
            <div className='input-track'>
              <div>{metadata ? metadata.title : "No track loaded"}</div>
              <div>{metadata ? metadata.artist : ""}</div>
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
