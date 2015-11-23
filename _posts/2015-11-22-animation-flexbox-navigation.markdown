---
layout: post
title:  "Minimal Navigation Solution with Flexbox and Animation"
date:   2015-11-22 16:00:00
categories: css
---

I was inspired to create a kind of minimalist navigation using CSS3's Flexbox and animation properties. As a designer I like the trend of using a very lean main navigation and directing users on how to find what they need in a more creative and perhaps intuitive way.

<p data-height="300" data-theme-id="0" data-slug-hash="gayzej" data-default-tab="result" data-user="carolynvelez" class='codepen'>See the Pen <a href='http://codepen.io/carolynvelez/pen/gayzej/'>Flexbox & Animation Fun: Navigation</a> by Carolyn Velez (<a href='http://codepen.io/carolynvelez'>@carolynvelez</a>) on <a href='http://codepen.io'>CodePen</a>.</p><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

##### Step 1
I'm still getting the hang of making the most out of Flexbox. Hopefully it won't be much longer until it becomes standard for browsers since it makes handling responsive layouts so much easier to handle. Fewer hacks and media queries are needed to make the layout changes needed.

I laid the nav out using a good old unordered list and giving that the "flex-container" class and giving the list-items the "flex-item" class. I also added span tags around the text because if I need to apply styles, then I only need I don't need a class since I'm targeting the span by nesting it inside the "flex-item" class.

{% highlight ruby %}
<ul class='flex-container'>
	<li class='flex-item'>
		<span>HTML</span>
	</li>
	<li class='flex-item'>
		<span>CSS</span>
	</li>
	<li class='flex-item'>
		<span>JS</span>
	</li>
</ul>
{% endhighlight %}

##### Step 2
One thing that's taken me a little getting used to with Flexbox is that I need to remember to declare more positioning properties in the parent element. The parent element will always need **flex: display;** and most things after that are optional. It just depends on what you're trying to do. In this case I want three columns (please note I'm using that term loosely) in a **row** and I want them positioned at the bottom (**flex-end**) of the parent container.

{% highlight ruby %}
.flex-container {
	display: flex;			/* declare the flexbox property as the display */
	flex-direction: row;		/* line up all items in within the container */
	align-items: flex-end;		/* line up all items at the bottom of the container */
	..
}
{% endhighlight %}

##### Step 3
The columns are going to be children of the parent flexbox container but they are also going to be parent containers to the text so I'm going to assign the **display: flex;** again. Now I didn't actually need to declare any CSS for the span elements containing my text because all the positioning was taken care of the parent element. Cool huh?

{% highlight ruby %}
.flex-item {
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;		/* align the child elements to the right */
	..
}
{% endhighlight %}

##### Step 4
I wanted to add an animation to the columns to make them a little more interesting. Instead of just expanding to 100% to fill the vertical space, I used **@keyframes** to vary the way it expanded a bit.

{% highlight ruby %}
.slidein {
	animation-name: slidein;
	animation-duration: 700ms;
}

@keyframes slidein {
	10%  { height: 80%; }
	25%  { height: 50%; }
	40%  { height: 90%; }
	55%  { height: 80%; }
	100% { height: 100%; }
}
{% endhighlight %}

##### Step 5
The animation applies to hover and focus since I want it to work on mobile devices as well as desktops. I also wanted to add a transition to mouseout but but not the same one. It felt like too much. So intead added the following property to the *.flex-item* class. By using **all** for the property I wanted to transform, it applied to everything that changed between **.flex-item** and **.flex-item:hover, .flex-item:focus**.

{% highlight ruby %}
	transition: all 300ms;
{% endhighlight %}

I hope you find this entertaining or helpful or both.

References:  
[MDN: Using CSS3 Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations){:target="_blank"}  
[Understanding CSS3 Flexbox for Responsive Design](http://marketblog.envato.com/learn-something-new/css3-flexbox/){:target="_blank"}  
