//We only add the javascript to IE.
if (document.all) {

  function IEHoverPseudo() {

    var ulNodes = getElementsByClass("nice-menu");
    var j = 0;
    var liNodes = null;

    for(var i = 0; i < ulNodes.length; i++) { 
      liNodes = ulNodes[i].getElementsByTagName("li");
      for(j = 0; j < liNodes.length; j++) {
        if(liNodes[j].className == "menuparent") {
          liNodes[j].onmouseover=function() { this.className += " over"; }
          liNodes[j].onmouseout=function() { this.className = "menuparent"; }
        }
      }
    }
  }

  function getElementsByClass(searchClass,node,tag) {
	var classElements = new Array();
	  if ( node == null )
        node = document;
	  if ( tag == null )
		tag = '*';
	  var els = node.getElementsByTagName(tag);
	  var elsLen = els.length;
	  var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
	  for (i = 0, j = 0; i < elsLen; i++) {
		  if ( pattern.test(els[i].className) ) {
			classElements[j] = els[i];
			j++;
		  }
	  }
	return classElements;
  }

  //This is the Drupal method of adding a function to the BODY onload event.  (See misc/drupal.js)
  addLoadEvent(IEHoverPseudo);
}