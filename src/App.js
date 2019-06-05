import React, {Component, createContext} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import { NetworkController } from './helper';
import { GoogleImage } from './GoogleImage';
import { SearchBar } from './SearchBar';
import { GoogleNews } from './GoogleNews';

export const DoodleContext = createContext([]);
export const NewsContext = createContext([]);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doodleLoading: true,
            googleDoodles: [],
            googleNews: {},
        };
    }

    async componentDidMount() {
        const googleDoodles = await NetworkController.loadDoodles();
        const googleNews = await NetworkController.loadNews();
        this.setState({ googleDoodles, googleNews, doodleLoading: false });
    }

    render() {
        const { doodleLoading, googleDoodles, googleNews } = this.state;
        return <>
            <DoodleContext.Provider value={googleDoodles}>
                <GoogleImage doodleLoading={doodleLoading} />
            </DoodleContext.Provider>
            <SearchBar />
            <GoogleNews googleNews={googleNews} />
        </>;
    }
}

export default App;
