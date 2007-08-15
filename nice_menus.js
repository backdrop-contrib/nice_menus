// $Id$

// We only do the javascript in IE thanks to drupal_set_html_head in .module.
if (document.all) {
  function IEHoverPseudo() {
      $("ul.nice-menu li.menuparent").hover(function(){
          $(this).addClass("over").find("> ul").slideDown("fast");
        },function(){
          $(this).removeClass("over").find("> ul").slideUp("fast");
        }
      );
    }

    // This is the jquery method of adding a function to the BODY onload event.  (See jquery.com)
    $(document).ready(function(){ IEHoverPseudo() });
}