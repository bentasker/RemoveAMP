// ==UserScript==
// @name           AMP Removal script hook
// @namespace      http
// @description    Hooks in the AMP removal javascript to attempt to direct to a proper page
// @include        *://*/*
// @run-at document-end
// @grant none
// @downloadURL https://github.com/bentasker/RemoveAMP/raw/master/greasemonkey_hook.user.js
// @version 1.4.21
//
// @require https://static1.bentasker.co.uk/adblock/anti-amp/v1.4.js#sha384=045XNfEpw28ygqqvQ4JWNWxc6wNTiIuyv22hc43hJuJVvV3VvFPYF7fksaQbEvNO
//
//
// Author: B Tasker
// ==/UserScript==

window.addEventListener ("load", triggerAMPCheck, false);

function triggerAMPCheck () {
    fuckOffAMP();
}
