import GoogleMapsLoader from 'google-maps';


function googlemap() {

	GoogleMapsLoader.KEY = 'AIzaSyDAoR0y0rjRa7HL9E5oDrQCl8n0G7iFDfc';

	GoogleMapsLoader.load(function(google) {

		var center = new google.maps.LatLng(38.19666997696849, -85.57005286216736);
		var main_office = new google.maps.LatLng(38.196352,-85.569448);
		var creative_building = new google.maps.LatLng(38.19601, -85.56943);
		var photo_building = new google.maps.LatLng(38.19594, -85.56983);
		var media_building = new google.maps.LatLng(38.19724, -85.57078);

	// Info Windows
var main_office_window = '<div class="contact_location_block">'+
							'<h2>Vest Client Services and Sound Design</h2>'+
							'<div>'+
							'3007 Sprowl Road, Louisville, KY 40299<br />' +
							'502.267.5335' +
							'</div>'+
						'</div>';

var creative_dept_window = '<div class="contact_location_block">'+
								'<h2>Vest Creative Studio</h2>'+
								'<div>'+
								'3007 Sprowl Road, Louisville, KY 40299<br />' +
								'502.267.5335' +
								'</div>'+
							'</div>';

var photo_dept_window = '<div class="contact_location_block">'+
							'<h2>Vest Photography and Video Studio</h2>'+
							'<p>'+
							'3305 College Drive, Louisville, KY 40299<br />' +
							'502.267.5335' +
							'</p>'+
						'</div>';

var media_dept_window = '<div class="contact_location_block">'+
							'<h2>Vest Media Services</h2>'+
							'<p>'+
							'3214 College Drive, Louisville, KY 40299<br />' +
							'502.261.0942' +
							'</p>'+
						'</div>';

	function initialize() {

		// Create an array of styles.
	  var styles = [
		{
			stylers: [
				{ hue: "#e5040a" },
				{ saturation: -100 },
				{ lightness: 0 }
			]
		},
		{
		  featureType: "road",
		  elementType: "geometry",
		  stylers: [
			{ lightness: 100 },
			{ visibility: "simplified" }
		  ]
		},
		{
			featureType: "road",
			elementType: "labels",
			stylers: [
				{ visibility: "on" }
			]
		}
	  ];

	  // Create a new StyledMapType object, passing it the array of styles,
	  // as well as the name to be displayed on the map type control.
	  var styledMap = new google.maps.StyledMapType(styles,
		{name: "Vest Map"});

		var myOptions = {
			center: center,
			zoom: 18,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		}

	// Create the map
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

	//Associate the styled map with the MapTypeId and set it to display.
	  map.mapTypes.set('map_style', styledMap);
	  map.setMapTypeId('map_style');

	// Main Office
	var main_marker = new google.maps.Marker({
		position: main_office,
		map: map,
		icon: 'http://vestadvertising.com/wp-content/themes/vestadvertising/images/map-marker.png',
		title:"Vest Main Office"
	});



	var main_office_infowindow = new google.maps.InfoWindow({
		content: main_office_window
	});

	google.maps.event.addListener(main_marker, 'mouseover', function() {
		main_office_infowindow.open(map,main_marker);
	});

	// google.maps.event.addListener(main_marker, 'mouseout', function() {
	// 	main_office_infowindow.close(map,main_marker);
	// });
	

	// Creative Building
	var creative_marker = new google.maps.Marker({
		position: creative_building,
		map: map,
		icon: 'http://vestadvertising.com/wp-content/themes/vestadvertising/images/map-marker.png',
		title:"Vest Creative"
	});

	var creative_infowindow = new google.maps.InfoWindow({
		content: creative_dept_window
	});

	google.maps.event.addListener(creative_marker, 'mouseover', function() {
		creative_infowindow.open(map,creative_marker);
	});

	
	// google.maps.event.addListener(creative_marker, 'mouseout', function() {
	// 	creative_infowindow.close(map,creative_marker);
	// });
	

	// Photo/Video Building
	var photo_marker = new google.maps.Marker({
		position: photo_building,
		map: map,
		icon: 'http://vestadvertising.com/wp-content/themes/vestadvertising/images/map-marker.png',
		title:"Vest Photography"
	});

	var photo_infowindow = new google.maps.InfoWindow({
		content: photo_dept_window
	});

	google.maps.event.addListener(photo_marker, 'mouseover', function() {
		photo_infowindow.open(map,photo_marker)
	});

	
	/*
	google.maps.event.addListener(photo_marker, 'mouseout', function() {
		photo_infowindow.close(map,photo_marker)
	});
	*/

	// Media Department
	var media_marker = new google.maps.Marker({
		position: media_building,
		map: map,
		icon: 'http://vestadvertising.com/wp-content/themes/vestadvertising/images/map-marker.png',
		title:"Vest Media"
	});

	var media_infowindow = new google.maps.InfoWindow({
		content: media_dept_window
	});

	//Mouseover/Mouseout Events
	google.maps.event.addListener(media_marker, 'mouseover', function() {
		media_infowindow.open(map,media_marker)
	});

	
	// google.maps.event.addListener(media_marker, 'mouseout', function() {
	// 	media_infowindow.close(map,media_marker)
	// });


	}

	initialize();

});


}

export default googlemap;