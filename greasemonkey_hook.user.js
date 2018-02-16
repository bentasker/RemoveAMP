// ==UserScript==
// @name           AMP Removal script hook
// @namespace      http
// @description    Hooks in the AMP removal javascript to attempt to direct to a proper page
// @include        *://*/*
// @run-at document-end
// @grant none
// @downloadURL https://github.com/bentasker/RemoveAMP/raw/master/greasemonkey_hook.user.js
// @version 1.3
//
// @require https://static1.bentasker.co.uk/adblock/anti-amp/v1.3.js#sha384=ynrVTOnOEwR6j/mo66CWf4AlvHg6Z88Ff9oQdUxbnYkyl4U1Lyd5ugLsmxfN3GFT
//
//
// Author: B Tasker
// ==/UserScript==

window.addEventListener ("load", triggerAMPCheck, false);

function triggerAMPCheck () {
    fuckOffAMP();
}
