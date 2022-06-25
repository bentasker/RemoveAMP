// ==UserScript==
// @name           AMP Removal script hook
// @namespace      http
// @description    Hooks in the AMP removal javascript to attempt to direct to a proper page
// @include        *://*/*
// @run-at document-start
// @grant none
// @downloadURL https://github.com/bentasker/RemoveAMP/raw/master/greasemonkey_hook.user.js
// @version 1.6.1
//
// @require https://static1.bentasker.co.uk/adblock/anti-amp/v1.6.js#sha384=gHVG5HeMAn/WWFJ6VBkahDMFvDXJbkiroOJuVtz2l/gvvnhabGCRjbJphz5qMASw
//
//
// Author: B Tasker
// ==/UserScript==

window.addEventListener ("DOMContentLoaded", triggerAMPCheck, false);

function triggerAMPCheck () {
    fuckOffAMP();
}
