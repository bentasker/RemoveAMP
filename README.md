RemoveAMP Greasemonkey Script
===============================


The Problem With AMP 
---------------------

Google loves [AMP](https://www.ampproject.org/ "AMP Project"). I don't.

In fact, I really, really, really hate AMP. Not only does it remove functionality from pages, but it's a threat to the Open Web. Google call it an open standard and yet exercise complete control over what gets implemented into it.

My biggest bugbear though, is that despite [numerous](https://productforums.google.com/forum/#!topic/webmasters/8ogdv04Cm-k) [requests](https://productforums.google.com/forum/#!topic/websearch/cQPpu_ee0Y8) to allow users to [turn](https://productforums.google.com/forum/#!topic/webmasters/da0szhOLB1I) it off, Google *still* hasn't provided a global means to disable this cretinous pile of crud.

Although it's (thankfully) less common now, you may also be directed to a Google hosted copy of the AMP page rather than the publisher's own servers. But either way, you're going to be pulling (and running) scripts from cdn.ampproject.org

If you're _very_ lucky, then the AMP page you land on _might_ include a link to the full canonical version (something Google have said they're going to make more accessible too), but a good many currently don't.

The position, basically, seems to be - eat this because it's being forced down your throat.

It's not much better for those running sites either. If you want to be featured in the much vaunted carousel, you'd better have AMP representations. But, if you serve AMP pages, the analytics you get back are much, much more limited and you can use a much more limited subset (and largely arbitrary) set of tags. 

If limited analytics sound like a privacy win for you, keep in mind that Google is almost certainly still collecting all the same data, just making less available to those who are running your page. If the argument that analytics enable webmasters to improve their service holds any weight, then that's scuppered by the limited data in AMP too.

Better yet, they're also introducing [AMP For Email](https://techcrunch.com/2018/02/13/amp-for-email-is-a-terrible-idea/) - because what you really need in your inbox is emails that can change, or "interactive marketing".

For more reading, see

* [How to turn off accelerated Mobile Pages](https://productforums.google.com/forum/#!topic/news/ixPneB4vpGk)
* [Google AMP Sucks](https://productforums.google.com/forum/#!topic/webmasters/z9HsohG0CVY;context-place=topicsearchin/webmasters/category$3Aaccelerated-mobile-pages-amp%7Csort:relevance%7Cspell:false)
* [I decided to disable AMP on my site](https://www.alexkras.com/i-decided-to-disable-amp-on-my-site/)
* [Kill Google AMP before it kills the web](https://www.theregister.co.uk/2017/05/19/open_source_insider_google_amp_bad_bad_bad/)
* [Google AMP Sucks (another one)](https://www.reddit.com/r/webdev/comments/5i6ybb/google_amp_sucks/)
* [The problem with AMP](https://80x24.net/post/the-problem-with-amp/)
* [Google wants to use AMP to make email more interactive](https://techcrunch.com/2018/02/13/google-wants-to-use-amp-to-make-email-more-interactive/)
* [Hacker News on AMP for Email](https://news.ycombinator.com/item?id=16372234)



This script
-------------

Ranting about AMP aside, the aim of this script is to try and find you a proper representation of any AMP pages you have the misfortune to land upon. Unfortunately, there's no way to avoid hitting AMP pages initially (especially now that [Twitter have decided it's better](https://searchengineland.com/twitter-ramps-amp-278300))

This repo contains a userscript for [GreaseMonkey](https://addons.mozilla.org/en-GB/firefox/addon/greasemonkey/) / [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) which simply pulls in the anti-amp code.

What the anti-amp script does, is 

* attempt to check whether a loaded page is in AMP format (by checking for AMP specific markup)
* If it's not AMP, run no further
* Attempt to find the canonical URL within the markup and then redirect the browser to that URL
* If no canonical can be detected, inject a link to search [DuckDuckGo](https://duckduckgo.com/) by page title

The main function involved in this work isn't injected to the page (to avoid constantly injecting a large chunk), instead a small function is injected to load the main functionality via my CDN. Your browser (actually, the extension) will cache this file so won't need to fetch particularly regularly at all.

Although, like AMP, this means loading scripts from a central location, Unlike AMP, I take security reasonably seriously and use SubResourceIntegrity (SRI) to try and make sure that your browser will only run the script if it hasn't been tampered with in any way. In order to change this, an attacker would need to either create a hash collision or interfere with the script you have in Greasemonkey/Tampermonkey (if they can do that, you've got much bigger concerns).

The script is pulled in directly by GreaseMonkey/TamperMonkey once in a while, so won't result in referrer strings reflecting your browsing appearing in my logs.

Ultimately, this script is just part of some stuff I'm building to try and mitigate the effects of AMP on my devices (see [MISC-25](https://projects.bentasker.co.uk/jira_projects/browse/MISC-25.html))



Installing
-----------

You'll need either GreaseMonkey or Tampermonkey (or something else compatible) installed in your browser.

* Visit this url - https://github.com/bentasker/RemoveAMP/raw/master/greasemonkey_hook.user.js - and *Monkey should prompt you to install it

If that  doesn't work, select 'Create New Script' and paste the content of that URL in

Once the user-script is enabled, if you want to verify behaviour, browse to [My simple test page](https://projectsstatic.bentasker.co.uk/MISC/MISC25/bad.html), this should automatically result in you being redirected to the canonical version of that page.




Known Limitations
------------------

Depending on your choice of browser and extension (TamperMonkey on Chrome is unaffected,for example) some sites running certain Content-Security-Policies may well refuse to run the ant-amp code (and trigger a warning in console, as well as to the report-uri, if defined).



Additional Scripts
--------------------

A couple of additional scripts are also provided:

* https://github.com/bentasker/RemoveAMP/raw/master/greasemonkey_hook_googlesearch.user.js - Implemented for [FKAMP-2](https://projects.bentasker.co.uk/jira_projects/browse/FKAMP-2.html) to work around the fact Google doesn't declare it's AMP as AMP when a search result link is clicked.
* https://github.com/bentasker/RemoveAMP/raw/master/redirect_to_non_amp_sites.user.js - Implemented for [FKAMP-4](https://projects.bentasker.co.uk/jira_projects/browse/FKAMP-4.html) as a nuclear option. Domains that fail to properly implement AMP (cough... Google News) get redirected to a domain that isn't so user hostile (hey, Bing's actually better than Google at something!).



License
--------

Copyright &copy; B Tasker 2018
Released under [GNU GPL V3](https://github.com/bentasker/RemoveAMP/blob/master/LICENSE)


