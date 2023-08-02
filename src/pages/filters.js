import React from 'react';
import SearchBar from '../components/searchBar';
import Dropdown from '../components/dropdown';
import TemplateDropdownList from '../components/templateDropdownList';

const Filters = () => {

    return (

        <div className='section filters'>
            
            <SearchBar />
            <Dropdown />
            <TemplateDropdownList />
        
        </div>

    );

}

export default Filters;