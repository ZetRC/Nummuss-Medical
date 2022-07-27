var dashboard= (function() {	
		
	var initProperties = function() {
         functions.handleToggle();
	};
	
	var functions = {	
        handleToggle : function(){
			$(".toggleable-item").click(function(){
                //header color
                $(this).parent().find(".active-item").removeClass("active-item");
                $(this).addClass("active-item");
                //box content
                $(this).closest(".toggleable-box").find(".active-option").removeClass("active-option");
                const sectionToShow = $(this).attr("data-target");
                $(sectionToShow).addClass("active-option");
                
            });
        },
	};
	
	var initialize = function() {
		initProperties();
	};


	return {
		init : initialize,
	}
})();


$(document).ready(function () {
	dashboard.init();
});
