// ==UserScript==
// @name           AMP Removal script hook
// @namespace      http
// @description    Hooks in the AMP removal javascript to attempt to direct to a proper page
// @include        *://*/*
// @run-at document-end
// @grant none
// @downloadURL https://github.com/bentasker/RemoveAMP/raw/master/greasemonkey_hook.user.js
// @version 1
//
// Author: B Tasker
// ==/UserScript==

function RemoveAmpTrigger(){

var head = document.getElementsByTagName("head")[0];
var an = document.createElement('script');
// Was gonna serve direct from github, but Chrome complains about the mime-type (github specifies text/plain)
an.setAttribute('src','https://static1.bentasker.co.uk/adblock/anti-amp/v1.js');
an.setAttribute('type','text/javascript');

// We use SRI to help ensure we don't end up fetching a compromised file
an.setAttribute('integrity',"sha384-9vGiR/wn+A688mGafpv/bxCzCIqaOWMlHzmfD2EWr/oWP/4+29SlUg4UWynL4eoC");
an.setAttribute('crossorigin',"anonymous");


head.appendChild(an);

}




var b = document.getElementsByTagName('body')[0];
var s = document.createElement('script');
s.setAttribute('type','text/javascript');
s.appendChild(document.createTextNode('('+ RemoveAmpTrigger +')();'))
b.appendChild(s);