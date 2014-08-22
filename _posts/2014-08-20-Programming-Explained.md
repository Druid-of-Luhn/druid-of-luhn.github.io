---
layout: post
title: Explaining the programming your boyfriend does, often when sitting on your bed – or a guide to the different types of coding I do
category: hidden
tags:
 - programming
 - OOP
 - web-design
---
## Different types of coding  

So essentially there are two different types of coding that I do: programming and web-design. I'm saying coding here because I write code, whilst programming is different, as I will explain just now.

When programming, I'm writing a program that can be told to do things. It is programmed by being given certain values to work with, then it does something with them or to them and will give you something in return. The program can be interacted with when its running or it might only read from one file somewhere and write a new file somewhere else. The point is that the program that I have written does something with information.

Web-design, on the other hand, is just that: design. A part of it is markup (the HTML, see later), which means that you can describe what the text is – emphasised text, a table of data, an image, etc. I then need to style this marked-up text (with CSS, see later) to display it the way I want, whether I'm moving things around, changing colours or doing completely whacky 3D animations. A third step can be added, although this is actually programming; I can make the page interactive, so that something can happen if you click on a button, or I can manipulate data from the user or just make styling the page easier by calculating values for layout. Although web-design requires writing code, it is extremely easy to get the hang of, so it's a more artistic side that is needed for this, but the intricacies of the markup and styling languages take a lot to understand fully.

You can probably understand now that the languages I use for programming do something with information you give it, whilst when I'm coding a website, I'm creating boxes with text in and giving them certain styles. The reason I need to write code is to tell the computer what to do in a way that it can understand. A lot of this can now be done by dragging boxes and clicking buttons, but writing it myself gives me much more control.

## Programming languages

If two different types of coding aren't enough, there are a lot of different programming languages (without counting the two non-programming languages in web-design), that also fit into different categories. All I'll mention now is that I'm often using Objected-Oriented Programming (OOP) or not.

### OOP and not OOP

Objected-Oriented Programming is the idea of creating a class of object, like a mould, from which you can make objects that work in the same way, but with different values. For example, with the library program I've been writing now, I have a library class to represent the library, which has a name, an owner and a list each of the books, authors, series and tags. Each of those is also a class with its own attributes. So when I want to create a new book, I just give this new book a title, its author (which is an object of an author with its own name) and the language it's written in. This means that I know that all books work in the same way and that I can send a book around the program without needing to make a new one every time I do something with it (using something called pointers, as they point to a place where you've saved values).

When I'm not doing OOP on the other hand, I can just write little functions that do something; you give them some values and they give you new ones back (usually one but some can give you more). This means that you don't have to go to all the trouble of designing the classes (the moulds) and making objects to send around the program, which makes these programs smaller and easier to write, as well as faster to run.

This part was a rather technical part and is not easy to understand, but what I'm saying is that I'm either building some rather large program with all the objects that represent things or can do things, or I'm writing lots of nice little bits of code that can quickly do stuff. As an example, you can ask me to show you the code for the Wumpus game, both in OOP and not.

### The different languages

So now that I've explained the two different types of programming I do, I'll now tell you about the actual programming languages themselves and what I use them for.

#### Java

I learned Java at university as well as OOP. Java is a completely OOP language, so absolutely everything has to be made of classes. This means that it takes a long time to write and design the program. It also needs to be compiled by the computer (changed into code that the computer can run) and is slow. The interesting thing about it is that when it is compiled, it's not actually done all the way for the computer to understand, but more for a certain program to understand and run, using the computer. This means that as long as that program (the Java interpreter) is installed on a computer, then the code can run, whatever the computer. Because of this, Java is the most widely used programming language; you can find it in toasters or massive companies' mainframes. It's everywhere, which means that it's a very big target for hacking and is not that secure.

#### Python

I learned this language before university as it is supposed to be the best language to learn first. In fact it's a very good programming language for just about everything. It can be used for OOP but shouldn't really, so when I use Python, my programs have much less code, as well as being faster. Python is not compiled at all, which means that if you have the Python interpreter installed, it can just run. This is like Java but probably even better, because it means that code can be run very easily, but also quickly. Python is very good for writing little scripts (little bits of code to automate something) but also large programs; Google uses Python a lot.

#### JavaScript

JavaScript is the programming that I use for web-design and is like a mix of Java and Python. It's name is like Java, but in fact it's completely different; the only reason for this is to make it attractive to developers. It does look a lot like it for most things, apart from the OOP side which is not strict at all, unlike Java. In fact, JavaScript is a very lax language (and Python is too actually) which means that it's easy to use, but difficult to use well, which takes a lot of practice. JavaScript, like Python, is not turned into code that the computer can understand and run, until it's run by a web-browser, which allows you to add code to it and everything during the program; this makes it a very interactive language. It also means that you need to be careful to not make it too slow, otherwise it could be a real problem.

#### PHP

I don't use PHP very much, but it is a language that I often need for programming websites. The language is used on the server and can run programs there to output information on to the page. It is not really interactive, as the code is run first, then sent to the user, but the user can send code back (although it's got to be done back and forth). PHP is mostly used for saving information and using databases and or files. I could use Python for this and I would love to (I really like Python), and it's also more and more possible to use JavaScript for it, but it would require a lot to learn and not all places to host websites allow you to do it. As an example, for the t-shirts website, when you choose things, I save the information with JavaScript, then send it to the server where the PHP saves it to a file. When you visit the page, the JavaScript then rebuilds everything from that file.

#### Objective-C

I'll only mention this a bit; it's also a fully OOP programming language but a bit complicated to write because instead of using simple words or easy symbols, it's very verbose. It's a very fast language though and is used for building Mac and iOS apps. I used to use it until I started learning the next one.

#### Swift

This is a new language that Apple introduced very recently and they are still working on it. Whenever I've mentioned that I've been learning a new programming language, it's this one. It's a very interesting language because it has some very good OOP, but also very good non-OOP stuff, which makes it simple to write but also very powerful. Because it's such a modern programming language, it takes after quite a few other good ones, which makes it so good. It's still growing though and can only be used on up-to-date Macs/iOS devices, so it's not the best to use at the moment.

## Web-design languages

There are only really two web-design languages; one for building the page (marking it up) and the other for styling it. Every web page has to be built in HTML and can optionally have CSS to style it and JavaScript to make it more interactive. Even if you use code like PHP on the server, that code will be turned into HTML to send to the user.

### HTML (markup)

HTML stands for Hyper-Text Markup Language. The hyper-text element means that you can link bits of text (and pages) together. The HTML code is used for creating elements. You write normal text and then can put that text in tags to give them a meaning or link them to a certain style. If the HTML is well written, it is structured and semantic; although it can be very simple to write, writing it well can be difficult, especially when making sure that you can apply the styles you want to make the page look good.

### CSS (style)

CSS stands for Cascading Style Sheets. It means that you write styles in a file and these styles cascade; the last style in the document is always used for an element (if opposing styles are applied to it). For example, I first give all articles a red background. I then want some articles, with a class of blue, to have a blue background. By writing this below the red background rule, the blue one will be applied to the articles in the blue class. When I talk about styles, I'm not just talking about pretty colours, fonts and borders, but also about the layout of the page as well as some cool effects and animations that can be done nowadays.

***

I hope you sort of managed to understand all of this sweetie. The HTML and CSS languages were difficult to write about, as were the different types of programming, but I hope you understood enough to know more about what I do. If you're interested in any bit of this and want to know more, you know that I would be very enthusiastic to tell you more.
