import React, {Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import { faculty } from '../Faculty';
import Scroll from '../components/Scroll';

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
        const { faculty, searchfield } = this.state;
        const filteredFaculty = faculty.filter(faculty => {
            return faculty.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return (
            <div className = 'tc'>
                <h1> ICT Seneca Faculty Finder </h1>
                {/* Search Box Component */}
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    {/* Card List Component */}
                    <CardList faculty={filteredFaculty}/>
                </Scroll>
            </div>
        );
    }
}

export default App;