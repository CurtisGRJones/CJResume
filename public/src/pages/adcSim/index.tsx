import { useState } from 'react'
import { Button } from '@mui/material'
import { Local } from './local'
import { Remote } from './remote'
import './adcSim.css'

export const AdcSim = () => {
    let [ type, setType ] = useState(0)

    const setTypeLocal = () => {
        setType(1)
    }

    const setTypeRemote = () => {
        setType(2)
    }
    
    return (
        <>
            {
                (() => {
                    switch (type) {
                        case 1:
                            return (
                                <Local />
                            )
                        case 2:
                            return (
                                <Remote />
                            )
                        default:
                            return (
                                <>
                                    <Button className='selectButton' variant="contained" onClick={setTypeLocal}>Local</Button>
                                    <Button className='selectButton' variant="contained" onClick={setTypeRemote}>Remote</Button>
                                </>
                            )
                    }
                })()
            }
            
        </>
    )
}