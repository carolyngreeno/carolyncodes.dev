---
layout: post
title:  "Animating with an SVG Sprite (and a Goat!)"
date:   2015-09-20 15:00:00
categories: css3-animations
---

So I'm kind of hooked on working with animations now. For this one I decided to use a sprite. Sprites are great to reduce the number of server calls that need to be made when loading a page. Page load is an essential consideration for [many reasons](http://www.sitepoint.com/mobile-seo-6-steps-mobile-friendly-website/){:target="_blank"}.

<p data-height="380" data-theme-id="0" data-slug-hash="KdMmze" data-default-tab="result" data-user="carolynvelez" class='codepen'>See the Pen <a href='http://codepen.io/carolynvelez/pen/KdMmze/'>Animate sprite with CSS</a> by Carolyn Velez (<a href='http://codepen.io/carolynvelez'>@carolynvelez</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

I'm looking forward to doing more with animating sprites. I'm sure that some really cool effects can be achieved. For I create a pretty basic one.

The general idea was to position each part of the sprite in a separate div. I then used @keyframes and transforms for the animations. I also used the timing function, steps() to make the transitions smoother. Pretty simple. I think I'm gonna make him fly next. He's bored just moving his ears.

References:  
[Treehouse: Sprite Sheet Animations with steps()](http://blog.teamtreehouse.com/css-sprite-sheet-animations-steps){:target="_blank"}  
[MDN: animation-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function){:target="_blank"}  
