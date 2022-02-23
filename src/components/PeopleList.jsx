import React from 'react';


class PeopleList extends React.Component {
    render() {

        const peopleList = this.props.people.map((person, index) =>{
            return <li className='list-group-item' key={index}>{person.name}</li>
        });

        return (
                <ul className='list-item'>{peopleList}</ul>
        );
    }
}

export default PeopleList;