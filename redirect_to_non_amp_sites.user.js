// ==UserScript==
// @name           AMP Alternatives Redirect script
// @namespace      http
// @description    Contains redirect to non-AMP alternatives for domains that AMP can't trivially be blocked on (like Google News). First implemented in FKAMP-3
// @include        *://*/*
// @run-at document-start
// @grant none
// @downloadURL https://github.com/bentasker/RemoveAMP/raw/master/redirect_to_non_amp_sites.user.js
// @version 1.4.1
//
//
//
// Author: B Tasker
// ==/UserScript==



redirects = {"news.google.co.uk":"https://www.bing.com/news/search?q=UK&nvaug=%5bNewsVertical+Category%3d%22rt_UK%22%5d&FORM=NSBABR"}






function manual_redirs(){
    const urlParams = new URLSearchParams(window.location.search);


    if (window.location.hostname == "news.google.com"){
            var gl = urlParams.get('gl');
            goog_map = {
            'GB': 'https://www.bing.com/news/search?q=UK&nvaug=%5bNewsVertical+Category%3d%22rt_UK%22%5d&FORM=NSBABR'            
            }
            
            if (gl in goog_map){
                window.location.href = goog_map[gl];
                return;
            }
            
            // Otherwise, go to Bings default news page
            window.location.href = 'https://www.bing.com/news/';
    }
}









if (window.location.hostname in redirects){
    console.log("Ewwwww. Redirecting");
    window.location.href = redirects[window.location.href];
}

// Check the manual redirects
manual_redirs();