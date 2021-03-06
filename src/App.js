import React, {Component, createContext} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import { NetworkController } from './helper';
import { GoogleImage } from './GoogleImage';
import { SearchBar } from './SearchBar';
import { GoogleNews } from './GoogleNews';
import { Weather } from './Weather';

export const NewsContext = createContext([]);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {},
            googleDoodles: [],
            googleNews: {},
            newsLoading: true
        };
    }

    async componentDidMount() {
        const googleDoodles = await NetworkController.loadDoodles();
        const googleNews = await NetworkController.loadNews();
        NetworkController.loadWeather().then(weather => { this.setState({ weather })}); // Synchronous because it takes a bit longer.
        this.setState({ googleDoodles, googleNews, newsLoading: false });
    }

    handleNewsChange = async topic => {
        this.setState({ newsLoading: true, googleNews: {} })
        const googleNews = await NetworkController.loadNews(topic);
        this.setState({ googleNews, newsLoading: false });
    }

    render() {
        const { weather, googleDoodles, googleNews, newsLoading } = this.state;
        return <>
            <Weather weather={weather} />
            <GoogleImage doodles={googleDoodles} />
            <SearchBar />
            <GoogleNews googleNews={googleNews} onNewsChange={this.handleNewsChange} newsLoading={newsLoading} />
        </>;
    }
}

export default App;
