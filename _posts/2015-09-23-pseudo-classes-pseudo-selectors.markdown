---
layout: post
title:  'Pseudo-classes &amp; Pseudo-elements'
date:   2015-09-23 20:00:00
categories: css
---

This is another great example of something I've used for years without knowing the true definitions. Most of the time I've used them when I have limited control over the markup or when I want to style something depending on its state.

## How are they the same?
Both are added to selectors (a, p, li, h1, body, etc.) to style certain parts of document.

## How are they different?

**Pseudo-classes** are keywords (:hover, :first-child, etc.) that are added to selectors to define dynamic states of elements. Say I want to add a bottom border to a link when it's clicked. I'd add ":focus" to the 'a" selector (or tag).

How I like to think of it: *Using a class that isn't specified in the markup.*

{% highlight ruby %}
/* examples */
selector:pseudo-class { property: value; }
       a:hover        { color: red; }
      li:first-child  { margin-bottom: 1em; }
{% endhighlight %}

**Pseudo-selectors** are patterns used to select content and style certain parts of a document. I mostly find myself using ::before and ::after to add some styles to something I can't or don't want to add extra markup to. For instance, if I want a border at the bottom of the header that extends further than width of the parent container, I give the ::after a width of 105%. You'll find them really handy when creating [CSS shapes](https://css-tricks.com/examples/ShapesOfCSS/){:target="_blank"}. 

How I like to think of it: *Adding something to the document that isn’t already there.*

Tip: If you find that you're using this technique and it isn't working, check to make sure you included the content property first.


{% highlight ruby %}
/* examples */
selector::pseudo-element { property: value; }
       a::before         { content: ""; }
       p::first-line     { content: ""; }
{% endhighlight %}

## Should I use :: or :?
For CSS3, an additional ":" was added to pseudo-elements to distinguish them from pseudo-classes. Those are supported in IE9 and up. You should know though that if you need them to work in IE8, you should only use a single colon.


References:  
[MDN: Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes){:target="_blank"}  
[MDN: Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements){:target="_blank"}
