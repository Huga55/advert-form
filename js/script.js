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

$("#kind1-1").prop("checked", true);

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
		rent: {
			add: ["living_rent"],
		},
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
				"office_add_infra",
			],
		},
		trade: {
			name: "Торговое помещение",
			blocks: [
				"office", "office_additional", "about_office",
			],
			blocks_delete: [
				"office_add_parking", "office_add_infra",
			],
		},
		public: {
			name: "Общепит",
			blocks: [
				"office", "office_additional", "about_office",
			],
			blocks_delete: [
				"office_add_parking", "office_add_infra",
			],
		},
		free: {
			name: "Свободного назначения",
			blocks: [
				"office", "office_additional", "about_office",
			],
			blocks_delete: [
				"office_add_parking", "office_add_infra",
			],
		},
		storage: {
			name: "Склад",
			blocks: [
				"office", "office_additional", "about_office",
			],
			blocks_delete: [
				"office_rooms",
			],
		},
		production: {
			name: "Производство",
			blocks: [
				"office", "office_additional", "about_office",
			],
			blocks_delete: [

			],
		},
		hotel: {
			name: "Гостиница",
			blocks: [
				"office", "office_additional", "about_office",
			],
			blocks_delete: [
				"office_power", "office_add_infra",
			],
		},
		landsite: {
			name: "Земельный участок",
			blocks: [
				"site",
			],
			blocks_delete: [
				"living_site_type"
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


$(document).on("change", "[data-input='follow']", function() {
	const advertTypeGeneral = $(".advert_type_general:checked").val();
	const advertView = $(".input_view:checked").val();
	const kind = $("[name='kind']:checked").val();

	
})