// $Id$

// We only do the javascript in IE.
// TODO: because we now only include the js file for IE, is this 'if' redundant?

// Thanks to 'cooperaj' for initial jQuery work
$(document).ready(function(){
  $("ul.nice-menu li").hoverClass("over");
});

$.fn.hoverClass = function(c) {
  return this.each(function(){
    $(this).hover( 
      function() { 
        $(this).addClass(c).find("> div/ul").slideDown("slow").addShim(); 
      },
      function() { 
        $(this).find("> div/ul").removeShim().end().removeClass(c);
      }
    );
  });
};

$.fn.addShim = function() {
  return this.each(function(){
    /* on for IE with document.all */
    if(document.all && $("select").size() > 0) {
      var ifShim = document.createElement('iframe');
      ifShim.style.width=$(this).width()+1+"px";
      ifShim.style.height=$(this).find("> li").size()*23+4+"px";
      ifShim.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";
      ifShim.style.zIndex="0";
      $(this).prepend(ifShim);
      $(this).css("zIndex","99");
    }
  });
};

$.fn.removeShim = function() {
  return this.each(function(){
    if (document.all) $("iframe", this).remove();
  });
};

/* old non-jQuery way
if (document.all) {

  function IEHoverPseudo() {

    var ulNodes = getElementsByClass("nice-menu");
    var j = 0;
    var liNodes = null;

    for (var i = 0; i < ulNodes.length; i++) { 
      liNodes = ulNodes[i].getElementsByTagName("li");
      for (j = 0; j < liNodes.length; j++) {
        if (hasClass(liNodes[j], 'menuparent')) {
          liNodes[j].onmouseover=function() { addClass(this, 'over'); }
          liNodes[j].onmouseout=function() { removeClass(this, 'over'); }
        }
      }
    }
  }

  function getElementsByClass(searchClass,node,tag) {
	  var classElements = new Array();
	  if (node == null) node = document;
	  if (tag == null) tag = '*';
	  var els = node.getElementsByTagName(tag);
	  var elsLen = els.length;
	  var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
	  for (i = 0, j = 0; i < elsLen; i++) {
		  if (pattern.test(els[i].className)) {
			  classElements[j] = els[i];
			  j++;
		  }
	  }
	  return classElements;
  }

  // This is the Drupal method of adding a function to the BODY onload event.  (See misc/drupal.js)
  addLoadEvent(IEHoverPseudo);
}
*/