import './assets/styles/main.scss';
import Selector from "./modules/selector.js";
import Search from "./modules/search";

let map;
let marker;
let script = document.createElement('script');
script.src = `вставить ключ сюда`;
script.defer = true;

window.initMap = function(dataCord) {
    let coordinatePosition = { lat: 50.451341260283165, lng: 30.073987708937306};

    if (dataCord) coordinatePosition = { lat: dataCord.lat, lng: dataCord.lng };

    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinatePosition,
        zoom: 14
    });

    if (dataCord !== undefined) marker = new google.maps.Marker({ position: {lat: dataCord.lat, lng: dataCord.lng}, map });
};

document.head.appendChild(script);

