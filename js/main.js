$(document).on("ready", inicio);
$(document).on("ready", parallax);
$(document).on("ready", submenu);
$(document).on("ready", submit);
$(document).on("ready", transicion);
function transicion()
{
	$(".tabs,.noticias,.content-noticias,.documentos,.contacto,.wrapper-error").css("display", "none");
    $(".tabs,.noticias,.content-noticias,.documentos,.contacto,.wrapper-error").fadeIn(800);
    
	$("a.transition").click(opacidadOP(da));
	function opacidadOP(da)
	{
		da.preventDefault();
		linkLocation = this.href;
		$(".tabs,.noticias,.content-noticias,.documentos,.contacto,.wrapper-error").fadeOut(500, redirectPage);		
	}
	function redirectPage()
	{
		window.location = linkLocation;
	}	

	/*$(".tabs,.noticias,.content-noticias,.galeria,.documentos,.contacto,.wrapper-error").css("display", "none");
    $(".tabs,.noticias,.content-noticias,.galeria,.documentos,.contacto,.wrapper-error").fadeIn(500);    
	$("a.transition").click(ola(event));
	function ola(event)
	{
		event.preventDefault();
		linkLocation = this.href;
		$(".tabs,.noticias,.content-noticias,.galeria,.documentos,.contacto,.wrapper-error").fadeOut(500, redirectPage);		
	};
	function redirectPage() 
	{
		window.location = linkLocation;
	}	*/
}
function submit()
{	
	$('#btn_submit,#btnenviar').on('click', mostrarCuadro);
	function mostrarCuadro()
	{
		alert('esta característica no esta disponible X_X, pero lo estara :3');
	}
}
function submenu()
{
	$('#semestres').on("click", acordeon);
}
function acordeon() 
{
	$('.submenu').slideToggle(400);	
}

function parallax()
{
	$window = $(window);
	$('header,footer[data-type="background"]').each(calcObjeto);
	function calcObjeto()
	{
		var $bgobj = $(this); // assigning the object
		$(window).scroll(scroleo);
		function scroleo()
		{
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';
		// Move the background
		$bgobj.css({ backgroundPosition: coords });
		} //window scroll Ends
	}
}

function inicio()
{
	var Page = (function primerafuncion() 
	{
		//
		var $navArrows = $( '#nav-arrows' ),
		//
			$nav = $( '#nav-dots > span' ),
			slitslider = $( '#slider' ).slitslider( {
				onBeforeChange : function dotcurrent( slide, pos ) {
					$nav.removeClass( 'nav-dot-current' );
					$nav.eq( pos ).addClass( 'nav-dot-current' );
				}
			} ),
			init = function segundafuncion() {
				initEvents();
			},
			initEvents = function tercerafuncion() {
				// add navigation events
						$navArrows.children( ':last' ).on( 'click', function siguiente() {
							slitslider.next();
							return false;
						} );
						$navArrows.children( ':first' ).on( 'click', function anterior() {
							slitslider.previous();
							return false;
						} );
				//	
				$nav.each( function dotclick( i ) {
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
}