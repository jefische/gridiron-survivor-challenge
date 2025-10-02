import './App.css'
import Button from "./components/Button"

function App() {

  return (
    <>
    <div className='container'>

      <div>
        <h2>Created Component</h2>
        <Button classes="btn-primary">Create Group</Button>
      </div>

      <div>
        <h2>Original Image</h2>
        <img src="./button-image.png" alt="create group button" />
      </div>

    </div>
    </>
  )
}

export default App
