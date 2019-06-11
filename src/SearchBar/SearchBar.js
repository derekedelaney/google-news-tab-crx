import React, { useState } from 'react';

function SearchBar() {
    const [searchText, onSearchTextChange] = useState('');
    function handleChange(e) {
        onSearchTextChange(e.target.value);
    }
    function handleKeyDown(e) {
        if (e.key === "Enter") {
            window.open(`http://www.google.com/search?q=${encodeURIComponent(searchText)}`, '_top')
        }
    }
    return (
        <div className="google-search-container">
            <div className="google-search-box">
                <input
                    type="text"
                    placeholder="Search Google or type a Url"
                    className="browser-default google-search-input"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={searchText}
                />
            </div>
        </div>
    );
}

export default SearchBar;
