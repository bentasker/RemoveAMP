

function fuckOffAMP(){
    // Check whether it's AMP html
    var h = document.getElementsByTagName('html');
    if (h[0].getAttribute('amp') != null){
        console.log("eww vile... trying to redirect");

        
        // Try and find a canonical link
        eles = document.getElementsByTagName('link');
        for (var i=0; i<eles.length;i++){
            if (eles[i].getAttribute('rel') == 'canonical' && eles[i].getAttribute('rel') != window.location.href.split('#')[0]){
                // Temporarily disabled
                //window.location.href = eles[i].getAttribute('rel');
            }
        }

        // If we got this far, there's no canonical :(
        console.log("Sorry, but you're stuck with the sucky version of this page. Maybe search for the proper version?");

        // Build a link to search DuckDuckGo for the page title (to hopefully find the proper version)
        t = document.getElementsByTagName('title')[0];
        qs = encodeURIComponent(t.innerHTML);
        searchurl = 'https://duckduckgo.com/?t=hg&ia=web&q='+qs

        altlink = document.createElement('a');
        altlink.href = searchurl;
        altlink.title = 'Try and find a proper verison of this page';
        altlink.innerHTML = 'Search for a non-AMP version of this page';
        
        // Drop the link in at the top
        document.body.insertBefore(altlink, document.body.firstChild);
    }

}

// Wait for the DOM to load otherwise various checks will fail
document.addEventListener("DOMContentLoaded", function(event) { 
  fuckOffAMP();
});


