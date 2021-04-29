function initMap() {	 
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.0637990923183, lng: 28.78382109918516},
          zoom: 13,
	  disableDefaultUI: !0, scaleControl: !0, fullscreenControl: !0,
          clickableIcons: false,
          minZoom: 3,
          maxZoom: 20
  });
  var result;
  var drawingManager = new google.maps.drawing.DrawingManager({
         drawingMode: google.maps.drawing.OverlayType.POLYGON,
         drawingControl: true,
         drawingControlOptions: {
              drawingModes: ['polygon']
         }, });
  google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {
       const coords = polygon.getPath().getArray().map(coord => {
             return {
                    lat: coord.lat(),
                    lng: coord.lng()
        } });
		result=polygon.getPath().getArray().toString();
		alert(result);
   });
   drawingManager.setMap(map);			
}
initMap();

