function handleReplyButton(responseId) {
  const replyFormContainer = document.getElementById(`reply-form-container-${responseId}`);
  if (replyFormContainer) {
    replyFormContainer.className = 'reply-form-container enabled'

document.getElementById("reply-button").style.display = "none";
  }
}

function handleUpVote(responseId){
  score = document.getElementById(`upvotes-${responseId}`);
  var scoreValue = score.innerHTML;
  scoreValue++;
  score.innerHTML = scoreValue;

}

function handleDownVote(responseId){
  score = document.getElementById(`downvotes-${responseId}`)
  var scoreValue = score.innerHTML;
  scoreValue++;
  score.innerHTML = scoreValue;
}
function handleCancelReply(responseId) {
  const replyFormContainer = document.getElementById(`reply-form-container-${responseId}`);
  if (replyFormContainer) {
    console.log("here")
    replyFormContainer.className = 'reply-form-container'
    document.getElementById("reply-button").style.display = "block";
  }
}


$(document).ready(function(){
	var formInputs = $('input[type="username"],input[type="password"]');
	formInputs.focus(function() {
       $(this).parent().children('p.formLabel').addClass('formTop');
       $('div#formWrapper').addClass('darken-bg');
       $('div.logo').addClass('logo-active');
	});
	formInputs.focusout(function() {
		if ($.trim($(this).val()).length == 0){
		$(this).parent().children('p.formLabel').removeClass('formTop');
		}
		$('div#formWrapper').removeClass('darken-bg');
		$('div.logo').removeClass('logo-active');
	});
	$('p.formLabel').click(function(){
		 $(this).parent().children('.form-style').focus();
	});
});

$(document).ready(function(){
	var formInputs = $('input[type="username"],input[type="password"]');
	formInputs.focus(function() {
       $(this).parent().children('p.formLabel').addClass('formTop');
       $('div#formWrapper').addClass('darken-bg');
       $('div.logo').addClass('logo-active');
	});
	formInputs.focusout(function() {
		if ($.trim($(this).val()).length == 0){
		$(this).parent().children('p.formLabel').removeClass('formTop');
		}
		$('div#formWrapper').removeClass('darken-bg');
		$('div.logo').removeClass('logo-active');
	});
	$('p.formLabel').click(function(){
		 $(this).parent().children('.form-style').focus();
	});
});

$(document).ready(function(){
	var formInputs = $('input[type="email"],input[type="username"],input[type="password1"],input[type="password2"]');
	formInputs.focus(function() {
       $(this).parent().children('p.formLabel').addClass('formTop');
       $('div#formWrapper').addClass('darken-bg');
       $('div.logo').addClass('logo-active');
	});
	formInputs.focusout(function() {
		if ($.trim($(this).val()).length == 0){
		$(this).parent().children('p.formLabel').removeClass('formTop');
		}
		$('div#formWrapper').removeClass('darken-bg');
		$('div.logo').removeClass('logo-active');
	});
	$('p.formLabel').click(function(){
		 $(this).parent().children('.form-style').focus();
	});
});
