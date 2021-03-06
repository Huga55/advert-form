<div class="window__block" data-block="rent">
	<h2 class="advert__title">
		Условия аренды
	</h2>
	<div class="advert__row advert__row_price">	
		<div class="form-group advert__input-block meter meter_rent">
		    <label for="rent_price">Арендная плата</label>
		    <input type="text" class="form-control advert__input-text" id="rent_price" name="rent_price" data-validate="true" data-validate-type="required rent" data-mask="true" data-mask-type="99999999">
		</div>
		<div class="custom-control custom-checkbox mr-sm-2 advert__checkbox-block advert__checkbox_price" >
	        <input type="checkbox" class="custom-control-input" id="infra_1" name="infra_1">
	        <label class="custom-control-label" for="infra_1">Торг уместен</label>
	    </div>
	    <div class="form-group advert__input-block meter meter_price">
		    <label for="pledge">Залог</label>
		    <input type="text" class="form-control advert__input-text" id="pledge" name="pledge">
		</div>
	</div>
	<div class="advert__subtitle">
    	Предоплата в месяцах
    </div>
	<div class="advert__row">	
    	<div class="btn-group btn-group-toggle advert__radios advert__radios_inline" data-toggle="buttons">
    		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="before_money" value="1"> 1
	  		</label>
	  		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="before_money" value="2"> 2
	  		</label>
	  		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="before_money" value="3"> 3
	  		</label>
	  		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="before_money" value="none"> Нет
	  		</label>
	  	</div>
  	</div>
  	<div class="advert__subtitle">
    	Коммунальные платежи
    </div>
	<div class="advert__row">	
    	<div class="btn-group btn-group-toggle advert__radios advert__radios_inline" data-toggle="buttons">
    		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="before_money" value="1"> Не включены
	  		</label>
	  		<label class="btn btn-secondary advert__room" data-input="variable">
	    		<input type="radio" name="before_money" value="2"> Включены
	  		</label>
	  		<label class="btn btn-secondary advert__room" data-input="variable" data-box="commun_pay">
	    		<input type="radio" name="before_money" value="3"> По счетчикам
	  		</label>
	  	</div>
  	</div>
</div>