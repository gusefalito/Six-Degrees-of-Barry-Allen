window.onload = function(){
    
    var noticeDiv = document.getElementById("js_notice");
    
    try{

        loadConnections();
        
        generateFilters();

        fillSelectors();

        var button = document.getElementById("findConnection");
        button.onclick = displayConnection;

        button = document.getElementById("findStats");
        button.onclick = generateAndDisplayStats;

        document.getElementById("defaultTab").click();
        
        removeChildren(noticeDiv);
    } catch (err) {
        removeChildren(noticeDiv);
        // IE test from http://stackoverflow.com/a/9851769
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        if (isIE) {
            addChild(noticeDiv, "p", "Internet Explorer isn't able to run the code on this site. Sorry about that. It should work in Chrome, Firefox, or Edge though");
        } else {
            addChild(noticeDiv, "p", "An error occured setting up the page, so the site probably won't work correctly. You might be able to run it in a different browser though.");
        }
        
    }
    
};

function loadConnections(){
	connectionGraph = getConnectionData();
}