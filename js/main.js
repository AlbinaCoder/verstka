	
// var a=37;

// var b="Привет ";
// var db='мир'
// var c =true;
// var d=5;


// prompt('Напишите значение переменной а')


// if (a==37) {
// 	alert('a=37');
// } else {
// 	alert('что-то другое')
// }
// for (
// 	var i = 0; i < 5; i++
// 	) {
// 	alert (i);
// }
	
	// var document = {
	// 	'name': 'Альбина',
	// 	'surname': 'Ромадина',
	// 	'age': 34
	// 	'getElementById': function () {}
	// }

	// alert (user.surname );

// var mas =['альбина','ромадина',34]
// // alert (mas[0]);

// function dpmagic (a,b) {
// 	alert (a+b);
// }

// dpmagic(15,25);

// dpmagic(45,95);



var btn = document.getElementById('btn');
btn.onclick = function (e) {
	e.preventDefault();
	var text = document.querySelector('p.intro');
	text.classList.add('red');
	var img = document.querySelector('.desktop');
	img.style.display='none';
	document.querySelector('.benefit-value').style.marginLeft = '550px';
}
