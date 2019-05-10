import React, {Component, createContext} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import { DoodleService } from './helper';
import { GoogleImage } from './GoogleImage';


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
        const response = await DoodleService.getRecentDoodles();
        const json = await response.json();
        this.setState({ googleDoodles: json, doodleLoading: false });
    }

    render() {
        const { doodleLoading, googleDoodles } = this.state;
        return <>
            <DoodleContext.Provider value={googleDoodles}>
                <GoogleImage doodleLoading={doodleLoading} googleDoodles={googleDoodles} />
            </DoodleContext.Provider>
        </>;
    }
}

export default App;
