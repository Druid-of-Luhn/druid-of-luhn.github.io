---
layout: post
title: Building the Top-Down Explorer Game
category: blog
tags:
 - programming
 - gamedev
 - project
---

This is a post that will follow the process I took to build a small, modular and clean top-down map explorer game based off [my own specification](/blog/Specification-Map-Explorer). The code described in this post is available in [this gist](https://gist.github.com/Druid-of-Luhn/d277358f5f279ea1742b).

## Choosing a Language

The choice of programming language might appear to be the most important one when taking on a programming project, but with one so small and un-specialised as this, most languages could be used, as long as they have some sort of display library.

As the specification did not require a specific language to be used for this project, I started it in C with the plan for writing the display code to use the "ncurses" library. I could work in another language that has access to the library (in fact I was rather tempted by Haskell), but preferred going with C to start, as this project is in fact a re-write of a seemingly unending one I'd already started in C.

## The Game Loop

The most important part of a game is its game loop. This is the code that controls all other code and holds it all together. There are many good posts about good game loops in games – [such as this one](http://www.koonsolo.com/news/dewitters-gameloop) – but I did not need to follow any for this game, as it waits for user input, with no need of a constant refresh rate.

The loop code I used in this game is quite simple; whilst the game is running (the actual loop part of the game), it will display the current game state, then handle any input, which takes care of updating the game.

{% highlight c %}
void gameloop(State *state)
{
    while (state->running) {
        draw_game(state);
        handle_input(state);
    }
}
{% endhighlight %}

Because the `handle_input` function will block whilst waiting for the user to press a key, there is no need to keep track of the time elapsed since the last loop, which would normally be used to perform updates.

## Displaying the Game

The game is displayed using the `draw_game` function that the main loop calls. This function holds onto the player's and camera's recent positions, as well as the tile value the player is currently occupying, so that it may determine whether to redraw a part or the entirety of the game window (or none of it).

If the drawing function detects that the player has moved since the last draw, it will redraw the player in the new position, overwriting its previous position first. This means that an entire redraw is not required every time the player moves.

If the drawing function detects that the camera moved since the last draw however, it must perform a full redraw of the game window. This is done by calling the `display_all` function, that takes the map struct and the camera's position in order to work out which tiles to draw to the screen.

## Handling User Input

-User input is captured using the `get_input` function, which simply listens on standard in, waiting for a character to be entered. The `get_input` function is a blocking function, so the rest of the game is idle whilst listening.-

There is no simple, cross-platform and non-hacky way to get input without it being buffered. This meant that the `get_input` function would have to be implemented by code separate from the game engine, using calls to a library such as "ncurses" or "SDL". Doing this was originally seen only as further work on the project, but has turned out to be a requirement. The following will explain how the input is controlled however.

Once an input character is received, it is sent directly through a `switch` statement, which will decide what to do with the given input character, which itself represents a keypress on the user's part.

If the key that was pressed is meaningful to the game (such as 'q' for quitting or 'd' for moving East), the game state is updated and the game loop runs once again, unless the quit command was issued. In which case, the game loop will terminated.

{% highlight c %}
void handle_input(State *state)
{
    switch (get_input()) {
        case 'q':
        case 'Q':
            state->running = 0;
            return;
    }
    // ...
}
{% endhighlight %}

## Game State

Game state is kept in a single structure with only four fields: whether or not it is currently running, the player's current position, the camera current position and the map structure.

{% highlight c %}
typedef struct {
    char running = 1;
    Vector2 position;
    Vector2 camera;
    Map map;
} State;
{% endhighlight %}

The map is made up of a two dimensional array of tiles and of a `Vector2` for its size. A tile is of an enumerated type.

Keeping the game state in a single structure and keeping it small makes it easy to be passed around and keeps all of the essential information to the well-running of the game in one place. It is mostly passed to functions by reference so that they may update it and still be able to return possible error values if they are required to do so in the future. If the game were to be written in Haskell, the only way to change the game state would be to return a new state object. It will be interesting to see how the code differs if ever this project is completed in a functional programming language.

### Creating the Map

The game map is loaded in from a file when the game is started. The file is read line by line into a linked list, so that its dimensions can first be calculated, allowing memory to be allocated for the array of tiles.The elements of the linked list are then copied into the newly allocated memory space and then the list is freed.

The linked list is used as a stack, so that there is no need for pointers in both directions or for iterating over the list every time an element is added to it (which is once for every character in the input file).

## Conclusion (For Want of a Better Parting Word)

This project was to create a small and simple top-down map explorer game engine, which is what I did here. It has no superfluous code and makes use of no "hacks" either. It contains no input or display code; only calls to it, so as to allow it to to be fully cross-platform. This means that any choice of library can be used as long as it presents a simple API for this game engine to have access to.

This project was quite small and easily accomplishable, but presented some small and interesting challenges. These were all presented and overcome as described above.

The biggest challenge probably stemmed from creating the map in the first place. This is a problem that I had already taken care of, so I could simply make the call to the old and tested code I had already written. It is not shown in the code provided with this post.

Hopefully this post has provided some insight into the development of a small and simple project like a grid-based top-down game and proves how simple one can be to create; the difficulty lies not in the game engine, but in the input gathering, displaying of information and reading.
