import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className = 'pa2 ba b--red'
                type='search' placeholder='search faculty'
                onChange={searchChange}
                />
        </div>
    );
}

export default SearchBox;