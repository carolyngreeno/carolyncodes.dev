---
layout: post
title:  "Super Sassy Keyframes"
date:   2015-09-19 15:00:00
categories: css3-animations
---

This is a super sassy first attempt at working with CSS3 animations. I wanted to get an idea of how to work with the keyframes especially so I created this basic implementation.

<p data-height="400" data-theme-id="0" data-slug-hash="epzNzx" data-default-tab="result" data-user="carolynvelez" class='codepen'>See the Pen <a href='http://codepen.io/carolynvelez/pen/epzNzx/'>Sassy Keyframes</a> by Carolyn Velez (<a href='http://codepen.io/carolynvelez'>@carolynvelez</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Started with the markup, I created a container with overflow: hidden so I could give the blocks a negative margin and they would appear to move into the viewable area from off the screen.

{% highlight ruby %}
<div class="container-box">
	<span class="block one--one icons"></span>
	<span class="block one--two"></span>
	<span class="block one--three"></span>
</div>
{% endhighlight %}

I wanted to move each block in the brain icon independently so I assigned a separate class for each block. Here's an example of the keyframe declaration for the first block. I simply wanted the block to start at one point (0%) and end at another (100%).

{% highlight ruby %}
@keyframes animOneOne {
	0%    { top: -50px; left: 100px; }
	100%  { top: 100px; left: 100px; }
}
{% endhighlight %}

I had to search a little to figure out how to get the block to stay in the same place that the animation ended. The default is for the positioning to reset to the blocks original location. The answer was to use the [animation-fill-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode){:target="_blank"} property and give it "forwards" value. That allows it to retain the positioning the animation ended on.

{% highlight ruby %}
.one {
	&--one {
		animation: animOneOne 1s 1 forwards;
	}
{% endhighlight %}

Then I used that animation in my class for "block one--one". I only want the animation to run once so in the shortcut I included "1" to indicate that I only wanted one iteration and I used 1s as the length of time the animation would run.

{% highlight ruby %}
.one {
	&--one {
		animation: animOneOne 1s 1 forwards;
		animation-delay: .5s;
		animation-timing-function: ease-out;
		top: -50px;
		left: 100px;
		background: $color-slate;
	}
{% endhighlight %}

That's basically it. There's lots of CSS because I did the same thing over and over for each one. I'm thinking there's probably a better way to do that by utilizing Sass functions or something. I'll save that one for another day.

**And hey, don't forget your -webkit- prefixes! You need them for Safari (so of course iOS). And keep in mind that animations are not supported for IE9 down. I make these mistakes so you don't have to.**

References:  
[CSS Tricks](https://css-tricks.com/snippets/css/keyframe-animation-syntax/){:target="_blank"}  
[MDN: CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations){:target="_blank"}
