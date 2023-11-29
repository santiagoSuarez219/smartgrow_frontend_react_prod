import { useState } from 'react'
import NavBar from './components/Navigation/NavBar'
import ConnectionInfo from './components/Connections/ConnectionInfo'

export default function App() {
  return (
    <>
      <NavBar/>
      <div className='flex'>
        <ConnectionInfo sensor="hola"/>
      </div>
    </>
  )
}
