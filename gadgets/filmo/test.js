var cpeSpecialPage = "Spécial:Filmo";

$(function () {
	mw.loader.using( 'mediawiki.util', function () {
		mw.util.addPortletLink('p-tb', mw.config.get("wgArticlePath").replacee(/\$1/, cpeSpecialPage), "Filmographie", "r-cpe", "Filmographie");
	});
});