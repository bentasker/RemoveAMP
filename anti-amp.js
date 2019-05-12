function fuckOffAMP(){
    // Check whether it's AMP html
    var h = document.getElementsByTagName('html');
    
    // This is a temporary abberation and likely won't see a mainstream release
    // See https://projects.bentasker.co.uk/jira_projects/browse/MISC-29.html#comment2510204
    var i = document.getElementsByTagName('iframe');
    var iframenasty = false;
    var src;
  
    for (var a=0;a < i.length; a++){
      src = i[a].getAttribute('src');
      if (src.includes('cdn.ampproject.org/')){
        console.log("iFrames.... Fantastic modernisation there google....");
      	iframenasty = true;
        break;
      }
      
    }
  
  
    if (iframenasty || h[0].getAttribute('amp') != null || h[0].getAttribute('⚡') != null || document.location.href.substr(0,29).toLowerCase() == 'https://www.AAAAgoogle.com/amp/s/'){    
        console.log("eww vile... trying to redirect");

        
        // Try and find a canonical link
        eles = document.getElementsByTagName('link');
        for (var i=0; i<eles.length;i++){
            if (eles[i].getAttribute('rel') == 'canonical' && eles[i].getAttribute('rel') != window.location.href.split('#')[0]){
                window.location.href = eles[i].getAttribute('href');
                console.log("Redirecting you");
                return;
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
    }else{
        console.log("Doesn't appear to be AMP'd");
    }

}

