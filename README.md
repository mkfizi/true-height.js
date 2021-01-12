# true-height.js
Simple javascript framework to set an element's height to inner browser's height.

## Why
When you set an landing page's height to 100vh, it will stylize the landing page's height to device's screen size without taking the height of inner browser into account. This framework will fix that issue so the landing page's height will consistently be set to inner browser's height.

## Usage
Call cdn link to true-height.js as below:
> &lt;script src="https://<i></i>cdn<i></i>.jsdelivr.net/gh/mkfizi/true-height.js/true-height.js"> &lt;/script>

Add this function call below to your javascript file:
> trueHeightJS();

Put class name "true-height" to landing page element. Example:

> &lt;div class="true-height"> &lt;/div>