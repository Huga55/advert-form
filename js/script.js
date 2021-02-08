/* изменение вида недвижимости */

$(".input_view").change(function() {
	const dataView = $(this).val();
	const id = $(this).attr("data-id");
	changePropertyGroup(dataView, id);
})

$("[name='advert_type_general']").change(function() {
	if($(this).attr("id") === "type2") {
		showHideSite(true);
	}else {
		showHideSite(false);
	}
});

//$("#kind1-1").prop("checked", true);

const changePropertyGroup = (data, id) => {
	$(".advert__group_property").addClass("advert__group_property-none");
	$("[name='kind']").prop("checked", false);
	$("[data-view='" + data + "']").removeClass("advert__group_property-none");
	$("#kind" + id + "-1").prop("checked", true);
}

// показать / скрыть чекбокс "участок""
const showHideSite = (value) => {
	if(value) {
		$(".kind1-6").addClass("advert__radio_none");
		if($("#kind1-6").prop("checked")) {
			$("#kind1-6").prop("checked", "false");
			$("#kind1-1").prop("checked", "true");
		}
	}else {
		$(".kind1-6").removeClass("advert__radio_none");
	}
}

//отключение радиокнопки при повторном клике
$("body").on("click", "[data-input='variable'].active", function(e) {
	e.stopPropagation();
	e.preventDefault();
	$(this).first().prop("checked", false);
	$(this).removeClass("active");
});

//модальное окно

$(".advert__button-phone").click(function() {
	$(".advert__modal").addClass("advert__modal_active");
	$(".advert__modal-window").addClass("advert__modal-window_active");
});

$(".advert__modal, .advert__modal-close").on("click", function() {
	$(".advert__modal_active").removeClass("advert__modal_active");
	$(".advert__modal-window_active").removeClass("advert__modal-window_active");
})

$(".advert__modal-window").click(function(e) {
	e.stopPropagation();
});

const closeModal = () => {
	$(".advert__modal_active").removeClass("advert__modal_active");
	$(".advert__modal-window_active").removeClass("advert__modal-window_active");
}

const advert = {
	living: {
		rent: "living_rent",
		apartment: {
			name: "Квартира",
			blocks: [
				"apartment", "house", "living_additional", "living_deal",
			],
			blocks_delete: [

			],
		},
		"room": {
			name: "Комната",
			blocks: [
				"room", "house", "living_additional", "living_deal",
			],
			blocks_delete: [
				
			],
		},
		home: {
			name: "Дом",
			blocks: [
				"home", "living_deal",
			],
			blocks_delete: [
				"homepart",
			],
		},
		townhouse: {
			name: "Таунхаус",
			blocks: [
				"home", "living_deal",
			],
			blocks_delete: [
				"homepart",
			],
		},
		part_of_house: {
			name: "Часть дома",
			blocks: [
				"home", "living_deal",
			],
			blocks_delete: [
				
			],
		},
		site: {
			name: "Участок",
			blocks: [
				"site", "living_deal",
			],
			blocks_delete: [
				
			],
		}
	},
	commercial: {
		rent: "commercial_rent",
		office: {
			name: "Офис",
			blocks: [
				"office", "office_additional", "about_office",
			],
			blocks_delete: [
				"office_add_infra", "commun_pay"
			],
		},
		trade: {
			name: "Торговое помещение",
			blocks: [
				"office", "office_additional", "about_office",
			],
			blocks_delete: [
				"office_add_parking", "office_add_infra", "commun_pay"
			],
		},
		public: {
			name: "Общепит",
			blocks: [
				"office", "office_additional", "about_office",
			],
			blocks_delete: [
				"office_add_parking", "office_add_infra", "commun_pay"
			],
		},
		free: {
			name: "Свободного назначения",
			blocks: [
				"office", "office_additional", "about_office",
			],
			blocks_delete: [
				"office_add_parking", "office_add_infra", "commun_pay",
			],
		},
		storage: {
			name: "Склад",
			blocks: [
				"office", "office_additional", "about_office", 
			],
			blocks_delete: [
				"office_rooms", "commun_pay",
			],
		},
		production: {
			name: "Производство",
			blocks: [
				"office", "office_additional", "about_office", 
			],
			blocks_delete: [
				"commun_pay",
			],
		},
		hotel: {
			name: "Гостиница",
			blocks: [
				"office", "office_additional", "about_office", 
			],
			blocks_delete: [
				"office_power", "office_add_infra", "commun_pay",
			],
		},
		landsite: {
			name: "Земельный участок",
			blocks: [
				"site",
			],
			blocks_delete: [
				"living_site_type", "commun_pay",
			],
		}
	},
	garage: {
		garage: {
			name: "Гараж",
			blocks: [
				"garage",
			],
			blocks_delete: [
				"garage_parking"
			],
		},
		box: {
			name: "Бокс",
			blocks: [
				"garage",
			],
			blocks_delete: [
				
			],
		},
		parking_place: {
			name: "Машиноместо",
			blocks: [
				"garage",
			],
			blocks_delete: [
				"garage_checkbox"
			],
		},
	}
}

