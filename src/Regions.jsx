import { Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

//Fix Marker Pin Icon
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Regions = () => {
  var cities = [
    { name: "Sofia-grad", coordinates: [42.69751, 23.32415], population: 37843000 },
    { name: "Plovdiv", coordinates: [42.143333, 24.748889], population: 30539000 },
    { name: "Burgas", coordinates: [42.5, 27.466667], population: 24998000 },
    {
      name: "Varna",
      coordinates: [43.216667, 27.916667],
      population: 23480000,
    },
    {
      name: "Pleven",
      coordinates: [43.407778, 24.620278],
      population: 23416000,
    },
    {
      name: "Stara-Zagora",
      coordinates: [42.433333, 25.65],
      population: 22123000,
    },
    {
      name: "Blagoevgrad",
      coordinates: [42.016667, 23.1],
      population: 21009000,
    },
    { name: "Smolyan", coordinates: [41.583333, 24.7], population: 17712000 },
    {
      name: "Targovishte",
      coordinates: [43.25, 26.583333],
      population: 17444000,
    },
    { name: "Pernik", coordinates: [42.6, 23.033333], population: 16170000 },
    {
      name: "Razgrad",
      coordinates: [43.533333, 26.516667],
      population: 15669000,
    },
    {
      name: "Dobrich",
      coordinates: [43.566667, 27.833333],
      population: 15669000,
    },
    {
      name: "Veliko-Tarnovo",
      coordinates: [43.077778, 25.616667],
      population: 15669000,
    },
    { name: "Yambol", coordinates: [42.483333, 26.5], population: 15669000 },
    {
      name: "Sliven",
      coordinates: [42.683333, 26.333333],
      population: 15669000,
    },
    {
      name: "Kyustendil",
      coordinates: [42.283333, 22.683333],
      population: 15669000,
    },
    {
      name: "Pazardzhik",
      coordinates: [42.2, 24.333333],
      population: 15669000,
    },
    {
      name: "Kardzhali",
      coordinates: [41.65, 25.366667],
      population: 14998000,
    },
    {
      name: "Haskovo",
      coordinates: [41.933333, 25.566667],
      population: 14667000,
    },
    {
      name: "Gabrovo",
      coordinates: [42.866667, 25.333333],
      population: 14667000,
    },
    {
      name: "Lovech",
      coordinates: [43.134722, 24.717222],
      population: 14667000,
    },
    {
      name: "Shumen",
      coordinates: [43.283333, 26.933333],
      population: 14667000,
    },
    {
      name: "Rousse",
      coordinates: [43.823056, 25.953889],
      population: 14667000,
    },
    {
      name: "Montana",
      coordinates: [43.416667, 23.233333],
      population: 14667000,
    },
    { name: "Vidin", coordinates: [44, 22.866667], population: 14667000 },
    { name: "Vratsa", coordinates: [43.2, 23.55], population: 14667000 },
  ];

  return(
    <div>
      {cities.map((city) => (
        <Marker position={[city.coordinates[0], city.coordinates[1]]} divIcon={icon}>
          <Popup>
            <div>
              <h5>{city.name}</h5>
              <br/>
              <img src= {window.localStorage.getItem(city).condition.icon} alt="" srcset=""/>
              <br/>
              <span>Температура/Temperature: ' + {window.localStorage.getItem(city).condition.temp_c }+ '°C'</span>
              <br/>
              <span>'Влажност/Humidity: ' + {window.localStorage.getItem(city).condition.humidity} + ' g/m3';</span>
              <br/>
              <span>'Посока на вятъра/Wind Direction: ' + {window.localStorage.getItem(city).condition.wind_dir}</span>
              <br/>
              <span>'Скорост/Wind Speed: ' + {window.localStorage.getItem(city).condition.wind_kph} + ' km/h'</span>
              <br/>
              <span>'Валежи/Precipitation: ' + {window.localStorage.getItem(city).condition.precip_mm} + ' mm'</span>
            </div>
          </Popup>
        </Marker>
      ))}    
    </div>
    );
};


export default Regions;




