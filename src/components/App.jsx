import React from 'react';
import swapi from '../api/swapi';
import SearchBar from './SearchBar';
import Display from './Display'; 

class App extends React.Component {

    state = { peopleList: [], searchTerm: '' };

    async componentDidMount() {

        let page = 0;
        const res = await swapi.get('people');

        while(res.data.next != null) {
            page++;
            const res = await swapi.get('people/?page=' + page);
            this.setState({ peopleList : [...this.state.peopleList, ...res.data.results] });
            console.log(this.state.peopleList);
        }
    };

    onSearchSubmit = (searchTerm) => {
        this.setState({ searchTerm: searchTerm })
        console.log(searchTerm);
    };

    render(){
        return(
            <div className='container'>
                <SearchBar submission={this.onSearchSubmit}/>
                <Display search={this.state.searchTerm} people={this.state.peopleList} />
            </div>
        );    
    }; 
}

export default App;