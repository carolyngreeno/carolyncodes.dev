---
layout: post
title:  "DOM Play: Tracking User Data"
date:   2015-10-17 15:00:00
categories: javascript
thumbnail: /assets/posts/2015-10-17.jpg
---

*I've been practicing making all the things happen in the browser with the Javascripts so a friend gave me this exercise to help me practice.*

<ul class="analytics-nav u-cf">
	<li><a href="#" target="_blank">link 1</a></li>
	<li><a href="#" target="_blank">link 2</a></li>
	<li><a href="#" target="_blank">link 3</a></li>
</ul>

##### Step 1
He gave me a function that's meant to be a super simple example of a data tracker like Google Analytics with instructions to create a navigation and figure out how to track which links the user clicked.

{% highlight ruby %}
function trackEvent(data) {
	alert('You clicked ' + data);
}
{% endhighlight %}

##### Step 2
Here I stored a variable for the nav links and add a for loop to iterate through the nav items and add an eventListener to each one.

{% highlight ruby %}
function trackEvent(data) { .. }

window.addEventListener("load", function() {
	var navLinks = document.querySelectorAll('ul.analytics-nav > li > a');
	for (var i = 0; i < navLinks.length; i++) {
		navLinks[i].addEventListener('click', handleNavClick);
	}
}
{% endhighlight %}

##### Step 3
I defined a function that would handle the behavior in the browser when the user clicked on link. I name the function handleNavClick and gave it an argument of 'e' for event.

{% highlight ruby %}
function trackEvent(data) { .. }

window.addEventListener("load", function() {
	..
	..
	function handleNavClick(e) {

	}
}
{% endhighlight %}

##### Step 4
Next I stored a variable for event target and created another variable to store the innerHTML of the target since I want to get the link text to tell me which link the user clicked.

{% highlight ruby %}
function trackEvent(data) { .. }

window.addEventListener("load", function() {
	..
	..
	function handleNavClick(e) {
		var eventTarget = e.target;
		var linkText = eventTarget.innerHTML;
	}
}
{% endhighlight %}

##### Step 5
Finally I called the trackEvent that MSJNP* gave me. I gave it linkText as an argument, added e.preventDefault(). Now when you click on a link, you'll see an alert with a message about which link it was.

{% highlight ruby %}
function trackEvent(data) { .. }

window.addEventListener("load", function() {
	..
	..
	function handleNavClick(e) {
		..
		..
		trackEvent(linkText);
		e.preventDefault();
	}
}
{% endhighlight %}

Now I'm going to think of other fun things I can do with the basic idea of using eventListeners and functions to make more magic happen. I'll see how much trouble I can get into and report back.

References:  
*Mr. Super JavaScript Ninja Warrior Person

<script>
	function trackEvent(data) {
		alert('You clicked ' + data);
	}

	window.addEventListener("load", function() {
		var navLinks = document.querySelectorAll('ul.analytics-nav > li > a');
		for (var i = 0; i < navLinks.length; i++) {
			navLinks[i].addEventListener('click', handleNavClick);
		}

		function handleNavClick(e) {
			var eventTarget = e.target;
			var linkText = eventTarget.innerHTML;
			trackEvent(linkText);
			e.preventDefault();
		}
	});
</script>

<style type="text/css">
	.analytics-nav {
		width: 100%;
		margin: 1rem 0;
		list-style-type: none;
	}
	.analytics-nav li {
		float: left;
		width: 33.33%;
		margin: 0 0 2rem;
		padding: 0;
		text-align: center;
	}
	.analytics-nav li:first-child, 
	.analytics-nav li:last-child {
		margin: 0;
	}
	.analytics-nav li a {
		display: block;
		font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		font-size: 12px;
		color: #fff;
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: .1em;
		line-height: 3rem;
		border: solid 2px #fcaf35;
		background-color: #ff5776;
	}
	.analytics-nav li a:hover {
		color: #fff;
		border: solid 2px #ff5776;
		background-color: #fcaf35;
	}
</style>
