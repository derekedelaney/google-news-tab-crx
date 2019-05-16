import React from 'react';
import './index.css';

function GoogleNews(props) {
    const { googleNews: {feed = {}, items = []} } = props;
    return <div className="googleNewsContainer">
        <h2>
            <a href={feed.link}>{feed.title}</a>
        </h2>
        {items.map((item) => <NewsStory { ...item }/>)}
    </div>
}

function NewsStory(props) {
    const { content } = props;
    return <div className="newsStoryContainer">
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
}

export default GoogleNews;
