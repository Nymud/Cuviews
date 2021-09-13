function initMap(){
      //defining the map
      const map = new google.maps.Map(document.getElementById('map'), {
        center:new google.maps.LatLng(-26.14377892313098, 28.14809031586296),
        zoom: 8
      });
    
      //creating amarker instance and adding it to the map
      let amarker = new google.maps.Marker({
        map:map,
        position:{lat:-26.138300,lng:28.135400}
      })
    }