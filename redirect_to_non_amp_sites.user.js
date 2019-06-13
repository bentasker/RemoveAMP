// ==UserScript==
// @name           AMP Alternatives Redirect script
// @namespace      http
// @description    Contains redirect to non-AMP alternatives for domains that AMP can't trivially be blocked on (like Google News). First implemented in FKAMP-3
// @include        *://*/*
// @run-at document-start
// @grant none
// @downloadURL https://github.com/bentasker/RemoveAMP/raw/master/redirect_to_non_amp_sites.user.js
// @version 1.5
//
//
//
// Author: B Tasker
// ==/UserScript==



redirects = {}






function manual_redirs(){
    const urlParams = new URLSearchParams(window.location.search);

}









if (window.location.hostname in redirects){
    console.log("Ewwwww. Redirecting");
    window.location.href = redirects[window.location.href];
}

// Check the manual redirects
manual_redirs();