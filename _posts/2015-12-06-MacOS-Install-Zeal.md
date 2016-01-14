---
layout: post
title: Install the Zeal offline documentation browser on Mac&nbsp;OS&nbsp;X
category: blog
tags:
 - howto
 - programming
 - tutorial
---
Zeal is the Linux version of Dash, the amazing offline documentation viewer for Mac OS X.

Because of the paid nature of the full app, there is no distributed version of Zeal beyond its source code, and as it does not support Mac OS X, even that can be difficult to install from.

This is a short tutorial to help you install Zeal on Mac, which worked for me, but may not work for everybody.

## Installation dependencies

- Some familiarity with the command line,
- Xcode and the command-line tools if you haven't already got them,
- Qt5 (`brew install qt5` with Homebrew)
- libarchive (`brew install libarchive` with Homebrew)

## Installation Instructions

Start by cloning the Zeal git repository:
{% highlight bash %}git clone https://github.com/zealdocs/zeal{% endhighlight %}

Move into the new "zeal" directory (`cd zeal`) and run `qmake` (or `/usr/local/opt/qt5/bin/qmake` if you've not linked it).

{% highlight bash %}
cd zeal
/usr/local/opt/qt5/bin/qmake
{% endhighlight %}

A new "Makefile" file should be in the directory. Run that with `make`.

Ignore any errors that this causes, the important thing is that it created a new file at "src/Makefile". Open that (`vim src/Makefile` with vim).

Now append these bits to the specified variables near the top:

- CFLAGS: `-I/usr/local/opt/qt5/include -I/usr/local/opt/libarchive/include`
- CXXFLAGS: `-I/usr/local/opt/qt5/include -I/usr/local/opt/libarchive/include`
- LFLAGS: `-L/usr/local/opt/libarchive/lib`
- LIBS: `-larchive`

This will tell the compiler where Qt5 and libarchive are and that you want to use them.

Now that this is done, run `make` again; this should run without errors and produce a nice "Zeal.app" application in the "bin" folder. Just move this to your "/Applications" folder to make it appear in Launchpad like other apps.

## Command Line Tool

To make a command line launcher for Zeal, create an executable somewhere on your PATH with the following contents:

{% highlight bash %}
#! /bin/sh

/Applications/Zeal.app/Contents/MacOS/Zeal $@
{% endhighlight %}

This should allow you to type `zeal search <terms>` from the terminal and open the app from there.

## Only the Instructions

Assuming Qt5 and libarchive are installed, write copy/paste this into your terminal, or make it into a shell script; it should correctly install Zeal for you.

{% highlight bash %}
PREFIX=`brew --prefix`
SRC_F=src/Makefile
TMP_F=tmp_file

cd /tmp
git clone https://github.com/zealdocs/zeal
cd zeal
$PREFIX/opt/qt5/bin/qmake
make
sed "/^CFLAGS/ s:$: -I$PREFIX/opt/qt5/include -I$PREFIX/opt/libarchive/include:" < $SRC_F > $TMP_F
sed "/^CXXFLAGS/ s:$: -I$PREFIX/opt/qt5/include -I$PREFIX/opt/libarchive/include:" < $TMP_F > $SRC_F
sed "/^LFLAGS/ s:$: -L$PREFIX/opt/libarchive/lib:" < $SRC_F > $TMP_F
sed "/^LIBS/ s/$/ -larchive/" < $TMP_F > $SRC_F
make
cp bin/Zeal.app /Applications/Zeal.app
cd ..
rm -rf zeal
{% endhighlight %}
