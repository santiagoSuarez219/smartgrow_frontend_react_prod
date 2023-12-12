import React from 'react'
import { useState } from 'react'

const ConnectionInfo = (props)=> {

    let [state,setState] = useState(false)
    let [sensorClass,setSensorClass] = useState('mx-1 w-2 h-2 rounded-full bg-red-700')

    //TODO Add handleState with websockets

    let handleSensorClass =()=>{
        setSensorClass(state? 'mx-1 w-2 rounded-full bg-green-700' : 'mx-1 w-2 rounded-full bg-red-700')
    }

  return (
    <div className='flex items-center m-1'>
        <div className={sensorClass}>
        </div>
        <h3 className='text-xs'>{props.sensor}</h3>
    </div>
  )
}

export default ConnectionInfo