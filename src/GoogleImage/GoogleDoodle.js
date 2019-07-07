import React from 'react';
import { DisplayGoogle } from '.';

function GoogleDoodle({ doodles }) {
    const today = new Date().toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    const todaysDoodles = doodles.filter(d => d.pubDate === today);
    // const todaysDoodles = []
    const doodle = todaysDoodles.length > 0 ? todaysDoodles[Math.floor(Math.random()*todaysDoodles.length)] : undefined

    return doodle ? <DisplayDoodle {...doodle} /> : <DisplayGoogle />;
}

function DisplayDoodle({title, link, image}) {
    return <a className="doodle-logo" href={link}>
        <img src={image} alt={title} title={title} />
    </a>;
}

export default GoogleDoodle;
