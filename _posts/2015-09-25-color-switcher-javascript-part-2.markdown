---
layout: post
title:  "JavaScript Color Switcher: Part 2"
date:   2015-09-25 15:00:00
categories: vanilla-javascript
---

Last week I wrote a blog article on [how to use persist a class change on the body tag using HTML5's .localStore property](/css3-animations/javascript/2015/09/21/html5-localStorage.html). It worked but but I wanted to write it in a way that allowed each function to handle each part of the color changing mechanism instead of explicitly writing out a function for a color change for each button that handled all the events. Here's how I refactored it.

##### Step 1
I stored the color switcher buttons in a variable and put it inside an event listener for the window load.

{% highlight ruby %}
window.addEventListener("load", function() {
	var colorSwitchBtns = document.querySelectorAll("ul#switcher > li");
});
{% endhighlight %}

##### Step 2
I needed to create a function that would run when one of the color switcher buttons are clicked. To do that I had to store a variable for the button that's clicked using .target and find out which id the button with the active class has. Then I used an if/else statement to test the conditions (which id the button had that was clicked) and then assign the corresponding class name to the body tag.

{% highlight ruby %}
window.addEventListener("load", function() {
	/* .. */
	function colorSwitch(e) {
		var clickedBtn = e.currentTarget;
		var activeBtn = clickedBtn.getAttribute("id");

		if (activeBtn === "pinkBtn") {
			colorTheme("pink");
			activeBtnColor("pink");
			localStorage.setItem("colorCode", "pink");
		} else if (activeBtn === "blueBtn") {
			colorTheme("blue");
			activeBtnColor("blue");
			localStorage.setItem("colorCode", "blue");
		} else if (activeBtn === "goldBtn") {
			colorTheme("gold");
			activeBtnColor("gold");
			localStorage.setItem("colorCode", "gold");
		}
	}
});
{% endhighlight %}

##### Step 3
Next I create another function that's single responsibility was to accept one argument (colorName). I stored a variable for the body tag within that scope and then referenced it and set the class name using the variable that was just created.

{% highlight ruby %}
window.addEventListener("load", function() {
	/* .. */
	function colorTheme(colorName) {
		var bodyReference = document.querySelector("body");
		bodyReference.setAttribute("class", colorName);
	}
});
{% endhighlight %}

##### Step 4

Next I needed to removed the active class from a previously loaded class if the color was switched and add the active class to the button that was clicked by comparing the activeColor and the id on the color switcher button.

{% highlight ruby %}
window.addEventListener("load", function() {
	/* .. */
	function activeBtnColor(activeColor) {
		for (var i = 0; i < colorSwitchBtns.length; i++) {
			colorSwitchBtns[i].classList.remove("active");
			var colorBtnId = colorSwitchBtns[i].getAttribute("id");
			if (activeColor === "pink" && colorBtnId === "pinkBtn") {
				colorSwitchBtns[i].classList.add("active");
			} else if (activeColor === "blue" && colorBtnId === "blueBtn") {
				colorSwitchBtns[i].classList.add("active");
			} else if (activeColor === "gold" && colorBtnId === "goldBtn") {
				colorSwitchBtns[i].classList.add("active");
			}
		}
	}
});
{% endhighlight %}

##### Step 5

I needed a way to check to see what the body tag's class is set to. First I retrieved the value set from the previous page load. If the no class was stored on the previous page load then there wasn't a reason so change anything so I included an if statement that stopped the function if that was the case. If a color was set them colorTheme was set to call the colorTheme and activeBtnColor.

{% highlight ruby %}
window.addEventListener("load", function() {
	/* .. */
	function setStyle() {
		var currentColor = localStorage.getItem("colorCode");
		if (currentColor === null) {
			return;
		}
		colorTheme(currentColor);
		activeBtnColor(currentColor);
	}
	setStyle();
});
{% endhighlight %}

##### Step 6

The for loop runs the colorSwitch function on the click event.

{% highlight ruby %}
window.addEventListener("load", function() {
	/* .. */
	for (i = 0; i < colorSwitchBtns.length; i++) {
		colorSwitchBtns[i].addEventListener("click", colorSwitch);
	}
});
{% endhighlight %}

And there we are. We have a nice reusable and more easily maintainable piece of code.
