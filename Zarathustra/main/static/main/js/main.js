function handleReplyButton(responseId) {
  const replyFormContainer = document.getElementById(`reply-form-container-${responseId}`);
  if (replyFormContainer) {
    replyFormContainer.className = 'reply-form-container enabled'

document.getElementById("reply-button").style.display = "none";
  }
}


function handleCancelReply(responseId) {
  const replyFormContainer = document.getElementById(`reply-form-container-${responseId}`);
  if (replyFormContainer) {
    console.log("here")
    replyFormContainer.className = 'reply-form-container'
    document.getElementById("reply-button").style.display = "block";
  }
}

