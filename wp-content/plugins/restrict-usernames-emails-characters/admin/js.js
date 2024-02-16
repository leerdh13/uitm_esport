jQuery(document).ready( function() {
  jQuery('#submit-ftb1-BENrueeg_RUE_top,#submit-ftb0-BENrueeg_RUE,#submit-ftb2-BENrueeg_RUE,#submit-ftb3-BENrueeg_RUE').on('click',function()  { jQuery(this).val(BENrueeg_RUE_jsParams.wait_a_little); });
});

jQuery(document).ready( function() {
    setTimeout("jQuery('#message.updated').fadeOut('slow');", 2300);
    });

jQuery(document).ready(function() {
   jQuery('#form-BENrueeg_RUE_3,#form-BENrueeg_RUE_2').submit(function() { 
      jQuery(this).ajaxSubmit({
         success: function(){
            jQuery('#BENrueeg_RUE_saveResult').html("<div id='BENrueeg_RUE_saveMessage' class='BENrueeg_RUE_successModal'><p></p></div>");
            jQuery('#BENrueeg_RUE_saveMessage p').append(BENrueeg_RUE_jsParams.reset_succ).show();
			setTimeout("jQuery('#BENrueeg_RUE_saveMessage').fadeOut('slow');", 2300)
			setTimeout("location.reload(true);",2300);
         }
      }); 
      return false; 
   });
});

// remove all whiteSpace from texterea
jQuery(document).ready(function($) {
$('#form-BENrueeg_RUE_1').submit(function () {
/*	ex sans compréssion
// remv_lines3
var tex3 = $('#remv_lines3');
var row3s = tex3.val().split( "\n" );
console.log(row3s);
for ( var counter = 0; counter < row3s.length; counter++)
{
   row3s[ counter ] = row3s[ counter ].trim();
   if ( row3s[ counter ].length == 0 )
   {
      row3s.splice( counter, 1 );
	  counter--;
   }
}
tex3.val( row3s.join( "\n" ) )
// remv_lines3
*/

if (! BENrueeg_RUE_jsParams.is_mu) {
// remv_lines1
var tex1=$("#remv_lines1"),row1s=tex1.val().split("\n");console.log(row1s);for(var counter=0;counter<row1s.length;counter++)row1s[counter]=row1s[counter].trim(),0==row1s[counter].length&&(row1s.splice(counter,1),counter--);tex1.val(row1s.join("\n"));
}
// remv_lines2
var tex2=$("#remv_lines2"),row2s=tex2.val().split("\n");console.log(row2s);for(var counter=0;counter<row2s.length;counter++)row2s[counter]=row2s[counter].trim(),0==row2s[counter].length&&(row2s.splice(counter,1),counter--);tex2.val(row2s.join("\n"));
// remv_lines3
var tex3=$("#remv_lines3"),row3s=tex3.val().split("\n");console.log(row3s);for(var counter=0;counter<row3s.length;counter++)row3s[counter]=row3s[counter].trim(),0==row3s[counter].length&&(row3s.splice(counter,1),counter--);tex3.val(row3s.join("\n"));
// remv_lines4
var tex4=$("#remv_lines4"),row4s=tex4.val().split("\n");console.log(row4s);for(var counter=0;counter<row4s.length;counter++)row4s[counter]=row4s[counter].trim(),0==row4s[counter].length&&(row4s.splice(counter,1),counter--);tex4.val(row4s.join("\n"));
// remv_lines5
var tex5=$("#remv_lines5"),row5s=tex5.val().split("\n");console.log(row5s);for(var counter=0;counter<row5s.length;counter++)row5s[counter]=row5s[counter].trim(),0==row5s[counter].length&&(row5s.splice(counter,1),counter--);tex5.val(row5s.join("\n"));
// remv_lines6
var tex6=$("#remv_lines6"),row6s=tex6.val().split("\n");console.log(row6s);for(var counter=0;counter<row6s.length;counter++)row6s[counter]=row6s[counter].trim(),0==row6s[counter].length&&(row6s.splice(counter,1),counter--);tex6.val(row6s.join("\n"));
});
});
// remove all whiteSpace from texterea

