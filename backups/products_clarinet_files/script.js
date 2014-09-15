/* -----------------------------------------------  
  Responsive Menu
------------------------------------------------ */

$(function() {
   /* Get the window's width, and check whether it is narrower than 480 pixels */
   var windowWidth = $(window).width();
   if (windowWidth <= 480) {

      /* Clone our navigation */
      var mainNavigation = $('nav.main-navigation').clone();

      /* Replace unordered list with a "select" element to be populated with options, and create a variable to select our new empty option menu */
      $('nav.main-navigation').html('<select class="menu"></select>');
      var selectMenu = $('select.menu');

      /* Navigate our nav clone for information needed to populate options */
      $(mainNavigation).children('ul').children('li').each(function() {

         /* Get top-level link and text */
         var href = $(this).children('a').attr('href');
         var text = $(this).children('a').text();

         /* Append this option to our "select" */
         $(selectMenu).append('<option value="'+href+'">'+text+'</option>');

         /* Check for "children" and navigate for more options if they exist */
         if ($(this).children('ul').length > 0) {
            $(this).children('ul').children('li').each(function() {

               /* Get child-level link and text */
               var href2 = $(this).children('a').attr('href');
               var text2 = $(this).children('a').text();

               /* Append this option to our "select" */
               $(selectMenu).append('<option value="'+href2+'">--- '+text2+'</option>');
            });
         }
      });
   }

   /* When our select menu is changed, change the window location to match the value of the selected option. */
   $(selectMenu).change(function() {
      location = this.options[this.selectedIndex].value;
   });
});

/* TWITTER CODE */

    $(document).ready(function(){
        $(".twitter-feed").tweet({
            username: "sbwadvertising",
            join_text: "sbwadvertising",
			intro_text: "sbwadvertising",
            avatar_size: null,
            count: 1,
            loading_text: "loading tweets...",
			template: "{text}<br>{time}"
        });
    });
		
/* END */


/* FORM SLIDER CODE */

$('#button').toggle(function() {

$('#slider').animate({
	left: '+=330'
	}, 458, 'swing', function() {

	// Animation complete. CALLBACK?

});

}, function() {

$('#slider').animate({
	left: '-=330'
	}, 458, 'swing', function() {

	// Animation complete. CALLBACK?

});

});

/* END */

/* IMAGE REVEAL CODE */

$(document).ready(function() {
		
			
//image Vertical scrolling
$('.boxgrid.slideright').hover(function(){
	$(".cover", this).stop().animate({top:'-300px'},{queue:false,duration:300});
}, function() {
	$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:300});
});
	
	
});

/* END */

$(document).ready(function () {
	$("ul.recent-work li#recent1 a").hover(
	function () {
	$("ul.recent-work li#recent2 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent3 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent4 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent5 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent6 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent7 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent8 a").stop().animate({ "opacity": "0.2" }, "slow");
	},
	function () {
	$("ul.recent-work li#recent2 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent3 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent4 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent5 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent6 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent7 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent8 a").stop().animate({ "opacity": "1" }, "slow");
   });
	
	$("ul.recent-work li#recent2 a").hover(
	function () {
	$("ul.recent-work li#recent1 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent3 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent4 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent5 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent6 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent7 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent8 a").stop().animate({ "opacity": "0.2" }, "slow");
	},
	function () {
	$("ul.recent-work li#recent1 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent3 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent4 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent5 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent6 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent7 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent8 a").stop().animate({ "opacity": "1" }, "slow");
   });	
	
	$("ul.recent-work li#recent3 a").hover(
	function () {
	$("ul.recent-work li#recent1 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent2 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent4 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent5 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent6 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent7 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent8 a").stop().animate({ "opacity": "0.2" }, "slow");
	},
	function () {
	$("ul.recent-work li#recent1 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent2 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent4 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent5 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent6 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent7 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent8 a").stop().animate({ "opacity": "1" }, "slow");
   });	
	
	$("ul.recent-work li#recent4 a").hover(
	function () {
	$("ul.recent-work li#recent1 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent2 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent3 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent5 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent6 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent7 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent8 a").stop().animate({ "opacity": "0.2" }, "slow");
	},
	function () {
	$("ul.recent-work li#recent1 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent2 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent3 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent5 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent6 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent7 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent8 a").stop().animate({ "opacity": "1" }, "slow");
   });

$("ul.recent-work li#recent5 a").hover(
	function () {
	$("ul.recent-work li#recent1 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent2 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent3 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent4 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent6 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent7 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent8 a").stop().animate({ "opacity": "0.2" }, "slow");
	},
	function () {
	$("ul.recent-work li#recent1 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent2 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent3 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent4 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent6 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent7 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent8 a").stop().animate({ "opacity": "1" }, "slow");
   });

$("ul.recent-work li#recent6 a").hover(
	function () {
	$("ul.recent-work li#recent1 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent2 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent3 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent4 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent5 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent7 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent8 a").stop().animate({ "opacity": "0.2" }, "slow");
	},
	function () {
	$("ul.recent-work li#recent1 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent2 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent3 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent4 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent5 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent7 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent8 a").stop().animate({ "opacity": "1" }, "slow");
   });

$("ul.recent-work li#recent7 a").hover(
	function () {
	$("ul.recent-work li#recent1 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent2 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent3 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent4 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent5 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent6 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent8 a").stop().animate({ "opacity": "0.2" }, "slow");
	},
	function () {
	$("ul.recent-work li#recent1 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent2 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent3 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent4 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent5 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent6 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent8 a").stop().animate({ "opacity": "1" }, "slow");
   });

$("ul.recent-work li#recent8 a").hover(
	function () {
	$("ul.recent-work li#recent1 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent2 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent3 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent4 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent5 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent6 a").stop().animate({ "opacity": "0.2" }, "slow");
	$("ul.recent-work li#recent7 a").stop().animate({ "opacity": "0.2" }, "slow");
	},
	function () {
	$("ul.recent-work li#recent1 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent2 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent3 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent4 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent5 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent6 a").stop().animate({ "opacity": "1" }, "slow");
	$("ul.recent-work li#recent7 a").stop().animate({ "opacity": "1" }, "slow");
   });
});


