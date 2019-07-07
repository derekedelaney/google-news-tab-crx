import React from 'react';
import logo from './google-logo.svg';

export default function DisplayGoogle() {
    return <a className="google-logo" href="https://www.google.com/">
        <img src={logo} className="App-logo" alt="google logo" title="google" />
    </a>
}
