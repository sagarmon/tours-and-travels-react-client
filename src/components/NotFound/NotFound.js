import React from 'react';
import notfound from '../../images/404.png';

const NotFound = () => {
    return (
        <div>
            <img src={notfound} alt="" className="w-75" />
        </div>
    );
};

export default NotFound;