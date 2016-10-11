import smoothstate from './smoothstate';

import components from './components';
import libraries from './libraries';
import googlemap from './components/googlemap';

import h from './helpers';


function Site($, params) {



	let options = params || {};

	// Smoothstate
	if (!h.isMobile ){
		smoothstate($);	
	}
	

	/*
		Site Wide Components
		 - Attach events to JS
	 */
	 components($);


	 /*
	 	Site Wide Library Components
	 	 - Tooltips, Photogalleries
 	 */
 	 libraries();


 	 /*
		About Us Goole Map
 	 */
 	 googlemap();


}

export default Site;