import { Field, Form, Formik } from 'formik';
import './local.css'
import { Button, Grid } from '@mui/material';
import { FormEvent, useState } from 'react';

export const Local = () => {

    let [layers, setLayers] = useState(3)

    const handleFormOnChange = (event: FormEvent) => {
        if (event.target instanceof HTMLInputElement) {
            if (event.target.name === 'layers') {
                setLayers(Number(event.target.value))
            }
        }
    };

    return (
        <>
            <Grid container
                justifyContent="flex-start"
                alignItems="center"
                rowSpacing={1}
                columnSpacing={1}
            >
                <Grid item xs={12}>
                    <h1 className='title'> adcSim Local </h1>
                </Grid>
                <Grid
                    item
                    container
                    xs={4}
                    rowSpacing={4}
                    className='inputs'
                >
                    <Formik
                        initialValues={{ layers }}
                        onSubmit={async (values) => {
                            // TODO generate results
                            await new Promise((resolve) => setTimeout(resolve, 500));
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        <Form onChange={handleFormOnChange}>
                            <Grid item xs={12}>
                                <label htmlFor="layers">How many layers?</label>
                                <Field
                                    id='layers'
                                    name='layers'
                                    type='number'
                                    on
                                />
                            </Grid>
                            {
                                Array(layers)
                                    .fill(true)
                                    .map((item, index) => (
                                        <>
                                            <Grid item xs={12}>
                                                <label htmlFor={`t${index + 1}`}>What is the time interval for {index + 1}</label>
                                                <Field id={`t${index + 1}`} name={`t${index + 1}`} type='number' />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <label htmlFor={`c${index + 1}`}>How many children does it spawn</label>
                                                <Field id={`c${index + 1}`} name={`c${index + 1}`} type='number' />
                                            </Grid>
                                        </>
                                    ))
                            }
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained">Run Sim</Button>
                            </Grid>
                        </Form>
                    </Formik>
                </Grid>
                <Grid item xs='auto' className='inputs' >
                </Grid>
            </Grid>
        </>
    )
}