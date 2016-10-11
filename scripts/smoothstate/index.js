import smoothState from './smoothstate';

import components from '../components';
import libraries from '../libraries';
import googlemap from '../components/googlemap';


function smoothstate($) {

	let options = {
		blacklist: '.no-smoothState',
		//anchors: 'a',
		prefetch: true,
		pageCacheSize: 4,
		onStart: {
			duration: 250,
			render: function($container) {
				$container.addClass('is-exiting');
				//content.restartCSSAnimations();
				//console.log('start');
			}
		},
		onReady: {
			duration: 0,
			render: function($container, $newContent) {
				$container.removeClass('is-exiting');

				$container.html($newContent);
			}
		},
		onAfter: function($container, $newContent) {

			components($);
			libraries();
			googlemap();

		}
	}
	
		$('#main').smoothState(options).data('smoothState');

}

export default smoothstate;