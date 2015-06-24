---
layout: post
title: "Program Specification: Top-Down Explorer"
category: blog
tags:
 - programming
 - specification
 - gamedev
 - project
---

This project has the aim of creating a simple game that allows the player to explore a grid-like map, viewed directly from above.

The aim for the code is for it to be modular, using a clean interface and using no hacks.

## Game Engine

The game engine should be as simple as possible, with no complicated connections between parts of the program. The engine should handle input, update the game state accordingly and finally make a request for the updated view to be displayed. The code displaying the game should not be part of the game engine.

## Displaying the Game

The code to display the game must implement a simple interface, which requires the presence of a `display` function that should allow the caller to request a specified grid tile to be drawn at a specific position in the game window, and a `display_all` function that should draw the entire game window, displaying the map centred on the camera's position. The `display` function should be able to convert the tile data to the tile that it will display in the game window and the `display_all` function should be able to work out which map tiles to draw on screen using the camera's position.

## Further Work

As further work on the project, the input handler could also be separated from the game engine so as to allow the use of existing event handlers, such as the one in [SDL](https://www.libsdl.org).
