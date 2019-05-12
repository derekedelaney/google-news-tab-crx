import React from 'react';

function SearchBar() {
    const handleKeyDown = (e) => {
        focusAddressBar();
        e.target.blur();
    };
    return <div className="google-search-container">
        <div className="google-search-box">
            <input type="text" placeholder="Search Google or type a Url" className="browser-default google-search-input" onKeyDown={handleKeyDown} />
        </div>
    </div>
}

function focusAddressBar() {
    var keyEvent = new KeyboardEvent('keypress', {key: 'l', char: 'l', code: 'KeyL', metaKey: true});
    document.dispatchEvent(keyEvent);
}

export default SearchBar;