const changeIdOfInputs = (cloneBlock) => {
	//изменение ид для инпутов и лейблов
	const checkboxes = $(cloneBlock).find("[type='checkbox'], [type='text']");
	$(checkboxes).each(function() {
		const id = $(this).attr("id");
		const label = $(cloneBlock).find("[for='" + id + "']");
		$(label).attr("for", $(label).attr("for") + "150");
		$(this).attr("id", id + "150");
	});
}

$(document).on("change", "[data-input='follow']", function() {
	getFormThatToNeed();
})

const getFormThatToNeed = () => {
	$("[data-options='general_form']").html("");
	$("[data-options='sale_form']").html("");

	const advertTypeGeneral = $(".advert_type_general:checked").val();
	const advertView = $(".input_view:checked").val();
	const kind = $("[name='kind']:checked").val();

	const {name, blocks, blocks_delete} = advert[advertView][kind];
	
	for(let block of blocks) {
		const cloneBlock = $("[data-block='" + block + "']").clone();
		$(cloneBlock).attr("data-block", block + "_active");

		changeIdOfInputs(cloneBlock);
		//добавление нужных частей формы
		$("[data-options='general_form']").append(cloneBlock);
	}

	//добавление блоков, если это аренда
	if(advertTypeGeneral === "rent") {
		if(advertView === "living") {
			const cloneTitle = $("[data-box='living_rent_title']");
			const cloneBox = $("[data-box='living_rent']");
			const cloneBoxRadio = $("[data-box='living_rent_radio']");

			changeIdOfInputs(cloneBox);

			$("[data-block='" + blocks[0] + "_active']").append(cloneTitle);
			$("[data-block='" + blocks[0] + "_active']").append(cloneBox);
			$("[data-block='" + blocks[0] + "_active']").append(cloneBoxRadio);
		}
		
		if(advertView === "commercial") {
			const cloneBlock = $("[data-block='commercial_rent']").clone();

			$("[data-options='general_form']").append(cloneBlock);
		}

		$("[data-options='general_form']").find("[data-block='living_deal_active']").remove();
	}

	const saleBlock = $("[data-block='" + advertTypeGeneral + "']").clone();
	changeIdOfInputs(saleBlock);
	$("[data-options='sale_form']").append(saleBlock);

	//наименование блока
	$("[data-block='" + blocks[0] + "_active']").find("h2").html(name);

	//удаление блоков, не относящихся к данному типу
	for(let block of blocks_delete) {
		if(block === "commun_pay") {
			$(".advert__form").find("[data-box='" + block + "']").remove();
		}
		$("[data-options='general_form']").find("[data-box='" + block + "']").remove();
	}
}

const trigger = () => {
	$("#kind1-1").trigger("click");
}
trigger();



let myDropzone;
$("div#drop").dropzone({ 
	url: "/file/post",
	uploadMultiple:true,
	autoQueue:true, 
	autoProcessQueue: false,
	acceptedFiles:"image/*",
	addRemoveLinks: true,
	withCredentials: true,
	paramName: "file",
	parallelUploads: 10,
	init: function() {
		myDropzone = this;
	},
});




$(".advert__youtube-button").click(function(e) {
	e.preventDefault();
	const link = $("[name='youtube']").val();
	if(link.trim() && link.indexOf("?v=") !== -1) {
		const endpoint = link.substr(link.indexOf("?v=") + 3);  ;
		const src = "//img.youtube.com/vi/" + endpoint + "/default.jpg";
		$(".advert__youtube_none").removeClass("advert__youtube_none");
		
		$(".advert__youtube-img").attr("src", src);
		$(".advert__youtube-link").html(link);

		$(".advert__youtube-upload").addClass("advert__youtube_none");
	}
});

$(".advert__youtube-delete").click(function(e) {
	e.preventDefault();
	$(".advert__youtube_none").removeClass("advert__youtube_none");
	$("[name='youtube']").val("");
	$(".advert__youtube-result").addClass("advert__youtube_none");
})




//yandex map
// ymaps.ready(init);
// let myMap, myPlacemark;

// function init() {
// 	myMap = new ymaps.Map("YMapsID", {
// 		center: [55.76, 37.64],
// 		zoom: 7
// 	})

// 	//коллекция для удаления старых меток
// 	var myCollection = new ymaps.GeoObjectCollection();
// 	// Обработка события, возникающего при щелчке
//     // левой кнопкой мыши в любой точке карты.
//     myMap.events.add('click', function (e) {
//     	const coords = e.get('coords');

//     	const coordX = coords[0].toPrecision(6);
//     	const coordY = coords[1].toPrecision(6);

//     	//даление старых меток всех (НУЖНА КОЛЛЕКЦИЯ)
//     	myCollection.removeAll();

//     	//создание и добавление новой метки
//     	const myPlacemark = new ymaps.Placemark([coordX,coordY], null, {
// 			preset: 'islands#blueDotIcon'
// 		});
// 		myCollection.add(myPlacemark); 
// 		myMap.geoObjects.add(myCollection);

