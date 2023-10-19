import { Grid, Link } from '@mui/material'
import './resume.css'

export const Resume = () => {
    // The TODO's to add is because I don't want this information on a repo
    // TODO put this info in a table

    // TODO add this to a CMS
    const profesionalSummary = [
        'McMaster Bachelor of Technology student with an apt for computer hardware, computer software, and robotics. ',
        'Passion for creative applications of technology',
        'Appreciates challenges and learning new ways to solve practical problems. ',
        'Energetic, creative, and sharing of ideas fosters a workplace of healthy creative abrasion.'
    ]

    const workExperiance = [
        {
            title: 'Web Developer',
            location: 'GiftCash, Ancaster, Ontario',
            when: 'January 2020 – August 2023',
            points: [
                'Worked with both front and back end applications to allow for the faster processing of gift cards and providing a better customer experience'
            ]
        }
    ]


    const education = [
        {
            title: 'Bachelor of Technology – Automation Engineering Technology  ',
            location: 'McMaster University, Hamilton, Ontario',
            // TODO confirm this
            when: 'September 2018 – April 2023',
            points: [
                'Awarded Bachelor of Technology Degree, Chemical Engineering Technology Advanced Diploma, and a Business Management Certificate'
            ]
        }
    ]

    const projects = [
            'This website'
    ]

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
            <h1> Curtis Jones </h1>
            <p className='address'> Address {/* TODO add address */}</p>
            <Grid container
                justifyContent="flex-end"
                alignItems="center"
            >
                <Grid item xs={6} className='left-align'>
                    <p className='phone-number'> (555) 555-5555 {/* TODO add phone number */} </p>
                </Grid>
                <Grid item xs={6} className='right-align'>
                    <a className='email' href='mailto:email@gmail.com'> email@gmail.com {/* TODO add phone number */} </a>
                </Grid>
            </Grid>

            <div className='line' />

            <h2> Profesional Summary </h2>
            <div className='left-align'>
                {buildUl(profesionalSummary)}
            </div>

            <div className='line' />

            <h2> Work Experiance </h2>
            <div className='left-align'>
                {buildMulti(workExperiance)}
            </div>

            <div className='line' />

            <h2> Education </h2>
            <div className='left-align'>
                {buildMulti(education)}
            </div>

            <div className='line' />

            <h2> Projects </h2>
            <div className='left-align'>
                {buildUl(projects)}
            </div>
            <p> References Available Upon Request </p>
        </div>
    );
}