---
layout: post
title:  "Build a Better Border"
date:   2015-10-10 15:00:00
categories: css
---

I'm using a dotted border to go along with my new branding. I've never been too happy with the option CSS border-style provides so I looked for a better solution and I found one [here](http://ilikekillnerds.com/2012/05/better-dotted-css-borders-using-the-after-pseudo-selector/){:target="_blank"}.

<div data-height="200" data-theme-id="0" data-slug-hash="gaxbgg" data-default-tab="result" data-user="carolynvelez" class='codepen'>See the Pen <a href='http://codepen.io/carolynvelez/pen/gaxbgg/'>Fancy Dotted Borders</a> by Carolyn Velez (<a href='http://codepen.io/carolynvelez'>@carolynvelez</a>) on <a href='http://codepen.io'>CodePen</a>.</div>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

##### Step 1
I added HTML to a page for three different border variations. I like to use BEM renaming methodology so I created a base style named "dotted-rule" and using Sass, I appended that name with the names of the variations. It keeps thing organized and easy to track down when I need to make changes.

{% highlight ruby %}
<div class="dotted-rule dotted-rule--slate"></div>
<div class="dotted-rule dotted-rule--pink"></div>
<div class="dotted-rule dotted-rule--gold"></div>
<div class="dotted-rule dotted-rule--blue"></div>
{% endhighlight %}

##### Step 2
Create the base style for the border. Some of the properties are optional depending on what you're doing. I've added comments to the ones that arean't.

{% highlight ruby %}
.dotted-rule {
	display: block;
	margin: 5px 0 5px 0;
	
	/* This keeps content from showing up outside the container */
	overflow: hidden;

	/* Remove all padding */
	padding: 0;

	/* Give it a line-height of '1' to control the height */
	line-height: 1;
{% endhighlight %}

##### Step 3
Add the pseudo-selector :after. Make sure to use 'display: block' or you won't see your border and add more periods to the content property than you think you'll need. Adjust the font size to to size dots you want.

{% highlight ruby %}
.dotted-rule { ..
	&:after {
		content: '..........................................................';
		display: block;
		margin-top: -5px;
		font-size: 4rem;
	}
}
{% endhighlight %}

##### Step 4
I wanted a few variations, I used different font-families, font-sizes and letter-spacing to get different effects.

Here I used chose to use Arial because the period character looks like a block instead of a circle, give it a just a little more spacing in between each character, use the color pink and adjusted the font-size to exactly where I wanted it.

{% highlight ruby %}
.dotted-rule { ..
	&:after { .. }
	&--slate {
		&:after {
			font-size: 4rem;
			font-family: Arial, sans-serif;
			color: #ff5776;
			letter-spacing: 10px;
		}
	}
}
{% endhighlight %}

Here I adjusted the letter-spacing to a negative amount to make the line a bit more solid but not quite.

{% highlight ruby %}
.dotted-rule { ..
	&:after { .. }
	&--pink {
		&:after {
			font-size: 4rem;
			font-family: Georgia, serif;
			color: #fcaf35;
			letter-spacing: -5px;
		}
	}
}
{% endhighlight %}

I wanted a border with characters that looked more organic and less symetrical so I used Google Font, "Special Elite".

{% highlight ruby %}
.dotted-rule { ..
	&:after { .. }
	&--gold {
		&:after {
			font-size: 4rem;
			font-family: georgia, serif;
			color: #fcaf35;
			letter-spacing: -5px;
		}
	}
}
{% endhighlight %}

So there's nothing earth shattering here but it's kind of cool trick.

References:  
[Better Dotted CSS Borders Using the :after Pseudo-selector](https://jekyllrb.com/){:target="_blank"}  
