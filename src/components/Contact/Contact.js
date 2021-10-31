import React from 'react';
import contact1 from '../../images/contact1.png';
import contact2 from '../../images/contact2.png';

const Contact = () => {
    return (
        <div>
            <img src={contact1} className="w-100" alt="" />
            <img src={contact2} className="w-100" alt="" />
        </div>
    );
};

export default Contact;