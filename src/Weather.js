import React, {
  Component
} from 'react';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {weather:""};
  }
  async componentDidMount() {
    const weatherFetchData = await fetch('http://api.weatherstack.com/current?access_key=035549b71ea6eb6508089986f5efde86&query=Round Rock&units=f')
    const weatherJsonRes = await weatherFetchData.json()
    console.log(weatherJsonRes)
    //this.setState({weather: weatherJsonRes.current.temperature});
    if(weatherJsonRes.success == false){
      this.setState({weather: "N/A"})
    }else{
      this.setState({weather: weatherJsonRes.current.temperature});
    }
    //
  }
//Current temperature in Round Rock: {this.state.weather}F
  render() {
    return (
      <h3 className="weatherTracker">
      Current temperature in Round Rock: {this.state.weather} F
      </h3>
    );
  }

}

export default Weather;
