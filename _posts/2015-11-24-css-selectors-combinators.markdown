---
layout: post
title:  "CSS Selectors: Combinators"
date:   2015-11-24 16:00:00
categories: css
---

There are a lot of times when we don't have control over the markup. Here's another way to have more control over targeting your content using selectors. 


#### Adjacent Sibling Selectors
*"This is referred to as an adjacent selector or next-sibling selector. It will select only the specified element that immediately follows the former specified element." ~ [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_selectors){:target="_blank"}*

<p data-height="200" data-theme-id="0" data-slug-hash="MadZEd" data-default-tab="result" data-user="carolynvelez" class='codepen'>See the Pen <a href='http://codepen.io/carolynvelez/pen/MadZEd/'>CSS Selectors: Combinators: Adjacent Sibling Selector</a> by Carolyn Velez (<a href='http://codepen.io/carolynvelez'>@carolynvelez</a>) on <a href='http://codepen.io'>CodePen</a>.</p><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

###### How I Might Use It
I want to reduce the amount of space between my <h2> title and my <h3> subtitle. So instead of giving the h3 a class, I'll target that specific instance of <h3> by writing h2 + h3 {margin-top: 0;}. That way it would *only* apply to that one instance of h3. No more, no less.

{% highlight ruby %}
<style>
	h2 + h3 { margin-top: 0;}
</style>

<h2>Title</h2>
<h3>Subtitle</h3>
{% endhighlight %}


#### General Sibling Selectors
*"The ~ combinator separates two selectors and matches the second element only if it is preceded by the first, and both share a common parent." ~ [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_selectors){:target="_blank"}*

<p data-height="200" data-theme-id="0" data-slug-hash="NGVewL" data-default-tab="result" data-user="carolynvelez" class='codepen'>See the Pen <a href='http://codepen.io/carolynvelez/pen/NGVewL/'>CSS Selectors: Combinators: Child Selectors</a> by Carolyn Velez (<a href='http://codepen.io/carolynvelez'>@carolynvelez</a>) on <a href='http://codepen.io'>CodePen</a>.</p><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

###### How I Might Use It
I want the first paragraph of a post to have slightly larger text than the rest of the copy. I'll give the first selector a class because I don't want the style to affect every paragraph on the page — just the posts. Then I use the GSS to specify *all* the paragraph tags that follow. Not just the first one like the ASS (these are long names what do you want from me?).

{% highlight ruby %}
<style>
	p.post {font-size: 20px;}
	p.post ~ p {font-size: 16px;}
</style>

<p class="post">Paragraph one.</p>
<p>Paragraph two.</p>
<p>Paragraph three.</p>
{% endhighlight %}


#### Child Selectors
*"The > combinator separates two selectors and matches only those elements matched by the second selector that are direct children of elements matched by the first. By contrast, when two selectors are combined with the descendant selector, the combined selector expression matches those elements matched by the second selector for which there exists an ancestor element matched by the first selector, regardless of the number of "hops" up the DOM." ~ [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors){:target="_blank"}*

<p data-height="250" data-theme-id="0" data-slug-hash="bVyOYj" data-default-tab="result" data-user="carolynvelez" class='codepen'>See the Pen <a href='http://codepen.io/carolynvelez/pen/bVyOYj/'>CSS Selectors: Combinators: Child Selector</a> by Carolyn Velez (<a href='http://codepen.io/carolynvelez'>@carolynvelez</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

###### How I Might Use It
Navigation is classic example of good way to use a child selector. It's pretty typical to use nested list items in navigation. So I would declare one set of properties as a default for all the nav items by using ul li and targeting the subnav items by using the CS (>).

{% highlight ruby %}
<style>
	ul li {font-size: 16px;}
	ul > li {font-size: 20px;}
</style>

<ul>
	<li>Main Nav
		<ol>
			<li>Sub Nav</li>
			<li>Sub Nav</li>
		</ol>
	</li>
</ul>
{% endhighlight %}


#### Descendant Selectors
The last one is the descendant selector and I bet you see that one all the time. If you do and always wondered what to call it, now you know. It's really just an empty space. As in the first part of the code I wrote above. That means that any list-items following an unordered list tag will be targeted unless you give the <ul> a class. I recommend doing that since you're likely to have lots of those in your markup and you don't want to have to play CSS whack-a-mole by targeting each instance.

{% highlight ruby %}
<style>
	ul li {font-size: 16px;}
	..
</style>

<ul>
	<li>Main Nav
		<ol>
			<li>Sub Nav</li>
			<li>Sub Nav</li>
		</ol>
	</li>
</ul>
{% endhighlight %}

Have fun selecting stuff!