/*** DROP down ***/

$('nav ul li').hover(
function (e) { $
(this).children('ul').fadeIn(250); },
function (e) { $(this).children('ul').fadeOut(75); });

/*** END ***/



// Slide show script

//////////////////////////////////////////////////////////////
// Set Variables
/////////////////////////////////////////////////////////////

var transitionSpeed = 500;
var scrollSpeed = 500;
var fadeDelay = 100;
var currentProject = "";
var nextProject = "";

//////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////

function getProject(project) {
	
	return jQuery("#project-"+project);
}

function getProjectLink(project) {
	return jQuery("#thumb-"+project+" a");
}

function showProject(project, animate) {
	if (jQuery("#projectThumbs a.selected").attr("href")) {
		currentProject = getProject(jQuery("#projectThumbs a.selected").attr("href").replace("\#",""));		
	}	
	
	nextProject = getProject(project);	

	if (!getProjectLink(project).hasClass("selected")) {
				
		// Fade out the current project
		if (currentProject) {currentProject.fadeOut(transitionSpeed);}
		
		// Fade in the next project
		nextProject.delay(fadeDelay).fadeIn(transitionSpeed);
		
		// Add the selected class to the thumbnail
		jQuery("#projectThumbs a.selected").removeClass("selected");
		getProjectLink(project).addClass("selected");
		
		// Adjust the height of project container
		jQuery("#staff").animate({
			height: nextProject.outerHeight()
		}, scrollSpeed );				
	}
	
	// Scroll to the top of the projects
	jQuery.scrollTo("#staff", scrollSpeed, { offset:-25 });
}

function hideProject() {
	currentProject = getProject(jQuery("#projectThumbs a.selected").attr("href").replace("\#",""));		
	
	// Fade out the current project
	currentProject.fadeOut(transitionSpeed);
	
	// Remove the selected class from thumbnail
	jQuery("#projectThumbs a.selected").removeClass("selected");
	
	// Close the project container
	jQuery("#staff").delay(fadeDelay).animate({
		height: 0
	}, transitionSpeed );	
}

function createProjectSlider() {
	jQuery("#projectThumbs a").each(function(){
		var project = jQuery(this).attr("href").replace("\#","");		
		jQuery(".slideshow", getProject(project)).easySlider({
			speed: transitionSpeed,
			project: project,
			continuous: true,
			numeric: true,
			controlsBefore: '<div class="slideshowControls clearfix">',
			controlsAfter: '</div>'				
		});
	});
}

function createCloseProjectButton() {	
	jQuery(".closeBtn").click(function() {
		hideProject();
	});
}


//////////////////////////////////////////////////////////////
// Initialize
/////////////////////////////////////////////////////////////


jQuery(document).ready(function(){	
	
	// Rename project ids
	jQuery(".projectDetails").each(function(){
		jQuery(this).attr("id","project-"+jQuery(this).attr("id"));
	});

	// Add click events to project thumbnails
	jQuery("#projectThumbs a").click(function() {
		//alert(jQuery(this).attr("href").replace("\#",""));
		showProject(jQuery(this).attr("href").replace("\#",""));
	});
	
	// Call inititial functions
	createCloseProjectButton();	
	createProjectSlider();

	// Show project is there is a hash in the URL
	var project = location.hash.replace("\#","");
	if (getProject(project).length) {
		showProject(project, true);
	}
});