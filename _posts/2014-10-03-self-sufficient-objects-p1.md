---
layout: post
title: "Self-sufficient objects in a web-page : markup and styling"
category: hidden
tags:
 - web-design
 - OOP
 - programming
 - concept
---

The idea of this article is to introduce the concept of designing with objects, represented in the markup, the styling and the interaction with the user. It is a good case for representing a list of items that have the same properties and actions.

An small example could be items in a shop, which are read in from a JSON file and hold information about themselves. Interaction consists of adding or removing items, which results in their cost and amount changing. This example will appear throughout the article. This pen shows it in use, on both the CSS and JavaScript, the latter generating the items' markup:

<p data-height="349" data-theme-id="9188" data-slug-hash="tvGof" data-default-tab="result" data-user="_Billy_Brown" class="codepen">See the Pen <a href="http://codepen.io/_Billy_Brown/pen/tvGof/">tvGof</a> by Billy Brown (<a href="http://codepen.io/_Billy_Brown">@_Billy_Brown</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

I will mention now that what is done here can be encapsulated into one single tag, using the [Web Components](http://www.w3.org/TR/components-intro/) standard. I will not go over this method here; simply how to build an object in basic HTML, CSS and JavaScript.

The second article will focus on the JavaScript behind the concept, which is what truly makes this concept nice and links makes the object interactive and self-sufficient.

## Achieving Object-Orientation with your classnames

Web languages were not built with object-oriented design in mind [(OK maybe JavaScript was)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript), so how can we make a good, non-hacky object to use in our web-page?

You may have heard of [BEM](https://bem.info/method/ "Block Element Modifier"). If you haven’t, it’s a class-naming method that results in an object-oriented like structure, both in the markup and in the styling.

A BEM class name can be made up of one to three things (maybe more if you’re working on something crazy): a block name, an element name and a modifier. The block is going to be the root of our object, as it carries no dependencies on any blocks above it in the DOM tree. Elements are nodes inside the block, belonging to it and holding its information. Finally, a modifier can be applied for various states of block or elements.

Using the shop item example from above, here are some of the classnames that could be constructed:

<pre>
item					[block]
item__name				[block__element]
item--sold-out      	[block--modifier]
item__remove--disabled  [block__element--modifier]
</pre>

The first classname represents a single item, maybe represented by a simple `<div>` in the markup. The second name is the name of the item (or its title), which could appear in a header or something. If an item is sold out, users should not be able to select any for purchase, so the third class could be used to disable this in the styling maybe. Same goes for the final one, which selects the remove button of the item and disables it, something that should happen when there are no selected items to remove.

Writing your classnames following the BEM method makes a big difference in the markup, which becomes nicely human-readable, with the elements clearly related to the block they belong to.

## The advantage of using a single block for your object

Coming up with a good idea of the hierarchy of elements inside your object block will allow you to easily apply the classnames to the elements inside the encapsulating block. You can move your single item around, between sections of your site or even different websites, whilst keeping it dependent only on itself.

As you can imagine, this allows CSS styling to not only be grouped nicely by classnames, but it also allows the styles to be intra-dependent only. This means that they depend only on the other styles inside the object, which in the case of the example, is all classes beginning with `.item`.

If you even go so far as to styling your object with relative sizes and maybe even a lack of explicit colouring and fonts for at least some elements, you can not only transport the object’s markup around, but its styling too, which is name-spaced and as independent from external styling as you want it to be (although this may be the one place you may want some cross-pollination of styles).

***

So here ends the first part of the article on a non-web-component self-sufficient object for your website.

The second part will prove more enlightening as to what I’m getting at, as object-oriented design in HTML and CSS is not old and its tenets can be read in much better wording with Jonathan Snook’s [SMACSS](https://smacss.com/) and Nicole Sullivan’s [OOCSS](http://oocss.org/).
