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
"shape" - for 'show off'

**Price**  
"price" - custom component  
"image"

**Tools**  
"tools"

**Workflow**  
"workflow" - custom component

**Portfolio**
"portfolio" - custom component
"icon"
"card"
"label"
"image"

**Reviews**
"reviews" - custom component
"icon"

**Feedback** - modal window on click super button
"modal" - js and css
"dimmer" - js and css
"form"

## Run compilation
`npm run watch`, `npm run dev` or `npm run production`  
`cd semantic`  
`gulp build-css` or `gulp build` if with js  

## Retina js
npm install retinajs --save  
Add `.copy('node_modules/retinajs/dist/retina.min.js', 'public/js')`  
to `webpack.mix.js` file  
add  
```<script src="{{ mix('/js/retina.min.js') }}"></script>```  
to `resources/views/layouts/ru/page.blade.php` file  

_Now disabled_:
copy `node_modules/retinajs/dist/retina.less` to `semantic/src/definitions/pages/retina/retina.less`  
Read: https://github.com/strues/retinajs

## Gulp compilation works fine with
```shell
gulp -v
CLI version: 2.3.0
Local version: 3.9.1
```
```shell
node -v
v10.16.1
```