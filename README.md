
NICE MENUS MODULE
=================

This module makes it easy to add dropdown and flyout menus,
using the Superfish jQuery plugin
(http://users.tpg.com.au/j_birch/plugins/superfish),
and falling back to CSS-only functionality when JS is disabled.


Installation
------------
1. Copy nice_modules folder to your /modules directory.

2. At Functionality -> Modules (admin/modules) enable the module.

3. Configure the module settings at Configuration -> User Interface -> 
   Nice Menus (admin/config/user-interface).

4. Add Nice Menus Blocks to your Layout

5. Configure options on th configuration step in Layouts

6. See below sections on Customization and Advanced Theming.

Upgrading
---------
For upgrades between versions, read the UPGRADE.txt file included with
the module.

Customization
-------------
The module includes a default CSS layout file (nice_menus_default.css)
which is loaded for all pages.  If you don't like the default layout,
it is suggested that you create a separate customized CSS file,
and replace the default CSS file at Configuration > User Interface > 
"Path to custom nice menus CSS file" 
(admin/config/user-interface/nice_menus)
This ensures smooth future upgrades as no editing of the module files is
necessary.
NOTE: you should not edit the regular nice_menus.
css file since this contains the "logic" that makes Nice menus work.

To help understand the CSS, the HTML looks like this, where
  x is a number;
  TYPE is down/left/right;
  PATH is the menu path such as node/343;
  MID is the menu id such as 33:
```
<ul id='nice-menu-x' class='nice-menu nice-menu-TYPE'>
  <li id='menu-MID' class='menu-path-PATH'>
    <a href='#'>This is a menu item</a>
  </li>
  <li class='menuparent menu-path-PATH'><a href='#'>A submenu</a>
    <ul...><li...>...</li>
    </ul>
  </li>
  ...
</ul>
```

If you have more than one nice-menu and want to target a particular one,
use its id (e.g. ul#nice-menu-2).

A good starting point for your custom file is to make a copy of the
default file, then edit it to taste. Here are some common
customization examples for your own stylesheet:

Make hovered links white with a black background:
```
  ul.nice-menu li a:hover { 
    color: white; 
    background: black;
  }
```
Make the link to the current page that you're on black with yellow text:
```
  ul.nice-menu li a.active { 
    color: yellow; 
    background: black;
  }
```
Get rid of all borders:
```
  ul.nice-menu,
  ul.nice-menu ul,
  ul.nice-menu li {
    border: 0;
  }
```
Get rid of the borders and background colour for all top-level menu items:
```
  ul.nice-menu,
  ul.nice-menu ul,
  ul.nice-menu li {
    border: 0;
    background: none;
  }

  ul.nice-menu-right li.menuparent,
  ul.nice-menu-right li li.menuparent { 
    background: url('arrow-right.png') right center no-repeat; 
  }

  li.menuparent li, li.menuparent ul {
    background: #eee;
  }
```
Have a nice menu stick right at the top of the page e.g. for an admin menu:
```
  #block-nice_menus-1 {
    position: absolute;
    top: 0;
    left: 0;
  }
```
In Firefox, as above but where the menu doesn't move as you scroll
down the page:
```
  #block-nice_menus-1 {
    position: fixed;
    top: 0;
    left: 0;
  }
```
That should get you started.  Really this is just about knowing your
CSS and styling it the way you want it.

Advanced theming
----------------
If you're creating or modifying your own theme, 
you can integrate Nice menus more deeply by making use of these functions:
`theme_nice_menus()` -- themes any menu tree as a Nice menu.
`theme_nice_menus_main_menu()` -- themes your main menu as a Nice menu.
`theme_nice_menus_secondary_menu()` -- themes your secondary menu as a Nice menu.

If you really know what you're doing, you can probably even customize the menu
tree in creative ways, as those functions allow you to pass in a custom
menu tree.


License
-------

This project is GPL v2 software. See the LICENSE.txt file in this directory for
complete text.

Maintainers
-----------

- Andy Shillingford (https://github.com/docwilmot/)

Drupal version currently maintained on Drupal by: Addison Berry (add1sun)

Originally created by: Jake Gordon (jakeg)
http://drupal.org/user/15674/contact and http://www.jakeg.co.uk/

