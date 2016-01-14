---
layout: post
title: Install the BitchX IRC client
category: blog
tags:
 - howto
 - unix
 - tutorial
---
Although it has an unfortunate name, BitchX is a very good IRC client. Very simple to use but also extremely powerful for power users, you can install this faviourite of an IRC client just about anywhere, so you can continue your workflow.

## Step 1: Get BitchX

You first need to install BitchX to your computer. To do this, copy/paste this into the Terminal:

{% highlight bash %}
git clone https://github.com/BitchX/BitchX1.2 BitchX
cd BitchX
./configure --with-ssl --with-plugins --enable-ipv6
make
sudo make install
{% endhighlight %}

You will need to install the Command Line Tools first.

## Step 2: Configure BitchX

You can find a [BitchX man page](http://linux.die.net/man/1/bitchx).

To start configuring BitchX, you will need to edit your `.bash_profile` file, which is in your home folder:

{% highlight bash %}
vim ~/.bash_profile
{% endhighlight %}

To automatically pass an option that you have found on the man page (such as passing -A to hide the awful ASCII art on startup), just create an alias:

{% highlight bash %}
alias BitchX="BitchX -A"
{% endhighlight %}

To create default values for your IRCHOST, USER, etc. (description on man page), just type the following:

{% highlight bash %}
export IRCHOST="yourValue"
export USER="yourValue"
{% endhighlight %}

These changes will apply every time you start up Terminal. To apply them now, just run:

{% highlight bash %}
source ~/.bash_profile
{% endhighlight %}

## Step 3: Using BitchX

To use BitchX, simply type the following into a Terminal window:

{% highlight bash %}
BitchX (-options) <username> <server>
{% endhighlight %}

- `options` are optional and are represented by letters (see man page).  
- `<username>` is the username you wish to use. You cannot use spaces.  
- `<server>` is the server you wish to join (for example: irc.p2p-network.net)

BitchX will now connect you to the server. A blue bar should appear at the bottom of your Terminal window and will display your chosen username once you have logged in.

To list all channels (bad idea, because there are a lot), type

{% highlight text %}
/list -YES
{% endhighlight %}

To find a channel, type

{% highlight bash %}
/list -name #channelName
{% endhighlight %}

To join a channel, simply type

{% highlight bash %}
/j #channelName
{% endhighlight %}

When on the channel, you can see who else is there by typing

{% highlight bash %}
/who
{% endhighlight %}

When typing someone's username, BitchX uses tab completion.

To quit BitchX, simply type

{% highlight bash %}
/quit
{% endhighlight %}

## Additional information

There are many more things that you can do with BitchX, such as using multiple channels, using multiple windows and certain commands concerning other people.

I will not explain these here as there is a lot of interesting information for them in [this MIT BitchX FAQ](http://stuff.mit.edu/afs/sipb/user/ssen/src/BitchX/doc/entire-faq.html).
