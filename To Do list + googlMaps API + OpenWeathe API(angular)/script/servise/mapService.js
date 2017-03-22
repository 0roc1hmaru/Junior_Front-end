app.service('mapService', function () {
    function callMap() {
        var map;
        var geoJSON;
        var request;
        var gettingData = false;
        var openWeatherMapKey = "e2819be4068341139cbfbc60d9e6b647";

        function initialize() {
            var mapOptions = {
                zoom: 4,
                center: new google.maps.LatLng(49, 33)
            };
            map = new google.maps.Map(document.getElementById('map'),
                mapOptions);

            google.maps.event.addListener(map, 'idle', checkIfDataRequested);

            map.data.addListener('click', function (event) {
                infowindow.setContent(
                    "<img src=" + event.feature.getProperty("icon") + ">" + "<br /><strong>" + event.feature.getProperty("city") + "</strong>" + "<br />" + event.feature.getProperty("temperature") + "&deg;C" + "<br />" + event.feature.getProperty("weather")
                );
                infowindow.setOptions({
                    position: {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng()
                    },
                    pixelOffset: {
                        width: 0,
                        height: -15
                    }
                });
                infowindow.open(map);
            });
        }
        var checkIfDataRequested = function () {
            while (gettingData === true) {
                request.abort();
                gettingData = false;
            }
            getCoords();
        };
        var getCoords = function () {
            var bounds = map.getBounds();
            var NE = bounds.getNorthEast();
            var SW = bounds.getSouthWest();
            getWeather(NE.lat(), NE.lng(), SW.lat(), SW.lng());
        };
        var getWeather = function (northLat, eastLng, southLat, westLng) {
            gettingData = true;
            var requestString = "http://api.openweathermap.org/data/2.5/box/city?bbox=" + westLng + "," + northLat + "," + eastLng + "," + southLat + "," + map.getZoom() + "&cluster=yes&format=json" + "&APPID=" + openWeatherMapKey;
            request = new XMLHttpRequest();
            request.onload = proccessResults;
            request.open("get", requestString, true);
            request.send();
        };
        var proccessResults = function () {
            console.log(this);
            var results = JSON.parse(this.responseText);
            if (results.list.length > 0) {
                resetData();
                for (var i = 0; i < results.list.length; i++) {
                    geoJSON.features.push(jsonToGeoJson(results.list[i]));
                }
                drawIcons(geoJSON);
            }
        };
        var infowindow = new google.maps.InfoWindow();
        var jsonToGeoJson = function (weatherItem) {
            var feature = {
                type: "Feature",
                properties: {
                    city: weatherItem.name,
                    weather: weatherItem.weather[0].main,
                    temperature: weatherItem.main.temp,
                    min: weatherItem.main.temp_min,
                    max: weatherItem.main.temp_max,
                    humidity: weatherItem.main.humidity,
                    pressure: weatherItem.main.pressure,
                    windSpeed: weatherItem.wind.speed,
                    windDegrees: weatherItem.wind.deg,
                    windGust: weatherItem.wind.gust,
                    icon: "http://openweathermap.org/img/w/" + weatherItem.weather[0].icon + ".png",
                    coordinates: [weatherItem.coord.lon, weatherItem.coord.lat]
                },
                geometry: {
                    type: "Point",
                    coordinates: [weatherItem.coord.lon, weatherItem.coord.lat]
                }
            };
            map.data.setStyle(function (feature) {
                return {
                    icon: {
                        url: feature.getProperty('icon'),
                        anchor: new google.maps.Point(25, 25)
                    }
                };
            });

            return feature;
        };
        var drawIcons = function (weather) {
            map.data.addGeoJson(geoJSON);

            gettingData = false;
        };
        var resetData = function () {
            geoJSON = {
                type: "FeatureCollection",
                features: []
            };
            map.data.forEach(function (feature) {
                map.data.remove(feature);
            });
        };
        /*google.maps.event.addDomListener(window, 'load', initialize);*/
        initialize();
    }
    return {
        callMap: callMap
    }
})