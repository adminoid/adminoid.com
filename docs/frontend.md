# Information about frontend transference

## Base
In file `/webpack.mix.js`

## Vue.js
Entry point: `/public/js/app.js`

## semantic ui
Folder with fonts and other additional stuff:
`public/css/themes`

### installation semantic ui
```npm install semantic-ui --save```

### semantic ui customization
move docs about semantic customization from frontend.adminoid.com or show git diff
list customized and new files:
*   semantic/src/definitions/elements/label.less
-   semantic/src/definitions/views/card.less

-   semantic/src/themes/default/globals/site.overrides
-   semantic/src/themes/default/globals/site.variables

+   semantic/src/themes/default/collections/menu.overrides
+   semantic/src/themes/default/collections/menu.variables

-   semantic/src/themes/default/elements/button.overrides
*   semantic/src/themes/default/elements/label.variables
-   semantic/src/themes/default/elements/segment.variables

-   semantic/src/themes/default/views/card.overrides
-   semantic/src/themes/default/views/card.variables

**new stuff:**  
new folder with file (helpers/visibility.less):
`semantic/src/themes/default/helpers/visibility.less`  

**add custom pages components:**
- added files src/definitions/pages/*.less
- added src/site/pages/*.overrides and *.variables (empty)
- added src/themes/default/pages/*.overrides and *.variables (empty)
- updated src/semantic.less to import pages (Under /* Pages */)
- updated src/theme.config to include pages (Under /* Pages */)
- updated /tasks/config/admin/release.js to include pages
- updated /tasks/config/project/install.js to check pages
- updated /tasks/config/defaults.js to include pages
- ran gulp build again.
- checked dist/components/pages/*.*

### settings file
`/semantic.json`

#### Modules:  
**Base:**  
"reset"  
"site"  
**TopMenu:**  
"container"  
"grid"  
"menu"  
"button"  
**sidebar**  
"sidebar"  
**h1-h6 headers:**  
"header"  
**footer**  
"segment"

_Pages:_  
**Index**  
"index" - custom component  
"image"  

**Price**  
"price" - custom component  
"image"

**Tools**  
"tools"

**Process**  
"process" - custom component

**Portfolio**
"portfolio" - custom component
"icon"
"card"
"label"

**Reviews**
"reviews" - custom component
"icon"