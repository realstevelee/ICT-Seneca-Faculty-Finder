import React from 'react';

//Card Component
const Card = ({ name, email }) => {
    return (        
        // Style using tachyons
        <div className='tc bg-dark-red dib br3 pa3 ma2 grow bw2 shwdow-5 white'>
            <div>
                {/* Faculty Name */}
                <h2>{name}</h2>
                {/* Faulty Email */}
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;