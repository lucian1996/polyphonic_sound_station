import "./Home.css"
import {handleFileSelect} from "./handleFileSelect"

export default function Home() {
  return (
    <div className='container'>
      <h1 className='title'>Polyphonic Sound Station</h1>
      <div className='body'>
        <div className='input'>
          <div className='input-select'>
            <button onClick={() => handleFileSelect()}>
              Select MP3 File 1
            </button>
            {/* <button onClick={() => handleFileSelect(2)}>
              Select MP3 File 2
            </button> */}
          </div>
          <div className='input-data'>
            <div className='input-track'>
              {/* <div>{track1 ? track1.name : ""}</div> */}
              {/* <div>{track1 ? "Track 1" : "No track loaded"}</div> */}
            </div>
            <div className='input-track'>
              {/* <div>{track2 ? track2.name : ""}</div> */}
              {/* <div>{track2 ? "Track 2" : "No track loaded"}</div> */}
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
