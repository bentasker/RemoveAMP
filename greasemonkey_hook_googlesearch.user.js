// ==UserScript==
// @name           AMP Removal from Google Search Results
// @namespace      http
// @description    Attempts to remove AMP related attributes from Google search results so that you're not redirected to an AMP page in the first place
// @include        *://*google*/search*
// @run-at document-end
// @grant none
// @downloadURL https://github.com/bentasker/RemoveAMP/raw/master/greasemonkey_hook_googlesearch.user.js
// @version 1.3
//
//
// See https://projects.bentasker.co.uk/jira_projects/browse/MISC-29.html
//
// Author: B Tasker
// ==/UserScript==


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
