import React from 'react';
import Card from './Card.js';

const CardList = ({ filteredRobots }) => {
 
    return (
    <div>
            {
                filteredRobots.map((user, i) => {
                    return <Card
                        key={i}
                        id={filteredRobots[i].id}
                        name={filteredRobots[i].name}
                        email={filteredRobots[i].email}

                    />
                })
            }
    </div>
    );
}

export default CardList