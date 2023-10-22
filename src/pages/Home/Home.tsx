import "./Home.css"

export default function Home() {
  return (
    <div className='container'>
      <h1 className='title'>Polyphonic Sound Station</h1>
      <div className='body'>
        <div className='select'>
          <button>track 1</button>
          <button>track 2</button>
        </div>
        <div className='control'>
          <button className='back'>back</button>
          <button className='action'>play</button>
          <button className='next'>next</button>
        </div>
      </div>
    </div>
  )
}