// 		getAddressFromMap(coordX, coordY);
//     });
// }

//google map
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("advert__map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}


//получение адресов при заполнении инпута
let addressTimer;
$(".advert__address").keyup(function(e) {
	clearTimeout(addressTimer);
	addressTimer = setTimeout(() => getAddresses(e.currentTarget.value), 600);
});

const getAddresses = (value) => {
	ymaps.suggest(value).then(function (items) {
		$(".advert__adresses").html("");
		let addresses = "";
		items.map((i) => {
			addresses += "<div class=\"advert__adresses-item\">" + i.value + "</div>";
		});
	    $(".advert__adresses").html(addresses);
	    console.log(items);
	});
}

$(document).on("click", ".advert__adresses-item", function(e) {
	e.stopPropagation();
	const address = $(e.currentTarget).html();
	$(".advert__address").val(address);
	$(".advert__adresses").html("");
});

$("body").click(function() {
	$(".advert__adresses").html("");
});

const getAddressFromMap = (lat, long) => {
	data = {
		geocode_str: "",
		kind: ["area", "locality", "street", "house", "district"],
		latitude: 55.68107936287037,
		longitude: 37.61248956085201,
		precision: ["exact", "number", "other"],
	}

	// $.ajax({
	//   url: "https://geo-service.domclick.ru/research/api/v1/geocode/",
	//   type: "POST",
	//   data: JSON.stringify(data),
	// }).then(function(result) {
	//   console.log(result);
	// });


}
//маски
$(document).on("input", "[data-mask='true']", function() {
	$(this).inputmask($(this).attr("data-mask-type"));
})



//валидация
$(".advert__form").append($(".dz-hidden-input"));
$(".dz-hidden-input").change(function(e) {
	const elem = e.currentTarget;
	//debugger;
});


$(".advert__form").submit(function(e) {
	e.preventDefault();

	$(".invalid-feedback").remove();
	$(".is-invalid").removeClass("is-invalid");
	$(".label_error").removeClass("label_error");

	const isSuccessValidate = true;
	const inputs = $(this).find("input, textarea");

	
	
	//все файлы из инпута с фото, для проверки количества! отправка есть ниже!!!
	const fileInputVal = myDropzone.getAcceptedFiles();
	if(fileInputVal.length < 3) {
		$(".advert__window_file").append("<div class=\"invalid-feedback\">Добаьвте не менее 3х фтографий</div>");
		$(".advert__container-file").addClass("label_error");
	}


	const inputsValidate = $(this).find("[data-validate='true']").each(function(isSuccessValidate) {
		const types = $(this).attr("data-validate-type").split(" ");
		const value = $(this).val();

		if(types[0] === "radio") {
			const inputActive = $(this).find("input:checked");
			if(!inputActive.length) {
				$(this).find("label").each(function() {
					$(this).addClass("label_error");
					$(this).addClass("block_error");
				});
				isSuccessValidate = false;
			}
			return;
		}

		for(let type of types) {
			const result = reglations[type](value);
			if(result !== true) {
				$(this).addClass("is-invalid").parent().append(
					"<div class=\"invalid-feedback\">" + result + "</div>");
				isSuccessValidate = false;
				break;
			}
		}
	});

	if(isSuccessValidate) {
		//настройка отправки формы здесь!! если валидация пройдена


		//отправка фото, урл для отправки нужно указать в создании dropzone (выше)
		myDropzone.processQueue();
	}
});

//снять ошибку с инпута, если корректный
$(document).on("input", ".label_error>input", function() {
	const name = $(this).attr("name");
	$("[name='" + name + "']").parent().removeClass("label_error");
})


//снять ошибку с инпута, если корректный
$(document).on("input", ".is-invalid", function() {
	const types = $(this).attr("data-validate-type").split(" ");
	const value = $(this).val().replace(/\_/g, "");
	let error = false;

	for(let type of types) {
		const result = reglations[type](value);
		if(result !== true) {
			error = true;
			break;
		}
	}
	if(!error) {
		$(this).removeClass("is-invalid");
	}
})


//правила валидации
const reglations = {
	required: (value) => value.length > 0 || "Обязательное поле",
	textarea: (value) => (value.length > 14 && value.length < 2501) || "Поле должно быть длиннее 15 символов и короче 2500",
	two: (value) => value.length < 3 || "не более 99",
	three: (value) => value.length < 4 || "не более 999",
	home: (value) => (+value > 0 && +value <= 10000) || "От 1 до 10тыс",
	site: (value) => (+value > 0 && +value <= 5000) || "От 1 до 5тыс",
	office: (value) => (+value > 0 && +value <= 9999999) || "От 1 до 9млн",
	price: (value) => (+value >= 100000 && +value <= 1000000000) || "от 100тыс до 1млрд",
	rent: (value) => (+value >= 1000 && +value <= 10000000) || "от 1тыс до 10млн",
}
