window.log = function(param){
    console.log(param);
};

$(function(){

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		isApple = /iPod|iPad|iPhone/i.test(navigator.userAgent),
		$doc = $(document),
		$win = $(window),
		$html = $(document.documentElement);

	$('table').wrap('<div class="table-wrapper"></div>');

	resizeController(1260, function() {
		log("Функция будет вызвана меньше чем 1260");
	}, function() {
		log("Функция будет вызвана больше чем 1260");
	});

	/*alignElements*/
	function blocksMatchHeight(arr) {
		for (var i = 0; i< arr.length; i++) {
			$(arr[i]).matchHeight();
		}
	}
	var alignElemets = function(){
		blocksMatchHeight([
			'.test'
		]);	
	}
	alignElemets();
	/*alignElements*/

	/*orientationChange*/
	window.addEventListener("orientationchange", function() {
		setTimeout(alignElemets, 500);
		log("orientationChange");
	}, false);
	/*orientationChange*/


	// Esc button
    $doc.on('keyup', function(keyUp){
	    if (keyUp.keyCode 
	    	== 27) {

	    	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
	    	
	        return false;
	    };
	});
	// Esc button

	// Document click begin
	$doc.on('click', function(event){
        if ( $(event.target).closest('.wrapper, .ui-datepicker, .ui-datepicker a, .ui-corner-all').length ){}else {
        	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
        };
    });
    // Document click end


});

