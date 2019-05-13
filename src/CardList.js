import React from 'react';
import Card from './Card'

const CardList = ({ faculty }) => {
    return (
        <div>
            {
                //Display Card List
                faculty.map((user, i) => {
                    return <Card
                        key={i}
                        id={faculty[i].id}
                        name={faculty[i].name}
                        email={faculty[i].email}
                    />
                })
            }
        </div>
    );
}

export default CardList;