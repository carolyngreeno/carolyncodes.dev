---
layout: post
title:  'Get started with Jekyll quickly'
date:   2015-09-24 20:00:00
categories: Jekyll GitHub
---

Earlier this year I had an interview exercise that involved using a static site generator. I don't know how but I'd actually never heard of one before. But you can bet I corrected that right away. I've worked with Node.js and it's similar to that.

Not having used a SSG before, it was struggle to complete the project in the twenty minutes they said it should have taken. Fail! Failure is just another step towards succes though. So I had to figure it out and I was immediately glad I did. As a longtime user of WordPress, this seemed much simpler, cleaner and there was no need to know PHP to make the most out of it. It's also much, much lighter weight. WordPress seems to get bogged down quickly. With Jekyll all I needed was my console, my favorit text editor (in this case Sublime Text) and later, a GitHub account. One of the coolest things about it is that you can host your blog on GitHub for free while also enjoying all the features of their version control.

I'll walk you through the basic steps of creating your blog. On my next post, I'll go through how to host your site on GitHub.

##### Step 1) You're gonna need Ruby.
If you're on OSX or above, your machine comes with Ruby already installed. If you're not sure, run this command in the console to check (for Macs).

{% highlight ruby %}
ruby -v
{% endhighlight %}

If you don't already have it installed, [visit this page](https://www.ruby-lang.org/en/documentation/installation/){:target="_blank"} to find the correct installation method for your machine.

##### Step 2) Install Jekyll

Once you have Ruby installed, run this command to install Jekyll.

{% highlight ruby %}
gem install jekyll
{% endhighlight %}

If you get an error relating to the version of RubyGems, you can update it like this: 

{% highlight ruby %}
sudo gem update --system
{% endhighlight %}

##### Step 3) Create your site
Using your console or command window, change directories into the one where you want your site to live and type the following: 

{% highlight ruby %}
jekyll new my-site-name
{% endhighlight %}

Change directories into your new site folder.

{% highlight ruby %}
cd my-site-name
{% endhighlight %}

Once in the site directory, start the server.

{% highlight ruby %}
jekyll serve
{% endhighlight %}

In your browser, navigate to [localhost:4000](http://localhost:4000) and you'll see your brand new jekyll site just waiting for you.

##### Step 4) So now what?

The first thing I wanted to do was customize the look. I started using Sass a couple of years ago and never looked back so I thought it was extra cool that Jekyll is already set up to watch and compile Sass files. In the past I've set up the compiling manually (a pain) or with CodeKit. You don't need to do either with Jekyll. 

In the project folder, you'll find a folder named "_sass". That contains the partials you'll want to add to and edit.

You'll also find a folder named "css" on the root. Inside that is a file named "main.css". At the bottom of the file you can import the partials you want to include in the final output.

{% highlight ruby %}
@import
	"normalize"             , 
	"skeleton"              , 
	"syntax-highlighting"   , 
	"partials/base"				
;
{% endhighlight %}

##### Step 5) A little more about the directory structure to help get you started. Below is what the beginning setup looks like.

{% highlight ruby %}
_config.yml
_includes  // elements like the header, footer, sidebars
_layouts   // layouts for default page, posts and other pages
_posts     // layout for posts
_sass      // all yer sassy sass files
about.md   // your default "about" page
css        // good old final CSS file
feed.xml   // your automatically generated RSS feed
index.html // your home page
{% endhighlight %}

I ended up adding some extra files and directories on the root. I created a folders for assets and javascript, along with a 404 page (404.md), sitemap (sitemap.xml) and robots.txt. I'm a litte OCD about organization so I also created a "partials" directory inside the _sass folder.

##### Step 6) Other stuff that's important but I'm still just gonna call it stuff

You should also know a bit about the config file. You'll need to edit that file to control things like the meta-description, the title of the site and plugins just to name a few. It's the brain of your project so treat it with respect and edit carefully.

{% highlight ruby %}
/* Site settings */
title: Title of my site

/* Your email address. I keep mine commented out and use a form instead. */
// email: myemail@carolynvelez.com 

/* Add your meta decription here. This is important because this  
   is what will show up under your URL in Google search results. */
description: > # this means to ignore newlines until "baseurl:"
	Description text here.

/* Your domain */
url: "http://mydomain.com" # the base hostname & protocol for your site

/* If you don't have an account right now don't worry about it.  
   We'll come back to that in the next tutorial. */
github_username: myghusername

/* Build settings */
markdown: kramdown /* "kram" is "mark" spelled backwards. get it?! :)  */
{% endhighlight %}

##### Step 7) Build it!
You can get more information [here](http://jekyllrb.com/docs/usage/){:target="_blank"} in case you want to configure the final output a bit differently. I just use the following to build my site to the default "_site" directory.

{% highlight ruby %}
jekyll build
{% endhighlight %}

That folder contains the static files that will be uploaded to GitHub or my host's server &mdash; wherever I choose to host my site.

That's a really quick way to get up and running. It's just the very basics really. There's a lot more you can do but I'm a believer in starting simple and finding out more as I go along. Below are two great references for when you get to that point or if you need to troubleshoot.

References:  
[Jekyll: Simple, blog-aware static sites](https://jekyllrb.com/){:target="_blank"}  
[Smashing Magazine: Build A Blog With Jekyll And GitHub Pages](http://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/){:target="_blank"}  
