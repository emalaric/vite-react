import './App.css'
import {generate} from "random-words";

function App() {
  return (
    <>
      <h1>Naslov</h1>
      <p>Random rijec: {generate()}</p>
    </>
  )
}

export default App
