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
            when: 'January 2018 – August 2023',
            points: [
                'Worked with both front and back end applications to allow for the faster processing of gift cards and providing a better customer experience'
            ]
        }
    ]
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

            <div className='line'/>

            <h2> Profesional Summary </h2>
            <div className='left-align'>
                <ul>
                    {profesionalSummary.map((item) => (
                        <li>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='line'/>

            <h2> Work Experiance </h2>
            <div className='left-align'>
                {
                    workExperiance.map( (job) => (
                        <div className='job'>
                            <h3>{job.title}</h3>
                            <p>{job.location}</p>
                        </div>
                    ) )
                }
            </div>
        </div>
    );
}