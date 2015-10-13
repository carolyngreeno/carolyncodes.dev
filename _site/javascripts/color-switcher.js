window.addEventListener("load", function() {

	// store variable for color switches
	var colorSwitchBtns = document.querySelectorAll("ul#switcher > li");

	// create function that will run on click event
	function colorSwitch(e) {

		// store variable for clicked button
		var clickedBtn = e.currentTarget;

		// find out what id the button with the active class has
		var activeBtn = clickedBtn.getAttribute("id");

		// use conditionals to find which button id has the active class
		// assign the corresponding class name to the body tag
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

	/* pure function (only does one thing with no side effects) -- SINGLE RESPONSIBILITY */

	// function that accepts a single argument (color that needs to be changed to)
	function colorTheme(colorName) {
		var bodyReference = document.querySelector("body");
		// store variable for body tag
		bodyReference.setAttribute("class", colorName);
	}

	function activeBtnColor(activeColor) {

		for (var i = 0; i < colorSwitchBtns.length; i++) {

			colorSwitchBtns[i].classList.remove("active");

			// get ID for button
			var colorBtnId = colorSwitchBtns[i].getAttribute("id");

			// compare activeColor and colorBtnID to see if they match
			if (activeColor === "pink" && colorBtnId === "pinkBtn") {
				colorSwitchBtns[i].classList.add("active");
			} else if (activeColor === "blue" && colorBtnId === "blueBtn") {
				colorSwitchBtns[i].classList.add("active");
			} else if (activeColor === "gold" && colorBtnId === "goldBtn") {
				colorSwitchBtns[i].classList.add("active");
			}
		}
	}

	// set local storage so color change persists
	function setStyle() {

		// retrieve value set from previous page load
		var currentColor = localStorage.getItem("colorCode");

		// check to see if class has been set from previous page load
		// there's no reason to change a class that has not been stored from previous page load
		if (currentColor === null) {
			return;
		}

		// calling colorTheme with color that was found as argument
		colorTheme(currentColor);
		activeBtnColor(currentColor);
	}

	setStyle();


	// run the function on click event
	for (i = 0; i < colorSwitchBtns.length; i++) {
		colorSwitchBtns[i].addEventListener("click", colorSwitch);
	}

});

