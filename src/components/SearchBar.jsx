import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    componentDidMount() {

    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.submission(this.state.term.toLowerCase());
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className='form-group'>
                        <label><h1>Star Wars Search</h1></label>
                        <input className='form-control' type='text' onChange={e => this.setState({ term: e.target.value })} value={this.state.term}></input>
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;