import './App.css'

function App() {

  return (
    <div className="video-background">
      <video autoPlay muted loop className="video">
        <source src="/videos/videoBackgroundDark.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>    
      </div>
  )
}

export default App
