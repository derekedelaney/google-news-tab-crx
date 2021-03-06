import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { InView } from 'react-intersection-observer';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './index.css';
import { Loading } from '../Loading';

const newsTopics = [
    'TOP_NEWS',
    'NATION',
    'WORLD',
    'LOCAL',
    'BUSINESS',
    'TECHNOLOGY',
    'ENTERTAINMENT',
    'SPORTS',
    'SCIENCE',
    'HEALTH'
];

const StyledTabs = withStyles({
    root: {
        borderBottom: '1px solid #e8e8e8',
        zIndex: 2,
        backgroundColor: '#fff',
        margin: 12
    },
    indicator: {
        backgroundColor: '#1890ff',
    }
})(Tabs);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: 'none',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&:selected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
            backgroundColor: 'transparent',
        },
    }
}))(props => <Tab disableRipple {...props} />);

function GoogleNews(props) {
    const {
        googleNews: { items = [] },
        onNewsChange,
        newsLoading
    } = props;
    const [isInView, setIsInView] = useState(true);
    function handleChange(inView) {
        setIsInView(inView);
    }

    useEffect(() => {
        const element = document.querySelector('.weather');
        if (element) {
            element.className = isInView ? 'weather' : 'weather offset';
        }
    }, [isInView])

    return (
        <div className="googleNewsContainer">
            <InView onChange={handleChange} threshold={1}>
                <NewsTabs isInView={isInView} onTabChange={onNewsChange} />
            </InView>
            {newsLoading ? <Loading /> :
                !isInView && (
                    <div style={{ height: 48 }} />
                )} {/* A place holder when the tabs are fixed to the top */}
                {items.map(item => (
                    <NewsStory key={item.guid} {...item} />
                ))}
        </div>
    );
}

function NewsTabs({ isInView, onTabChange }) {
    const [tabId, setTabId] = useState(0);
    function handleChange(event, tabId) {
        setTabId(tabId);
        onTabChange(newsTopics[tabId]);
    }

    return (
        <StyledTabs
            value={tabId}
            onChange={handleChange}
            variant={isInView ? 'scrollable' : 'fullWidth'}
            scrollButtons="auto"
            classes={{ root: !isInView && 'fixed-tab' }}
        >
            <StyledTab label="Top News" />
            <StyledTab label="U.S." />
            <StyledTab label="World" />
            <StyledTab label="Local Stories" />
            <StyledTab label="Business" />
            <StyledTab label="Technology" />
            <StyledTab label="Entertainment" />
            <StyledTab label="Sports" />
            <StyledTab label="Science" />
            <StyledTab label="Health" />
        </StyledTabs>
    );
}

function NewsStory(props) {
    const { content, enclosure, link, title } = props;
    const newStoryClasses = classnames({
        newsStoryContainer: true,
        noImage: !enclosure.link,
    });
    if (!content.startsWith('<ol>') && !content.endsWith('</ol>')) {
        const [titleText, subtitle] = title.split(' - ');
        return (
            <div className={newStoryClasses}>
                <ol>
                    <li>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {titleText}
                        </a>
                        &nbsp;&nbsp;{subtitle}
                    </li>
                </ol>
            </div>
        );
    }
    return (
        <div className={newStoryClasses}>
            {enclosure.link && <img src={enclosure.link} alt="news" />}
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}

export default GoogleNews;
