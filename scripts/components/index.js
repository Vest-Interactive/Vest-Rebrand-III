// Site Componenets
import menu from './menu'; // site wide menu
//import twitterCarousel from './twitter-carousel'; // twitter footer carousel
import testimonialCarousel from './testimonial-carousel';

import h from '../helpers';

import contact from './contact';


function components($) {

	/*
		Component : Site Wide Menu
		- Handles the whole site wide menu on each page
		@file : template.html
		@params : jQuery
	*/
	menu($);

	/*
		Component: Twitter Carousel
		- Fetch Twitter Information and create the Carousel, appendTo
	*/
	//twitterCarousel($); 
	testimonialCarousel($);

	/*
		Component: Contact form and Validation
	 */
	contact($);


	//clear off the navigation overflow
	if ( $('body').hasClass('hide-scroll-bar') ) {
		//$('.site-navigation-block').addClass('hideNav');
		$('body').removeClass('hide-scroll-bar');
	}
	


	// Hide Video if on Mobile
	if ( !h.isMobile() ) {
		$('.poster').addClass('hidden');
	} 


	/*
		Async Load our Large Images in our Header for Instance
	*/
	$('.fadeIn-img').each(function() {
		let src = $(this).data('src');

		if(src) {
			var img = new Image();
			//img.style.display = 'none';
			img.style.opacity = '0';
			$(this).append(img);
			img.onload = function() {
				$(this).fadeIn(5000);
			};
			

			$(this).find(img).addClass('cover-image fadeIn animated').css('background-image', 'url('+src+')')//.css('display', 'block');
		}
	});


	// set our header height
	if ( !h.isMobile() ) {
		$('.site-header').css('height', window.innerHeight);

		$(window).resize( () => {
			setTimeout( () => {
				$('.site-header').css('height', window.innerHeight);
			}, 500);
		});

	} else {
		$('.site-header').css('height', '400px');
	}


	$('.thumb').each( function() {
		const $this = $(this);
		const bg = $this.data('bg');
		$this.css('background-image', `url(${bg})`);
	});


	/*
		Approach Details
	*/

	var approachList = [
		{ 
			name: 'Listen',
			description: 'It begins with listening to our clients, listening to the data, listening to the audience.  All campaigns are research when you listen to the data.',
		},
		{
			name: 'Mine',
			description: 'Moving people is about understanding people.  We believe data is only as good as the insights that come from it.'	
		},
		{
			name: 'Plan',
			description: 'A good plan maximizes every team touching a project.  A good plan allows every team member to focus on their best work.'
		},
		{
			name: 'Craft',
			description: 'The pretty part of the business.  Crafting the creative is the process of aligning client goals and fan desires.  Connecting brands to local communities.'
		},
		{
			name: 'Strengthen',
			description: 'Changes are challenges.  Testing reveals bugs, proofing reveals flubs, and review, whether internal or from our client teams, is a challenge to tighten up and make the work even more powerful.'
		},
		{
			name: 'Launch',
			description: 'Whether earned, owned or paid, our media is not just about the right place at the right time.  It’s about listening and reacting to every result.'
		},
		{
			name: 'Repeat',
			description: 'Every campaign, every day, every moment is an opportunity to adjust and maximize impact.  The key is to remember to start over and LISTEN.'
		}
	];

	var currentApproach = 1;
	var $list = $('#approach-list li');

	// Handle Events for Approach Section
	$('#approach-list li').on('click', function() {
		var stepNum = $(this).data('step');
		
		$('.approach-tab').css('display', 'none');

		$('.approach-tab-'+stepNum).fadeIn();
		
		$('#approach-list li').removeClass('active');


		for (var x=0; x<=stepNum; x++) {			
		//	console.log($list[x]);
			$($list[x]).addClass('active');
		}
		
	});




}

export default components;