import React, { useEffect, useState } from 'react';
import PremSer from '../PremSer/PremSer';

const PremiumServices = () => {
    const [premser, setPremser] = useState([]);

    useEffect(() => {
        fetch('./premiumservices.json')
            .then(res => res.json())
            .then(data => setPremser(data));
    }, [])

    return (
        <div className="container">
            <h1 className="m-5">Premium Services</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        premser.map(premser => <PremSer
                            key={premser.id}
                            premser={premser}
                        >
                        </PremSer>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PremiumServices;