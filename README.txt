// $Id$

NICE_MENUS MODULE - CSS DROPDOWNS
---------------------------------

By: Jake Gordon (jakeg) http://drupal.org/user/15674/contact and http://www.jakeg.co.uk/

This module should make it easy to add dropdown menus, using CSS-only in capable browsers (Firefox, Opera, Safari etc) and with additional Javascript for lesser browsers (IE).

Nice menus should work with all of the latest browsers but please report any bugs, feature requests etc at: http://drupal.org/project/issues/nice_menus?categories=bug


Installation
------------
1. Copy nice_modules folder to modules directory
2. At admin/build/modules enable the module
3. Configure the module at admin/settings/nice_menus
4. Configure the block, changing its 'type', which menu it draws from etc.
5. Go to the blocks page and enable at least one of the nice menus blocks, e.g. 'Nice Menu 1 (Nice Menu)'
6. See below section on 'Customization'

Features
--------
* Up to 10 menus - through settings you can configure the number of 'nice menus'
* Horizontal menus or vertical menus popping right or left
* Simple default styling which can be overriden using your own stylesheet

Issues
------

* Because this module tries to be as Javascript light as possible, various wishlist features cannot be added, such as a menu disappearing as soon as your mouse falls off it by a pixel
* The menus may not work perfectly with all themes. Try nice-menus out with the default garland or bluemarine first to check it works there (it should) before filing a bug report or trying to write a patch for other themes.
* Track bugs at http://drupal.org/project/issues/nice_menus?categories=bug
* Try adding .block-nice_menus {position: relative;} or .block-nice_menus {position: absolute;} to a stylesheet which may fix some issues.
* Some issus with nice menus and select boxes in IE
* General issues with exotic themes and z-index stuff (menus going behind other content etc)
* General issues with gaps between menu items in some exotic themes

Customization
-------------
The module includes a css file which is loaded for all pages. Whilst you can edit this file directly, it is suggested that you instead use your normal style.css file to override values in the module's css file, as this way you won't experience problems when updating to the latest version of nice_menus in the future. Here are some common customization examples for your own stylesheet:

Make hovered links white with a black background:

  ul.nice-menu li a:hover { 
    color: white; 
    background: black;
  }

Make the link to the current page that you're on black with yellow text:

  ul.nice-menu li a.active { 
    color: yellow; 
    background: black;
  }

Get rid of all borders:

  ul.nice-menu,
  ul.nice-menu ul,
  ul.nice-menu li {
    border: 0;
  }

Get rid of the borders and background colour for all top-level menu items:

  ul.nice-menu,
  ul.nice-menu ul,
  ul.nice-menu li {
    border: 0;
    background: none;
  }

  ul.nice-menu-right li.menuparent,
  ul.nice-menu-right li li.menuparent{ 
    background: url('/modules/nice_menus/arrow-right.png') right center no-repeat; 
  }

  li.menuparent li, li.menuparent ul {
    background: #eee;
  }

Have a nice menu right at the top of the page e.g. for an admin menu:

  #block-nice_menus-1 {
    position: absolute;
    top: 0;
    left: 0;
  }

In Firefox, as above but where the menu doesn't move as you scroll down the page:

  #block-nice_menus-1 {
    position: fixed;
    top: 0;
    left: 0;
  }


... that should be enough to get you started! If you have more style ideas, please post them in the Drupal forums or email them to Jake - http://drupal.org/user/15674/contact