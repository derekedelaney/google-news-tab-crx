import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import logo from './google-logo.svg';
import { DoodleService } from './helper';
import Loading from './Loading/Loading';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doodleLoading: true,
      googleDoodles: []
    }
  }

  async componentDidMount() {
    const response = await DoodleService.getRecentDoodles();
    const json = await response.json();
    this.setState({ googleDoodles: json, doodleLoading: false });
  }

  render() {
    const { doodleLoading, googleDoodles } = this.state;
    console.log(googleDoodles);
    return (
      <div className="logo-container">
        <div className="google-logo">
          {doodleLoading ? <Loading /> :
          <img src={logo} className="App-logo" alt="logo" />
          }
        </div>
      </div>
    );
  }
}

export default App;
