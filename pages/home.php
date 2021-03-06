<div class="window__block" data-block="home">
	<h2 class="advert__title">
		Дом
	</h2>
	<div class="advert__row">
		<div class="form-group advert__input-block meter" data-box="homepart">
		    <label for="home_area">Размер доли</label>
		    <input type="text" class="form-control advert__input-text" id="home_part" name="home_part" data-validate="true" data-validate-type="required">
		</div>
  		<div class="form-group advert__input-block meter">
		    <label for="home_area">Площадь дома</label>
		    <input type="text" class="form-control advert__input-text" id="home_area" name="home_area" data-validate="true" data-validate-type="required home" data-mask="true" data-mask-type="99999">
		</div>
		<div class="form-group advert__input-block">
		    <label for="home_floor">Этажей в доме</label>
		    <input type="text" class="form-control advert__input-text" id="home_floor" name="home_floor" data-mask="true" data-mask-type="99">
		</div>
		<div class="form-group advert__input-block meter meter_site">
		    <label for="home_site_area">Площадь участка</label>
		    <input type="text" class="form-control advert__input-text" id="home_site_area" name="site_area" data-validate="true" data-validate-type="required site" data-mask="true" data-mask-type="9999">
		</div>
  	</div>
  	<div class="advert__subtitle">
    	Тип участка
    </div>
  	<div class="advert__row">	
    	<div class="btn-group btn-group-toggle advert__radios advert__radios_inline" data-toggle="buttons" data-validate="true" data-validate-type="radio">
    		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="site" value="1"> ИЖС
	  		</label>
	  		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="site" value="2"> Садовый
	  		</label>
	  		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="site" value="3"> Фермерский
	  		</label>
	  	</div>
  	</div>
  	<div class="advert__subtitle">
    	Количество комнат
    </div>
	<div class="advert__row">	
    	<div class="btn-group btn-group-toggle advert__radios advert__radios_inline" data-toggle="buttons">
    		<label class="btn btn-secondary advert__room" for="room-1" data-input="variable">
	    		<input type="radio" name="room" value="1"> 1
	  		</label>
	  		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="room" value="2"> 2
	  		</label>
	  		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="room" value="3"> 3
	  		</label>
	  		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="room" value="4"> 4
	  		</label>
	  		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="room" value="5"> 5+
	  		</label>
	  	</div>
  	</div>
  	<div class="advert__row">
		<div class="form-group advert__input-block meter meter_year">
		    <label for="home_year">Год постройки</label>
		    <input type="text" class="form-control advert__input-text" id="home_year" name="year">
		</div>
	</div>
	<div class="advert__subtitle">
    	Тип дома
    </div>
    <div class="advert__row">	
    	<div class="btn-group btn-group-toggle advert__radios advert__radios_inline" data-toggle="buttons">
    		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="type_house" value="1"> Кирпичный
	  		</label>
	  		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="type_house" value="2"> Пеноблоки
	  		</label>
	  		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="type_house" value="3"> Газоблоки
	  		</label>
	  		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="type_house" value="4"> Металл
	  		</label>
	  		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="type_house" value="5"> Деревянный
	  		</label>
	  	</div>
  	</div>
  	<div class="advert__subtitle">
    	Санузел
    </div>
  	<div class="advert__row">	
    	<div class="btn-group btn-group-toggle advert__radios advert__radios_inline" data-toggle="buttons">
    		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="bathroom" value="1"> На улице
	  		</label>
	  		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="bathroom" value="2"> В доме
	  		</label>
	  	</div>
  	</div>
  	<div class="advert__row advert__row_home">
  		<div class="advert__box">
  			<div class="advert__subtitle">
		    	Отопление
		    </div>
  			<div class="btn-group btn-group-toggle advert__radios advert__radios_inline" data-toggle="buttons">
	    		<label class="btn btn-secondary advert__room" data-input="variable">
		    		<input type="radio" name="heating" value="true"> да
		  		</label>
		  		<label class="btn btn-secondary advert__room" data-input="variable">
		    		<input type="radio" name="heating" value="false"> нет
		  		</label>
		  	</div>
  		</div>
  		<div class="advert__box">
  			<div class="advert__subtitle">
		    	Эектричество
		    </div>
  			<div class="btn-group btn-group-toggle advert__radios advert__radios_inline" data-toggle="buttons">
	    		<label class="btn btn-secondary advert__room" data-input="variable">
		    		<input type="radio" name="electr" value="true"> да
		  		</label>
		  		<label class="btn btn-secondary advert__room" data-input="variable">
		    		<input type="radio" name="electr" value="false"> нет
		  		</label>
		  	</div>
  		</div>
  		<div class="advert__box">
  			<div class="advert__subtitle">
		    	Газ
		    </div>
  			<div class="btn-group btn-group-toggle advert__radios advert__radios_inline" data-toggle="buttons">
	    		<label class="btn btn-secondary advert__room" data-input="variable">
		    		<input type="radio" name="gas" value="true"> да
		  		</label>
		  		<label class="btn btn-secondary advert__room" data-input="variable">
		    		<input type="radio" name="gas" value="false"> нет
		  		</label>
		  	</div>
  		</div>
  		<div class="advert__box">
  			<div class="advert__subtitle">
		    	Водоснабжение
		    </div>
  			<div class="btn-group btn-group-toggle advert__radios advert__radios_inline" data-toggle="buttons">
	    		<label class="btn btn-secondary advert__room" data-input="variable">
		    		<input type="radio" name="water"value="true"> да
		  		</label>
		  		<label class="btn btn-secondary advert__room" data-input="variable">
		    		<input type="radio" name="water"value="false"> нет
		  		</label>
		  	</div>
  		</div>
  		<div class="advert__box">
  			<div class="advert__subtitle">
		    	Канализация
		    </div>
  			<div class="btn-group btn-group-toggle advert__radios advert__radios_inline" data-toggle="buttons">
	    		<label class="btn btn-secondary advert__room" data-input="variable">
		    		<input type="radio" name="sewage" value="true"> да
		  		</label>
		  		<label class="btn btn-secondary advert__room" data-input="variable">
		    		<input type="radio" name="sewage" value="false"> нет
		  		</label>
		  	</div>
  		</div>
  	</div>
  	<div class="advert__subtitle">
    	Вид из окон
    </div>
  	<div class="advert__row advert__row_checkbox">
  		<div class="custom-control custom-checkbox mr-sm-2 advert__checkbox-block">
	        <input type="checkbox" class="custom-control-input" id="home_garage" name="home_garage">
	        <label class="custom-control-label" for="home_garage">Гараж</label>
	    </div>
	    <div class="custom-control custom-checkbox mr-sm-2 advert__checkbox-block">
	        <input type="checkbox" class="custom-control-input" id="home_bath" name="home_bath">
	        <label class="custom-control-label" for="home_bath">Баня</label>
	    </div>
	    <div class="custom-control custom-checkbox mr-sm-2 advert__checkbox-block">
	        <input type="checkbox" class="custom-control-input" id="home_swim" name="home_swim">
	        <label class="custom-control-label" for="home_swim">Бассеин</label>
	    </div>
  	</div>
</div>