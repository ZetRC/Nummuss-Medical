var homeLayout = (function() {	
		
	var initProperties = function() {
         functions.toggleableTables();
         functions.initCustomCarousel();
         functions.handleImageZoom();
         functions.handleSidebar();
         functions.dropdown();
         functions.handleDinamicTables();
	};
	
	var functions = {	
        toggleableTables : function(){
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
        initCustomCarousel : function(){
            $('#myCarousel').carousel({
                interval: false
              });
              $('#carousel-thumbs').carousel({
                interval: false
              });
              
              // handles the carousel thumbnails
              $('[id^=carousel-selector-]').click(function() {
                var id_selector = $(this).attr('id');
                var id = parseInt( id_selector.substr(id_selector.lastIndexOf('-') + 1) );
                $('#myCarousel').carousel(id);
              });
              // Only display 3 items in nav on mobile.
              if ($(window).width() < 575) {
                $('#carousel-thumbs .row div:nth-child(4)').each(function() {
                  var rowBoundary = $(this);
                  $('<div class="row mx-0">').insertAfter(rowBoundary.parent()).append(rowBoundary.nextAll().addBack());
                });
                $('#carousel-thumbs .carousel-item .row:nth-child(even)').each(function() {
                  var boundary = $(this);
                  $('<div class="carousel-item">').insertAfter(boundary.parent()).append(boundary.nextAll().addBack());
                });
              }
              // Hide slide arrows if too few items.
              if ($('#carousel-thumbs .carousel-item').length < 2) {
                $('#carousel-thumbs [class^=carousel-control-]').remove();
                $('.machine-carousel-container #carousel-thumbs').css('padding','0 5px');
              }
              // when the carousel slides, auto update
              $('#myCarousel').on('slide.bs.carousel', function(e) {
                var id = parseInt( $(e.relatedTarget).attr('data-slide-number') );
                $('[id^=carousel-selector-]').removeClass('selected');
                $('[id=carousel-selector-'+id+']').addClass('selected');
              });
              // when user swipes, go next or previous
/*               $('#myCarousel').swipe({
                fallbackToMouseEvents: true,
                swipeLeft: function(e) {
                  $('#myCarousel').carousel('next');
                },
                swipeRight: function(e) {
                  $('#myCarousel').carousel('prev');
                },
                allowPageScroll: 'vertical',
                preventDefaultEvents: false,
                threshold: 75
              }); */
              /*
              $(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
              });
              */
              
              $('#myCarousel .carousel-item img').on('click', function(e) {
                var src = $(e.target).attr('data-remote');
                if (src) $(this).ekkoLightbox();
              });
        },
        handleImageZoom : function(){
          $(".zoom-image").elevateZoom({
            cursor: 'pointer',
            easing : true,
            galleryActiveClass: 'active',
            imageCrossfade: true,
            loadingIcon: 'https://www.elevateweb.co.uk/spinner.gif'
          });
        },
        handleSidebar : function(){
          $('.sidebar-element').click(function(){
            //cambia la seccion actual
            const target = $(this).attr('data-target')
            $('.body-section').removeClass('d-block').addClass('hidden')
            $(target).removeClass('hidden').addClass('d-block')
            //cambia color del elemento de sidebar seleccionado
            $('.sidebar-element').removeClass("selected-item")
            $(this).addClass("selected-item")
          })

          $("#perfil-selector").click(function(){
            const target = $(this).attr('data-target')
            $('.body-section').removeClass('d-block').addClass('hidden')
            $(target).removeClass('hidden').addClass('d-block')
            console.log(target)
          })
        },
        dropdown : function(){

          $(".section-header").click(function(){
            
            if($(this).parent().find(".section-content").hasClass("active-dropdown")){
              $("#sidebar").find(".active-dropdown").removeClass("active-dropdown").slideUp(200);
              $(this).find(".fa-chevron-right").toggleClass("rotate");
            }else{
              $("#sidebar").find(".active-dropdown").removeClass("active-dropdown").slideUp(200);
              $(".fa-chevron-right").removeClass("rotate")

              $(this).find(".fa-chevron-right").addClass("rotate");
              $(this).parent().find(".section-content").addClass("active-dropdown").slideDown(200);
            }
          })
        },
        handleDinamicTables : function(){
          //$('#datatable').DataTable();
          /* $('.custom-table').DataTable( {
            dom: 'Bfrtip',
            buttons: [
             'csv', 'excel', 'pdf'
            ]
          }); */
        }
	};
	
	var initialize = function() {
		initProperties();
	};


	return {
		init : initialize,
	}
})();


$(document).ready(function () {
	homeLayout.init();
});
