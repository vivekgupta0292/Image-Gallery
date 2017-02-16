var igallery = window.igallery || {};
igallery.guestService  = (function () {
	var SELECTORS,
		init;
	
	SELECTORS = {
		container: '.guestServiceMainWrap',
		accordionAnchorTab: '.guestServiceMainWrap .boxTile .boxTileContent',
		accordionAnchorLarge: '.guestServiceMainWrap .boxTile .boxTileHover a',
		accordionAnchorSmall: '.guestServiceMainWrap .boxTile .boxTileText .boxTileSmall a',
		accordionClose: '.guestServiceMainWrap .boxTile .boxCollapse .close',
	}


	init =  function () {
		if ($(SELECTORS.container).length) {

			$('.guestServiceMainWrap .boxTile .boxCollapse a').attr("tabindex", '0');

			$(document).on('keyup', SELECTORS.accordionAnchorTab, function(event) {
				var code = event.keyCode || event.which;
                if (code == 13) {
                	event.stopPropagation();
			        var $this = $(this);
			        var parent = $this.find('.boxTileHover a').data('parent');

			        $(this).find('.boxTileText').toggleClass( "active" );
			        $(this).parent().find('.boxTileArrow').toggle();

			        var actives = parent && $(parent).find('.collapse.in');

			        // From bootstrap itself
			        if (actives && actives.length) {
			            hasData = actives.data('collapse');
			            //if (hasData && hasData.transitioning) return;
			            actives.collapse('hide');
			            actives.prev().find('.boxTileText').removeClass('active');
			            actives.prev().find('.boxTileArrow').hide();
			        }

			        var target = $this.find('.boxTileHover a').attr('data-target') || (href = $this.find('.boxTileHover a').attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');

			        $(target).collapse('toggle');
                }
			});

			$(document).on('click', SELECTORS.accordionAnchorLarge, function(event) {
		        event.stopPropagation();
		        var $this = $(this);
		        var parent = $this.data('parent');

		        $(this).parent().parent().find('.boxTileText').toggleClass( "active" );
		        $(this).parent().parent().parent().find('.boxTileArrow').toggle();

		        var actives = parent && $(parent).find('.collapse.in');

		        // From bootstrap itself
		        if (actives && actives.length) {
		            hasData = actives.data('collapse');
		            //if (hasData && hasData.transitioning) return;
		            actives.collapse('hide');
		            actives.prev().find('.boxTileText').removeClass('active');
		            actives.prev().find('.boxTileArrow').hide();
		        }

		        var target = $this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');

		        $(target).collapse('toggle');
			});

			$(document).on('click', SELECTORS.accordionAnchorSmall, function(event) {
		        event.stopPropagation();
		        var $this = $(this);
		        var parent = $this.data('parent');

		        $this.toggle();
		        $(this).parent().parent().toggleClass( "active" );
		        $(this).parent().parent().parent().parent().find('.boxTileArrow').toggle();

		        var actives = parent && $(parent).find('.collapse.in');

		        // From bootstrap itself
		        if (actives && actives.length) {
		            hasData = actives.data('collapse');
		            //if (hasData && hasData.transitioning) return;
		            actives.collapse('hide');
		            actives.prev().find('.boxTileText').removeClass('active');
		            actives.prev().find('.boxTileArrow').hide();
		            actives.prev().find('.boxTileSmall a').show();
		        }

		        var target = $this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');

		        $(target).collapse('toggle');
			});

			$(document).on('click', SELECTORS.accordionClose, function(event) {
		        event.stopPropagation();
		        var $this = $(this);

		        $(this).parent().prev().find('.boxTileText').removeClass( "active" );
		        $(this).parent().prev().find('.boxTileArrow').hide();
		        $(this).parent().prev().find('.boxTileSmall a').show();

		        var target = $this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');

		        $(target).collapse('toggle');
			});
		}
	};
	

	return {
        init: init,
    };

})();

$(document).ready(function () {
	igallery.guestService.init();
});

