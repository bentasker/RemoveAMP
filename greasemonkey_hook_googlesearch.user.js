// ==UserScript==
// @name           AMP Removal script hook
// @namespace      http
// @description    Hooks in the AMP removal javascript to attempt to direct to a proper page
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
    
    eles[i].href = da;
    
    for (n=0; n<bads.length; n++){
        eles[i].removeAttribute(bads[n]);
    }
    
}