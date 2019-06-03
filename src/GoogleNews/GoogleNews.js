import React from 'react';
import classnames from 'classnames';
import './index.css';

function GoogleNews(props) {
    const { googleNews: {feed = {}, items = []} } = props;
    return <div className="googleNewsContainer">
        <h2>
            <a href={feed.link}>Top Stories</a>
        </h2>
        {items.map((item) => <NewsStory key={item.guid} { ...item }/>)}
    </div>
}

function NewsStory(props) {
    const { content, enclosure, link, title } = props;
    console.log(props);
    const newStoryClasses = classnames({
        'newsStoryContainer': true,
        'noImage': !enclosure.link
    });
    if (!content.startsWith('<ol>') && !content.endsWith('</ol>')) {
        const [titleText, subtitle] = title.split(' - ');
        return <div className={newStoryClasses}>
            <ol>
                <li><a href={link} target="_blank" rel="noopener noreferrer">{titleText}</a>&nbsp;&nbsp;{subtitle}</li>
            </ol>
        </div>
    }
    return <div className={newStoryClasses}>
        {enclosure.link && <img src={enclosure.link} alt="news"/>}
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
}

export default GoogleNews;
