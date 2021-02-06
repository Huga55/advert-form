/* изменение вида недвижимости */

$(".input_view").change(function() {
	const dataView = $(this).val();
	const id = $(this).attr("data-id");
	changePropertyGroup(dataView, id);
})

$("[name='advert_type']").change(function() {
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
};

setTimeout(trigger, 150);

$("div#drop").dropzone({ 
	url: "/file/post",
	uploadMultiple:true,
	autoQueue:false, 
	autoProcessQueue: false,
	acceptedFiles:"image/*",
	addRemoveLinks: true,
	withCredentials: true,
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