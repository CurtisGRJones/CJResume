import { Grid } from '@mui/material'
import './resume.css'
import { useEffect, useState } from 'react'
import { CmsControler } from '../../controlers'
import { Spinner } from '../../components'

export const Resume = () => {
    // TODO find way to show spinner while use effect is running
    let [resumeData, setResumeData] = useState({
        address: '',
        phoneNumber: '',
        email: '',
        profesionalSummary: [],
        workExperiance: [],
        education: [],
        projects: []
    })

    let [loading, setLoading] = useState(true)

    const cmsControler = new CmsControler()

    useEffect(() => {
        // This makes it look nicer than just flashing, possibly swap to a fase later
        Promise.all([
            cmsControler.getResumeData().then((resume) => {
                setResumeData(resume)
            }),
            new Promise(r => setTimeout(r, 1000))
        ]).then( () => {
            setLoading(false)
        })
    }, [resumeData])

    const buildUl = (list: string[]) => {
        return (
            <ul>
                {list.map((item) => (
                    <li>
                        {item}
                    </li>
                ))}
            </ul>
        )
    }

    // TODO move the type and use for above vars
    const buildMulti = (list: {
        title: string,
        location: string,
        when: string,
        points: string[]
    }[]) => {

        return ( list.map((item) => (
            <div className='multi'>
                <h3>{item.title}</h3>
                <Grid container
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <Grid item xs={6} className='left-align'>
                        <p className='work-location'> {item.location} </p>
                    </Grid>
                    <Grid item xs={6} className='right-align'>
                        <p className='work-location'> {item.when} </p>
                    </Grid>
                </Grid>
                {buildUl(item.points)}
            </div>
        )) )
    }

    return (
        <div className='resume'>
            {loading && <Spinner />}
            <h1> Curtis Jones </h1>
            <p className='address'> {resumeData.address}</p>
            <Grid container
                justifyContent="flex-end"
                alignItems="center"
            >
                <Grid item xs={6} className='left-align'>
                    <p className='phone-number'> {resumeData.phoneNumber} </p>
                </Grid>
                <Grid item xs={6} className='right-align'>
                    <a className='email' href='mailto:email@gmail.com'> {resumeData.email} </a>
                </Grid>
            </Grid>

            <div className='line' />

            <h2> Profesional Summary </h2>
            <div className='left-align'>
                {buildUl(resumeData.profesionalSummary)}
            </div>

            <div className='line' />

            <h2> Work Experiance </h2>
            <div className='left-align'>
                {buildMulti(resumeData.workExperiance)}
            </div>

            <div className='line' />

            <h2> Education </h2>
            <div className='left-align'>
                {buildMulti(resumeData.education)}
            </div>

            <div className='line' />

            <h2> Projects </h2>
            <div className='left-align'>
                {buildUl(resumeData.projects)}
            </div>
            <p> References Available Upon Request </p>
        </div>
    );
}