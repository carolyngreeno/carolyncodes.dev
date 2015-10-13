---
layout: post
title:  "Using JS and HTML5's localStorage to Persist Changes"
date:   2015-09-21 20:00:00
categories: css3-animations javascript
---

A few days ago I demoed a [color switcher](/vanilla-javascript/2015/09/18/javascript-color-switcher.html) that uses JavaScript to change the color of the body's background when the user clicks one of the color buttons. Suppose the user clicks the pink button to change the color of my theme to pink but when they navigate to another page, the color theme defaults back to gold (or whatever the default is set to). I want to give the user a consistent experience across the site so when they choose a color, I want them to keep seeing that color until they choose another one. 

Looking at the demo below, click a block to change the color and when you're still hovering in the embedded pen iframe, click rerun to the lower right. You'll see that the color is the same as the one you just chose.

<p data-height="200" data-theme-id="0" data-slug-hash="qOadrW" data-default-tab="result" data-user="carolynvelez" class='codepen'>See the Pen <a href='http://codepen.io/carolynvelez/pen/qOadrW/'>Color Switcher change persists</a> by Carolyn Velez (<a href='http://codepen.io/carolynvelez'>@carolynvelez</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

In order to do that, I decided to play with HTML5's localStorage property of the Storage object. I needed to create a function that would switch the colors by retrieving the value from the previous page load.

{% highlight ruby %}
function setStyle() {
	var currentColor = localStorage.getItem("colorCode");
}
{% endhighlight %}

Then I needed to check to see *if* a class had been set from a previous page load. As a best practice, we don't want to waste resources by changing a class that has not already been stored.

{% highlight ruby %}
function setStyle() {
	var currentColor = localStorage.getItem("colorCode");
	if (currentColor === null) {
		return;
	}
}
{% endhighlight %}

Following that, I created a conditional statement that would check to see what the previously stored class was and persist that class and then call the function.

{% highlight ruby %}
function setStyle() {
	var currentColor = localStorage.getItem("colorCode");
	if (currentColor === null) {
		return;
	}
	if (currentColor === "pink") {
		switchPink();
	} else if (currentColor === "gold") {
		switchGold();
	} else if (currentColor === "blue") {
		switchBlue();
	}
}
setStyle();
{% endhighlight %}

Then I needed to go back and revisit the three functions I created for the original color switcher. This is total newbie JS (baby steps) and not really the most elegant. In a few days I'll update the code by combining the functions. But for now, I stuck with adding grabbing the buttons, adding event listeners to them that called one of the functions.

{% highlight ruby %}
var colorPink = document.getElementById("pinkBtn");
var colorGold = document.getElementById("goldBtn");
var colorBlue = document.getElementById("blueBtn");

colorPink.addEventListener("click", switchPink);
colorGold.addEventListener("click", switchGold);
colorBlue.addEventListener("click", switchBlue);

function switchPink() {
	body.classList.add("pink");
	body.classList.remove("gold");
	body.classList.remove("blue");
}

function switchGold() {
	body.classList.add("gold");
	body.classList.remove("pink");
	body.classList.remove("blue");
}

function switchBlue() {
	body.classList.add("blue");
	body.classList.remove("pink");
	body.classList.remove("gold");
}
{% endhighlight %}

I needed to add a statement to each function that uses .setItem to set the correct class. I also added an active class to the color to the button that could be considered "active" and removed the "active" class from other buttons.

{% highlight ruby %}
function switchPink() {
    localStorage.setItem("colorCode", "pink");
	...
	colorPink.classList.add("active");
	colorGold.classList.remove("active");
	colorBlue.classList.remove("active");
}

function switchGold() {
    localStorage.setItem("colorCode", "gold");
	...
	colorPink.classList.remove("active");
	colorGold.classList.add("active");
	colorBlue.classList.remove("active");
}

function switchBlue() {
    localStorage.setItem("colorCode", "blue");
	...
	colorPink.classList.remove("active");
	colorGold.classList.remove("active");
	colorBlue.classList.add("active");
}
{% endhighlight %}

Done! Well for now anyway.

References:  
[MDN: Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage){:target="_blank"}  
[Dive Into HTML5](http://diveintohtml5.info/storage.html){:target="_blank"}  
