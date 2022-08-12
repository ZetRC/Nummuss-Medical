var login = (function() {	
		
	var initProperties = function() {
         functions.handleWizard();
         functions.handleFade();
         functions.togglePassword();
	};
	
	var functions = {	
        handleWizard : function(){
        $(document).ready(function () {
            $('.nav-tabs > li a[title]').tooltip();
            
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

                var target = $(e.target);
            
                if (target.parent().hasClass('disabled')) {
                    return false;
                }
            });

            $(".next-step").click(function (e) {
                var active = $(this).closest('.wizard').find('.nav-tabs li.active');
                active.next().removeClass('disabled');
                nextTab(active);

            });
            $(".prev-step").click(function (e) {

                var active = $(this).closest('.wizard').find('.nav-tabs li.active');
                prevTab(active);

            });
        });

        function nextTab(elem) {
            $(elem).next().find('a[data-toggle="tab"]').click();
        }
        function prevTab(elem) {
            $(elem).prev().find('a[data-toggle="tab"]').click();
        }


        $('.nav-tabs').on('click', 'li', function() {
            $(this).closest('.nav-tabs').find('li.active').removeClass('active');
            //$('.nav-tabs li.active').removeClass('active');
            $(this).addClass('active');
        });
        },

        handleFade : function(){
            $('.toggle-content').click(()=>{
                $('.selection-box').fadeOut(200)
            })

            $('#doctor-selector').click(()=>{
                $('#formularioDoctor').delay(200).fadeIn(200)
            })

            $('#paciente-selector').click(()=>{
                $('#formularioPaciente').delay(200).fadeIn(200)
            })

            $('.back-selection').click(()=>{
                $(".selection-box").delay(200).fadeIn(200)
                $('#formularioDoctor').fadeOut(200)
                $('#formularioPaciente').fadeOut(200)
                
            })
        },
        togglePassword : function(){
            $('.fa-eye, .fa-eye-slash').click(function(){
                $('.fa-eye').toggleClass('hidden')
                $('.fa-eye-slash').toggleClass('hidden')
                
            })
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
	login.init();
});
