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