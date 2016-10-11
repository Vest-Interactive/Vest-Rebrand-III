/* Twitter Carousel */
import slick from 'slick-carousel';
import h from '../helpers';

function twitterCarousel($) {

	$.ajax({
		url: 'https://social-api-express.herokuapp.com/twitter/statuses/user_timeline/vestadvertising/5',
		data: {
			format: 'json'
		},
		success: function(res) {

			let tweetHTML = [];

			res.forEach( function(tweet) {

				// Add links in the tweet
				var tweetText = tweet.text.split(' ');
  			for(let i=0; i<tweetText.length; i++) {
  				if (tweetText[i].substr(0,4) == 'http' && tweetText[i].indexOf('…') == -1 ) {
  					tweetText[i] = '<a href="'+tweetText[i]+'" target="_blank">'+tweetText[i]+'</a>';
  				} 
  				// Check for 'heardatvest'
  				if (tweetText[i].substr(0,12) == '#HeardAtVest') {
  					var heardVest = true;
  				}
  			}
  			tweet.text = tweetText.join(' ');
  			
  			tweetHTML += ['<div class="tweet-slide">',
  										'<div class="container">',
  										  '<div class="row">',
  										 		'<div class="col-md-12 col-sm-12 col-xs-12 tweet-text">', tweet.text, '</div>',
										 	  '</div>',
										 	 '</div>',
										 	 '<div class="container">',
										 	  '<div class="row tweet-footer">',
										 	    '<div class="col-md-6 col-sm-6 col-xs-6">',
										 	  		'<span class="icon-twitter"></span> <a href="#" target="_blank"> @vestadvertising </a>',
										 	  	'</div>',
										 	  	'<div class="col-md-6 text-right"> <span class="tweet-date">', h.prettyDate(tweet.created_at), '</span> <span class="icon-clock"></span> </div>',
										 	  '</div>',
										 	  '</div>',
  										 '</div>'].join('');
			}); // end .forEach 

			$('.twitter-carousel').append(tweetHTML).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 15000,
				//fade: true,
				arrows:false,
				dots: false
			});

		} // end success()
	}); // end .ajax()

}

export default twitterCarousel;