$(document).ready(function(){

//------------------------------------ MOBIL MENU -----------------------------------//
var mql = window.matchMedia('all and (max-width: 1023px)');
	if(mql.matches){
     	$('.hmenu').removeClass('flex');
     	$('.hmenu').removeClass('menu');
     	$('.hmenu').appendTo('.mobile');
     	$('.hmenu').removeClass('hmenu');
     	$('.mburger').click(function(){
     		$('.menu-bg').fadeIn(400);
     		$('.mobile').addClass('mopen');
     		$('.mobile-close').addClass('opened');
     	});
     	$('.mobile ul li').has('ul').addClass('child');
     	$('.mobile ul li.child').append('<img src="img/bmore.svg" alt="">');
     	$('.adven-body').addClass('owl-carousel');
     	$('.adven-it').addClass('item');

     	//------------------------------------ EDVENT SLIDER -----------------------------------//
			$('.adven-body').owlCarousel({
			    loop:true,
			    margin:0,
			    nav:false,
			    dots:true,
			    items:1
			    // responsive:{
			    //     0:{
			    //         items:1
			    //     },
			    //     600:{
			    //         items:3
			    //     },
			    //     1000:{
			    //         items:5
			    //     }
			    // }
			});
		//------------------------------------ EDVENT SLIDER END -------------------------------//
    };

   	$('.menu-bg').click(function(){
    	$(this).fadeOut(400);
     	$('.mobile').removeClass('mopen');
     	$('.mobile-close').removeClass('opened');
   	});

   	$('.mobile-close').click(function(){
    	$('.menu-bg').fadeOut(400);
     	$('.mobile').removeClass('mopen');
     	$(this).removeClass('opened');
   	});
   	$('.mobile ul li.child img').click(function(){
   		$(this).parent('.child').find('ul').slideToggle();
   		$(this).parent('.child').toggleClass('active');
   		$(this).toggleClass('rot');
   	});
//------------------------------------ MOBILE MENU END -----------------------------------//


//------------------------------------ MORE MENU -----------------------------------//
  $('.hmenu.menu.flex').flexMenu({
  		linkTitle:'Ещё',
  		linkText: ["<img src='img/burger.svg'>"]
  });

  $('.flexMenu-viewMore a').hover(function(){
  	$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#46c215');
		      $svg.find('.cls-2').css('fill', '#46c215');
		      $svg.find('.cls-3').css('fill', '#46c215');
		      $svg.find('.cls-4').css('fill', '#46c215');
		      $svg.find('.cls-5').css('fill', '#46c215');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
  },
  		function(){
  			$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#fff');
		      $svg.find('.cls-2').css('fill', '#fff');
		      $svg.find('.cls-3').css('fill', '#fff');
		      $svg.find('.cls-4').css('fill', '#fff');
		      $svg.find('.cls-5').css('fill', '#fff');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
  		}
  );
//------------------------------------ MORE MENU END -----------------------------------//


	//------------------------------------ MAIN SLIDER -----------------------------------//
		$('.mslide').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    dots:false,
		    items:1,
		    navText: ["<img src='img/prev.svg'>","<img src='img/next.svg'>"]
		    // responsive:{
		    //     0:{
		    //         items:1
		    //     },
		    //     600:{
		    //         items:3
		    //     },
		    //     1000:{
		    //         items:5
		    //     }
		    // }
		});
	//------------------------------------ MAIN SLIDER END -------------------------------//

	//------------------------------------ BEST HOME SLIDER -----------------------------------//
		$('.best__slider').owlCarousel({
		    loop:false,
		    margin:23,
		    nav:true,
		    dots:true,
		    items:2,
		    navText: ["<img src='img/vprev.svg'>","<img src='img/vnext.svg'>"],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1024:{
		            items:2
		        }
		    }
		});

		// $(function() {
		// 	$('.item').matchHeight(options);
		// 	var byRow = $('.best-it');
	 //        $.each($.fn.matchHeight._groups, function() {
	 //            this.options.byRow = byRow;
	 //        });

	 //        // update all heights
	 //        $.fn.matchHeight._update();
	    
		// });

	//------------------------------------ BEST HOME SLIDER END -------------------------------//

	//------------------------------------ COMMENT SLIDER -----------------------------------//
		$('.com-slider').owlCarousel({
		    loop:false,
		    margin:20,
		    nav:true,
		    dots:false,
		    items:1,
		    itemsScaleUp:true,
		    navText: ["<img src='img/vprev.svg'>","<img src='img/vnext.svg'>"]
		    // responsive:{
		    //     0:{
		    //         items:1
		    //     },
		    //     600:{
		    //         items:3
		    //     },
		    //     1000:{
		    //         items:5
		    //     }
		    // }
		});
	//------------------------------------ COMMEN SLIDER END -------------------------------//

	//------------------------------------ EVENT SLIDER -----------------------------------//
		$('.events__slide').owlCarousel({
		    loop:true,
		    margin:23,
		    nav:true,
		    dots:false,
		    items:2,
		    navText: ["<img src='img/vprev.svg'>","<img src='img/vnext.svg'>"],
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		            items:1
		        },
		        1024:{
		            items:2,
		            margin:0
		        }
		    }
		});
	//------------------------------------ EVENT SLIDER END -------------------------------//

	//------------------------------------ LIKE CLICK -------------------------------//
		$('.home-item__ig .like').click(function(){
			$(this).toggleClass('clicked');
		});
		if($('.home-item__ig').find('.clicked')){
			$('.clicked').children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#46c215');
		      $svg.find('.cls-2').css('fill', '#46c215');
		      $svg.find('.cls-3').css('fill', '#46c215');
		      $svg.find('.cls-4').css('fill', '#46c215');
		      $svg.find('.cls-5').css('fill', '#46c215');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
		}
	//------------------------------------ LIKE CLICK END -------------------------------//

	//------------------------------------ COMPANY SLIDER -----------------------------------//
		$('.compy__slider').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    dots:false,
		    items:4,
		    navText: ["<img src='img/vprev.svg'>","<img src='img/vnext.svg'>"],
		    responsive:{
		        0:{
		            items:2
		        },
		        768:{
		            items:3
		        },
		        1024:{
		            items:4
		        }
		    }
		});
	//------------------------------------ COMPANY SLIDER END -------------------------------//

	//------------------------------------ FORM STYLER -------------------------------//
	(function($) {
		$(function() {

		  $('select').styler();
		  $('input[type="checkbox"]').styler();

		});
	})(jQuery);
	//------------------------------------ FORM STYLER END -------------------------------//

	//------------------------------------ FILTER -------------------------------//
		var filter = $('.button.is-checked').attr('data-filter');
		$('.grid').isotope({
			filter: filter,
		  	itemSelector: '.home-item',
		  	layoutMode: 'fitRows',
		  	masonry: {
			  columnWidth:'.home-item',
			  gutter: 20
			},

		});


		// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.home-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('.filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
	//------------------------------------ FILTER END ----------------------------//


	//------------------------------------ UP ----------------------------//
	var limit = $(window).height() / 3,
        $backToTop = $('.upper');

    $(window).scroll(function() {
        if ($(this).scrollTop() > limit) {
            $backToTop.fadeIn();
        } else {
            $backToTop.fadeOut();
        }
    });
    $backToTop.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
	//------------------------------------ UP END ----------------------------//

	//------------------------------------ MAIN SLIDER SVG COLOR ----------------------------//
	$('.mslide .owl-nav button.owl-next').mouseover(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#46c215');
		      $svg.find('.cls-2').css('fill', '#46c215');
		      $svg.find('.cls-3').css('fill', '#46c215');
		      $svg.find('.cls-4').css('fill', '#46c215');
		      $svg.find('.cls-5').css('fill', '#46c215');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.mslide .owl-nav button.owl-next').mouseout(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#fff');
		      $svg.find('.cls-2').css('fill', '#fff');
		      $svg.find('.cls-3').css('fill', '#fff');
		      $svg.find('.cls-4').css('fill', '#fff');
		      $svg.find('.cls-5').css('fill', '#fff');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});

	$('.mslide .owl-nav button.owl-prev').mouseover(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#46c215');
		      $svg.find('.cls-2').css('fill', '#46c215');
		      $svg.find('.cls-3').css('fill', '#46c215');
		      $svg.find('.cls-4').css('fill', '#46c215');
		      $svg.find('.cls-5').css('fill', '#46c215');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.mslide .owl-nav button.owl-prev').mouseout(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#fff');
		      $svg.find('.cls-2').css('fill', '#fff');
		      $svg.find('.cls-3').css('fill', '#fff');
		      $svg.find('.cls-4').css('fill', '#fff');
		      $svg.find('.cls-5').css('fill', '#fff');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	//------------------------------------ MAIN SLIDER SVG COLOR END ----------------------------//

