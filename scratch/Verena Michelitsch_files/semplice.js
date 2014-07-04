/*
 * semplice custom js
 * semplice.theme
 */

(function ($) {
    "use strict";

    /* show thumbs */
    $.fn.showdelay = function(){
        var delay = 0;
        return this.each(function(){
            $(this).delay(delay).animate({
                opacity: 1
            }), 0;
            delay += 75;
        });
    };

    /* function for the menu fadein */
    function showNav(method) {
        var headerHeight = $('header').height();
        var headerBarHeight = $('#header-bar').height();

        if (method === 'slide-up') {
            $("header").transition({ opacity: 1, top: -headerHeight, }, 900, 'snap'); 
        } else if (method === 'slide-down') {
            $("header").transition({ opacity: 1, top: 0, }, 900, 'snap');
        }
    }

    $(document).ready(function () {   
               
        /* fade in Menu */
        var effect = 'slide-down';
        showNav(effect);

		/* is mobile device or tablet? */
		function isMobile() {
			var check = false;
			(function(a){if(/(android|bb\d+|meego).+mobile|android|ipad|playbook|silk|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
			return check; 
		}
		
        /* editor styles */
        /*$('.wysiwyg p, .wysiwyg h1, .wysiwyg h2, .wysiwyg h3, .wysiwyg h4, .wysiwyg h5, .wysiwyg h6, .wysiwyg ul, .wysiwyg ol').each(function() {
            var color = $(this).css('color');
            $(this).addClass('font-size-' + $(this).css('fontSize'));
            $(this).addClass('line-height-' + $(this).css('lineHeight'));
            // remove font-size and line-height from style
            $(this).removeAttr('style');
            // add color
            if(color) {
                $(this).css('color', color);
            }
        }); */
		
		/* header bar opacity and transparency mode */
		var headerBarOpacity = $('#header-bar-bg').data('navbar-opacity');
		
		if ($(document).scrollTop() >= $('#fullscreen-cover').height() - ( $('#header-bar-bg').height() + 20) ) {
			$('#header-bar-bg').removeClass('transparent')
							   .addClass('header-bar')
							   .css('opacity',headerBarOpacity);
		}
		
		var headerBarClass;
		var headerBarOpacity;
		
		/* open menu */
        $(document).on('click', 'div.controls a.menu span.open', function() {
			
			/* get header bar class */
			headerBarClass = $('#header-bar-bg').attr('class');
			
			/* get header bar opacity */
			headerBarOpacity = $('#header-bar-bg').css('opacity');
			
			/* hide follow links if empty */
			if($('.follow-links ul li').length === 0) {
				$('.follow-links').hide();
			}
			
			/* set non transparent class */
			$('#header-bar-bg').attr('class', 'header-bar');
			
			/* set opacity to 1 */
			$('#header-bar-bg').css('opacity', '1');

			/* switch menu button */
			$('.menu span.open').hide();
			$('.menu span.close').show();
			
			/* hide other menu icons */
			$('.menu-icon').stop().transition({ opacity: '0' }, 200, 'easeOutCubic');
			
			/* overlay position fixed */
			$('.overlay').css('position', 'fixed');
			
			/* add close-menu class to overlay */
			$('.overlay').stop().fadeIn('slow').addClass('close-menu');
			
			/* bring header to front */
			$('header').css('z-index', 102);
			
			/* fade in fullscreen menu */
			$('#fullscreen-menu').css({'z-index': 101, 'display': 'block'}).stop().transition({ opacity: '1', height: 'auto' }, 500, 'easeOutCubic',function() {
				$('#fullscreen-menu').css('overflow-y', 'auto');
			});
		});
		
		/* close */
		$(document).on('click', '.close-menu, div.controls a.menu span.close', function() {
		
			/* revert header Class */
			$('#header-bar-bg').attr('class', headerBarClass);
			
			/* set opacity to 1 */
			$('#header-bar-bg').css('opacity', headerBarOpacity);
			
			/* switch menu button */
			$('.menu span.open').show();
			$('.menu span.close').hide();
			
			/* show other menu icons */
			$('.menu-icon').stop().transition({ opacity: '1' }, 200, 'easeOutCubic');
			
			/* remove close-menu class */
			$('.overlay').removeClass('close-menu');
			
			
			/* fade out overlay */
			$('.overlay').stop().fadeOut('slow', function() {
				/* normal header z-index */
				$('header').css('z-index', 20);
				/* position absolute */
				$('.overlay').css('position', 'absolute');
			});
			
			/* fade out fullscreen menu */
			$('#fullscreen-menu').css('overflow-y', 'hidden').stop().transition({ opacity: '0', height: '0' }, 500, 'easeOutCubic', function() {
				$('#fullscreen-menu').stop().transition({ x: '0px' }, 0, 'easeOutCubic').css({'z-index': '', 'display': 'none'});
			});
			
		});
				
		/* advanced media querys */
		$('.content-container, .mc-sub-content-container, .spacer').each(function() {
			
			// reference
			var _this = $(this);
			
			var paddingTop = $(this).css('padding-top').replace('px','');
			var paddingRight = $(this).css('padding-right').replace('px','');
			var paddingBottom = $(this).css('padding-bottom').replace('px','');
			var paddingLeft = $(this).css('padding-left').replace('px','');
			
			// spacer
			var marginTop = $(this).css('margin-top').replace('px','');
			var marginBottom = $(this).css('margin-bottom').replace('px','');
			
			// divider
			var divider;
			
			function paddings(divider) {
			
				$(_this).css('padding-top', paddingTop / divider);
				$(_this).css('padding-right', paddingRight / divider);
				$(_this).css('padding-bottom', paddingBottom / divider);
				$(_this).css('padding-left', paddingLeft / divider);
				
				// spacer margins
				$(_this).css('margin-top', marginTop / divider);
				$(_this).css('margin-bottom', marginBottom / divider);
				
			}
			
			var nineSixty = {
			
				match : function() {
					divider = 1.2;
					paddings(divider);
				},      
											
				unmatch : function() {
					paddings(1);
				}
			}
			
			var tabletWide = {
			
				match : function() {
					divider = 1.4;
					paddings(divider);
				}
			}
			
			var tabletPortrait = {
			
				match : function() {
					divider = 1.6;
					paddings(divider);
				}
			}
			
			var mobile = {
				
				match : function() {
					divider = 1.8;
					paddings(divider);
				}  
			}
			
			/* register */
			enquire
			.register('(min-width: 980px) and (max-width: 1199px)', nineSixty)
			.register('(min-width: 768px) and (max-width: 979px)', tabletWide)
			.register('(max-width: 767px)', tabletPortrait)
			.register('(max-width: 567px)', mobile);
			
		});
		
        /* scale ratio */
        var scaleRatio;
        
        /* ios background cover viewport bugfix */
        if(isMobile() === true) {
            $('.cover-image').css('backgroundSize', 'cover');
            $('.cover-image').css('background-attachment', 'scroll');
            $('.controls a, .project-panel-button').addClass('ios-no-hover');
        }

        /* blog gallery */
        $('.gallery-icon a').each(function () {
            $(this).attr('rel', 'semplice-gallery');
        });
        
        /* get bg img src */
        function getFullScreenImgSrc(input) {
            return input.replace(/"/g, "").replace(/url\(|\)$/ig, "");
        }
                
        /* look if fullscreen cover exists */
        if($('#fullscreen-cover').length) {
            /* get cover and start nprogress */
			NProgress.start();
            cover();
        } else {
            /* no fullscreen cover, start afterCover animations right away */
            afterCover();
        }
        
        /* after cover */
        function cover() {
            
            var cover = $('#fullscreen-cover');   
                
            if($(cover).data('bg-type') === 'image') {
                $(cover).children('.cover-video').hide();
                
                /* get bg img src */
                var fullScreenImgSrc = getFullScreenImgSrc($(".cover-image").css("background-image"));

                /* load bg and fade in */
                $.loadImages(fullScreenImgSrc, function () {
                    $(cover).transition({ opacity: 1 }, 1000, 'ease', function() {
                        afterCover();
                    });
                    headline();
                });
            } else if($(cover).data('bg-type') === 'video') {
                $(cover).children('.cover-image').hide();
                $(cover).transition({ opacity: 1 }, 1000, 'ease', function() {
                    afterCover();
                });
                headline();
                
            } else {
                $(cover).transition({ opacity: 1 }, 1000, 'ease', function() {
                    afterCover();
                });
                headline();
            }
        }
        
        /* vertical align and display headline */
        function headline() {
            /* if is image, load it */
            if($('.cover-headline').data('headline-format') === 'image') {
                imagesLoaded($('.cover-headline'), function() {
                    scaleRatio =  $('.headline-image').width() / 1170 * 100;
                    $('.headline-image').css({ width: scaleRatio + '%', height: 'auto' });
                    $(window).resize(function () { 
                        $('.headline-image').css({ width: scaleRatio + '%', height: 'auto' }); 
                    });
                    verticalMiddle($('.cover-headline'));
                });
            } else {
                verticalMiddle($('.cover-headline'));
            }
            $('.cover-headline').transition({ opacity: 1, delay: 300 }, 700, 'ease');
        }
        
        /* after cover content transitions */
        function afterCover() {
            /* display content */
            if(!$('body').hasClass('is-blog')) {
				if($('#content-holder').length > 0 && !$('#content-holder').is(':empty')) {
					$('#content-holder, .share-box, #project-panel-footer, #page-content').transition({ opacity: 1 }, 700, 'ease', function() {
						/* nprogress */
						NProgress.done();
					});
				} else {
					/* nprogress */
					NProgress.done();
				}
                
            } else if($('body').hasClass('is-blog')) {
                $('#blog').transition({ opacity: 1 }, 700, 'ease', function() {
                    /* nprogress */
                    NProgress.done();
                });
            }
        }
        
		/* scroll to see more animation */
		$('.see-more').click(function() {
		
			var scrollHeaderHeight;
			
			/* is sticky? */
			if($('header').css('position') === 'absolute') {
				scrollHeaderHeight = 0;
			} else {
				scrollHeaderHeight = $('header').height() - 1;
			}
			
			/* is transparent? */
			if($('#header-bar-bg').data('navbar-opacity') !== 1) {
				scrollHeaderHeight = 0;
			}
		
			var tabletPortrait = {
				match : function() {
					scrollHeaderHeight = 0;
				}
			}
			
			var mobile = {
				match : function() {
					scrollHeaderHeight = 0;
				}  
			}
			
			/* register */
			enquire
			.register('(max-width: 767px)', tabletPortrait)
			.register('(max-width: 567px)', mobile);
		
		
			$('body,html').animate({
                    scrollTop: $('#fullscreen-cover').height() - scrollHeaderHeight
            }, 800, 'easeOutCubic');
		});
		
        $('.project-panel-button').click(function () {
            $('body,html').animate({
                    scrollTop: 0
                }, 0, 'easeOutCubic', function () {
                $('header').appendTo('#wrapper').css('position', 'absolute');
                $('.cover-image').css('background-attachment', 'none');
                $('#project-panel-header').slideDown(800, 'easeOutExpo');
                $('.overlay').fadeIn('slow');
                $('.overlay').css('position', 'fixed');
                $('body').addClass('project-panel-active');
            });
        });
        
        /* thumb nav close slide */
        $('.close-project-panel, .overlay').click(function () {
            $('.overlay').fadeOut('slow');
            $('#project-panel-header').slideUp(800, 'easeOutExpo', function () {
                $('header').insertAfter('#project-panel-header').css('position', 'fixed');
                $('.overlay').css('position', 'absolute');
                $('body').removeClass('project-panel-active');
            });
        });
        
        /* blog search */
        $('.search-button').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 200, 'easeInExpo');
            $('.blog-search').transition({ height: 'auto' }, 800, 'snap');
            $('.search-field').focus();
        });
        
        $('.search-close').click(function(){
            $('.blog-search').transition({ height: '0' }, 800, 'snap');
        });
        
        /* archives and categories */
        $('.archives-button').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 200, 'easeInExpo');
            $('#category-archives').transition({ height: 'auto' }, 800, 'snap');
        });
        
        $('.archives-close').click(function(){
            $('#category-archives').transition({ height: '0' }, 800, 'snap');
        });
        
        /* vertical align fwt titles */
        $('.fwt-inner').each(function () {
            verticalMiddle($(this)); 
        });
        
        /* vertical align fwt images */
        $('.fwt-solo-img img').each(function () {
            verticalMiddle($(this)); 
        });

        /* slow bg scrolling */
        var $bgobj = $('.cover-image'); // assigning the object
        
        function verticalMiddle(element) {
            /* vertical align title is set */
            if ($(element).hasClass('middle')) {
                var titleMargin = $(element).height() / 2;
                $(element).css('margin-top', '-' + titleMargin + 'px');
                $(window).resize(function () { 
                    var titleMargin = $(element).height() / 2;
                    $(element).css('margin-top', '-' + titleMargin + 'px');
                });
            }
        }
        
        function onWindowScroll(_event) {
            
            if(isMobile() !== true) {
                var bgAlignment;
                var yPos;
                var coords;
                var actualPosX;
                var actualPosY;
                
                /* get alignment */
                if ($('.cover-image').data('bg-align')) {
                    bgAlignment = $('.cover-image').data('bg-align').split(' ');
                    actualPosX = parseInt(bgAlignment[0].replace('%', ''));
                    actualPosY = parseInt(bgAlignment[1].replace('%', '')); 
                } else {
                    bgAlignment = 'none';
                }
                
                /* slow bg scrolling */
                if (bgAlignment != 'none') {
                    yPos = -($(window).scrollTop() / 5) + actualPosY;
                    if (actualPosY === 0) {
                        coords = actualPosX + '% '+ yPos + 'px';
                    } else {
                        coords = actualPosX + '% '+ yPos + '%'; 
                    }
                    $bgobj.css({ backgroundPosition: coords });
                } else {
               
                    yPos = -($(window).scrollTop() / 5);
                    coords = '50% '+ yPos + 'px';
                    $bgobj.css({ backgroundPosition: coords });
                }
            }
            
            /* fade in navbar bg */
            if ($('#header-bar-bg').data('transparent-bar') === true) {
				if(!$('#fullscreen-menu').is(':visible')) {
					/* get opacity */
					var headerBarOpacity = $('#header-bar-bg').data('navbar-opacity');
					if ($(this).scrollTop() >= $('#fullscreen-cover').height() - ( $('#header-bar-bg').height() + 20) ) {
						$('#header-bar-bg').removeClass('transparent')
										   .addClass('header-bar')
										   .css('opacity',headerBarOpacity);
					} else {
						$('#header-bar-bg').addClass('transparent')
										   .removeClass('header-bar');
					}
				}
            }
            
            /* beam me up */
            if ($(this).scrollTop() > 400) {
                $('.to-the-top').fadeIn(700);
                
            } else {
                $('.to-the-top').fadeOut(700);
            }
        }

        /* Beam me up */
        $('.top-button').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 700, 'easeInExpo');
        });

        // thanks to seron from stack.overflow for this script

        var min_w = 300;
        var vid_w_orig;
        var vid_h_orig;

        $(window).scroll(onWindowScroll);
        
        vid_w_orig = parseInt($('video').attr('width'));
        vid_h_orig = parseInt($('video').attr('height'));
    
        $(window).resize(function () { resizeToCover(); });
        $(window).trigger('resize');

        function resizeToCover() {
            $('.cover-video').width($(window).width());
            $('.cover-video').height($(window).height());
        
            var scale_h = $(window).width() / vid_w_orig;
            var scale_v = $(window).height() / vid_h_orig;
            var scale = scale_h > scale_v ? scale_h : scale_v;
        
            if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;}
        
            $('video').width(scale * vid_w_orig);
            $('video').height(scale * vid_h_orig);

            $('.cover-video').scrollLeft(($('video').width() - $(window).width()) / 2);
            $('.cover-video').scrollTop(($('video').height() - $(window).height()) / 2);
        }
        
        /* fade out everything on url change */
        $('.logo a, .title h1 a, .title a, .thumb a, li a, h2 a, a.more-link, .meta a, .project-panel-link, #fullscreen-cover a, .fwt-link, .secondary a, .featured a').click(function (a) {
            
            /* no animation on ios devices */
            if($(this).attr('target') !== '_blank') {
                if(isMobile() !== true) {
					var delay;
					
					if ($(this).data('project-panel') === true) {
						$('.overlay').fadeOut('slow');
						$('#project-panel-header').slideUp(800, 'easeOutExpo', function () {
							$('header').css('position', 'fixed');
							$('.overlay').css('position', 'absolute');
							$('body').removeClass('project-panel-active');
						});
						delay = 800;
					} else {
						delay = 0;
					}
					var href = $(this).attr('href');
					
					var effect = 'slide-up';
					showNav(effect);
					if($('#fullscreen-menu').is(':visible')) {
						$('#fullscreen-menu').transition({ opacity: 0 }, 500, 'ease', function() {
							window.location = href;
						});
					} else {
						$('#content').transition({ opacity: 0 }, 700, 'ease', function() {
							window.location = href;
						});
					}
				
					return false;
                }
            }
        });

        /* show hidden element if user using the browser back button */
        window.onunload = function(){};
    });
})(jQuery); 