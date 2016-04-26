---
layout: post
title: Inver&shy;ting a String with Sass
category: blog
tags:
 - sass
 - css
 - web-design
---
When designing my [University website](http://wb33.host.cs.st-andrews.ac.uk), the footer of which was based off the one on this site, I wanted small icons beside the links. It seemed a little bland when there were no pictures, as can be seen here:

![Website links in a grid with no logos.](/img/links-no-logo.png "Links without logos.")

To achieve the intended effect, which adds a little logo before each link to add some visual flair, consists in adding a pseudo-element with a background image. Not too difficult.

![Website links in a grid with logos.](/img/links-logo.png "Links with logos.")

So I add the bit of code and… blank for Twitter and Google+. No need to even look in the console; AdBlock is hiding them from loading, as I ask it to hide all social links (I really don't like share buttons).

So to get around this, I thought of inverting the name of the class and of the file being used. So “Twitter” becomes “rettiwT”. Testing this shows that AdBlock lets this pass, so I now needed to come up with a nice way of programming with it (nobody wants to have to write everything backwards). File names and class names in the HTML had to be written backwards by hand (I'm a programmer, so I just used a little JavaScript), but as I use Sass,I thought that there is no reason why class names and `background-image` urls should not be written the normal way round and then flipped programmatically.

This could be done with a Sass function, as show below.

{% highlight scss %}
@function invert($string) {
    $size: str-length($string);
    $newstring: "";
    @for $i from 0 through $size {
        $newstring: str-insert($newstring, str-slice($string, $i, $i), 0);
    }
    @return $newstring;
}
{% endhighlight %}

This function takes a string as its argument, then loops through ever character in it and inserts the letter at the front of the new string, thus inverting it. The new string is then returned.

Feel free to send me a tweet on [Twitter](http://twitter.com/_Billy_Brown) if you have any improvements to suggest or general comments to make.
