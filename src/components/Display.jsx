import React from 'react';
import PeopleList from './PeopleList';

const Display = ({search, people}) => {
    
    const persons = people.filter(person => {
        if (search.toLowerCase() === '') {
            return person;
        };

        return person.name.toLowerCase().includes(search);
    });

    /* const getDetails = (person) => {
        alert(person);
    }; */
    
    return ( 
        
        <div>
            {
                search ? persons.map((person, index) => (
                    <ul className='list-group'>
                        <li /* onClick={getDetails(person)} */ className='list-group-item' key={index}>{person.name}</li>
                    </ul>
                )) 
                    : 
                <PeopleList people={people} />
            }
        </div>
    );
}

export default Display;