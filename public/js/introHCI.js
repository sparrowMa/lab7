'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here

    // $(".likeBtn").click(function(event) {
    //     ga('send', 'event', 'like', 'click');
    // });


    $(".likeBtn").click(function(event) {
        gtag('event','click', {
            'event_category': 'like'
            // 'event_label': 'label',
            // 'value': 1
        });
    });
}