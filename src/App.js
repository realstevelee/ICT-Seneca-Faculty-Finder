import React, {Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { faculty } from './Faculty';

class App extends Component {
    constructor() {
        super();
        this.state = {
            faculty: faculty,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render () {
        /*To communicate with CardList, it filters the name of faculty*/
        const filteredFaculty = this.state.faculty.filter(faculty => {
            return faculty.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return (
            <div className = 'tc'>
                <h1> ICT Seneca Faculty Finder </h1>
                {/* Search Box Component */}
                <SearchBox searchChange={this.onSearchChange}/>
                {/* Card List Component */}
                <CardList faculty={filteredFaculty}/>
            </div>
        );
    }
}

export default App;