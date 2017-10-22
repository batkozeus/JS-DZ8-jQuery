$(document).ready(function () {
	
// Task 1

	$('.plus:first').on('click', function () {	

		if ( ($('.form1').length)<6 ) {
			var clone = $('.form1:first').clone();
			$(clone).appendTo('#wrapper1');
			$(clone).find('.plus').removeClass('plus').addClass('minus');
			$(clone).find('.minus').text('-');
			$(clone).find('.texter').val('');		
		}
	
		$('.minus').on('click', function () {
			$(this).parent().remove();
		});
	
	});


// Task 2

	var texter = $('.texter');
	
	$('input:radio').on('click', function(){

		var chetkost = $('input:checked').val();
		console.log(chetkost);

		if (chetkost == 'chetko') {
			$('#collect').on('click', function () {
				var areaAllInputs = '';
				$('.texter:even').each(function(){
					areaAllInputs += $(this).val() + ' ';
				})
				$(area1).val(areaAllInputs);
			});
		}
		
		else if (chetkost == 'nechetko') {	
			$('#collect').on('click', function () {
				var areaAllInputs = '';
				$('.texter:odd').each(function(){
					areaAllInputs += $(this).val() + ' ';
				})
				$(area1).val(areaAllInputs);
			});
		}

		else {
			$('#collect').on('click', function () {
				var areaAllInputs = '';
				$('.texter').each(function(){
					areaAllInputs += $(this).val() + ' ';
				})
				$(area1).val(areaAllInputs);
			});
		}
	});


// Task 3

	var spaner = $('.spaner');

	$('#redCheck').on('click', function () {
			
		$('#wrapper1').find('.texter').each(function(){
			console.log($(texter).length);
			if ($(this).val() == '') {
				$(this).css('background', 'red');
				$(this).prev().css('display', 'inline-block');
			}
			else {
				$(this).css('background', 'white');
				$(this).prev().css('display', 'none');
			}		
		});		
	});


// Task 4

	$('#vsplivOkno').on('click', function () {
		$('#window').css('display','block');
	});

	$('#left').on('click', function () {
		$('.option').html($(this).html());
		$('#window').css('display','none');
	});

	$('#right').on('click', function () {
		$('.option').html($(this).html());
		$('#window').css('display','none');
	});


// Task 5

	$('#turtle').on('click', function(){
		if ($('#namer').val() != '') {
			$('#lister').append('<li class = "member"></li>');
			$('.member:last').text($('#namer').val());
		}
	});


	$('body').on('click', '.member', function () {
		$(this).toggleClass('memberRed');
	});


// Task 6

	$('.blacker').on('mouseenter',function(){
		$(this).animate({opacity: '0', marginLeft: '-180px'}, 2000);
		$('.mrBin').animate({opacity: '1'}, 2000);	
	});

	$('.mrBin').on('mouseleave',function(){
		$('.blacker').delay(2000).animate({opacity: '1', marginLeft: '0px'}, 2000);
		$(this).delay(2000).animate({opacity: '0'}, 2000);
		$('.blacker').on('mouseleave',function(){
			$(this).delay(2000).animate({opacity: '1', marginLeft: '0px'}, 2000);
			$('.mrBin').delay(2000).animate({opacity: '0'}, 2000);	
		});	
	});


// Task 7

	$('.heroLink').on('mouseenter', function(){
		$('#myHero').css('display','block');
		$('#myHero').css('color','pink');
		$('#myHero').html('Адрес ссылки: ' + $(this).attr('href') + '<br>' + 'Название ссылки: ' + $(this).attr('title') + '<br>' + 'Направление ссылки: ' + $(this).attr('target'));
		if (($(this).attr('href') == '') || ($(this).attr('title') == '') || ($(this).attr('target') == '')) {
			$('#myHero').html('Очень плохая ссылка, я думал лучше будет');
			$('#myHero').css('color','red');
		}
	});

	$('.heroLink').on('mouseleave', function(){
		$('#myHero').css('display','none');
		$('#myHero').html('');
	});



// Task 8

	$('.heroImg').on('mouseenter', function(){
		$('#myHero').css('display','block');
		$('#myHero').css('color','pink');
		$('#myHero').html('Адрес изображения: ' + $(this).attr('src') + '<br>' + 'Описание изображения: ' + $(this).attr('alt'));

		$(this).filter(function(){
			if ($(this).attr('alt')== '') {
				return true;
			}
		}).css({boxShadow: '0px 2px 8px 10px rgba(224,27,27,0.78)'});


		if (($(this).attr('src') == '') || ($(this).attr('alt') == '')) {
			$('#myHero').html('Очень плохое изображение, я думал лучше будет');
			$('#myHero').css('color','red');
		}	
	});

	$('.heroImg').on('mouseleave', function(){
		$('#myHero').css('display','none');
		$('#myHero').html('');
		$(this).css('boxShadow','none');
	});


// Task 9

	$('#glavar').on('click', function () {
		$('#zaglav').html('Общее количество заголовков: ' + ($(':header').length) + '<br>');
		if ( $('h1').length == 0) {
			$('#zaglav').append('Элемент h1 - отсутствует' + '<br>');
		}
		else {
			$('#zaglav').append('Количество элементов h1 - ' + ($('h1').length) + '<br>');
		}
		if ( $('h2').length == 0) {
			$('#zaglav').append('Элемент h2 - отсутствует' + '<br>');
		}
		else {
			$('#zaglav').append('Количество элементов h2 - ' + ($('h2').length) + '<br>');
		}
		if ( $('h3').length == 0) {
			$('#zaglav').append('Элемент h3 - отсутствует' + '<br>');
		}
		else {
			$('#zaglav').append('Количество элементов h3 - ' + ($('h3').length) + '<br>');
		}
		if ( $('h4').length == 0) {
			$('#zaglav').append('Элемент h4 - отсутствует' + '<br>');
		}
		else {
			$('#zaglav').append('Количество элементов h4 - ' + ($('h4').length) + '<br>');
		}
		if ( $('h5').length == 0) {
			$('#zaglav').append('Элемент h5 - отсутствует' + '<br>');
		}
		else {
			$('#zaglav').append('Количество элементов h5 - ' + ($('h5').length) + '<br>');
		}
		if ( $('h6').length == 0) {
			$('#zaglav').append('Элемент h6 - отсутствует' + '<br>');
		}
		else {
			$('#zaglav').append('Количество элементов h6 - ' + ($('h6').length) + '<br>');
		}
	});


// Task 10

	var metaTeg = $('#metaTeg');
	var alerter = $('#alerter');
	$(alerter).css('color','red');

	$('#metaCheck').on('click', function () {
		if ($(document).attr('title')) {
			$(metaTeg).append('Метатег title присутствует' + '<br>' + 'Длина метатега title - ' + $(document).attr('title').length  + ' символов' + '<br>');
		}
		else {
			$(alerter).append('Метатег title отсутствует' + '<br>');
		}
		if ($('meta[name="description"]').attr('content')) {
			$(metaTeg).append('Метатег description присутствует' + '<br>' + 'Длина метатега description - ' + $('meta[name="description"]').attr('content').length + ' символов' + '<br>');
		}
		else {
			$(alerter).append('Метатег description отсутствует' + '<br>');
		}
		if ($('meta[name="keywords"]').attr('content')) {
			$(metaTeg).append('Метатег keywords присутствует' + '<br>');
		}
		else {
			$(alerter).append('Метатег keywords отсутствует' + '<br>');
		}
	});

//----------------
});