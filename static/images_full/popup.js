
<!-- hide script from old browsers

// messy unabstracted version
var popUp = function() {

	//get all anchors
	var link = document.getElementsByTagName('a');

	//loop through anchors, check for REL attribute
	for(s=0; s < link.length; s++) {
		var linkBehavior = link[s].rel;

		//assign onclick behavior to links with REL="pop-up"
		if(linkBehavior == 'pop-up') {
			var features = 'height=600,width=800,scrollTo,resizable=1,scrollbars=,location=0';
			link[s].onclick = function() {

				//the pop-up!
				//the 'this' keyword here refers to the anchor element
				newwindow=window.open(this.href, 'myPopUp', features);

				//auto focus new window
				if (window.focus) {newwindow.focus()}

				//stop parent window from following the link
				return false;
			}
		}
	}
}
window.onload = popUp; //loads up the event handling, but doesn't do anything until 'onclick'

// end script hide