//------------------------------------ BEST SLIDER SVG COLOR ----------------------------//
	$('.best__slider .owl-nav .owl-prev').mouseover(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#46c215');
		      $svg.find('.cls-2').css('fill', '#46c215');
		      $svg.find('.cls-3').css('fill', '#46c215');
		      $svg.find('.cls-4').css('fill', '#46c215');
		      $svg.find('.cls-5').css('fill', '#46c215');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.best__slider .owl-nav .owl-prev').mouseout(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#000');
		      $svg.find('.cls-2').css('fill', '#000');
		      $svg.find('.cls-3').css('fill', '#000');
		      $svg.find('.cls-4').css('fill', '#000');
		      $svg.find('.cls-5').css('fill', '#000');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});

	$('.best__slider .owl-nav .owl-next').mouseover(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#46c215');
		      $svg.find('.cls-2').css('fill', '#46c215');
		      $svg.find('.cls-3').css('fill', '#46c215');
		      $svg.find('.cls-4').css('fill', '#46c215');
		      $svg.find('.cls-5').css('fill', '#46c215');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.best__slider .owl-nav .owl-next').mouseout(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#000');
		      $svg.find('.cls-2').css('fill', '#000');
		      $svg.find('.cls-3').css('fill', '#000');
		      $svg.find('.cls-4').css('fill', '#000');
		      $svg.find('.cls-5').css('fill', '#000');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	//------------------------------------ BEST SLIDER SVG COLOR END ----------------------------//

	//------------------------------------ HOME SVG COLOR ----------------------------//
	$('.best-it__body-price a').mouseover(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#46c215');
		      $svg.find('.cls-2').css('fill', '#46c215');
		      $svg.find('.cls-3').css('fill', '#46c215');
		      $svg.find('.cls-4').css('fill', '#46c215');
		      $svg.find('.cls-5').css('fill', '#46c215');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.best-it__body-price a').mouseout(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#3556d3');
		      $svg.find('.cls-2').css('fill', '#3556d3');
		      $svg.find('.cls-3').css('fill', '#3556d3');
		      $svg.find('.cls-4').css('fill', '#3556d3');
		      $svg.find('.cls-5').css('fill', '#3556d3');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	//------------------------------------ HOME SVG COLOR END ----------------------------//

	//------------------------------------ HOME ITEM SVG COLOR ----------------------------//
	$('.site-container__main .mcat__body .mcat-it .home-item').mouseover(function() {
		$(this).children('.home-item__body').children('.home-item__body-price').children('span').children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#46c215');
		      $svg.find('.cls-2').css('fill', '#46c215');
		      $svg.find('.cls-3').css('fill', '#46c215');
		      $svg.find('.cls-4').css('fill', '#46c215');
		      $svg.find('.cls-5').css('fill', '#46c215');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.site-container__main .mcat__body .mcat-it .home-item').mouseout(function() {
		$(this).children('.home-item__body').children('.home-item__body-price').children('span').children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#3556d3');
		      $svg.find('.cls-2').css('fill', '#3556d3');
		      $svg.find('.cls-3').css('fill', '#3556d3');
		      $svg.find('.cls-4').css('fill', '#3556d3');
		      $svg.find('.cls-5').css('fill', '#3556d3');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	//------------------------------------ HOME ITEM SVG COLOR END ----------------------------//

	//------------------------------------ COMMENT SLIDER SVG COLOR ----------------------------//
	$('.site-container__main .com .comment .com-slider .owl-nav .owl-prev').mouseover(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#46c215');
		      $svg.find('.cls-2').css('fill', '#46c215');
		      $svg.find('.cls-3').css('fill', '#46c215');
		      $svg.find('.cls-4').css('fill', '#46c215');
		      $svg.find('.cls-5').css('fill', '#46c215');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.site-container__main .com .comment .com-slider .owl-nav .owl-prev').mouseout(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#000');
		      $svg.find('.cls-2').css('fill', '#000');
		      $svg.find('.cls-3').css('fill', '#000');
		      $svg.find('.cls-4').css('fill', '#000');
		      $svg.find('.cls-5').css('fill', '#000');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});

	$('.site-container__main .com .comment .com-slider .owl-nav .owl-next').mouseover(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#46c215');
		      $svg.find('.cls-2').css('fill', '#46c215');
		      $svg.find('.cls-3').css('fill', '#46c215');
		      $svg.find('.cls-4').css('fill', '#46c215');
		      $svg.find('.cls-5').css('fill', '#46c215');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.site-container__main .com .comment .com-slider .owl-nav .owl-next').mouseout(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#000');
		      $svg.find('.cls-2').css('fill', '#000');
		      $svg.find('.cls-3').css('fill', '#000');
		      $svg.find('.cls-4').css('fill', '#000');
		      $svg.find('.cls-5').css('fill', '#000');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	//------------------------------------ COMMENT SLIDER SVG COLOR END ----------------------------//

	//------------------------------------ EVENT SLIDER SVG COLOR ----------------------------//
	$('.site-container__main .even .events__slide .owl-nav .owl-prev').mouseover(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#46c215');
		      $svg.find('.cls-2').css('fill', '#46c215');
		      $svg.find('.cls-3').css('fill', '#46c215');
		      $svg.find('.cls-4').css('fill', '#46c215');
		      $svg.find('.cls-5').css('fill', '#46c215');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.site-container__main .even .events__slide .owl-nav .owl-prev').mouseout(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#000');
		      $svg.find('.cls-2').css('fill', '#000');
		      $svg.find('.cls-3').css('fill', '#000');
		      $svg.find('.cls-4').css('fill', '#000');
		      $svg.find('.cls-5').css('fill', '#000');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});

	$('.site-container__main .even .events__slide .owl-nav .owl-next').mouseover(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#46c215');
		      $svg.find('.cls-2').css('fill', '#46c215');
		      $svg.find('.cls-3').css('fill', '#46c215');
		      $svg.find('.cls-4').css('fill', '#46c215');
		      $svg.find('.cls-5').css('fill', '#46c215');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.site-container__main .even .events__slide .owl-nav .owl-next').mouseout(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#000');
		      $svg.find('.cls-2').css('fill', '#000');
		      $svg.find('.cls-3').css('fill', '#000');
		      $svg.find('.cls-4').css('fill', '#000');
		      $svg.find('.cls-5').css('fill', '#000');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	//------------------------------------ EVENT SLIDER SVG COLOR END ----------------------------//


	//------------------------------------ COMPANY SLIDER SVG COLOR ----------------------------//
	$('.comp .compy__slider .owl-nav .owl-prev').mouseover(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#46c215');
		      $svg.find('.cls-2').css('fill', '#46c215');
		      $svg.find('.cls-3').css('fill', '#46c215');
		      $svg.find('.cls-4').css('fill', '#46c215');
		      $svg.find('.cls-5').css('fill', '#46c215');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.comp .compy__slider .owl-nav .owl-prev').mouseout(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#000');
		      $svg.find('.cls-2').css('fill', '#000');
		      $svg.find('.cls-3').css('fill', '#000');
		      $svg.find('.cls-4').css('fill', '#000');
		      $svg.find('.cls-5').css('fill', '#000');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});

	$('.comp .compy__slider .owl-nav .owl-next').mouseover(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#46c215');
		      $svg.find('.cls-2').css('fill', '#46c215');
		      $svg.find('.cls-3').css('fill', '#46c215');
		      $svg.find('.cls-4').css('fill', '#46c215');
		      $svg.find('.cls-5').css('fill', '#46c215');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.comp .compy__slider .owl-nav .owl-next').mouseout(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#000');
		      $svg.find('.cls-2').css('fill', '#000');
		      $svg.find('.cls-3').css('fill', '#000');
		      $svg.find('.cls-4').css('fill', '#000');
		      $svg.find('.cls-5').css('fill', '#000');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	//------------------------------------ COMPANY SLIDER SVG COLOR END ----------------------------//

	//------------------------------------ BEST ITEM SVG COLOR ----------------------------//
	$('.best__slider .best-it').mouseover(function() {
		$(this).children('.best-it__body').children('.best-it__body-price').children('span').children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#46c215');
		      $svg.find('.cls-2').css('fill', '#46c215');
		      $svg.find('.cls-3').css('fill', '#46c215');
		      $svg.find('.cls-4').css('fill', '#46c215');
		      $svg.find('.cls-5').css('fill', '#46c215');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.best__slider .best-it').mouseout(function() {
		$(this).children('.best-it__body').children('.best-it__body-price').children('span').children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#3556d3');
		      $svg.find('.cls-2').css('fill', '#3556d3');
		      $svg.find('.cls-3').css('fill', '#3556d3');
		      $svg.find('.cls-4').css('fill', '#3556d3');
		      $svg.find('.cls-5').css('fill', '#3556d3');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	//------------------------------------ BEST ITEM SVG COLOR END ----------------------------//

	//------------------------------------ EVENT SVG COLOR ----------------------------//
	$('.even-it__body a').mouseover(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#3556d3');
		      $svg.find('.cls-2').css('fill', '#3556d3');
		      $svg.find('.cls-3').css('fill', '#3556d3');
		      $svg.find('.cls-4').css('fill', '#3556d3');
		      $svg.find('.cls-5').css('fill', '#3556d3');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.even-it__body a').mouseout(function() {
		$(this).children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#46c215');
		      $svg.find('.cls-2').css('fill', '#46c215');
		      $svg.find('.cls-3').css('fill', '#46c215');
		      $svg.find('.cls-4').css('fill', '#46c215');
		      $svg.find('.cls-5').css('fill', '#46c215');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	//------------------------------------ EVENT SVG COLOR END ----------------------------//

	//------------------------------------ FOOTER SVG COLOR ----------------------------//
	$('.fsoc ul li').mouseover(function() {
		$(this).children('a').children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#46c215');
		      $svg.find('.cls-2').css('fill', '#46c215');
		      $svg.find('.cls-3').css('fill', '#46c215');
		      $svg.find('.cls-4').css('fill', '#46c215');
		      $svg.find('.cls-5').css('fill', '#46c215');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	$('.fsoc ul li').mouseout(function() {
		$(this).children('a').children('img').each(function () {
		    var $e = $(this);
		    var imgURL = $e.prop('src');
		    $.get(imgURL, function (data) {
		      var $svg = $(data).find('svg');
		      $svg.find('.cls-1').css('fill', '#fff');
		      $svg.find('.cls-2').css('fill', '#fff');
		      $svg.find('.cls-3').css('fill', '#fff');
		      $svg.find('.cls-4').css('fill', '#fff');
		      $svg.find('.cls-5').css('fill', '#fff');
		      $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		    });
		});
	});
	//------------------------------------ FOOTER SVG COLOR END ----------------------------//
});