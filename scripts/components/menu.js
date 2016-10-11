import Snap from 'snapsvg'; // http://snapsvg.io/


function menu($) {

	/*
		Site-wide Navigation Component Click Event
	*/
	$('#site-nav-btn').on('click', () => {

		let $siteNavBlockEl = $('.site-navigation-block'),
			$bodyEl = $('body'),
			$navListEl = $('.nav-list li');

		if( !$siteNavBlockEl.hasClass('active') ) {

       	var s = new Snap('#MobileMenuIcon line.tbar');
        var bbox = s.getBBox();
        s.animate( { transform: 't0,18 s1,1, r' + 0+' 21 6'  }, 300, mina.easeout, function(){
          s.animate( { transform: 't0,18 s1,1, r' + 45+' 24 4' }, 400, mina.easeinout );
        } );

        var s2 = new Snap('#MobileMenuIcon line.bbar');
        s2.animate( { transform: 't0,-18 s1,1, r' + 0+' 21 6'  }, 300, mina.easeout, function(){
          s2.animate( { transform: 't0,-18 s1,1, r' + '-45'+' 24 39' }, 500, mina.easeinout );
        } );

        var s3 = new Snap('#MobileMenuIcon line.mbar');
        s3.animate( { transform: 's0,1'  }, 200, mina.easeout, function(){
        } );


			$bodyEl.addClass('hide-scroll-bar');
			$siteNavBlockEl.addClass('active');

			// // fadeIndown nav-list elements
			// let time = 200;
			// $navListEl.each( function() {
			// 	setTimeout( () => {
			// 			$(this).addClass('fadeInDown');
			// 		}, time);
			// 	time += 150;
			// });
		} else {

		 	var s = new Snap('#MobileMenuIcon line.tbar');
      var bbox = s.getBBox();
      s.animate( { transform: 't0,18 s1,1, r' + 0+' 21 6'  }, 300, mina.easeout, function(){
        s.animate( { transform: 't0,1 s1,1, r' + 0+' 24 4' }, 400, mina.easeinout );
      } );

      var s2 = new Snap('#MobileMenuIcon line.bbar');
      s2.animate( { transform: 't0,-18 s1,1, r' + 0+' 21 6'  }, 300, mina.easeout, function(){
        s2.animate( { transform: 't0,0 s1,1, r' + 0+' 24 4' }, 400, mina.easeinout );

      } );

      var s3 = new Snap('#MobileMenuIcon line.mbar');
      s3.animate( { transform: 's1,1'  }, 200, mina.easeout, function(){
      } );

			$bodyEl.removeClass('hide-scroll-bar');
			$siteNavBlockEl.removeClass('active');
			$navListEl.each( function() {
				$(this).removeClass('fadeInDown');
				$(this).addClass('fadeOutUp');
				setTimeout( () => {
					$navListEl.removeClass('fadeOutUp');
				}, 500)

			});
		}		
	});


}

export default menu;