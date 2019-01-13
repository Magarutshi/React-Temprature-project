import React from 'react';

import Titles from './components/Titles';
import Forms from './components/Forms';
import Weather from './components/Weather';

const API_Key = "change with your apixu key (important)";

class App extends React.Component {
    state = {
        temprature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        region: undefined,
        error: undefined
        
    }
    getWeather = async(e) => {
      e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
         const api_call = await fetch(`http://api.apixu.com/v1/current.json?key=${API_Key}&q=${city},${country}`);
         const data = await api_call.json();
         if(city && country) {
            console.log(data);
            this.setState({
               temprature: data.current.temp_c,
               humidity: data.current.humidity,
               city: data.location.name,
               region: data.location.region,
               country: data.location.country,
               error: ""
           
            });
         } else {
            this.setState({
                temprature: undefined,
                humidity: undefined,
                city: undefined,
                region: undefined,
                country: undefined,
                error: "Please enter the values."
            
             });
         }
    }
   render() {
       return (
           <div>
             <div className="wrapper">
               <div className="main">
                 <div className="container">
                   <div className="row">
                     <div className="col-xs-8 title-container">
                            <Titles />
                     </div>
                     <div className="col-xs-6 form-container">
                            <Forms getWeather={this.getWeather}/>
                            <Weather 
                            temprature={this.state.temprature}
                            humidity={this.state.humidity}
                            city={this.state.city}
                            region={this.state.region}
                            country={this.state.country}
                            error={this.state.error}

                            />
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
       );
   }
};

export default App;
