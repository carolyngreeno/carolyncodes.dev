---
layout: post
title:  "Simple Vanilla Javascript Tabs"
date:   2015-09-15 17:15:00
categories: vanilla-javascript
---

Tabbed content sections with plain Javascript.

<p data-height="300" data-theme-id="0" data-slug-hash="MawmVb" data-default-tab="result" data-user="carolynvelez" class="codepen">See the Pen <a href="http://codepen.io/carolynvelez/pen/MawmVb/">Simple Vanilla Javascript Tabs</a> by Carolyn Velez (<a href="http://codepen.io/carolynvelez">@carolynvelez</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

#### Setting up the tabs

When the user clicks on a tab, we want to remove the "active" class from all the tabs and add it to the one that has just been clicked.

Each list item that represents a tab has the class .nav-tabs. Use *.querySelectorAll* to get all the elements on the page with that class name and store them as a variable.

Write a function that will handle what happens when the user clicks on a tab and create an argument for the event. Inside the function, use a *for loop* to iterate through each of the tabs created in the myTabs array and remove the "active" class.

Store a variable inside the function for adding the "active" class to the tab that's just been clicked. Create a variable to store the tab click event. Get the target of the clicked tab is the href, so we use *.currentTarget* to get the list item that contains then href. Then we add the active class using *classList.add*.

Let's also add *.preventDefault()* to keep from reloading the page.

{% highlight ruby lineos %}
var myTabs = document.querySelectorAll("ul.nav-tabs > li");

function myTabClicks(tabClickEvent) {
	for (var i = 0; i < myTabs.length; i++) {
		myTabs[i].classList.remove("active");
	}

	var clickedTab = tabClickEvent.currentTarget; 

	clickedTab.classList.add("active");
	tabClickEvent.preventDefault();
}
{% endhighlight %}

#### Setting up the content panes

**When the user clicks on a tab, we want to hide the currently active pane and make the content pane that currently corresponds to the clicked tab visible.**

First we want to store all the items with the class "tab-pane" in a variable. Then use another *for loop* to iterate through the array of myContentPanes like we did with myTabs to remove the active class from all them. Reference the tabClickEvent target and use that to grab the href. Use that to reference the pane you want to be visible and add the "active" class.

{% highlight ruby lineos %}
	var myContentPanes = document.querySelectorAll(".tab-pane");

	for (i = 0; i < myContentPanes.length; i++) {
		myContentPanes[i].classList.remove("active");
	}

	var anchorReference = tabClickEvent.target;
	var activePaneId = anchorReference.getAttribute("href");
	var activePane = document.querySelector(activePaneId);

	activePane.classList.add("active");
}
{% endhighlight %}
