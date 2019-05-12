import React, {Component, createContext} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import { DoodleService } from './helper';
import { GoogleImage } from './GoogleImage';
import { SearchBar } from './SearchBar';


export const DoodleContext = createContext([]);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doodleLoading: true,
            googleDoodles: [],
        };
    }

    async componentDidMount() {
        try {
            const response = await DoodleService.getRecentDoodles();
            const json = await response.json();
            this.setState({ googleDoodles: json, doodleLoading: false });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { doodleLoading, googleDoodles } = this.state;
        return <>
            <DoodleContext.Provider value={googleDoodles}>
                <GoogleImage doodleLoading={doodleLoading} />
            </DoodleContext.Provider>
            <SearchBar />
        </>;
    }
}

export default App;
