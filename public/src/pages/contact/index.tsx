import './contact.css'

export const Contact = () => {
    // TODO put this on a CMS
    const contactInfo = [
        {
            type: 'Outlook',
            value: 'test@outlook.com'
        },
        {
            type: 'Gmail',
            value: 'test@gmail.com'
        },
        {
            type: 'Phone Number',
            value: '(555) 555-5555'
        },
    ]

    return (
        <div className='contact'>
            <table>
                <tbody>
                    {contactInfo.map((contact) => (
                        <tr>
                            <td> {contact.type}: </td>
                            <td> {contact.value} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}