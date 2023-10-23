import styles from './home.module.css'

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
        'Docker',
        'HTML',
        'CSS',
        'Git',
    ]
    return (
        <div className={styles['home']}>
            <div className={[styles['content'], styles['intro']].join(' ')}>
                <h1>
                    &lt;h1&gt;
                    <div className='tab'>
                        Hello and Welcome, <br /><br />
                        My name is Curtis Jones, <br /><br />
                        Software Developement is my trade <br /><br />
                        Feel free to stick around and <br />
                        look at some of my projects
                    </div>
                    &lt;/h1&gt;
                </h1>
            </div>
            <div className={[styles['content'], styles['tech']].join(' ')}>
                <h1>Technologies used to build this website</h1>
                <div className={styles['tech-list']}>
                    {knownTech.map((tech, index) => (
                        <h2 key={index} className={[styles['tech-item'], 'tab'].join(' ')}>
                            {'‣'} {tech}
                        </h2>
                    ))}
                </div>
                <h3> And more to come </h3>
            </div>
        </div>
    );
}