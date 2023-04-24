$(document).ready(function () {

	$(".navbar__toggleBtn").on('click', function () {
		$('.navbar__menu').toggleClass('active');
	});

	const data = JSON.parse(JSON.stringify(Menu));
	// console.log(data.beverage[0].name);
	// console.log(data.beverage[0].imageExtension);
	// console.log(data.beverage[0].price);

	function cafeList() {
		const cafe_data = data.cafe;
	}
	function friesList() {
		const fries_data = data.fries;
	}
	function ramenList() {
		const ramen_data = data.ramen;
	}
	function riceList() {
		const rice_data = data.rice;
	}
	function hotdogList() {
		const hotdog_data = data.hotdog;
	}
	$(".beverage").on('click', () => {
		const beverage_data = data.beverage;

		makeList(beverage_data, "beverage");
	});
	function toppingList() {
		const ctopping_data = data.ctopping;
	}

	function snackList() {
		const snack_data = data.snack;
	}
	function questionList() {
		const question_data = data.question;
	}

	const makeList = (jsonData, menu) => {
		let str = ""
		jsonData.forEach((data, index) => {
			str += '<div class="' + index + '" onclick="addCart('+"'"+data.name + "','"+ data.price + "'"+')">';
			str += '<img src="./images/' + menu + "/" + data.name + "." + data.imageExtension + '"/>';
			str += '<p class="item_name" value="' + data.name + '">' + data.name + '</p>';
			str += '<p class="price" value="' + data.price + '">';
			str += "가격 : " + data.price
			str += '</p>';
			str += '</div>';
		});
		$(".item-list").html(str);
	}

});

const addCart = (name, price) => {
	console.log(name);
}