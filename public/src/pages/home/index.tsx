import './home.css'

export const Home = () => {
    const knownTech = [
        'TypeScript',
        'JavaScript',
        'Express',
        'Node',
        'Yarn',
        'React',
        'MySQL',
        'MongoDB',
        'HTML',
        'CSS',
        'Git',
    ]
    return (
        <div className='home'>
            <div className='home-content'>
                <h1> 
                    Hello and Welcome, <br/><br/>
                    My name is Curtis Jones, <br/><br/>
                    Software Developement is my trade <br/><br/>
                    Feel free to stick around and <br />
                    look at some of my projects
                </h1>
            </div>
            <div className='known-tech'>
                <h1> 
                    Technologies used to build this website <br/><br/>
                    <table>
                        {knownTech.map( (tech) => (
                            <tr>
                                {tech}
                            </tr>
                        ) )}
                    </table>
                </h1>
                <h3> And more to come </h3>
            </div>
        </div>
    );
}