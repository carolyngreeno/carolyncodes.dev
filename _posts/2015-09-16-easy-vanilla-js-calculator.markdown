---
layout: post
title:  "Easy Vanilla Javascript Calculator"
date:   2015-09-16 15:00:00
categories: vanilla-javascript
---

A simple calculator that multiplies quantity times price and adds the total for two or more objects.

<p data-height="400" data-theme-id="0" data-slug-hash="meJmLo" data-default-tab="result" data-user="carolynvelez" class='codepen'>See the Pen <a href='http://codepen.io/carolynvelez/pen/meJmLo/'>Easy Vanilla Javascript Calculator</a> by Carolyn Velez (<a href='http://codepen.io/carolynvelez'>@carolynvelez</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Store a reference to item #1 in iOne by getting referencing the object's ID. Then store a reference to the price of the item iOnePrice. iOneSub represents the subtotal of the iOne multiplied by iOnePrice. The subtotal is set to start at 0. iOneSubField references the input field where the subtotal will be calculated.

Do the same for the second item then store a variable for the final total and set it to 0.

{% highlight ruby lineos %}
	var iOne = document.getElementById("itemOne");
	var iOnePrice = 60;
	window.iOneSub = 0;
	var iOneSubField = document.getElementById("itemOneSub");

	var iTwo = document.getElementById("itemTwo");
	var iTwoPrice = 25;
	window.iTwoSub = 0;
	var iTwoSubField = document.getElementById("itemTwoSub")

	var fTotal = 0;
	var fTotalField = document.getElementById("finalTotal");
});
{% endhighlight %}

Add event listeners to iOne and iTwo using "change" to trigger the callback function calcSubTotal. 

{% highlight ruby lineos %}
	iOne.addEventListener("change", function () {
		calcSubTotal(iOne, iOnePrice, "iOneSub", iOneSubField);
	});

	iTwo.addEventListener("change", function () {
		calcSubTotal(iTwo, iTwoPrice, "iTwoSub", iTwoSubField);
	});
});
{% endhighlight %}

Create functions that multiply the quanity of the item times the price, divides it by 100 and use .toFixed to place the decimal point at 2. Use the callback function calcTotal() to 

{% highlight ruby lineos %}
	function calcSubTotal(qField, iPrice, subName, subField) {
		window[subName] = qField.value * iPrice / 100;
		subField.innerHTML = window[subName].toFixed(2);
		subField.classList.add("active-prices");
		calcTotal();
	}
});
{% endhighlight %}

Finally, create a function to add the two subtotals and display them as the final total.

{% highlight ruby lineos %}
	function calcTotal() {
		fTotal = iOneSub + iTwoSub;
		fTotalField.innerHTML = fTotal.toFixed(2);
		fTotalField.classList.add("active-prices");
	}
});
{% endhighlight %}
