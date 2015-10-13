---
layout: post
title:  "JavaScript Color Switcher: Part 1"
date:   2015-09-18 15:00:00
categories: vanilla-javascript
---

A simple color switcher with basic vanilla JavaScript.

<p data-height="250" data-theme-id="0" data-slug-hash="QjNQYP" data-default-tab="result" data-user="carolynvelez" class='codepen'>See the Pen <a href='http://codepen.io/carolynvelez/pen/QjNQYP/'>Color Switcher</a> by Carolyn Velez (<a href='http://codepen.io/carolynvelez'>@carolynvelez</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Grab the element (in this case the body) that will change color when element with switch function is clicked. You could also use the .getElementsByTagName method and do away with using the ID.
{% highlight ruby lineos %}
var colorBlock = document.getElementById("colorBg");
{% endhighlight %}

Grab the elements that when clicked with will change the color of the background.
{% highlight ruby lineos %}
var colorPink = document.getElementById("pinkBtn");
var colorGold = document.getElementById("goldBtn");
var colorBlue = document.getElementById("blueBtn");
{% endhighlight %}

Add event listeners to variables.
{% highlight ruby lineos %}
colorPink.onclick = switchPink;
colorGold.onclick = switchGold;
colorBlue.onclick = switchBlue;
{% endhighlight %}

Create switch functions to remove the class you want and remove any previously added classes.
{% highlight ruby lineos %}
function switchPink() {
	colorBlock.classList.add("pink-bg");
	colorBlock.classList.remove("gold-bg");
	colorBlock.classList.remove("blue-bg");
}

function switchGold() {
	colorBlock.classList.add("gold-bg");
	colorBlock.classList.remove("pink-bg");
	colorBlock.classList.remove("blue-bg");
}

function switchBlue() {
	colorBlock.classList.add("blue-bg");
	colorBlock.classList.remove("pink-bg");
	colorBlock.classList.remove("gold-bg");
}
{% endhighlight %}

**Check out the embedded pen for the markup and CSS.**