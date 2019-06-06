import React from 'react';
import { DoodleContext } from '../App';
import logo from './google-logo.svg';


function GoogleDoodle() {
    return <DoodleContext.Consumer>
        {(googleDoodles = []) => (
            <ExtractDoodleForToday doodles={googleDoodles}/>
        )}
    </DoodleContext.Consumer>
}

function ExtractDoodleForToday({doodles}) {
    const today = new Date().toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    const todaysDoodles = doodles.filter(d => d.pubDate === today);
    console.log(doodles);
    console.log(today);
    // const todaysDoodles = []
    const doodle = todaysDoodles.length > 0 ? todaysDoodles[Math.floor(Math.random()*todaysDoodles.length)] : undefined

    return doodle ? <DisplayDoodle {...doodle} /> : <DisplayGoogle />;
}

function DisplayDoodle({title, link, image}) {
    return <a className="doodle-logo" href={link}>
        <img src={image} alt={title} title={title} />
    </a>;
}
function DisplayGoogle() {
    return <a className="google-logo" href="https://www.google.com/">
        <img src={logo} className="App-logo" alt="google logo" title="google" />
    </a>
}

export default GoogleDoodle;
