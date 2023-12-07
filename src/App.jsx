import { useState } from 'react'
import NavBar from './components/Navigation/NavBar'
import Connections from './components/Connections/Connections'


export default function App() {
  return (
    <>
      <NavBar/>
      <div>
        <Connections/>
      </div>
    </>
  )
}
