import $ from 'jquery';
import Tipped from './Tipped'; // http://www.tippedjs.com


function ToolTips() {

// 	$.extend(Tipped.Skins, {
//   'purple' : {
//     border: { size: 4, color: '#959fa9' },
//     background: '#f7f7f7',
//     radius: { size: 4, position: 'border' },
//     shadow: false,
//     closeButtonSkin: 'light'
//   }
// });

	// Default Tooltip settings
	const settings = {
		position: "right",
		size: 'small',
		maxWidth: 300,
		skin: 'purple'
	}

	// Iterate over Elements and use their data-tooltip to generate the content
	$('.tooltip').each(function() {
		let tip = $(this).data('tooltip');
		Tipped.create($(this), tip, settings);
	})

}

export default ToolTips;