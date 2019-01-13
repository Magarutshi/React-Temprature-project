import React from "react";

const Weather = props => (
    
        
           <div className>
             {props.city && <p className="weather__key">Temprature: {props.temprature}</p>}
             {props.humidity && <p className="weather__key">Humidity: {props.humidity}</p>}
              {props.country && <p className="weather__key">Country: {props.country}</p>}
              {props.city && <p className="weather__key">City: {props.city}</p>}
              {props.region && <p className="weather__key">Region: {props.region}</p>}
              {props.error && <p className="weather__error">{props.error}</p>}
              
           </div>
        
    
);

export default Weather;