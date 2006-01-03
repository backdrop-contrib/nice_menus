NICE_MENUS MODULE
-----------------

By: Jake Gordon (jakeg)

This module should make it easy to add dropdown Javascript/CSS menus.




Installation
------------
1. Copy nice_modules folder to modules directory
2. At admin/modules enable the module
3. Configure the module at admin/settings/nice_menus
4. Configure the menu blocks at admin/block
5. See below section on 'Customization'



Features
--------
* Unlimited menus. Through settings you can configure the number of 'nice menus'
* Horizontal menus or vertical menus popping right or left
* Simple styling which can be overriden using your own stylesheet




Customization
-------------

The module includes a css file which is loaded for all pages. Whilst you can edit this file directly, it is suggested that you instead use your normal style.css file to override values in the module's css file. For example, say you want to change the colour of hovered links. You'll see this line in nice_menus.css:

ul#primary-nav li a:hover { color: yellow; }

But rather than editing it there, instead copy the line to your theme's style.css and make the changes there. This way, you'll avoid conflicts if you  have to upgrade nice_menus when new features come out.