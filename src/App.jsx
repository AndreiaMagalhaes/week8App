import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Card } from './components/card'
import { Main } from './components/main'

function App() {
  const [count, setCount] = useState(0)
  const user1 = {
    name: "Martin Luther King Jr.",
    department : "Business Administration",
    grade: "4B",
    imgSrc: "src/components/card/img/MLKJR-removebg-preview.png",
    wish: "New beginnings, new chapters; new life and new endeavors. My friend, I am really proud of you! It feels amazing to share this happiness and excitement with you. Congratulations on graduating!",
    sender: "Rosa"
}

  return (
    <div className="App">
    <Main>
      <Card user={user1}/>
    </Main>
      <Navbar/>
    </div>
  )
}

export default App
