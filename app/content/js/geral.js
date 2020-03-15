$("[data-abrir]").on('click', function () {
	var a = $(this).attr("data-abrir");
	var b = $(document).find("[data-abrir-ref='" + a + "']");
	if (typeof b !== typeof undefined) {
		var that = $(this);
		if (!that.hasClass("ativo")) {
			that.addClass("ativo");
			b.slideDown("fast");
		} else {
			that.text(that.attr("data-original"));
			that.removeAttr("data-original");
			that.removeClass("ativo");
			b.slideUp("fast");
		}
	}
});

$(document).ready(function () {
	$("html").niceScroll();
});

$(document).ready(function () {
	$('[data-toggle="tooltip"]').tooltip();
});






















jQuery("document").ready(function ($) {
	var nav = $('.menusfixos');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 230) {
			nav.addClass("amenufixo-container menufix-partes");
		} else {
			nav.removeClass("menufixo-container menufix-partes");
		}
	});
});