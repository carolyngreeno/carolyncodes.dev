---
layout: post
title:  "DOM Drill #1 with Vanilla JS"
date:   2015-09-17 19:18:49
categories: vanilla-javascript
---

A version of the To-Do List exercise that focuses on making changes in the DOM using event handlers and functions.

<p data-height="350" data-theme-id="0" data-slug-hash="gapWBN" data-default-tab="result" data-user="carolynvelez" class='codepen'>See the Pen <a href='http://codepen.io/carolynvelez/pen/gapWBN/'>Vanilla Javascript DOM Drill</a> by Carolyn Velez (<a href='http://codepen.io/carolynvelez'>@carolynvelez</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Store buttons with classes .confirm-delete-button and .cancel-delete-button in variables.

{% highlight ruby lineos %}
var btnsToHide = document.querySelectorAll(".confirm-delete-button, .cancel-delete-button");
{% endhighlight %}

Hide .confirm-delete-button and .cancel-delete-button buttons on page load.

{% highlight ruby lineos %}
for (var i = 0; i < btnsToHide.length; i++) {
	btnsToHide[i].style.visibility = "hidden";
}
{% endhighlight %}

Use .querySelectorall to grab all the delete buttons. Iterate through the array of delete buttons and set an event listener for when the user clicks one of the delete buttons.

{% highlight ruby lineos %}
var dltBtn = document.querySelectorAll(".delete-button");
for (var i = 0; i < dltBtn.length; i++) {
	dltBtn[i].addEventListener("click", handleDeleteClick);
}
{% endhighlight %}

### Delete Button

Create a function handles what happens when the delete button is clicked. When the Delete button is clicked, the it should be hidden and the Confirm and Cancel should become visible. I have several sets of the same buttons on the page so I used .target.parentNode to grabe the parent element of the delete button. Then I created a variable that points to the children of the parent item so that when event takes place, it only affects the buttons (children) of the parent (the containing div).

{% highlight ruby lineos %}
function handleDeleteClick(dltBtnEvent) {
	dltBtnEvent.target.style.visibility = "hidden";

	var btnParent = dltBtnEvent.target.parentNode;
	var btnChildren = btnParent.children;

	for (var i = 0; i < btnChildren.length; i++) {
		if (btnChildren[i].classList.contains("confirm-delete-button") || 
			btnChildren[i].classList.contains("cancel-delete-button")) {

			btnChildren[i].style.visibility = "visible";
		}
	}
}
{% endhighlight %}

### Cancel Button

When we hit the Cancel button, we want the Cancel and Confirm buttons to disappear and for the Delete button to be visible again. This is basically a repeat of the code for handling the Delete button except that on the click, we're adding .visibility = hidden to the Confirm and Cancel buttons and adding .visibility = visible to the Delete button. Again we're using the .target.parentNode and .target properties to make sure we're only making hiding and showing elements in the row where the event is being initiated.

Add .preventDefault() to the callback function to prevent the form from being submitted.

{% highlight ruby lineos %}
var cnclBtn = document.querySelectorAll(".cancel-delete-button");
for (var i = 0; i < cnclBtn.length; i++) {
	cnclBtn[i].addEventListener("click", handleCancelClick);
}

function handleCancelClick(cnlBtnEvent) {
	cnlBtnEvent.target.style.visibility = "hidden";

	var btnParent = cnlBtnEvent.target.parentNode;
	var btnChildren = btnParent.children;

	for (var i = 0; i < btnChildren.length; i++) {

		if (btnChildren[i].classList.contains("confirm-delete-button")) {
			btnChildren[i].style.visibility = "hidden";
		}

		if (btnChildren[i].classList.contains("delete-button")) {
			btnChildren[i].style.visibility = "visible";
		}
	}

	cnlBtnEvent.preventDefault();
}
{% endhighlight %}
	
### Confirm Button

When the Confirm button is clicked, all the buttons should disappear and text should be adding confirming that the item has been deleted.

This again is similar to the code we've already written except we're using .innerHTML to add text telling the user that the item has been deleted and we're adding .visibility = hidden to all the buttons.

{% highlight ruby lineos %}
var cnfmBtn = document.querySelectorAll(".confirm-delete-button");
for (var i = 0; i < cnfmBtn.length; i++) {
	cnfmBtn[i].addEventListener("click", handleConfirmClick);
}

function handleConfirmClick(cnfmBtnEvent) {
	cnfmBtnEvent.target.style.visibility = "hidden";

	var btnParent = cnfmBtnEvent.target.parentNode;
	var btnChildren = btnParent.children;

	for (var i = 0; i < btnChildren.length; i++) {

		if (btnChildren[i].classList.contains("delete-button")) {
			btnChildren[i].style.visibility = "hidden";
		}

		if (btnChildren[i].classList.contains("cancel-delete-button")) {
			btnChildren[i].style.visibility = "hidden";
		}
	}

	btnParent.innerHTML = "This item has been deleted.";
	cnfmBtnEvent.preventDefault();
}
{% endhighlight %}

### Validate Each Form Element On Blur

Here we're using *blur* to let the user know when the leave a field if that field was required. Do do that, we add an event listener that adds the class "required" when the users leave a field and it's empty. We also need to add one that removes that class if the user puts their cursor back in that field.

{% highlight ruby lineos %}
var allTextInputs = document.querySelectorAll(".text-input");
for (var i = 0; i < allTextInputs.length; i++) {
	allTextInputs[i].addEventListener("blur", valTextInputs);
	allTextInputs[i].addEventListener("focus", valRemoveInv);
}

function valTextInputs(validEvt) {
	// checking a target property of the event object
	if (validEvt.target.value === "") {
		validEvt.target.classList.add("required");
	}
}

function valRemoveInv(validEvt) {
	validEvt.target.classList.remove("required");
}
{% endhighlight %}

### Validate Form On Submit

Finally, we also want to validate the form when the user hits the Submit button. So we set up a function that iterates through each field in the form when Submit is clicked and adds the "required" if it finds a field with and empty *value*. Again, we're using *.preventDefault* to prevent the form from being submitted if it doesn't pass validation.

{% highlight ruby lineos %}
var submitEvt = document.getElementById("checklist");
submitEvt.addEventListener("submit", handleSubmitClick); 

function handleSubmitClick(validEvt) {
	var inputValid = true;

	for (var i = 0; i < allTextInputs.length; i++) {
		if (allTextInputs[i].value === "") {
			allTextInputs[i].classList.add("required");
			inputValid = false;
			validEvt.preventDefault();
		} else {
			allTextInputs[i].classList.remove("required");
			inputValid = true;
		}
	}
}
{% endhighlight %}
