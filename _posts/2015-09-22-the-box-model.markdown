---
layout: post
title:  '"Explain the box model."'
date:   2015-09-22 20:00:00
categories: css
---

That was the interview question that marked the beginning of my realization that even though I'd been doing some form of web development for 
several years, I couldn't explain the whys behind why one thing worked and another thing didn't. I quickly saw that if I didn't get my left 
brain in gear I wasn't going to be as effective. Hence this blog.

![A girl needs to keep up]({{ site.baseurl }}/assets/posts/2015-09-22.jpg)

### **A Brief Explanation**

This is what I'm putting in my pocket for the next time and interviewer asks me that question.

**One:** The box model is a CSS term. 

**Two:** Any HTML element can be considered a box.

**Three:** The point of the box model is to define the amount of width and height an element (a box) takes up in the browser and how it's positioned in relationship to other elements (other boxes).  

**Four:** The box model has four parts: margin, border, padding and content.

**Five:** The [box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing){:target="_blank"} property is your friend. Box-sizing has two property values &mdash; content-box and border-box. A quick way of explaining each would be to say that the defaul, content-box width and height include only the content and border-box includes the content, padding and margin.

I always make sure this is in my stylesheets:

{% highlight ruby %}
* { box-sizing: border-box; }
{% endhighlight %}

### **If you're visual …**

This your CSS with content-box (default):

<p data-height="268" data-theme-id="0" data-slug-hash="gawJxw" data-default-tab="result" data-user="carolynvelez" class='codepen'>See the Pen <a href='http://codepen.io/carolynvelez/pen/gawJxw/'>Box Model w/o border-box</a> by Carolyn Velez (<a href='http://codepen.io/carolynvelez'>@carolynvelez</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

This your CSS with border-box:

<p data-height="300" data-theme-id="0" data-slug-hash="mergLY" data-default-tab="result" data-user="carolynvelez" class='codepen'>See the Pen <a href='http://codepen.io/carolynvelez/pen/mergLY/'>Box Model</a> by Carolyn Velez (<a href='http://codepen.io/carolynvelez'>@carolynvelez</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

The world is much friendlier place when you use it because you don't have to you calulate the border and padding into the width and height of the box to get the result you want. Just include box-sizing: border-box and you're all set. 

At this point, current support for box-sizing is solid: Ch, Saf 5.1+, IE 8+, Op 9+

Like I said … brief. There's more you can read up on below but this is a basic overview.

References:  
[MDN: Box-Sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing){:target="_blank"}  
[AddedBytes: The Box Model for Beginners](https://www.addedbytes.com/articles/for-beginners/the-box-model-for-beginners/){:target="_blank"}
