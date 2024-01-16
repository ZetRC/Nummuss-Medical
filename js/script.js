var homeLayout = (function() {	
		
	var initProperties = function() {
         functions.toggleableTables();
         functions.initCustomCarousel();
         functions.handleImageZoom();
         functions.handleSidebar();
         functions.dropdown();
         functions.handleDinamicTables();
         functions.handleComboBox();
         functions.handleTimepicker();
         functions.handleTimeline();
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

          $('#toggle-sidebar').click(function(){
            $("#sidebar").animate({width:'toggle'},100);  
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
          //create datatables
          $('#datatable').DataTable( {
            dom: 'Bfrtip',
            buttons: [
                {
                    text: 'My button',
                    action: function ( e, dt, node, config ) {
                        alert( 'Botón activado' );
                    }
                }
            ]
          } );

          //maneja estado activo de una columna
          $(".custom-table tr").click(function(){
            $(this).closest('.custom-table').find('.active-row').removeClass('active-row')
            $(this).addClass('active-row')
          })
        },
        handleComboBox : function(){
            var combolist = [];
            var combolist2 = [];
            $(".combobox").each(function () {
                $("input", this).focus(function () {
                    $(this).parent().find("ul").slideDown(200);
                });
                //shows dropdown when element focuses

                $("input", this).focusout(function () {
                  setTimeout(()=>{
                    $(this).parent().find("ul").slideUp(200);
                  },200)
                });
                //hides element when out of focus
                $("ul li", this).each(function () {
                    $(this).click(function () {
                        $(this).parent()
                            .parent()
                            .find("input")
                        .val($(this).text())
                        .css("background","#fff");
                    }); //value of li is set as the text value
                    combolist.push($(this).text());
                    //pushes values of li to an array  
                    combolist2.push($(this).text().toLowerCase());
                    /*pushes values of li to an array in lowercase -
                  added just in case the user does not want the values to be case sensetive  */
                }); //each li
            });
        },
        handleTimepicker : function(){    
          //permite seleccionar hora      
          $('.timepicker').timepicker({
            interval: 30,
          });
          //permite seleccionar mes y día
          $( ".datepicker" ).datepicker({
              dateFormat: 'yy-mm-dd',
              minDate: 0,
          });
          //permite seleccionar año, mes y día
          $( ".completeDatepicker" ).gijgoDatepicker();
          //sólo selecciona año
          $("#datepicker, .year-datapicker").datePicker({
            format: "yyyy",
            viewMode: "years", 
            minViewMode: "years",
            autoclose:true
         });   
        },
        handleTimeline : function(){          
            // create a handlebars template
            var source   = document.getElementById('item-template').innerHTML;
            var template = Handlebars.compile(document.getElementById('item-template').innerHTML);

            // DOM element where the Timeline will be attached
            var container = document.getElementById('visualization');

            // Create a DataSet (allows two way data-binding)
            var items = new vis.DataSet([
              {
                timelineTime: '7:25 AM',
                timelineDescription: 'Medico expide receta',
                start: '2014-06-30T13:00:00',
                timelineImportance: 'Importante',
                className:'status-importante',
                title: '<span>27 de Enero del 2022</span>'
              },
              {
                timelineTime: '7:25 AM',
                timelineDescription: 'Solicitud de estudios medicos',
                start: '2014-06-30T17:00:00',
                timelineImportance: 'Moderado',
                className:'status-moderado'
              },
              {
                timelineTime: '7:25 AM',
                timelineDescription: 'Solicitud de estudios medicos',
                start: '2014-07-01T13:00:00',
                timelineImportance: 'Poca Importancia',
                className:'status-moderado'
              },
              {
                timelineTime: '7:25 AM',
                timelineDescription: 'Solicitud de estudios medicos',
                start: '2014-07-01T17:00:00',
                timelineImportance: 'Importante',
                className:'status-importante'
              },
              {
                timelineTime: '7:25 AM',
                timelineDescription: 'Solicitud de estudios medicos',
                start: '2014-07-04T13:00:00',
                timelineImportance: 'Poca Importancia',
                className:'status-moderado'
              },
              {
                timelineTime: '7:25 AM',
                timelineDescription: 'Medico expide receta',
                start: '2014-07-04T17:00:00',
                timelineImportance: 'Importante',
                className:'status-importante'
              },
              {
                timelineTime: '7:25 AM',
                timelineDescription: 'Medico expide receta',
                start: '2014-07-05T13:00:00',
                timelineImportance: 'Moderado',
                className:'status-moderado'
              },
              {
                timelineTime: '7:25 AM',
                timelineDescription: 'Solicitud de estudios medicos',
                start: '2014-07-05T17:00:00',
                timelineImportance: 'Importante',
                className:'status-importante'
              },
              {
                timelineTime: '7:25 AM',
                timelineDescription: 'Medico expide receta',
                start: '2014-07-08T17:00:00',
                timelineImportance: 'Poca Importancia',
                className:'status-poco-importante'
              },
              {
                timelineTime: '7:25 AM',
                timelineDescription: 'Solicitud de estudios medicos',
                start: '2014-07-09T17:00:00',
                timelineImportance: 'Importante',
                className:'status-importante'
              },
              {
                timelineTime: '7:25 AM',
                timelineDescription: 'Medico expide receta',
                start: '2014-07-13T16:00:00',
                timelineImportance: 'Moderado',
                className:'status-moderado'
              }
            ]);

            // Configuration for the Timeline
            var options = {
              // specify a template for the items
              template: template,
             
              margin:150,
              horizontalScroll:true,
              height:800,
              width:800,
              zoom:false,
              zoomKey: 'ctrlKey',
              itemsAlwaysDraggable:false
            };

            // Create a Timeline
            var timeline = new vis.Timeline(container, items, options);
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
