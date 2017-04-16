import APP from '../app';


APP.map = {
    container: 'map',
    linkToMap: '#apartments-map',
    markers: [],

    init: function(){
        var _this = this;
        $(document).ready(function(){

            $("a[href='" + _this.linkToMap + "']").on('shown.bs.tab', function () {
                _this.createMap();
            });
        });
    },

    getApartments: function(){
        var _this = this;

        if(!APP.filterList.length){
            return APP.data;
        }else{
            var filteredApartments = APP.data.filter(function(el){
                var status = true;
                for(var i = 0; i < APP.filterList.length; i++){
                    if(el.comfort.indexOf(APP.filterList[i]) == -1){
                        status = false;
                        break;
                    }
                }
                return status;
            });
            return filteredApartments;
        }
    },

    getMapPosition: function(data){
      var pos = [0,0];

      for(var i = 0; i < data.length; i++){
          pos[0] += data[i].location[0];
          pos[1] += data[i].location[1];
      }

      pos[0] = pos[0]/data.length;
      pos[1] = pos[1]/data.length;

      return pos;
    },

    createMap: function(){
        var _this = this;
        var position = _this.getMapPosition(APP.data);
        APP.isMapVisible = true;
        /*
         * create map
         */
        _this.mapGoogle = new google.maps.Map(document.getElementById(_this.container), {
            center: new google.maps.LatLng(position[0], position[1]),
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            styles: _this.styleMap
        });
        /*
         * add markers to map
         */
        _this.updateMarkers();
    },

    createMarker: function(options, html){
        var infoWindow = new google.maps.InfoWindow();
        var marker = new google.maps.Marker(options);
        if (html) {
            google.maps.event.addListener(marker, "click", function () {
                infoWindow.setContent(html);
                infoWindow.open(options.map, this);
            });
        }
        return marker;
    },

    clearMapMarkers: function(){
        for (var i = 0; i < APP.map.markers.length; i++) {
            APP.map.markers[i].setMap(null);
        }
    },

    updateMarkers: function(){
        var _this = this;
        _this.clearMapMarkers();
        APP.map.markers = [];
        var apartments = _this.getApartments();


        for(var i = 0; i < apartments.length; i++){
            APP.map.markers.push(
                _this.createMarker({
                    position: new google.maps.LatLng(apartments[i].location[0], apartments[i].location[1]),
                    icon: 'img/pin.png',
                    label: {text: '€' + apartments[i].price, color: "white"},
                    map: _this.mapGoogle
                }, "<span>" + apartments[i].name + "</span>")
            );
        }
    },

    styleMap: [
        {
            "stylers": [
                {
                    "saturation": -100
                }
            ]
        },
        {
            "featureType": "administrative",
            "stylers": [
                {
                    "saturation": -100
                }
            ]
        },
        {
            "featureType": "landscape",
            "stylers": [
                {
                    "saturation": -100
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "stylers": [
                {
                    "saturation": -100
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f5f5f3"
                }
            ]
        },
        {
            "featureType": "poi.attraction",
            "stylers": [
                {
                    "saturation": -100
                }
            ]
        },
        {
            "featureType": "poi.attraction",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.government",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.medical",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#e2e6e3"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#7e9c83"
                }
            ]
        },
        {
            "featureType": "poi.place_of_worship",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.school",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.sports_complex",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "stylers": [
                {
                    "saturation": -100
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#c8c8c7"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "stylers": [
                {
                    "saturation": -100
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#dddddd"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.station.airport",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.station.airport",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.station.bus",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#c8c8c7"
                }
            ]
        },
        {
            "featureType": "transit.station.bus",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                {
                    "saturation": -100
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#cdd2d4"
                },
                {
                    "saturation": 5
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]
}