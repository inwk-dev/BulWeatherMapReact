import React, { Component } from "react";
import { MapContainer, GeoJSON} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import bulData from "./data/bulgeo.json";
//import data from "./regions";
import Regions from './Regions';

const weatherApi = {
  key: "a319769fc93d4192a74141349212703",
  url: "http://api.weatherapi.com/v1/",
};

const regions = [
  "Blagoevgrad",
  "Burgas",
  "Dobrich",
  "Gabrovo",
  "Haskovo",
  "Kardzhali",
  "Kyustendil",
  "Lovech",
  "Montana",
  "Pazardzhik",
  "Pernik",
  "Pleven",
  "Plovdiv",
  "Razgrad",
  "Rousse",
  "Shumen",
  "Silistra",
  "Sliven",
  "Smolyan",
  "Sofia-grad",
  "Stara-zagora",
  "Targovishte",
  "Varna",
  "Veliko-tarnovo",
  "Yambol",
  "Vratsa",
  "Vidin"
];

class App extends Component {

  componentDidMount(){
      regions.forEach((region) => {
        fetch(`${weatherApi.url}current.json?key=${weatherApi.key}&q=${region}`)
          .then((res) => res.json())
          .then((result) => {
            let io = result.current;
            //Unsure why the items are not written to localStorage?!
            window.localStorage.setItem(region, JSON.stringify(io));
          });
      });
  }

  render() {
    return (
      <div>
        <MapContainer
          style={{ height: "480px", width: "100%", alignItems: "center" }}
          zoom={7}
          center={[43, 25]}
        >
          <GeoJSON
            data={bulData}
            style={{ height: "1024px", width: "100%" }}
          >
            <Regions></Regions>
          </GeoJSON>
        </MapContainer>
      </div>
    );
  }
}

export default App;
