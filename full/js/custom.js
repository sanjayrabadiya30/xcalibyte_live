/*
Script to be called on document ready
*/

$(document).ready(function(){
	$('.back-page a').click(function(){
		parent.history.back();
		return false;
	});
	$(".dropdown-menu  a").click(function(){
        $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
        $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
        $(this).parents(".dropdown").find('.dropdown-toggle').val($(this).data('value'));
        var abc = $(this).data('value');
        if(abc == 1){
          $(".select-input-data").removeClass("value2");
          $(".select-input-data").removeClass("value3");
          $(".multiple-dropdown").addClass("upload-zip-file-only");
          $(".git-input").addClass("dispay-none");
          
        }else if(abc == 2){
          $(".select-input-data").removeClass("value1");
          $(".select-input-data").removeClass("value3");
          $(".multiple-dropdown").removeClass("upload-zip-file-only");
          $(".git-input").removeClass("dispay-none");

          
        }else if(abc == 3){
          $(".select-input-data").removeClass("value1");
          $(".select-input-data").removeClass("value2"); 
          $(".multiple-dropdown").removeClass("upload-zip-file-only"); 
          $(".git-input").removeClass("dispay-none");  
        }        
        $(".select-input-data").addClass("value"+abc);         
        $(".new-peoject-dropdown a").on("click", function(){
        	$(".new-peoject-dropdown a").removeClass("active");
        	$(this).addClass("active");
        });

    }); 
    $(".scan-results-xcalibyte-dropdown .dropdown-menu").mCustomScrollbar({
	    theme:"dark-3",	   	    
	});
    $(".scan-results-xcalibyte-dropdown .dropdown-item").click(function(){
		$(this).parents(".dropdown").find('button').val($(this).data('value'));
	});
});
$(document).ready(function() {
    /* field activation and button display in profile page	*/
	$(".dropdown-menu a").click(function(){
	    var selText = $(this).text();
	    $(this).parents('.dropdown').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
	$(".left-menu-icon").click(function(){
	    $(".main-section").toggleClass("large-main-section");
	    $(".sidebar").toggleClass("small-sidebar");
	    $(".sidebar-data").toggleClass("large-sidebar-data");  
	});
});
$(document).ready(function(e) {
    /* field activation and button display in profile page	*/
	
	$(".action-link").click(function(){
		
		$(this).prev(".input-group").children(".input-field").prop("disabled", false);
		$(this).parent(".wrap-div").removeClass("disable-group");
		//$(this).next(".action-button").slideDown("slow");
	});
	
	$(window).click(function() {
			//alert('teat');
		$(".wrap-div").addClass("disable-group");
		$(".disable-group .input-field").attr("disabled", "disabled");
	});
	
	$('.disable-group .input-field,.action-link').click(function(event){
		event.stopPropagation();
	});
	
	
	/* Password field toggle*/
	$(".toggle-password").click(function() {
	  
	  var input = $("input[id='password']");
	  //alert(input);
	  if (input.attr("type") == "password") {
		input.attr("type", "text");
	  } else {
		input.attr("type", "password");
	  }
	});
	
	
	/*Script for custom input file*/
	document.querySelector("html").classList.add('js');
	
	var fileInput  = document.querySelector( ".input-file" ),  
		button     = document.querySelector( ".input-file-trigger" ),
		the_return = document.querySelector(".file-return");
		 
		 if(button){ 
	button.addEventListener( "keydown", function( event ) {  
		if ( event.keyCode == 13 || event.keyCode == 32 ) {  
			fileInput.focus();  
		 
	}
	});
	} 
	if(button){ 
	button.addEventListener( "click", function( event ) {
	   fileInput.focus();
	   return false;
	});  
	}
	/*if(fileInput){ 
	
	jQuery(".input-file").change(function () {
		the_return.innerHTML = this.files[0]['name'];  
	})
	}*/
	
	/*Script to add class in mac*/
	if(navigator.userAgent.indexOf('Mac') > 0)
	$('body').addClass('mac-os');
	if(navigator.userAgent.indexOf('Safari') > 0)
	$('body').addClass('safari');
	if(navigator.userAgent.indexOf('Chrome') > 0)
	$('body').addClass('chrome');
});


