# TODO's
- /Users/petja/PhpstormProjects/freelance/archive
  + hsnbrg
    + come up with title and description
    + add to database
    + add to github
  + incryptoexchange
    - can remove folder /Users/petja/PhpstormProjects/freelance/archive/incryptoexchange/inc
    - create two repos without layout folder
    - read how to merge two repositories with commits
    - push repo to github.com
    + make screenshot and title/description
  - mexzona-bigform || mexzona
    - run mexzona-bigform and make video/screen
    - run mexzona and make video
    - create title and description
    - push repos to github.com private repositories
    
# enhancement
- mobile version
- fix main page layout
- fix footer layout
- fix zoom component on portfolio page

I have sizes of image and container and image/container proportions.
I need to set container height based on it width and height proportion.
Then get the indicative side.
If indicative is width:
  I have fixed width of container and unknown height of it.
  I need to find width/height proportion of image and apply it to define container height 

+ fix yandex-map in portfolio on mobile screen
+ fix blade template on ru version
- check if container bigger than image - in that case disable zooming
- make scrollable for touchable devices

## What we have?
1. `this.touch` true or false
2. Active or not
   
    - if `this.touch` is false then `this.active` activates on `this.onZoom()` and deactivate on `this.stopZoom()`
        - **active**: 
            - image
              > [remove `ui fluid image`]
              > [set `position:absolute`] 
              > and _recalculate `left` and `top`_
            - _container > no actions_
        - **inactive**:  and 
            - image
              > [add `ui fluid image`]
              > [set `position:static`]
            - _container > no actions_
    - if `this.touch === true` then `this.active` **toggle** on `this.onTap()`
        - **active**:
            - image
              > [remove `ui fluid image`] __(image has real size)__
              > and _scroll to tap point_
            - container
              > set `overflow:scrollable`
        - **inactive**:
            - image
              > [add `ui fluid image`] __(image equal to container)__
            - container
              > set `overflow:hidden`

- container changes only style: `overflow: hidden || scrollable` if `touch === true` depends on `this.active`
- image changes:
    - inactive _touch or not_ has classes `ui fluid image`
    - active _touch or not_ has no classes
    - only for _touch_ `position: static || absolute`
    
## properties
- this.active
    - true/false
        - image remove/add [ui fluid image]
- this.touch: STATIC (mounted, resize)
    - false
        - image change style [position: static || absolute]
    - true
        - container change style [overflow: hidden || scrollable]
          













