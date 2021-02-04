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