/*
// remove all whiteSpace from texterea
function BENrueeg_RUE_remv_lines() { //^\s+|\n\s+$\n/gm
  if (! BENrueeg_RUE_jsParams.is_mu) {
  var line1 = document.getElementById("remv_lines1").value.replace(/^\s*\n/gm, '');
  document.getElementById("remv_lines1").value = line1;	
  }
  var line2 = document.getElementById("remv_lines2").value.replace(/^\s*\n/gm, '');
  document.getElementById("remv_lines2").value = line2;
  var line3 = document.getElementById("remv_lines3").value.replace(/^\s*\n/gm, '');
  document.getElementById("remv_lines3").value = line3;	
  var line4 = document.getElementById("remv_lines4").value.replace(/^\s*\n/gm, '');
  document.getElementById("remv_lines4").value = line4;	
  var line5 = document.getElementById("remv_lines5").value.replace(/^\s*\n/gm, '');
  document.getElementById("remv_lines5").value = line5;	
  var line6 = document.getElementById("remv_lines6").value.replace(/^\s*\n/gm, '');
  document.getElementById("remv_lines6").value = line6;	
}
// remove all whiteSpace from texterea
*/

jQuery(document).ready(function(){
var $divNTBvers = jQuery("#BENrueeg_RUE-mm411112-divtoBlink"); 
var backgroundInterval = setInterval(function(){
    $divNTBvers.toggleClass("BENrueeg_RUE-mm411112-backgroundRed");
 },1000)	
}); 

jQuery(document).ready(function() {
	
    jQuery("#BENrueeg_RUE_export__file-sub").click(function() {
var ext = jQuery('#BENrueeg_RUE_jsonfileToUpload').val().split('.').pop().toLowerCase();
//if($.inArray(ext, ['json','png','jpg','jpeg']) == -1) {
if(jQuery.inArray(ext, ['json']) == -1) {
    alert(BENrueeg_RUE_jsParams.msg_valid_json);
} else {
		
    jQuery(document).ajaxStart(function() {
    jQuery('#BENrueeg_RUE_export-loading-div-background').show();
    });
	jQuery(document).ajaxStop(function() {
    jQuery('#BENrueeg_RUE_export-loading-div-background').hide();
    });
}	
	});
            jQuery('#BENrueeg_RUE_export__file').ajaxForm(function() {
				
				 jQuery('#BENrueeg_RUE_export-loading-div-background').hide();
                 jQuery( ".BENrueeg_RUE_export__file" ).show(); 
				 jQuery('.BENrueeg_RUE_export__file').delay(3000).fadeOut('slow');
				 //window.location.replace(BENrueeg_RUE_jsParams.get_link);
				 setTimeout("location.reload(true);",3000);
                 //location.reload();
            }); 

}); 

// Display kayfiat-istiamal
jQuery(document).ready(function() {
    jQuery('#sub-BENrueeg_RUE-display-istiamal').click(function() {
    jQuery('#BENrueeg_RUE-display-istiamal').slideToggle("slow");
    });
});
// Display kayfiat-istiamal

// Change text alignment of textarea
jQuery(document).ready(function($){
	
if (! BENrueeg_RUE_jsParams.is_mu) {	
$('#b77t-ntbCat-disallow_spc_cars').toggle(function () {
	$('#remv_lines1').css({direction:"rtl",textAlign:"right"});
}, function () {
	$('#remv_lines1').css({direction:"ltr",textAlign:"left"});
});
}

$('#b77t-ntbCat-allow_spc_cars').toggle(function () {
	$('#remv_lines2').css({direction:"rtl",textAlign:"right"});
}, function () {
	$('#remv_lines2').css({direction:"ltr",textAlign:"left"});
});

  $('#b77t-ntbCat-names_limit').on('click', function(){
  $('#remv_lines4').toggleClass("b77tae_main");
  })
  
  $('#b77t-ntbCat-names_limit_partial').on('click', function(){
  $('#remv_lines5').toggleClass("b77tae_main");
  })

});
// Change text alignment of textarea
