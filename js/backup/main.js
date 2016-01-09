$(document).on("ready", inicio);
$(document).on("ready", parallax);
$(document).on("ready", submenu);
$(document).on("ready", submit);
function submit()
{	
	$('#btn_submit').on('click', mostrarCuadro);
	function mostrarCuadro()
	{
		alert('esta característica no esta disponible X_X, pero lo estara :3');
	};

}
function submenu()
{
	$('#semestres').on("click", acordeon);
}
function acordeon() 
{
	$('.submenu').slideToggle(400);	
	acordeon.preventDefault();
}

function parallax()
{
	$window = $(window);
                
   $('header,footer[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
                    
      $(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';

		// Move the background
		$bgobj.css({ backgroundPosition: coords });
		
}); //window scroll Ends

 });	
}


function inicio()
{
$(function() {

		var Page = (function() {

			//

			var $navArrows = $( '#nav-arrows' ),
			//
				$nav = $( '#nav-dots > span' ),
				slitslider = $( '#slider' ).slitslider( {
					onBeforeChange : function( slide, pos ) {

						$nav.removeClass( 'nav-dot-current' );
						$nav.eq( pos ).addClass( 'nav-dot-current' );

					}
				} ),

				init = function() {

					initEvents();
					
				},
				initEvents = function() {


					// add navigation events
							$navArrows.children( ':last' ).on( 'click', function() {

								slitslider.next();
								return false;

							} );

							$navArrows.children( ':first' ).on( 'click', function() {
								
								slitslider.previous();
								return false;

							} );

					//	

					$nav.each( function( i ) {
					
						$( this ).on( 'click', function( event ) {
							
							var $dot = $( this );
							
							if( !slitslider.isActive() ) {

								$nav.removeClass( 'nav-dot-current' );
								$dot.addClass( 'nav-dot-current' );
							
							}
							
							slitslider.jump( i + 1 );
							return false;
						
						} );
						
					} );

				};

				return { init : init };

		})();

		Page.init();
	});
}