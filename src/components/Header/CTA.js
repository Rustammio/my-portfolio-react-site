import React from 'react';
import CV from '../../assets/Resume_Rustam_Rustamov.pdf'


const CTA = props => {
    return (
        <div className='cta'>
            <a href={CV} download  className='btn'>Download CV</a>
            <a href="#contacts" className='btn btn-primary'>Contacts</a>
        </div>
    );
};


export default CTA;
