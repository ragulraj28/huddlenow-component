import React, { useState } from 'react';

const SearchBar = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const clearInput = () => {
        setInputValue('');
    };

    return(

        <div className="searchbar">

            <div className="searchbar-wrapper">

                <div className="icon">

                    <svg width="16" height="16" stroke="currentColor" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

                    </svg>

                </div>

                <input type="text" placeholder="Search" value={inputValue} onChange={handleInputChange}/>

                { inputValue && 

                <div className="icon close" onClick={clearInput}>

                    <svg width="24" height="24" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path d="M6 18L18 6M6 6L18 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        
                    </svg>

                </div> }

            </div>

        </div>

    );
    
} 

export default SearchBar;
