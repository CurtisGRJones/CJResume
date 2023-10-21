import { useState } from 'react'
import { Button, Grid } from '@mui/material'
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
                                <Grid
                                    container
                                    spacing={0}
                                    direction="column"
                                    alignItems="center"
                                    justifyContent="center"
                                    style={{ minHeight: '100vh' }}
                                >
                                    <Grid item xs={1}>
                                        <Button variant="contained" onClick={setTypeLocal}>Local</Button>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Button sx={{ m: '0.5rem' }} variant="contained" onClick={setTypeRemote}>Remote</Button>
                                    </Grid>
                                </Grid>
                            )
                    }
                })()
            }
            
        </>
    )
}