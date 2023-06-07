import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
//import { Card } from './components/card'
import { MuiCard } from './components/muiCard'
import { Main } from './components/main'
import dataJson from "./data.json"
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

//je suis sur V2
function App() {
  const [count, setCount] = useState(0)
  console.log(dataJson)

  const users = convertUsersToArrayOfObject(dataJson)

  console.log(users)

  //change here from Card to MuiCard
  const cards = users.map((e, i) => {
      return (
          <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
            <MuiCard user={e} key={i} />
        </Grid>
      )
  })

  return (
    <div className="App">
    <Main>
        <Grid container spacing={4}>
        {cards}
        </Grid>
    </Main>
      <Navbar/>
    </div>
  )
}

export default App

function convertUsersToArrayOfObject(users) {
    const pos = getUserPositionIndex(users[0])

    const usersArrayOfObject = users.map(
        (user) => {
            return getUser(user, pos)
        }
    )
    usersArrayOfObject.shift()
    return usersArrayOfObject
}

function getUser(targetUser, pos) {
    return (
        {
            name: targetUser[pos.name],
            grade: targetUser[pos.grade],
            imgSrc: targetUser[pos.imgSrc],
            wish: targetUser[pos.wish], 
            department: "Business Administration", 
            sender: "Rosa"
        }
    )
}
function getUserPositionIndex(user0) {
    var pos = Object()
    user0.map(
        (e, i) => {
            pos[e] = i
        }
    )
    pos.imgSrc = pos.ThumbnailLink
    pos.name = pos.Name
    pos.grade = pos.Grade
    pos.wish = pos.Wish
    return pos
}

function test(){
    user0 = ['Timestamp', 'Email Address', 'Name', 'Photo', 'Grade', 'Wish', 'ThumbnailLink']
    var pos = Object()
    user0.map(
        (e, i) => {
            pos[e] = i
        }
    )
    pos.imgSrc = pos.ThumbnailLink
    pos.name = pos.Name
    pos.grade = pos.Grade
    pos.wish = pos.Wish
    return pos
}