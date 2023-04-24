$(document).ready(function() {

	$(".navbar__toggleBtn").on('click', function() {
		$('.navbar__menu').toggleClass('active');
	});

	const testData = JSON.parse(JSON.stringify(Menu));
	console.log(testData.beverage[0].name);
	console.log(testData.beverage[0].imageExtension);
	console.log(testData.beverage[0].price);

});