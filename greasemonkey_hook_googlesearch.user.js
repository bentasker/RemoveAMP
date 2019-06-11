// ==UserScript==
// @name           AMP Removal from Google Search Results
// @namespace      http
// @description    Attempts to remove AMP related attributes from Google search results so that you're not redirected to an AMP page in the first place
// @include        *://*google*/search*
// @include        *://news.google*/*
// @run-at document-end
// @grant none
// @downloadURL https://github.com/bentasker/RemoveAMP/raw/master/greasemonkey_hook_googlesearch.user.js
// @version 1.4.21
//
//
// See https://projects.bentasker.co.uk/jira_projects/browse/MISC-29.html#comment2512640
//
// Author: B Tasker
// ==/UserScript==


var AMPCheck = debounce(function() {
	var da;
	var bads = ['data-amp','data-amp-cur','data-amp-title','data-amp-vgi','ping'];
	var eles = document.getElementsByClassName('amp_r');
	for (var i=0; i<eles.length; i++){
		if (eles[i].tagName.toLowerCase() != 'a'){
			continue;
		}
		da = eles[i].getAttribute('data-amp-cur');
		if (! da){
			continue;
		}
		if (!da.includes('?')){
			da += '?';
		}
		eles[i].href = da;

		for (n=0; n<bads.length; n++){
			eles[i].removeAttribute(bads[n]);
		}
	}
	
	
	// FKAMP-5 Check for iframes pointed towards the ampproject CDN
	var ifs = document.getElementsByTagName('iframe');
        for (var i=0; i<ifs.length; i++){
            // Check whether the iframe source is pointing towards the AMP cdn
            s = ifs[i].getAttribute('src');
            if (s && s.includes('.cdn.ampproject.org/')){

                // Extract the source domain name and path from the amp cdn url
                s=s.split("#")[0];
                e=s.split("/");

                // Start building a new URL 
                p=["https:",'',e[5]]
                // start at position 6 for the path
                for (var x=6; x<e.length; x++){
                    p.push(e[x])
                }
                newurl = p.join("/");

                window.location.href = newurl;
                return;
            }
            
            
        }
	
	
	
}, 500);

/* Taken from https://davidwalsh.name/javascript-debounce-function */
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

window.addEventListener ("load", function(){
	AMPCheck();
	document.addEventListener("DOMNodeInserted", AMPCheck, false);
}, false);
