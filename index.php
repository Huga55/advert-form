<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<!-- open graph -->
	<meta property="og:title" content=""/>
	<meta property="og:description" content=""/>
	<meta property="og:image" content=""/>
	<meta property="og:type" content=""/>
	<meta property="og:url" content= "" />
	
	<!-- title -->
	<title></title>

	<!-- fonts, css -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
	<link rel="stylesheet" href="js/dropzone/dist/dropzone.css" />
	<link rel="stylesheet" href="css/css.css">
	<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
</head>
<body>
	<div class="advert__modal">
		<div class="advert__modal-window">
			<div class="advert__modal-close"></div>
			<h2 class="advert__modail-title">
				Войти или создать личный кабинет
			</h2>
			<input type="text" class="form-control advert__modal-input" id="office_floor_count" name="office_floor_count" placeholder="Номер телефона">
			<button class="btn btn-dark advert__modal-button">
				Продолжить
			</button>
			<div class="advert__modal-separator">
				или
			</div>
			<a class="advert__modal-link btn btn-success">
				Войти по сбер ID
			</a>
			<div class="advert__modal-subscribe">
				Это безопасно и удобно. Ваши данные защищены надёжным шифрованием.
			</div>
		</div>
	</div>
	<main class="main" id="main">
		<section class="advert">
			<div class="container">
				<div class="advert__back">
					<button type="button" class="btn advert__back-button">Мое объявления</button>
				</div>
				<form class="advert__form" enctype="multipart/form-data">
					<div class="advert__window">
						<h2 class="advert__title">
							Мои объявление
						</h2>
						<div class="form-group advert__group">
						    <label class="advert__label">Тип сделки</label>
						    <div class="btn-group btn-group-toggle advert__radios" data-toggle="buttons">
							  	<label class="btn btn-secondary active advert__change">
							    	<input type="radio" name="advert_type_general" id="type1" class="advert_type_general" checked value="sale" data-input="follow"> Продажа
							  	</label>
							  	<label class="btn btn-secondary advert__change">
							    	<input type="radio" name="advert_type_general" id="type2" class="advert_type_general" value="rent" data-input="follow"> Аренда
							  	</label>
							</div>
					  	</div>
					  	<div class="form-group advert__group">
						    <label class="advert__label">Вид недвижимости</label>
						    <div class="btn-group btn-group-toggle advert__radios" data-toggle="buttons">
							  	<label class="btn btn-secondary active advert__change">
							    	<input type="radio" class="input_view" name="advert_view" id="type2-1" checked value="living" data-id="1" data-input="follow"> Жилая
							  	</label>
							  	<label class="btn btn-secondary advert__change">
							    	<input type="radio" class="input_view" name="advert_view" id="type2-2" value="commercial" data-id="2" data-input="follow"> Коммерческая
							  	</label>
							  	<label class="btn btn-secondary advert__change">
							    	<input type="radio" class="input_view" name="advert_view" id="type2-3" value="garage" data-id="3" data-input="follow"> Гараж
							  	</label>
							</div>
					  	</div>
					  	<div class="form-group advert__group advert__group_property" data-view="living">
					  		<div class="advert__group-left">
					  			<div class="custom-control custom-radio advert__radio">
								  	<input type="radio" id="kind1-1" name="kind" class="custom-control-input" value="apartment" checked data-input="follow">
								  	<label class="custom-control-label" for="kind1-1">Квартира</label>
								</div>
								<div class="custom-control custom-radio advert__radio">
								  	<input type="radio" id="kind1-2" name="kind" class="custom-control-input" value="room" data-input="follow">
								  	<label class="custom-control-label" for="kind1-2">Комната</label>
								</div>
								<div class="custom-control custom-radio advert__radio">
								  	<input type="radio" id="kind1-3" name="kind" class="custom-control-input" value="home" data-input="follow">
								  	<label class="custom-control-label" for="kind1-3">Дом</label>
								</div>
					  		</div>
						    <div class="advert__group-left">
						    	<div class="custom-control custom-radio advert__radio">
								  	<input type="radio" id="kind1-4" name="kind" class="custom-control-input" value="townhouse" data-input="follow">
								  	<label class="custom-control-label" for="kind1-4">Таунхаус</label>
								</div>
								<div class="custom-control custom-radio advert__radio">
								  	<input type="radio" id="kind1-5" name="kind" class="custom-control-input" value="part_of_house" data-input="follow">
								  	<label class="custom-control-label" for="kind1-5">Часть дома</label>
								</div>
								<div class="custom-control custom-radio advert__radio kind1-6">
								  	<input type="radio" id="kind1-6" name="kind" class="custom-control-input" value="site" data-input="follow">
								  	<label class="custom-control-label" for="kind1-6">Участок</label>
								</div>
						    </div>
					  	</div>
					  	<div class="form-group advert__group advert__group_property advert__group_property-none" data-view="commercial">
					  		<div class="advert__group-left">
					  			<div class="custom-control custom-radio advert__radio">
								  	<input type="radio" id="kind2-1" name="kind" class="custom-control-input" value="office" checked data-input="follow">
								  	<label class="custom-control-label" for="kind2-1">Офис</label>
								</div>
								<div class="custom-control custom-radio advert__radio">
								  	<input type="radio" id="kind2-2" name="kind" class="custom-control-input" value="trade" data-input="follow">
								  	<label class="custom-control-label" for="kind2-2">Торговое помещение</label>
								</div>
								<div class="custom-control custom-radio advert__radio">
								  	<input type="radio" id="kind2-3" name="kind" class="custom-control-input" value="public" data-input="follow">
								  	<label class="custom-control-label" for="kind2-3">Общепит</label>
								</div>
								<div class="custom-control custom-radio advert__radio">
								  	<input type="radio" id="kind2-4" name="kind" class="custom-control-input" value="free" data-input="follow">
								  	<label class="custom-control-label" for="kind2-4">Свободного нзанчения</label>
								</div>
					  		</div>
						    <div class="advert__group-left">
						    	<div class="custom-control custom-radio advert__radio">
								  	<input type="radio" id="kind2-5" name="kind" class="custom-control-input" value="storage" data-input="follow">
								  	<label class="custom-control-label" for="kind2-5">Склад</label>
								</div>
								<div class="custom-control custom-radio advert__radio">
								  	<input type="radio" id="kind2-6" name="kind" class="custom-control-input" value="production" data-input="follow">
								  	<label class="custom-control-label" for="kind2-6">Производство</label>
								</div>
								<div class="custom-control custom-radio advert__radio">
								  	<input type="radio" id="kind2-7" name="kind" class="custom-control-input" value="hotel" data-input="follow">
								  	<label class="custom-control-label" for="kind2-7">Гостиница</label>
								</div>
								<div class="custom-control custom-radio advert__radio">
								  	<input type="radio" id="kind2-8" name="kind" class="custom-control-input" value="landsite" data-input="follow">
								  	<label class="custom-control-label" for="kind2-8">Земельный участок</label>
								</div>
						    </div>
					  	</div>
					  	<div class="form-group advert__group advert__group_property advert__group_property-none" data-view="garage">
					  		<div class="advert__group-left">
					  			<div class="custom-control custom-radio advert__radio">
								  	<input type="radio" id="kind3-1" name="kind" class="custom-control-input" value="garage" checked data-input="follow">
								  	<label class="custom-control-label" for="kind3-1">Гараж</label>
								</div>
								<div class="custom-control custom-radio advert__radio">
								  	<input type="radio" id="kind3-2" name="kind" class="custom-control-input" value="box" data-input="follow">
								  	<label class="custom-control-label" for="kind3-2">Бокс</label>
								</div>
								<div class="custom-control custom-radio advert__radio">
								  	<input type="radio" id="kind3-3" name="kind" class="custom-control-input" value="parking_place" data-input="follow">
								  	<label class="custom-control-label" for="kind3-3">Машиноместо</label>
								</div>
					  		</div>
					  	</div>
					</div>
					<div class="advert__window">
						<h2 class="advert__title">
							Адрес
						</h2>
						<div class="form-group advert__group advert__address-block">
						    <input type="text" class="form-control advert__address" placeholder="Введите адрес" name="address" data-validate="true" data-validate-type="required">
						    <div class="advert__adresses">
						    </div>
						</div>
						<div class="advert__map" id="advert__map">
							<!-- <div id="YMapsID" style="width:100%;height:310px"></div> -->
						</div>
					</div>	
					<div class="advert__window advert__window_file">
						<h2 class="advert__title">
							Фотографии
						</h2>
						<div class="advert__container-file" data-dz-name="files" id="drop">
							
						</div>
					</div>
					<div class="advert__window">
						<h2 class="advert__title advert__title_youtube">
							Видео с YouTube
						</h2>
						<div class="advert__youtube-upload">
							<label class="advert__label advert__label_youtube">
								Добавьте видео вашей недвижимости. Объявления с видео привлекают больше внимания и получают больше звонков
							</label>
							<div class="form-group advert__group advert__group_youtube">
							    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Ссылка на видео YouTube" name="youtube">
							    <span class="btn btn-dark advert__youtube-button">
							    	Добавить
							    </span>
							</div>
						</div>
						<div class="advert__youtube-result advert__youtube_none">
							<div class="advert__youtube-preview">
								<img src="//img.youtube.com/vi/JMJXvsCLu6s/default.jpg" alt="" class="advert__youtube-img">
							</div>
							<div>
								<div class="advert__youtube-link">asdasx</div>
								<span class="btn btn-dark advert__youtube-delete">
									Удалить
								</span>
							</div>
						</div>
					</div>
					<div class="advert__window advert__window-general" data-options="general_form">
						<button class="btn btn-dark advert__general-button">
							Все параметры
						</button>						
					</div>	
					<div class="advert__window" data-options="sale_form">
											
					</div>	
					<div class="advert__window">
						<h2 class="advert__title">
							Описание
						</h2>	
						<div class="form-group">
						    <textarea class="form-control advert__textarea" name="describe" placeholder="Расскажите о недвижимости" data-validate="true" data-validate-type="textarea"></textarea>
						</div>				
					</div>
					<div class="advert__window">
						<h2 class="advert__title">
							Контакты
						</h2>	
						<span class="btn btn-dark advert__button-phone">
							Указать номер телефона
						</span>				
					</div>
					<div class="advert__window">
						<h2 class="advert__title">
							Готовность к онлайн-показу
						</h2>	
						<div class="advert__text">
							Выберите, если готовы показать объект с помощью видео-звонка — например, через WhatsApp, Zoom, Skype или другой сервис
						</div>
						<div class="advert__row">
							<div class="custom-control custom-checkbox mr-sm-2 ">
						        <input type="checkbox" class="custom-control-input" id="ready" name="is_ready">
						        <label class="custom-control-label" for="ready">Готов показать объект онлайн</label>
						    </div>
						</div>						
					</div>
					<!-- <div class="advert__window">
						<h2 class="advert__title">
							Привилегии от Сбербанка
						</h2>	
						<div class="advert__text">
							Введите кадастровый номер: мы проверим недвижимость, и объявление получит значки Скидка на ипотеку 0,3% и Ипотека без отчёта об оценке. Объявления с такими значками получают больше звонков от покупателей. Это бесплатно.
						</div>
						<div class="advert__row">
							<div class="custom-control custom-checkbox mr-sm-2 ">
						        <input type="checkbox" class="custom-control-input" id="ready" name="is_ready">
						        <label class="custom-control-label" for="ready">Готов показать объект онлайн</label>
						    </div>
						</div>						
					</div> -->
					<div class="advert__buttons">
						<button class="btn btn-dark advert__button-main advert__button-sumbit">Опубликовать</button>
						<button class="btn btn-primary advert__button-main advert__button-save">Сохранить как черновик</button>
						<button class="btn btn-primary advert__button-main advert__button-delete">Удалить</button>
					</div>	
				</form>
			</div>
		</section>
		<div class="none">
		<?php
			include "pages/about_office.php";
			include "pages/apart.php";
			include "pages/comercial_rent.php";
			include "pages/garage.php";
			include "pages/home.php";
			include "pages/house.php";
			include "pages/living_additional.php";
			include "pages/living_deal.php";
			include "pages/living_rent.php";
			include "pages/office.php";
			include "pages/office_additional.php";
			include "pages/room.php";
			include "pages/site.php";
			include "pages/sale.php";
			include "pages/rent.php";
		?>
		</div>
	</main>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

	<!-- jQuery and JS bundle w/ Popper.js -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/gh/jquery-form/form@4.3.0/dist/jquery.form.min.js" integrity="sha384-qlmct0AOBiA2VPZkMY3+2WqkHtIQ9lSdAsAn5RUJD/3vA5MKDgSGcdmIv4ycVxyn" crossorigin="anonymous"></script>
	
	<script src="js/inputmask/dist/jquery.inputmask.min.js"></script>
	<script src="js/dropzone/dist/dropzone.js"></script>
	<script src="js/script.js"></script>
	<script async
	    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCNottkpmhLsjl-xNdZ4bBmDBfjdCExWM4&callback=initMap">
	</script>
</body>
</html>