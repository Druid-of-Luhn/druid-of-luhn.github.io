---
layout: post
title: Starting a C++ Game
category: blog
tags:
 - programming
 - C++
 - gamedev
---

I have recently started working on a [small side-scroller game](https://github.com/Druid-of-Luhn/SideScroller) in C++, using [SDL](http://libsdl.org) for drawing on a canvas. It was actually originally ported over and cleaned up from a [small JavaScript side-scroller experiment](http://codepen.io/_Billy_Brown/pen/EjxBYX/) over on [CodePen](https://codepen.io).

## Why Make a Side-Scroller?

This is not the first graphics game I have attempted to program and I don't think that it will be the last. I first started a [top-down shooter experiment](http://codepen.io/_Billy_Brown/pen/jEPzeX) in JavaScript, using canvas, to see if I could actually do it. Having started work on that, I could have continued, porting the code over to C++ as I have done with the current project, improving collisions, adding other characters controlled by AI or maybe played over sockets, added graphics, sound, everything a game needs. But instead I went for a side-scroller. Why the change?

The reason is actually that for some time now I've been helping a [friend](http://larasdrawsthings.blogspot.co.uk) design a game, with the help of a [second friend](https://twitter.com/binnie567), and after some discussion, it was decided that the game would be made as a side-scroller. Although the game was to be developed in [Unity](http://unity3d.com), which provides a full engine, I thought I would use the idea as inspiration to push myself to make a small game in C++, which I have been teaching myself after learning C for my Computer Science course.

## Programming Style

I moved the code from JavaScript with canvas over to C++ with SDL for two reasons. First of all, probably just so that I could give myself a C++ project to work on. Secondly however, which is actually the more important factor, C++ is generally a better programming language to do it in if I'm to write the game in Object Oriented style (otherwise I would probably have used Haskell with `gloss`).

I started off by designing a simple class tree and getting them to work correctly, displaying objects with a very simple game loop and listening to some events. Getting all of that working with SDL was surprisingly and pleasingly simple.

The game is designed with a main `Game` class, that sets up SDL (what little is required) and runs the game loop. It contains a `vector` of `Node` object pointers, which represent the simplest object in the game; something that is drawn and may be collided with. There is also a `vector` of `Dynamic` object pointers, which are a subclass of the `Node` object and represent entities with an updateable state and that can collide with other entities. The third important part to the main `Game` object is the pointer to the character, which is a `Character` object, subclass of the `Dynamic` class.

So far, the only node other than the character is the ground, represented by a `Floor` object (subclass of `Node`), which is made up of procedurally-generated vertical lines, which also have collision boxes. Collisions are still being worked on, as I am trying to implement a very simple collisions system.

## Physics Engine, or Lack Thereof

As can be seen in the little source code that there is and as can be induced from this post so far, I am not using or working on a full physics engine. The reason for this is that the game does not need it.

The longer-winded reason for not using one is that it would be much too big for the small project I'm building and so for the little things I would be needing it for, I might as well learn to write things myself. The reason for not writing much more than collisions and maybe a bit of gravitational physics is that, again, I don't need all of that and therefore would be wasting time (you know, re-inventing the wheel and all that).

## To End a Boring Post

So to end a boring post that would probably even bore me, I'm working on a small C++ side-scroller game that draws on an SDL canvas. The game does not have many functionalities at all yet, but I will definitely not be working on a physics engine. I might post some code snippets and/or images at some point. I really do find this blogging things difficult.
