/* Testimonail Carousel */
import slick from 'slick-carousel';
import h from '../helpers';

function Testimonial($) {

	let testimonials = [
		{
			quote: 'Creative and unique marketing and design experts.',
			author: 'Courtney Burge',
			association: 'American Heart Association',
			title: 'Heart Ball Director'
		},

		{
			quote: '5Xs increase on all my social network platforms! I had great experience with VEST! They increased the "Likes" on my Facebook and social platform pages and taught me how to better navigate social media to engage my fans in a better, stronger way. They created a strong plan to increase my brand\'s awareness online. Very pleased!',
			author: 'Anna Wilson', 
			association: 'Recording Artist',
			title: ''
		},

		{
			quote: 'Vest is best! Their team works hard so you don\'t have to!! The Vest team left no stone unturned in discovery about our business. They are a 5-star team!!',
			author: 'Pam Carter',
			association: 'Main Street Realty, Inc.',
			title: 'Executive Admin'
		},

		{
			quote: 'I received a complete professional upgrade with explosive public response! Working with this group of professionals was so easy. We met often to go over progress and the results have been magical. Public response was so fast that I knew the website had gone live before the team could even notify me.',
			author: 'Tonya Johnson',
			association: 'Payne Street Pottery, LLC',
			title: 'Owner'
		},

		{
			quote: 'A creative team that goes above and beyond! The Vest Advertising team is made up of some of the most creative, knowledgeable individuals in the advertising industry. The team brings genius ideas to the table, executes impeccable collateral, and communicates clearly and quickly, all for a price that can\'t be beat. Vest truly goes above and beyond to get to know the client and its needs.',
			author: '',
			association: 'Special Olympics Kentucky',
			title: ''
		}
	];


	let HTML = [];

	testimonials.forEach((i,e) => {
	HTML += ['<div class="slide">',
			'<div class="container">',
			  '<div class="row">',
			 		'<div class="col-md-12 col-sm-12 col-xs-12 slide-text">', i.quote, '</div>',
		 	  '</div>',
		 	 '</div>',
		 	 '<div class="container">',
		 	  '<div class="row slide-footer">',
		 	    '<div class="testimonial-author col-md-6 col-sm-6 col-xs-12">',
		 	  		,(function() {
		 	  			if (i.author != '') {
		 	  				return '<i class="fa fa-comment" aria-hidden="true"></i><span> &nbsp;';
		 	  			} else {
		 	  				return '';
		 	  			}
		 	  		})(), i.author, '</span> ',
		 	  	'</div>',
		 	  	'<div class="testimonial-association col-md-6 col-sm-6 col-xs-12"> <span class="slide-date">', i.association, '</span> </div>',
		 	  '</div>',
		 	  '</div>',
			 '</div>'].join('');
	})



	$('.testimonial-carousel').append(HTML).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 15000,
				//fade: true,
				arrows:false,
				dots: false
			});



}

export default Testimonial;