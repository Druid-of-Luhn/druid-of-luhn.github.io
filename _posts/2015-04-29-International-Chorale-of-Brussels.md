---
layout: post
title: Intern&shy;ational Chorale of Brussels Website
category: portfolio
tags:
 - website
 - webdesign
 - portfolio
 - music
---
Re-building the International Chorale of Brussels [website](http://internationalchorale.com) was my first large web-development project. The first thing that must be said about it is not that it was meant to be a redesign, as the original design was hardly changed, but that it was instead a full re-writing of the website, both on the back end and on the front end.

![ICB website homepage screenshot and logo.](/img/portfolio/icb/poster.jpg "International Chorale of Brussels website.")

The reason for not really touching the original website's design, even if it was not that pretty, was that redesigning would take time, whilst simply coding up an existing design would be quite simple, especially when the design is as lightweight as for the International Chorale website.

## Moving the Back End to Wordpress

The back end of the website was moved from pages generated in Microsoft Word to using [Wordpress](https://wordpress.org), which would allow the choir's committee members to make changes to the website themselves, without requiring any web knowledge, such as uploading files or writing HTML. As the website consists of only a handful of pages, this task was very simple and consisted simply in copy-pasting the content in and then cleaning up some of the markup.

## Creating a Theme with Sass

The front end of the website was the part of this project that I spent the most time on, which still doesn't amount to much. The theme was created from a blank one, that I think was recommended by [Chris Coyier](https://twitter.com/chriscoyier) over on [CSS-Tricks](https://css-tricks.com), making any markup work as simple as writing HTML code in the correct files around the PHP code. No special plugins or functions were needed and in fact there is not even a sidebar or footer, which really made the website light on markup.

The stylesheet was then written in [Scss](http://sass-lang.com), which allowed me to make it modular, by splitting different parts of the stylesheet over different files, keeping the codebase nice and clean. There was not much styling to do, which allowed the code to once more, as with the rest of the code on this project, remain quite light.

And it remained light even with the addition of media-queries for making the website responsive. Along with migrating to Wordpress and writing the stylesheet in Scss, making the website responsive was one of the main factors that brought on this rebuilding of the International Chorale's website.

![Small menu.](/img/portfolio/icb/small-menu.png "Small menu.")

In fact, as the design clearly separates the header section and the text section on the website, and the latter is very easily made responsive, as it starts off so, then the only additional work was in resizing and changing the header section for different screen sizes. As the screen gets smaller, so should the header text and the navigation menu. When there is no more space on the screen for the latter, it collapses into a list, which can be shown and hidden with the click of a button. All of this fits in seamlessly with the design.

## What now?

I've now finally added a write-up of this website to my portfolio, and now I start to have thoughts about reaching out the choir once more about a redesign, to give the website a nicer style and generally make it better to use for both the committee and the users. Certainly a good use for my time over the summer.
