---
layout: post
title: Mafia II Unsupported System [Mac Fix]
category: blog
tags:
 - howto
 - tutorial
 - games
---
After the recent update to the Mafia II on the Mac Appstore, I was confronted with the following popup, telling me my computer was unsupported and I would be unable to play the game.

![/img/mafia-ii-unsupported.png](/img/mafia-ii-unsupported.png)

Upon visiting the [Feral Interactive website](https://www.feralinteractive.com) to see what the system requirements are, I saw that my graphics card – an Intel HD 3000 – was on the list, even though it has the required 512MB of virtual memory and could run the game without crashing before the update.

As Feral Interactive are probably good programmers, I guessed that they would be storing this sort of information in a plain text file in game directory. After a quick search with [ag](https://github.com/ggreer/the_silver_searcher) for `'intel'`, I found the file I wanted:  
__/Applications/Mafia II.app/Contents/Resources/specifications.xml__

```
$ ag intel
Resources/FeralUI/PGOW/Core/3rdParty/jquery-ui-1.10.4.custom/AUTHORS.txt
210:John Chen <zhang.z.chen@intel.com>

Resources/specifications.xml
26:             <stock id="Intel_GMA_series" />
27:             <stock id="Intel_HD3000" />
48:                 <stock id="Intel_HD5300" />
49:                 <stock id="Intel_GMA_series" />
50:                 <!-- Intel_HD_515 -->
52:                     <OpenGL_renderer><contains>Intel</contains></OpenGL_renderer>
56:                 <stock id="Intel_HD3000" />

Resources/specification_stock.xml
1379:       <stockcondition id="vendor_intel">
1380:           <OpenGL_vendor><is>Intel Open Source Technology Center</is></OpenGL_vendor>
[ snipped for brevity ]
2265:       <stockcondition id="Intel_HD3000">
2266:           <stock id="Intel_HD_3000_Renderer"/>
```

Lines 27 and 56 in `Resources/specifications.xml` seem to be want I want.

## The Fix

So to stop the message from popping up and preventing you from playing the game, you need to remove the lines describing your graphics card in the unsupported section. I prefer to comment the lines out just in case I ever want to change them back.

Make sure to change the permissions on the file or to open your text editor with `sudo`, so that you can perform changes.

Opening the game now should have it working like it did before the update. Have fun!
