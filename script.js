kakao.maps.load(function() {
    
    var mapContainer1 = document.getElementById('map1'), 
        mapOption1 = { 
            center: new kakao.maps.LatLng(37.2832188, 127.0277011), 
            level: 3
        };

    var map1 = new kakao.maps.Map(mapContainer1, mapOption1); 

    var marker1 = new kakao.maps.Marker({ 
        position: map1.getCenter() 
    }); 
    marker1.setMap(map1);

    kakao.maps.event.addListener(map1, 'click', function(mouseEvent) { 
        var latlng = mouseEvent.latLng; 
        
        marker1.setPosition(latlng);
    });

    var mapContainer2 = document.getElementById('map2'), 
        mapOption2 = { 
            center: new kakao.maps.LatLng(37.2757030, 127.0497598), 
            level: 3 
        };

    var map2 = new kakao.maps.Map(mapContainer2, mapOption2);

    var marker2 = new kakao.maps.Marker({ 
        position: map2.getCenter() 
    }); 
    marker2.setMap(map2);

});