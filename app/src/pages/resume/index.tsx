import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { CmsControler } from '../../controlers'
import { Spinner } from '../../components'

import styles from './resume.module.css'

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
        ]).then(() => {
            setLoading(false)
        })
    }, [])

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

        return (list.map((item) => (
            <div className={styles['multi']}>
                <h3>{item.title}</h3>
                <Grid container
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <Grid item xs={6} className={styles['left-align']}>
                        <p className={styles['work-location']}> {item.location} </p>
                    </Grid>
                    <Grid item xs={6} className={styles['right-align']}>
                        <p className={styles['work-location']}> {item.when} </p>
                    </Grid>
                </Grid>
                {buildUl(item.points)}
            </div>
        )))
    }

    return (
        <div className={styles['resume']}>
            <div className={styles['resume-content']}>
                {loading && <Spinner /> /* TODO find out if this is needed */}
                <h1> Curtis Jones </h1>
                <p className={styles['address']}> {resumeData.address}</p>
                <Grid container
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    { /* TODO make this top/botom if screen is too small ~370 px */ }
                    <Grid item xs={5} className={styles['left-align']}>
                        <p className={styles['phone-number']}> {resumeData.phoneNumber} </p>
                    </Grid>
                    <Grid item xs={7} className={styles['right-align']}>
                        <a className={styles['email']} href={`mailto:${resumeData.email}`}> {resumeData.email} </a>
                    </Grid>
                </Grid>

                <div className={styles['line']} />

                <h2> Profesional Summary </h2>
                <div className={styles['left-align']}>
                    {buildUl(resumeData.profesionalSummary)}
                </div>

                <div className={styles['line']} />

                <h2> Work Experiance </h2>
                <div className={styles['left-align']}>
                    {buildMulti(resumeData.workExperiance)}
                </div>

                <div className={styles['line']} />

                <h2> Education </h2>
                <div className={styles['left-align']}>
                    {buildMulti(resumeData.education)}
                </div>

                <div className={styles['line']} />

                <h2> Projects </h2>
                <div className={styles['left-align']}>
                    {buildUl(resumeData.projects)}
                </div>
                <p> References Available Upon Request </p>
            </div>
        </div>
    );
}